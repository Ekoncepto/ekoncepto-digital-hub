/**
 * Site-wide configuration and metadata
 * This file contains all the external links, contact information, and other site-wide settings.
 */

import { QUIZ_LABELS, QUIZ_VALUE_LABELS } from './diagnostico-quiz';

type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

type ContactInfo = {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  workingHours: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type BusinessInfo = {
  name: string;
  description: string;
  headline: string;
  tagline: string;
  about: string;
  logo: string;
  square_logo: string;
  favicon: string;
  vatId?: string;
  processSteps?: ProcessStep[];
};

// Business Information
export const businessInfo: BusinessInfo = {
  name: 'E-Koncepto',
  description: 'Consultoria de E-commerce para Marketplaces',
  headline: 'Consultoria de E-commerce focada em Marketplaces',
  tagline:
    'Lançamos e escalamos suas vendas em plataformas como Mercado Livre, Amazon e Shopee com uma consultoria mão na massa orientada a resultados.',
  about:
    'Somos uma consultoria especializada em marketplaces. Atuamos lado a lado com seu time, do lançamento à escala, com foco em performance, informações acionáveis e execução constante. Em média, nossos clientes alcançam crescimento acima de 70% nos primeiros 6 meses.',
  logo: '/images/ekoncepto-logo.svg', // Use the original SVG logo
  square_logo: '/images/logo.svg',
  favicon: '/favicon.ico',
  vatId: '52.170.930/0001-97',
  processSteps: [
    {
      title: 'Discovery',
      description: 'Analisamos sua operação e oportunidades.',
    },
    {
      title: 'Setup',
      description: 'Estruturamos contas, catálogos e integrações.',
    },
    {
      title: 'Lançamento',
      description: 'Publicação e primeiros resultados.',
    },
    {
      title: 'Otimização',
      description: 'Ajustes em anúncios, preços e logística.',
    },
    {
      title: 'Performance',
      description: 'Campanhas e alavancas de tráfego.',
    },
    {
      title: 'Escala',
      description: '+ canais, + sortimento e governança.',
    },
  ],
};

// Contact Information
export const contactInfo: ContactInfo = {
  phone: '+55 (11) 91941-6730', // Replace with actual phone number
  email: 'contato@ekoncepto.com.br',
  whatsapp: '5511919416730',
  address: 'São Paulo, SP - Brasil',
  workingHours: 'Segunda a Sexta, 9h às 18h',
};

// Social Media Links
export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://br.linkedin.com/company/ekoncepto',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ekoncepto/',
    icon: 'instagram',
  },
];

// External Links
export const externalLinks = {
  whatsapp: `https://wa.me/${contactInfo.whatsapp}?text=Olá! Gostaria de mais informações sobre a consultoria.`,
  //googleMaps: 'https://goo.gl/maps/example',
  privacyPolicy: '/politica-de-privacidade',
  termsOfService: '/termos-de-uso',
  //blog: 'https://blog.ekoncepto.com.br',
};

/**
 * Diagnóstico — página de qualificação intermediária.
 *
 * Todos os CTAs de WhatsApp do site passam por /diagnostico antes de
 * abrir o WhatsApp de fato. O `source` (mesma chave que antes identificava
 * a mensagem) agora identifica a origem do clique dentro do quiz, e é
 * gravado no Google Sheets junto das respostas.
 */
const DIAGNOSTICO_PATH = '/diagnostico';

/**
 * Gera link interno para a página de diagnóstico, preservando o `source`
 * para atribuição. Este é o novo comportamento de `whatsappLink()`.
 */
export function diagnosticoLink(source: string = 'default'): string {
  return `${DIAGNOSTICO_PATH}?source=${encodeURIComponent(source)}`;
}

/**
 * Mensagens pré-definidas para o caso de o usuário NÃO completar o quiz
 * (ex: fecha a página, clica no botão de escape do chat, etc.). São usadas
 * pelo `whatsappDirectLink()` abaixo — o "plan B" que pula o diagnóstico.
 */
const WHATSAPP_MESSAGES: Record<string, string> = {
  hero: 'Olá! Vi que meus concorrentes estão faturando 3x mais. Quero meu diagnóstico gratuito para entender onde estou perdendo dinheiro em marketplaces.',
  cases:
    'Olá! Vi os resultados de vocês e quero entender como aplicar isso na minha operação.',
  'services-estrategia':
    'Olá! Tenho interesse na Estratégia de Marketplace. Pode me passar mais detalhes?',
  'services-implementacao':
    'Olá! Quero começar — minha loja operando em até 15 dias.',
  'services-escala':
    'Olá! Já vendo e quero escalar pro próximo nível com vocês.',
  contact:
    'Olá! Quero meu diagnóstico gratuito e o plano de ação para os próximos 90 dias.',
  header: 'Olá! Gostaria de falar com um especialista da E-Koncepto.',
  floating: 'Olá! Vim pelo site e gostaria de falar com um especialista.',
  footer: 'Olá! Vim pelo rodapé do site e gostaria de falar com um especialista.',
  thankyou: 'Olá! Acabei de preencher o formulário e quero falar com um especialista.',
  'shopee-hero':
    'Olá! Vim do popup da Shopee. Quero vender mais na minha operação.',
  'shopee-cases':
    'Olá! Vi os resultados de vocês e quero aplicar na minha operação da Shopee.',
  'shopee-services-diagnostico':
    'Olá! Quero o diagnóstico da minha operação na Shopee.',
  'shopee-services-ads':
    'Olá! Quero otimizar meus anúncios e melhorar meus Shopee Ads.',
  'shopee-services-escala':
    'Olá! Quero escalar minhas vendas na Shopee com promoções.',
  'shopee-contact':
    'Olá! Quero meu diagnóstico gratuito para dominar a Shopee.',
  'shopee-header':
    'Olá! Vim da Shopee e quero falar com um especialista.',
  // LPs de Ads — fallback (whatsappLink roteia pro /diagnostico; estas
  // mensagens só usadas se o escape direto pro WhatsApp for acionado).
  'ads-ml-hero': 'Olá! Vim do anúncio de Mercado Livre. Quero vender mais.',
  'ads-ml-cases': 'Olá! Vi os resultados de vocês no ML e quero aplicar.',
  'ads-ml-diagnostico': 'Olá! Quero o diagnóstico da minha operação no ML.',
  'ads-ml-ads': 'Olá! Quero otimizar meus Mercado Ads.',
  'ads-ml-escala': 'Olá! Quero escalar minhas vendas no Mercado Livre.',
  'ads-ml-contact': 'Olá! Quero meu diagnóstico gratuito para o Mercado Livre.',
  'ads-amazon-hero': 'Olá! Vim do anúncio da Amazon. Quero vender mais.',
  'ads-amazon-cases': 'Olá! Vi os resultados de vocês na Amazon e quero aplicar.',
  'ads-amazon-diagnostico': 'Olá! Quero o diagnóstico da minha operação na Amazon.',
  'ads-amazon-ads': 'Olá! Quero otimizar meus Amazon PPC.',
  'ads-amazon-escala': 'Olá! Quero escalar minhas vendas na Amazon.',
  'ads-amazon-contact': 'Olá! Quero meu diagnóstico gratuito para a Amazon.',
  default:
    'Olá! Gostaria de mais informações sobre a consultoria.',
};

/**
 * Roteia TODOS os CTAs de WhatsApp pelo diagnóstico primeiro.
 *
 * Antes: retornava wa.me/?text=mensagem
 * Agora: retorna /diagnostico?source=<source>
 *
 * Os 15+ call sites que já usam whatsappLink('hero') etc. passam a
 * qualificar o lead automaticamente, sem mudança no componente.
 */
export function whatsappLink(
  source: keyof typeof WHATSAPP_MESSAGES | string = 'default'
): string {
  return diagnosticoLink(source);
}

/**
 * Link DIRETO para o WhatsApp (pula o diagnóstico).
 *
 * Usado em casos de escape: botão "prefiro falar direto" no chat proativo,
 * fallback de erro na submissão, ou quando o usuário já preencheu o quiz.
 * Quando `customMessage` é passado, usa ela; caso contrário, busca a
 * mensagem pré-definida pelo `source`.
 */
export function whatsappDirectLink(
  source: keyof typeof WHATSAPP_MESSAGES | string = 'default',
  customMessage?: string
): string {
  const message = customMessage ?? WHATSAPP_MESSAGES[source] ?? WHATSAPP_MESSAGES.default;
  return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Monta mensagem personalizada de WhatsApp a partir das respostas do quiz.
 *
 * Usada na tela final do quiz/chat, quando o usuário já deu todos os dados
 * e clicou em "falar no WhatsApp". A mensagem chega pré-preenchida no chat
 * com o resumo do lead, poupando o usuário de reexplicar tudo.
 */
export function buildDiagnosticMessage(
  answers: Record<string, string>,
  source: string = 'site'
): string {
  const label = (field: string, value: string): string =>
    QUIZ_VALUE_LABELS[field]?.[value] ?? value;
  // Valores multi ("a,b") viram "A + B".
  const multi = (field: string, value: string): string =>
    value.split(',').map((v) => label(field, v.trim())).join(' + ');

  const nome = answers.nome?.trim();
  const empresa = answers.empresa?.trim();
  const saudacao = nome
    ? empresa
      ? `Olá! Sou ${nome} da ${empresa}.`
      : `Olá! Sou ${nome}.`
    : 'Olá!';

  const canais = answers.marketplace ? multi('marketplace', answers.marketplace) : null;
  const faturamento = answers.faturamento ? label('faturamento', answers.faturamento) : null;
  const dores = answers.dor ? multi('dor', answers.dor) : null;
  const whatsapp = answers.whatsapp?.trim();

  const partes: string[] = [saudacao, 'Acabei de fazer o diagnóstico gratuito no site da E-Koncepto.'];

  const contexto: string[] = [];
  if (canais) {
    // Lead de expansão (fatura fora do marketplace): contexto mais claro.
    if (answers.marketplace === 'nao-vendo-online' && answers['canal-offline']) {
      contexto.push(
        `Vende hoje em: ${multi('canal-offline', answers['canal-offline'])} (quer abrir marketplaces)`
      );
    } else {
      contexto.push(`Vendo em: ${canais}`);
    }
  }
  // Faturamento só entra na msg se a pessoa vende (evita "Faturamento: Ainda não vende")
  if (faturamento && faturamento !== 'Ainda não vende') {
    contexto.push(`Faturamento: ${faturamento}`);
  }
  if (dores) contexto.push(`Dores: ${dores}`);
  // Follow-ups respondidos (detalhe-*) entram como contexto específico.
  const detalhes = Object.entries(answers).filter(
    ([k, v]) => k.startsWith('detalhe-') && v
  );
  detalhes.forEach(([k, v]) => contexto.push(`${QUIZ_LABELS[k] ?? k}: ${label(k, v)}`));
  if (contexto.length) partes.push(contexto.join(' · '));

  // WhatsApp já é o canal de contato, não precisa repetir na mensagem.
  // Email só incluímos se veio (campo opcional).
  const email = answers.email?.trim();
  if (email) partes.push(`Meu e-mail: ${email}`);

  partes.push('Pode me ajudar com o próximo passo?');
  void source; // reservado para futuro (ex: personalizar por origem)
  void whatsapp; // já é o canal ativo, não repetir
  return partes.join('\n');
}

/**
 * Gera um mini-diagnóstico personalizado para a tela de sucesso.
 *
 * Cruza as respostas (marketplace + faturamento + dor + objetivo) e devolve
 * 2-3 "insights" acionáveis — valor imediato, antes do CTA de WhatsApp.
 * Cada insight é { titulo, descricao, prioridade } pra podermos estilizar.
 *
 * A lógica é baseada em heurísticas simples (não IA) que refletem o
 * posicionamento da E-Koncepto. Editável sem tocar em UI.
 */
export type DiagnosticInsight = {
  titulo: string;
  descricao: string;
  prioridade: 'alta' | 'media' | 'baixa';
};

export function buildDiagnosticInsight(
  answers: Record<string, string>
): DiagnosticInsight[] {
  const insights: DiagnosticInsight[] = [];
  const canais = answers.marketplace?.split(',').filter(Boolean) ?? [];
  const fat = answers.faturamento;
  const dores = answers.dor?.split(',').filter(Boolean) ?? [];

  // --- Insight por DOR (o mais importante — aparece primeiro) ---
  const dorMap: Record<string, DiagnosticInsight> = {
    'nao-vende': {
      titulo: 'Seus anúncios não estão sendo encontrados',
      descricao:
        'Anúncios que não vendem geralmente têm problema de SEO/visibilidade dentro do marketplace. O primeiro passo é otimizar títulos, palavras-chave e imagens para aparecer nas buscas.',
      prioridade: 'alta',
    },
    'vende-pouco': {
      titulo: 'Tráfego baixo nos seus anúncios',
      descricao:
        'Vender pouco indica que poucos clientes estão vendo seus produtos. Investir em Ads do marketplace (Shopee Ads, Mercado Ads) com segmentação certa costuma dobrar a visibilidade rapidamente.',
      prioridade: 'alta',
    },
    margem: {
      titulo: 'Sua precificação pode estar errada',
      descricao:
        'Margem apertada quase sempre vem de precificação sem considerar comissões, frete e custos ocultos do marketplace. Recalcular o preço de venda é a alavanca de margem mais rápida.',
      prioridade: 'alta',
    },
    escalar: {
      titulo: 'Você está pronto para escalar — mas falta estrutura',
      descricao:
        'Escalar exige sortimento maior, reposição de estoque no tempo certo e campanhas de Ads bem estruturadas. Sem processo definido, escalar queima dinheiro.',
      prioridade: 'media',
    },
    tempo: {
      titulo: 'Você está operando no manual demais',
      descricao:
        'Falta de tempo significa processos manuais que deveriam ser automatizados: integração de estoque, resposta de mensagens, reposição. Automação libera você pra estratégia.',
      prioridade: 'media',
    },
  };
  dores.forEach((d) => {
    if (dorMap[d]) insights.push(dorMap[d]);
  });

  // --- Insight por FOLLOW-UP (torna o diagnóstico específico da dor) ---
  const detalheMap: Record<string, Record<string, DiagnosticInsight>> = {
    'detalhe-nao-vende': {
      visibilidade: {
        titulo: 'SEO de marketplace é o seu gargalo nº 1',
        descricao:
          'Se o anúncio não aparece, nada mais importa. Título com palavras-chave de busca, ficha técnica completa e imagens otimizadas são o que fazem o algoritmo te ranquear.',
        prioridade: 'alta',
      },
      listagem: {
        titulo: 'Sua listagem está perdendo cliques',
        descricao:
          'Foto principal e título decidem se o cliente clica ou não. Testar variações de imagem e título é uma das melhorias com retorno mais rápido.',
        prioridade: 'alta',
      },
      preco: {
        titulo: 'Preça com estratégia, não com medo',
        descricao:
          'Estar mais barato não é a única forma de competir. Destaques (Full, enviando hoje, atributos) permitem cobrar mais e ainda converter melhor.',
        prioridade: 'media',
      },
      reputacao: {
        titulo: 'Reputação destrava o algoritmo a seu favor',
        descricao:
          'Green/melhor reputação melhora ranqueamento e conversão. SLA de resposta e cancelamento zero são as alavancas mais rápidas.',
        prioridade: 'media',
      },
    },
    'detalhe-vende-pouco': {
      'poucas-visitas': {
        titulo: 'Tráfego: seu produto não está sendo visto',
        descricao:
          'Baixa visita é problema de ranqueamento e/ou Ads. Ativar Ads no produto certo, com a palavras-chave certa, resolve a parte de demanda enquanto o SEO orgânico trabalha.',
        prioridade: 'alta',
      },
      'nao-converte': {
        titulo: 'Você tem audiência, mas não conversão',
        descricao:
          'Visita sem venda aponta pra listagem (preço, foto, reputação, review). O caminho é testar cada elemento da página do produto com método, no chute.',
        prioridade: 'alta',
      },
      'sem-metricas': {
        titulo: 'Sem métricas, todo esforço é chute',
        descricao:
          'Visitas, taxa de conversão e ticket médio por produto dizem exatamente onde está o dinheiro. Um dashboard simples já muda o jogo da sua operação.',
        prioridade: 'media',
      },
    },
    'detalhe-margem': {
      comissoes: {
        titulo: 'Comissão não se negocia — o planejamento sim',
        descricao:
          'A comissão é fixa, mas ela deveria entrar no cálculo do preço desde o início. Margem saudável em marketplace nasce da precificação, não do corte de custo.',
        prioridade: 'alta',
      },
      frete: {
        titulo: 'Logística pode estar comendo sua margem',
        descricao:
          'Programas de fullfillment (Full, FBA) mudam o custo-benefício do frete e ainda melhoram o ranqueamento. Vale recalcular por produto.',
        prioridade: 'media',
      },
      anuncios: {
        titulo: 'Ads sem gestão queima margem',
        descricao:
          'ACOS/ROAS por produto mostra onde o anúncio paga o aluguel. Cortar campanhas ruins e escalar as vencedoras costuma recuperar margem em dias.',
        prioridade: 'media',
      },
      compra: {
        titulo: 'Preço de compra é sua maior alavanca',
        descricao:
          'Negociar com fornecedor ou mudar a cadeia de compras impacta 100% das vendas — muito mais que qualquer otimização de anúncio.',
        prioridade: 'media',
      },
    },
    'detalhe-escalar': {
      estoque: {
        titulo: 'Capital de giro trava o crescimento',
        descricao:
          'Escalar exige reposição rápida. Mapear giro por produto e priorizar os vencedores faz o mesmo capital render mais vendas.',
        prioridade: 'media',
      },
      operacao: {
        titulo: 'Processo é o que faz a operação escalar',
        descricao:
          'Sem processo documentado, cada venda nova aumenta o caos. Definir rotinas de reposição, preços e atendimento é pré-requisito pra crescer.',
        prioridade: 'media',
      },
      estrategia: {
        titulo: 'Falta um plano de crescimento claro',
        descricao:
          'Saber quais produtos escalar, em qual canal e com que meta de retorno transforma crescimento em processo — não em sorte.',
        prioridade: 'media',
      },
    },
    'detalhe-tempo': {
      atendimento: {
        titulo: 'Atendimento pode ser semi-automatizado',
        descricao:
          'Respostas rápidas melhoram a reputação e liberam seu tempo. Modelos + horários definidos já cortam boa parte da carga manual.',
        prioridade: 'baixa',
      },
      envios: {
        titulo: 'Logística manual não escala',
        descricao:
          'Integração de pedidos e etiquetas automáticas eliminam o trabalho repetitivo de envio — é a automação com maior retorno imediato.',
        prioridade: 'baixa',
      },
      'gestao-anuncios': {
        titulo: 'Gestão de Ads dá pra sistematizar',
        descricao:
          'Rotina fixa de análise (quais escalar, quais pausar) transforma horas de olhar painel em decisões rápidas de 15 minutos por dia.',
        prioridade: 'baixa',
      },
      planilhas: {
        titulo: 'Planilha manual é hora desperdiçada',
        descricao:
          'Dashboards e integrações automáticas de estoque/vendas devolvem horas da sua semana pra focar no que cresce o negócio.',
        prioridade: 'baixa',
      },
    },
  };
  Object.entries(answers).forEach(([k, v]) => {
    const insight = detalheMap[k]?.[v];
    if (insight) insights.push(insight);
  });

  // --- Insight por CANAIS (multi-marketplace) ---
  if (canais.length > 1) {
    insights.push({
      titulo: 'Vender em vários canais é vantagem — se for organizado',
      descricao:
        'Você já está em mais de um marketplace. O desafio agora é sincronizar estoque, preço e reputação entre eles pra um canal não canibalizar o outro.',
      prioridade: 'baixa',
    });
  }

  // --- Insight de EXPANSÃO: fatura forte fora do marketplace ---
  if (canais.includes('nao-vendo-online')) {
    insights.unshift({
      titulo: 'Você está pronto pra abrir marketplaces',
      descricao:
        `Com ${fat ? 'seu faturamento atual' : 'sua operação'} e experiência de venda fora do marketplace, abrir Mercado Livre/Amazon/Shopee é expansão — não aposta. O mercado online coloca sua operação na frente de milhões de compradores que hoje não te alcançam.`,
      prioridade: 'alta',
    });
  }

  // --- Insight por FATURAMENTO (contexto de onde o lead está) ---
  if (fat === 'nao-vendo') {
    insights.push({
      titulo: 'Você está começando — e isso é vantagem',
      descricao:
        'Quem ainda não vende não precisa desmontar nada: começa com a estrutura certa desde o dia 1. Escolher o marketplace certo pro seu produto e montar o catálogo bem feito economiza meses de retrabalho.',
      prioridade: 'media',
    });
  } else if (fat === 'ate-10k' || fat === '10k-50k') {
    insights.push({
      titulo: 'Sua fase pede foco, não escala',
      descricao:
        'Nessa faixa de faturamento, o ganho maior vem de dominar UM marketplace antes de expandir. Tentar vender em vários ao mesmo tempo dilui esforço.',
      prioridade: 'baixa',
    });
  } else if (fat === '500k+') {
    insights.push({
      titulo: 'Você já tem tração — o risco é estagnar',
      descricao:
        'Nesse patamar, o crescimento exige olhar pra fora: novos marketplaces, expansão de portfólio e parcerias estratégicas. O que te trouxe até aqui não te leva até o próximo nível.',
      prioridade: 'baixa',
    });
  }

  // Fallback: se por algum motivo não gerou nada, devolve 1 genérico.
  if (insights.length === 0) {
    insights.push({
      titulo: 'Identificamos oportunidades na sua operação',
      descricao:
        'Com base nas suas respostas, existem alavancas concretas de crescimento que podemos explorar. O próximo passo é um diagnóstico mais profundo.',
      prioridade: 'media',
    });
  }

  void canais; // canais >1 já gera insight próprio acima
  return insights.slice(0, 4); // máx 4 insights pra tela não ficar longa
}

// Analytics and Tracking
export const analytics = {
  googleAnalyticsId: import.meta.env.VITE_GA_MEASUREMENT_ID,
  googleTagManagerId: import.meta.env.VITE_GTM_ID,
  facebookPixelId: import.meta.env.VITE_FACEBOOK_PIXEL_ID,
};

/**
 * Social proof metrics used across the site (hero, cases, contact).
 * Centralized so all surfaces stay in sync and are easy to update.
 *
 * Notes:
 * - `totalRevenue` = all-time GMV moved through our clients' marketplaces.
 * - Use the absolute figure (+R$ 241M) for authority; the 2026 figure
 *   (+R$ 80M) can be surfaced later if we want a "this year" angle.
 */
export const socialProof = {
  totalRevenue: '+R$ 241M',
  totalRevenueDescription: 'movimentados em marketplaces',
  revenue2026: '+R$ 80M',
  revenue2026Description: 'movimentados só em 2026',
  averageGrowth: '+70%',
  averageGrowthDescription: 'crescimento médio em 6 meses',
  nps: '90',
  npsDescription: 'NPS — satisfação dos clientes',
  brandsServed: '50+',
  brandsServedDescription: 'marcas aceleradas em ML, Amazon e Shopee',
};

// Site Metadata for SEO
export const siteMetadata = {
  title: 'E-Koncepto | Consultoria de E-commerce para Marketplaces',
  description:
    'Aumente suas vendas nos marketplaces com consultoria prática: lançamento de contas, otimização de anúncios e escalada de resultados.',
  siteUrl: 'https://www.ekoncepto.com',
  author: 'E-Koncepto',
  locale: 'pt-BR',
  keywords: [
    'ecommerce',
    'marketplace',
    'consultoria',
    'vendas',
    'mercadolivre',
    'amazon',
    'shopee',
    'otimização',
    'anúncios',
  ],
};

// SEO-specific configuration for structured data
type OpeningHoursSpecification = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

type SeoConfig = {
  contactType: string;
  availableLanguage: string[];
  areaServed: string;
  openingHours: OpeningHoursSpecification[];
};

export const seoConfig: SeoConfig = {
  contactType: 'sales',
  availableLanguage: ['Portuguese', 'English'],
  areaServed: 'BR',
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
};

// Services/Products (if applicable)
export const services = [
  {
    id: 'consultoria',
    name: 'Estratégia de Marketplace',
    description:
      'Diagnóstico completo + plano de ação personalizado para alavancar suas vendas em 3 meses.',
    icon: 'trending-up',
    cta: 'Quero uma estratégia',
    features: [
      'Análise de concorrência',
      'Plano de preciação',
      'Roadmap de implementação',
      'Métricas-chave de sucesso',
    ],
  },
  /*{
    id: 'gestao',
    name: 'Gestão Completa',
    description: 'Administração total das suas vendas nos principais marketplaces do Brasil.',
    icon: 'bar-chart-2',
    cta: 'Quero vender mais',
    features: [
      'Gestão de anúncios e estoque',
      'Atendimento ao cliente',
      'Relatórios semanais',
      'Otimização contínua'
    ]
  },*/
  {
    id: 'implementacao',
    name: 'Implementação Rápida',
    description: 'Sua loja operando em até 15 dias, do zero ao primeiro pedido.',
    icon: 'zap',
    cta: 'Quero começar',
    features: [
      'Abertura de contas',
      'Cadastro de produtos',
      'Configuração de logística',
      'Treinamento da equipe',
    ],
  },
  {
    id: 'consultoria-avancada',
    name: 'Consultoria Avançada',
    description: 'Para quem já vende e quer escalar para o próximo nível.',
    icon: 'rocket',
    cta: 'Quero escalar',
    features: [
      'Análise de portfólio',
      'Estratégia de expansão',
      'Otimização de margens',
      'Automações',
    ],
  },
];
