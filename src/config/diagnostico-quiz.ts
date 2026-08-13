/**
 * Diagnóstico Quiz — definição central das perguntas.
 *
 * Fluxo otimizado (6 perguntas) baseado e enxuto vs. o quiz de 8 passos
 * do Efeito Vendas. Para editar perguntas/opções, mexa apenas aqui —
 * o Quiz e o Chat proativo consomem este mesmo array.
 *
 * Ordem pensada para qualificar rápido:
 *   1. Marketplace (onde está hoje)
 *   2. Faturamento (tamanho do lead)
 *   3. Dor principal (angle de venda)
 *   4. Objetivo (segmenta quente vs. frio)
 *   5. Nome (humaniza, começa a construir relação)
 *   6. Contato (captura de lead)
 */

export type QuizQuestionType = 'single-choice' | 'text' | 'contact';

export type QuizOption = {
  value: string;
  label: string;
  emoji?: string;
};

export type QuizQuestion = {
  id: string;
  /** Pergunta curta exibida em destaque */
  question: string;
  /** Contexto extra opcional exibido abaixo da pergunta */
  subtitle?: string;
  type: QuizQuestionType;
  options?: QuizOption[];
  /** Placeholder para inputs de texto */
  placeholder?: string;
  /** Validador simples (chave -> regex ou regra) aplicado no cliente */
  validation?: 'name' | 'contact';
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'marketplace',
    question: 'Onde você vende hoje?',
    subtitle: 'Isso me ajuda a focar nas estratégias certas pra você.',
    type: 'single-choice',
    options: [
      { value: 'mercado-livre', label: 'Mercado Livre', emoji: '🛒' },
      { value: 'amazon', label: 'Amazon', emoji: '📦' },
      { value: 'shopee', label: 'Shopee', emoji: '🛍️' },
      { value: 'multi', label: 'Mais de um marketplace', emoji: '🔀' },
      { value: 'nenhum', label: 'Ainda não vendo', emoji: '🚀' },
    ],
  },
  {
    id: 'faturamento',
    question: 'Qual seu faturamento mensal?',
    subtitle: 'Não se preocupe — todos os cases começaram pequenos.',
    type: 'single-choice',
    options: [
      { value: 'ate-10k', label: 'Até R$ 10 mil', emoji: '🌱' },
      { value: '10k-50k', label: 'R$ 10k – R$ 50k', emoji: '📈' },
      { value: '50k-100k', label: 'R$ 50k – R$ 100k', emoji: '💪' },
      { value: '100k-500k', label: 'R$ 100k – R$ 500k', emoji: '🎯' },
      { value: '500k+', label: 'Acima de R$ 500k', emoji: '🏆' },
    ],
  },
  {
    id: 'dor',
    question: 'Qual sua maior dor hoje?',
    subtitle: 'Seja sincero — é por aqui que começamos a resolver.',
    type: 'single-choice',
    options: [
      { value: 'nao-vende', label: 'Não consigo vender', emoji: '😰' },
      { value: 'vende-pouco', label: 'Vendo pouco', emoji: '📉' },
      { value: 'margem', label: 'Margem apertada', emoji: '💸' },
      { value: 'escalar', label: 'Não sei escalar', emoji: '🧗' },
      { value: 'tempo', label: 'Falta tempo / operação', emoji: '⏰' },
    ],
  },
  {
    id: 'objetivo',
    question: 'O que você quer alcançar?',
    subtitle: 'Última pergunta antes de montar seu diagnóstico.',
    type: 'single-choice',
    options: [
      { value: 'comecar', label: 'Começar do zero', emoji: '🚀' },
      { value: 'otimizar', label: 'Otimizar o que tenho', emoji: '🔧' },
      { value: 'escalar', label: 'Escalar minhas vendas', emoji: '🚀' },
      { value: 'profissionalizar', label: 'Profissionalizar operação', emoji: '👔' },
    ],
  },
  {
    id: 'nome',
    question: 'Como você se chama?',
    subtitle: 'Pra eu preparar algo personalizado pra você.',
    type: 'text',
    placeholder: 'Seu primeiro nome',
    validation: 'name',
  },
  {
    id: 'contato',
    question: 'Pra onde eu mando seu diagnóstico?',
    subtitle: 'WhatsApp ou e-mail — escolha o melhor pra você.',
    type: 'contact',
    placeholder: '(11) 99999-9999 ou seu@email.com',
    validation: 'contact',
  },
];

/** Rótulos amigáveis para cada id (usado na mensagem e no Sheets) */
export const QUIZ_LABELS: Record<string, string> = {
  marketplace: 'Marketplace',
  faturamento: 'Faturamento',
  dor: 'Maior dor',
  objetivo: 'Objetivo',
  nome: 'Nome',
  contato: 'Contato',
  source: 'Origem',
};

/** Mapa value -> label legível (para relatório e mensagem) */
export const QUIZ_VALUE_LABELS: Record<string, Record<string, string>> = {
  marketplace: {
    'mercado-livre': 'Mercado Livre',
    amazon: 'Amazon',
    shopee: 'Shopee',
    multi: 'Mais de um marketplace',
    nenhum: 'Ainda não vende',
  },
  faturamento: {
    'ate-10k': 'Até R$ 10k',
    '10k-50k': 'R$ 10k – R$ 50k',
    '50k-100k': 'R$ 50k – R$ 100k',
    '100k-500k': 'R$ 100k – R$ 500k',
    '500k+': 'Acima de R$ 500k',
  },
  dor: {
    'nao-vende': 'Não consegue vender',
    'vende-pouco': 'Vende pouco',
    margem: 'Margem apertada',
    escalar: 'Não sabe escalar',
    tempo: 'Falta tempo/operação',
  },
  objetivo: {
    comecar: 'Começar do zero',
    otimizar: 'Otimizar o que tem',
    escalar: 'Escalar vendas',
    profissionalizar: 'Profissionalizar operação',
  },
};

/** Tempo (ms) para o chat proativo aparecer sozinho */
export const PROACTIVE_CHAT_DELAY_MS = 30_000;

/** Chave de localStorage para preservar respostas entre quiz e chat */
export const DIAGNOSTICO_STORAGE_KEY = 'ek_diagnostico_answers';
