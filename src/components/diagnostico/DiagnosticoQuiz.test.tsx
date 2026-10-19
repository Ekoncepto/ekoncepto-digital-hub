import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DiagnosticoQuiz from './DiagnosticoQuiz';

/**
 * Regressão do fluxo /shopee: leads com source=shopee-* NÃO veem o
 * mini-diagnóstico genérico após o formulário — a tela de sucesso informa
 * que um consultor entrará em contato e mantém o botão de WhatsApp
 * ("Quero o diagnóstico completo") como atalho.
 *
 * Fluxo atravessado por inteiro com timers REAIS (as transições do quiz
 * encadeiam setTimeouts de 220ms + exit animations do framer-motion em
 * requestAnimationFrame real — fake timers não completam a troca de
 * pergunta). Timeouts generosos: a suíte roda arquivos em paralelo e o
 * findBy precisa cobrir carga de CPU.
 */

// Mock IntersectionObserver (usado pelo framer-motion whileInView).
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

const ORIGINAL_URL = window.location.pathname + window.location.search;

/** Timeout padrão dos findBy (cobre transições + carga da suíte). */
const FIND = { timeout: 8000 };

/** Atravessa o quiz inteiro (5 perguntas) até a tela de contato. */
async function answerQuiz(user: ReturnType<typeof userEvent.setup>) {
  // P1 — faturamento (single-choice, auto-avança).
  expect(
    await screen.findByText('Quanto sua empresa fatura por mês?', {}, FIND)
  ).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: /Até R\$ 10 mil\/mês/ }));

  // P2 — marketplace (multi-choice + Continuar).
  await screen.findByText('Onde você vende hoje?', {}, FIND);
  await user.click(screen.getByRole('button', { name: /Shopee/ }));
  await user.click(screen.getByRole('button', { name: /Continuar/ }));

  // P3 — categoria.
  await screen.findByText('O que sua empresa vende?', {}, FIND);
  await user.click(screen.getByRole('button', { name: /Eletrônicos e tecnologia/ }));
  await user.click(screen.getByRole('button', { name: /Continuar/ }));

  // P4 — dor.
  await screen.findByText('Qual sua maior dor hoje?', {}, FIND);
  await user.click(screen.getByRole('button', { name: /Vendo pouco/ }));
  await user.click(screen.getByRole('button', { name: /Continuar/ }));

  // P5 — follow-up da dor "Vendo pouco".
  await screen.findByText('Como estão suas visitas?', {}, FIND);
  await user.click(screen.getByRole('button', { name: /Recebo poucas visitas/ }));

  // Tela de contato.
  await screen.findByText('Pra onde mando seu diagnóstico?', {}, FIND);
}

/** Preenche o formulário de contato (nome + WhatsApp) e envia. */
async function fillContactAndSubmit(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('Seu nome'), 'Ana');
  await user.type(screen.getByLabelText('WhatsApp'), '(11) 99999-9999');
  await user.click(screen.getByRole('button', { name: /Ver meu diagnóstico/ }));
}

describe('DiagnosticoQuiz — pós-formulário do fluxo /shopee', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/diagnostico?source=shopee-hero');
    localStorage.clear();
  });

  afterEach(() => {
    window.history.replaceState({}, {}, ORIGINAL_URL || '/');
  });

  it('mostra que o consultor entrará em contato (sem diagnóstico genérico) + botão WhatsApp', async () => {
    const user = userEvent.setup();
    render(<DiagnosticoQuiz />);

    await answerQuiz(user);
    await fillContactAndSubmit(user);

    // Tela de sucesso do fluxo shopee: CTA "fale agora" em destaque +
    // promessa do consultor logo abaixo.
    expect(
      await screen.findByText('Recebemos suas respostas, Ana!', {}, FIND)
    ).toBeInTheDocument();
    expect(screen.getByText('Não quer esperar?')).toBeInTheDocument();
    expect(
      screen.getByText(/entrará em contato com você/i)
    ).toBeInTheDocument();

    // Sem o mini-diagnóstico genérico da tela padrão.
    expect(screen.queryByText(/aqui está seu diagnóstico/i)).not.toBeInTheDocument();

    // Botão de WhatsApp em primeiro plano, com link wa.me personalizado.
    const cta = screen.getByRole('link', { name: /Falar com um consultor agora/ });
    expect(cta).toHaveAttribute('href', expect.stringContaining('wa.me'));
    // A mensagem pré-preenchida inclui o faturamento do lead (regressão:
    // era omitido quando marcava "Ainda não vendo (R$ 0)").
    expect(decodeURIComponent(cta.getAttribute('href') ?? '')).toContain(
      'Faturamento: Até R$ 10k/mês'
    );
  }, 60000);

  it('fontes não-shopee continuam vendo o mini-diagnóstico', async () => {
    window.history.replaceState({}, '', '/diagnostico?source=hero');
    const user = userEvent.setup();
    render(<DiagnosticoQuiz />);

    await answerQuiz(user);
    await fillContactAndSubmit(user);

    expect(
      await screen.findByText(/aqui está seu diagnóstico/i, {}, FIND)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/entrará em contato com você/i)
    ).not.toBeInTheDocument();
  }, 60000);
});
