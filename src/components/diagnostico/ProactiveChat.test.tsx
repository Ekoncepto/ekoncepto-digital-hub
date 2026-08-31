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
