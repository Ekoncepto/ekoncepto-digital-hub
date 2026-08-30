/**
 * Diagnóstico Quiz — definição central das perguntas.
 *
 * Para editar perguntas/opções, mexa apenas aqui — o Quiz e o Chat proativo
 * consomem este mesmo array.
 *
 * Fluxo pensado para qualificar rápido com perguntas atreladas à dor:
 *   1. Faturamento (tamanho do lead — primeira pergunta)
 *   2. Canais onde vende (multi-select com logos; "não vendo online"
 *      desqualifica na hora — gate declarativo via `disqualifyValue`)
 *   3. Dores (multi-select, até 2)
 *   4. Follow-ups: UMA pergunta por dor marcada (via `showIf`)
 *   5. Bloco de contato (ContactForm)
 *
 * Respostas de perguntas multi são salvas como string única com vírgulas
 * (ex.: "mercado-livre,shopee") — compatível com localStorage e Sheets.
 */

export type QuizQuestionType = 'single-choice' | 'multi-choice' | 'text' | 'contact';

export type QuizOption = {
  value: string;
  label: string;
  emoji?: string;
  /** Caminho de imagem (SVG) exibido no lugar do emoji — ex.: logos. */
  icon?: string;
  /** Opção exclusiva: quando marcada, desmarca as outras da mesma pergunta. */
  exclusive?: boolean;
};

export type QuizAnswers = Record<string, string>;

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
  /** Máximo de seleções em perguntas multi-choice */
  maxSelect?: number;
  /**
   * Gate de qualificação: se o usuário selecionar algum destes values nesta
   * pergunta, o fluxo é interrompido (tela educativa, lead salvo como
   * descartado, sem disparar conversões).
   */
  disqualifyValues?: string[];
  /**
   * Exceção ao gate: quando retorna true, a opção `disqualifyValue` NÃO
   * desqualifica (ex.: empresa que fatura 50k+/mês mas ainda não vende em
   * marketplaces entra no fluxo de expansão de canais).
   */
  disqualifyExemptIf?: (answers: QuizAnswers) => boolean;
  /** Exibe a pergunta apenas quando a condição é satisfeita (branching). */
  showIf?: (answers: QuizAnswers) => boolean;
};

/**
 * Campos do bloco final de identificação (tela única, não-quiz).
 * Separados e claros: WhatsApp obrigatório, email opcional.
 * Renderizados por ContactForm, não por DiagnosticoQuiz.
 */
export type ContactField = {
  id: 'nome' | 'empresa' | 'whatsapp' | 'email';
  label: string;
  placeholder: string;
  inputMode: 'text' | 'tel' | 'email';
  required: boolean;
};

export const CONTACT_FIELDS: ContactField[] = [
  {
    id: 'nome',
    label: 'Seu nome',
    placeholder: 'Como você se chama?',
    inputMode: 'text',
    required: true,
  },
  {
    id: 'empresa',
    label: 'Empresa (opcional)',
    placeholder: 'Nome da sua empresa ou loja',
    inputMode: 'text',
    required: false,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    placeholder: '(11) 99999-9999',
    inputMode: 'tel',
    required: true,
  },
  {
    id: 'email',
    label: 'E-mail (opcional)',
    placeholder: 'seu@email.com',
    inputMode: 'email',
    required: false,
  },
];

/** Faturamentos que isentam do gate "não vende online" (fluxo de expansão). */
export const FATURAMENTO_EXPANSAO = ['50k-100k', '100k-500k', '500k+'];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'faturamento',
    question: 'Quanto sua empresa fatura por mês?',
    subtitle: 'Não se preocupe — todos os cases começaram pequenos.',
    type: 'single-choice',
    options: [
      { value: 'nao-vendo', label: 'Ainda não vendo (R$ 0)', emoji: '🚀' },
      { value: 'ate-10k', label: 'Até R$ 10 mil/mês', emoji: '🌱' },
      { value: '10k-50k', label: 'R$ 10 mil – R$ 50 mil/mês', emoji: '📈' },
      { value: '50k-100k', label: 'R$ 50 mil – R$ 100 mil/mês', emoji: '💪' },
      { value: '100k-500k', label: 'R$ 100 mil – R$ 500 mil/mês', emoji: '🎯' },
      { value: '500k+', label: 'Acima de R$ 500 mil/mês', emoji: '🏆' },
    ],
  },
  {
    id: 'marketplace',
    question: 'Onde você vende hoje?',
    subtitle: 'Marque todos os canais onde você já vende. Pode escolher mais de um.',
    type: 'multi-choice',
    disqualifyValues: ['nao-vendo-online'],
    // Empresa que fatura 50k+/mês fora dos marketplaces NÃO é descartada:
    // entra no fluxo de expansão de canais (pergunta canal-offline abaixo).
    disqualifyExemptIf: (a) =>
      FATURAMENTO_EXPANSAO.includes(a.faturamento ?? ''),
    options: [
      {
        value: 'mercado-livre',
        label: 'Mercado Livre',
        icon: '/images/marketplaces/mercado-livre.svg',
      },
      {
        value: 'amazon',
        label: 'Amazon',
        icon: '/images/marketplaces/amazon.svg',
      },
      {
        value: 'shopee',
        label: 'Shopee',
        icon: '/images/marketplaces/shopee.svg',
      },
      {
        value: 'nao-vendo-online',
        label: 'Ainda não vendo online',
        emoji: '🚀',
        exclusive: true,
      },
    ],
  },
  {
    id: 'canal-offline',
    question: 'E onde essa venda acontece hoje?',
    subtitle:
      'Você já tem uma operação forte — o marketplace é o próximo canal a abrir.',
    type: 'multi-choice',
    showIf: (a) =>
      a.marketplace === 'nao-vendo-online' &&
      FATURAMENTO_EXPANSAO.includes(a.faturamento ?? ''),
    options: [
      { value: 'loja-fisica', label: 'Loja física', emoji: '🏪' },
      { value: 'site', label: 'Site próprio', emoji: '🌐' },
      { value: 'social', label: 'Instagram / WhatsApp', emoji: '📱' },
      { value: 'atacado', label: 'Atacado / B2B', emoji: '📦' },
      { value: 'industria', label: 'Indústria / fabricante', emoji: '🏭' },
    ],
  },
  {
    id: 'categoria',
    question: 'O que sua empresa vende?',
    subtitle: 'Pode marcar mais de uma categoria.',
    type: 'multi-choice',
    disqualifyValues: ['servicos-digitais', 'afiliado'],
    options: [
      { value: 'eletronicos', label: 'Eletrônicos e tecnologia', emoji: '📱' },
      { value: 'moda', label: 'Moda e acessórios', emoji: '👕' },
      { value: 'casa', label: 'Casa e decoração', emoji: '🏠' },
      { value: 'beleza', label: 'Beleza e cuidados', emoji: '💄' },
      { value: 'alimentos', label: 'Alimentos e bebidas', emoji: '🥘' },
      { value: 'outros-fisicos', label: 'Outro tipo de produto físico', emoji: '📦' },
      {
        value: 'servicos-digitais',
        label: 'Serviços / produtos digitais',
        emoji: '💻',
        exclusive: true,
      },
      {
        value: 'afiliado',
        label: 'Vendo somente como afiliado',
        emoji: '🤝',
        exclusive: true,
      },
    ],
  },
  {
    id: 'dor',
    question: 'Qual sua maior dor hoje?',
    subtitle: 'Seja sincero — pode marcar até 2.',
    type: 'multi-choice',
    maxSelect: 2,
    options: [
      { value: 'nao-vende', label: 'Não consigo vender', emoji: '😰' },
      { value: 'vende-pouco', label: 'Vendo pouco', emoji: '📉' },
      { value: 'margem', label: 'Margem apertada', emoji: '💸' },
      { value: 'escalar', label: 'Não sei escalar', emoji: '🧗' },
      { value: 'tempo', label: 'Falta tempo / operação', emoji: '⏰' },
    ],
  },
  // ----- Follow-ups: UMA pergunta por dor marcada (ordem fixa) -----
  {
    id: 'detalhe-nao-vende',
    question: 'O que você acha que trava suas vendas?',
    subtitle: 'Isso direciona o foco do seu diagnóstico.',
    type: 'single-choice',
    showIf: (a) => !!a.dor?.includes('nao-vende'),
    options: [
      { value: 'visibilidade', label: 'Meus anúncios não aparecem', emoji: '🔍' },
      { value: 'listagem', label: 'Anúncios fracos (foto, título, descrição)', emoji: '🖼️' },
      { value: 'preco', label: 'Não sou competitivo em preço', emoji: '🏷️' },
      { value: 'reputacao', label: 'Minha reputação me atrapalha', emoji: '⭐' },
    ],
  },
  {
    id: 'detalhe-vende-pouco',
    question: 'Como estão suas visitas?',
    subtitle: 'Isso diferencia problema de tráfego vs. conversão.',
    type: 'single-choice',
    showIf: (a) => !!a.dor?.includes('vende-pouco'),
    options: [
      { value: 'poucas-visitas', label: 'Recebo poucas visitas', emoji: '📉' },
      { value: 'nao-converte', label: 'Recebo visitas, mas ninguém compra', emoji: '👀' },
      { value: 'sem-metricas', label: 'Não acompanho métricas', emoji: '🕳️' },
    ],
  },
  {
    id: 'detalhe-margem',
    question: 'O que mais pesa no seu custo?',
    subtitle: 'Margem saudável começa por saber onde ela escapa.',
    type: 'single-choice',
    showIf: (a) => !!a.dor?.includes('margem'),
    options: [
      { value: 'comissoes', label: 'Comissões do marketplace', emoji: '🏦' },
      { value: 'frete', label: 'Frete e logística', emoji: '🚚' },
      { value: 'anuncios', label: 'Gasto com anúncios', emoji: '📣' },
      { value: 'compra', label: 'Preço de compra do produto', emoji: '📦' },
    ],
  },
  {
    id: 'detalhe-escalar',
    question: 'O que impede você de escalar?',
    subtitle: 'Escalar sem estrutura queima dinheiro.',
    type: 'single-choice',
    showIf: (a) => !!a.dor?.includes('escalar'),
    options: [
      { value: 'estoque', label: 'Estoque / capital de giro', emoji: '💵' },
      { value: 'operacao', label: 'Operação e equipe', emoji: '🧑‍💼' },
      { value: 'estrategia', label: 'Falta de estratégia clara', emoji: '🧭' },
    ],
  },
  {
    id: 'detalhe-tempo',
    question: 'O que mais consome seu tempo?',
    subtitle: 'É por aqui que a automatização mais rende.',
    type: 'single-choice',
    showIf: (a) => !!a.dor?.includes('tempo'),
    options: [
      { value: 'atendimento', label: 'Atendimento ao cliente', emoji: '💬' },
      { value: 'envios', label: 'Envios e logística', emoji: '📦' },
      { value: 'gestao-anuncios', label: 'Gestão de anúncios', emoji: '📊' },
      { value: 'planilhas', label: 'Planilhas e rotina manual', emoji: '⌛' },
    ],
  },
];

// OBS: os campos de identificação (nome, whatsapp, email) NÃO estão no array
// acima. Eles formam um bloco dedicado (ContactForm) exibido após a última
// pergunta de múltipla escolha, com layout claro e mobile-friendly.

/**
 * Perguntas visíveis dado o estado atual das respostas (aplica `showIf`).
 * Usado pelo quiz, pelo chat e pelo cálculo de progresso.
 */
export function getActiveQuestions(answers: QuizAnswers): QuizQuestion[] {
  return QUIZ_QUESTIONS.filter((q) => !q.showIf || q.showIf(answers));
}

/** Rótulos amigáveis para cada id (usado na mensagem e no Sheets) */
export const QUIZ_LABELS: Record<string, string> = {
  faturamento: 'Faturamento',
  marketplace: 'Canais onde vende',
  'canal-offline': 'Canais atuais (fora do marketplace)',
  categoria: 'Categorias que vende',
  dor: 'Dores',
  'detalhe-nao-vende': 'Detalhe (não vende)',
  'detalhe-vende-pouco': 'Detalhe (vende pouco)',
  'detalhe-margem': 'Detalhe (margem)',
  'detalhe-escalar': 'Detalhe (escalar)',
  'detalhe-tempo': 'Detalhe (tempo)',
  nome: 'Nome',
  empresa: 'Empresa',
  whatsapp: 'WhatsApp',
  email: 'E-mail',
  source: 'Origem',
};

/** Mapa value -> label legível (para relatório e mensagem) */
export const QUIZ_VALUE_LABELS: Record<string, Record<string, string>> = {
  faturamento: {
    'nao-vendo': 'Ainda não vende',
    'ate-10k': 'Até R$ 10k/mês',
    '10k-50k': 'R$ 10k–50k/mês',
    '50k-100k': 'R$ 50k–100k/mês',
    '100k-500k': 'R$ 100k–500k/mês',
    '500k+': 'Acima de R$ 500k/mês',
  },
  marketplace: {
    'mercado-livre': 'Mercado Livre',
    amazon: 'Amazon',
    shopee: 'Shopee',
    multi: 'Mais de um marketplace',
    'nao-vendo-online': 'Ainda não vende online',
    nenhum: 'Ainda não vende',
  },
  'canal-offline': {
    'loja-fisica': 'Loja física',
    site: 'Site próprio',
    social: 'Instagram/WhatsApp',
    atacado: 'Atacado/B2B',
    industria: 'Indústria/fabricante',
  },
  categoria: {
    eletronicos: 'Eletrônicos',
    moda: 'Moda e acessórios',
    casa: 'Casa e decoração',
    beleza: 'Beleza e cuidados',
    alimentos: 'Alimentos e bebidas',
    'outros-fisicos': 'Outros produtos físicos',
    'servicos-digitais': 'Serviços/produtos digitais',
    afiliado: 'Somente afiliado',
  },
  dor: {
    'nao-vende': 'Não consegue vender',
    'vende-pouco': 'Vende pouco',
    margem: 'Margem apertada',
    escalar: 'Não sabe escalar',
    tempo: 'Falta tempo/operação',
  },
  'detalhe-nao-vende': {
    visibilidade: 'Anúncios não aparecem',
    listagem: 'Anúncios fracos',
    preco: 'Preço não competitivo',
    reputacao: 'Reputação',
  },
  'detalhe-vende-pouco': {
    'poucas-visitas': 'Poucas visitas',
    'nao-converte': 'Visitas que não convertem',
    'sem-metricas': 'Não acompanha métricas',
  },
  'detalhe-margem': {
    comissoes: 'Comissões',
    frete: 'Frete e logística',
    anuncios: 'Anúncios',
    compra: 'Preço de compra',
  },
  'detalhe-escalar': {
    estoque: 'Estoque/capital',
    operacao: 'Operação e equipe',
    estrategia: 'Falta de estratégia',
  },
  'detalhe-tempo': {
    atendimento: 'Atendimento',
    envios: 'Envios e logística',
    'gestao-anuncios': 'Gestão de anúncios',
    planilhas: 'Planilhas e rotina',
  },
};

/** Converte um valor de resposta multi ("a,b") nos labels legíveis. */
export function multiLabel(questionId: string, value: string): string {
  const map = QUIZ_VALUE_LABELS[questionId] ?? {};
  return value
    .split(',')
    .map((v) => map[v.trim()] ?? v.trim())
    .join(' + ');
}

/** Tempo (ms) para o chat proativo aparecer sozinho */
/**
 * Tempo (ms) para o chat abrir SOZINHO (auto-open).
 * O clique no botão flutuante é imediato — esse delay é só pro balão
 * aparecer automaticamente caso o usuário não clique em nada.
 */
export const PROACTIVE_CHAT_DELAY_MS = 45_000;

/** Chave de localStorage para preservar respostas entre quiz e chat */
export const DIAGNOSTICO_STORAGE_KEY = 'ek_diagnostico_answers';
