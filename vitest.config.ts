import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/tests/setup.ts'],
    // Arquivos SERIAIS: os testes de fluxo do quiz/chat atravessam a
    // conversa inteira com timers reais (~20s cada) e flakavam sob a
    // contenção de CPU dos workers paralelos (timers/userEvent do jsdom
    // perdiam os deadlines). A suíte é pequena — o custo serial (~1min)
    // compensa a estabilidade.
    fileParallelism: false,
  },
});
