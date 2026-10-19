import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProactiveChat from './ProactiveChat';

// Mock IntersectionObserver (usado pelo framer-motion whileInView).
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

// jsdom não implementa scrollTo (usado no auto-scroll das mensagens).
Element.prototype.scrollTo = vi.fn();

// Caminho não é /diagnostico (senão o chat é suprimido).
const ORIGINAL_PATH = window.location.pathname;

describe('ProactiveChat — abrir/fechar/reabrir', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    window.history.replaceState({}, '', '/');
    localStorage.clear();
  });

  afterEach(() => {
    vi.useRealTimers();
    window.history.replaceState({}, '', ORIGINAL_PATH);
  });

  it('renderiza o botão flutuante antes de abrir', () => {
    render(<ProactiveChat />);
    expect(screen.getByRole('button', { name: 'Falar com especialista' })).toBeInTheDocument();
  });

  it('reabre após fechar pelo X (regressão: guard de hasOpened travava)', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<ProactiveChat />);

    // 1) Abre pelo botão flutuante.
    await user.click(screen.getByRole('button', { name: 'Falar com especialista' }));
    expect(screen.getByRole('button', { name: 'Fechar chat' })).toBeInTheDocument();

    // 2) Fecha pelo X — o botão flutuante volta.
    await user.click(screen.getByRole('button', { name: 'Fechar chat' }));
    expect(screen.getByRole('button', { name: 'Falar com especialista' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Fechar chat' })).not.toBeInTheDocument();

    // 3) Reabre: antes do fix, openChat() retornava cedo (hasOpened true)
    //    e a janela nunca voltava.
    await user.click(screen.getByRole('button', { name: 'Falar com especialista' }));
    expect(screen.getByRole('button', { name: 'Fechar chat' })).toBeInTheDocument();
  });

  it('retoma a conversa ao reabrir (não recomeça do zero)', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<ProactiveChat />);

    await user.click(screen.getByRole('button', { name: 'Falar com especialista' }));
    // Deixa a saudação e a primeira pergunta chegarem.
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    const mensagensAntes = screen.getAllByText(/E-Koncepto|fatura/i).length;
    expect(mensagensAntes).toBeGreaterThan(0);

    // Fecha e reabre — a saudação "Olá! Sou da E-Koncepto" não pode duplicar.
    await user.click(screen.getByRole('button', { name: 'Fechar chat' }));
    await user.click(screen.getByRole('button', { name: 'Falar com especialista' }));

    const saudacoes = screen.getAllByText(/Olá! Sou da E-Koncepto/i);
    expect(saudacoes).toHaveLength(1);
  });
});

/**
 * Regressão do fluxo /shopee: o popup NÃO entrega o mini-diagnóstico
 * genérico após o formulário — informa que um consultor entrará em
 * contato e mantém o botão de WhatsApp ("Quero o diagnóstico completo")
 * como atalho. Fluxo conversacional completo com timers REAIS (fake
 * timers double-fireiam os setTimeouts encadeados do chat) e timeouts
 * generosos (a suíte roda arquivos em paralelo).
 */
describe('ProactiveChat — pós-formulário na /shopee', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/shopee');
    localStorage.clear();
  });

  afterEach(() => {
    window.history.replaceState({}, '', ORIGINAL_PATH || '/');
  });

  it('informa que o consultor entrará em contato (sem diagnóstico genérico) + botão WhatsApp', async () => {
    const user = userEvent.setup();
    render(<ProactiveChat />);

    // Abre pelo botão flutuante.
    await user.click(screen.getByRole('button', { name: 'Falar com especialista' }));

    // P1 — faturamento (single-choice).
    await screen.findByText(/quanto sua empresa fatura por mês/i, {}, { timeout: 8000 });
    await user.click(screen.getByRole('button', { name: /Até R\$ 10 mil\/mês/ }));

    // P2 — marketplace (multi + Enviar).
    await screen.findByText(/onde você vende hoje/i, {}, { timeout: 8000 });
    await user.click(screen.getByRole('button', { name: 'Shopee' }));
    await user.click(screen.getByRole('button', { name: 'Enviar' }));

    // P3 — categoria.
    await screen.findByText(/o que sua empresa vende/i, {}, { timeout: 8000 });
    await user.click(screen.getByRole('button', { name: /Eletrônicos e tecnologia/ }));
    await user.click(screen.getByRole('button', { name: 'Enviar' }));

    // P4 — dor.
    await screen.findByText(/qual a sua maior dor hoje/i, {}, { timeout: 8000 });
    await user.click(screen.getByRole('button', { name: 'Vendo pouco' }));
    await user.click(screen.getByRole('button', { name: 'Enviar' }));

    // P5 — follow-up da dor "Vendo pouco".
    await screen.findByText(/como estão suas visitas/i, {}, { timeout: 8000 });
    await user.click(screen.getByRole('button', { name: /Recebo poucas visitas/ }));

    // Contato: nome -> pula empresa -> whatsapp -> pula email.
    await screen.findByText(/como você se chama/i, {}, { timeout: 8000 });
    await user.type(screen.getByPlaceholderText('Como você se chama?'), 'Ana');
    await user.click(screen.getByRole('button', { name: 'Enviar' }));

    await screen.findByText(/nome da sua empresa ou loja/i, {}, { timeout: 8000 });
    await user.click(screen.getByRole('button', { name: 'Pular' }));

    await screen.findByText(/qual seu whatsapp/i, {}, { timeout: 8000 });
    await user.type(screen.getByPlaceholderText('(11) 99999-9999'), '11999999999');
    await user.click(screen.getByRole('button', { name: 'Enviar' }));

    await screen.findByText(/qual seu e-mail/i, {}, { timeout: 8000 });
    await user.click(screen.getByRole('button', { name: 'Pular' }));

    // Fim do fluxo shopee: consultor entrará em contato. Janela generosa:
    // após o último "Pular", a cadeia ack -> submit -> 3 mensagens soma
    // ~4s, e a suíte em paralelo pode degradar o event loop do worker.
    expect(
      await screen.findByText(/recebi suas respostas!/i, {}, { timeout: 20000 })
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/consultores vai analisar sua operação/i, {}, { timeout: 20000 })
    ).toBeInTheDocument();
    // O header muda quando a fase 'done' chega (após a 3ª mensagem).
    expect(
      await screen.findByText('Consultor vai te chamar', {}, { timeout: 20000 })
    ).toBeInTheDocument();

    // Sem o diagnóstico genérico do fluxo padrão.
    expect(screen.queryByText(/analisei suas respostas/i)).not.toBeInTheDocument();

    // Botão de WhatsApp mantido como atalho, com link wa.me.
    const cta = await screen.findByRole(
      'link',
      { name: /Quero o diagnóstico completo/ },
      { timeout: 20000 }
    );
    expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me'));
    // A mensagem pré-preenchida inclui o faturamento do lead.
    expect(decodeURIComponent(cta.getAttribute('href') ?? '')).toContain(
      'Faturamento: Até R$ 10k/mês'
    );
  }, 60000);
});
