// Dados centrais do site — NAP, serviços, FAQ e posts ficam aqui pra não
// duplicar informação espalhada pelas views.

const business = {
  name: "Kazuki Marketing",
  legalName: "64.653.776 ALEXANDRE SANTOS SOUZA",
  cnpj: "64.653.776/0001-93",
  tagline: "Sua marca. Nossa missão.",
  founder: "Alexandre Santos",
  phoneDisplay: "(11) 98418-7080",
  phoneIntl: "+5511984187080",
  whatsappUrl: "https://wa.me/5511984187080",
  email: "contato@agenciakazuki.com.br",
  siteUrl: "https://agenciakazuki.com.br",
  instagram: "https://instagram.com/agenciakazuki",
  facebook: "https://facebook.com/AgenciaKazuki",
  address: {
    street: "Av. Antonio Mathias de Camargo, 895, Sala 7",
    neighborhood: "Centro",
    city: "Cotia",
    state: "SP",
    zip: "06700-158",
    country: "BR",
  },
  geo: {
    lat: -23.6122906,
    lng: -46.9318337,
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const services = [
  {
    slug: "seo-local",
    title: "SEO Local",
    summary:
      "Estratégia completa pra sua empresa aparecer no topo do Google quando alguém busca em Cotia e região.",
    icon: "map-pin",
    bullets: [
      "Pesquisa de palavras-chave com intenção local",
      "Otimização técnica do site (meta tags, schema, velocidade)",
      "Construção de backlinks com blogs e veículos locais de Cotia",
    ],
  },
  {
    slug: "criacao-de-sites",
    title: "Criação de Sites",
    summary:
      "Sites rápidos, responsivos e otimizados pra conversão — pensados pra ranquear desde o primeiro dia.",
    icon: "monitor",
    bullets: [
      "Design responsivo alinhado à identidade da sua marca",
      "Estrutura pensada pra SEO desde a primeira linha de código",
      "Performance otimizada (Core Web Vitals)",
    ],
  },
  {
    slug: "google-meu-negocio",
    title: "Google Meu Negócio",
    summary:
      "Perfil completo, posts recorrentes e gestão de avaliações pra dominar o Mapa e o Local Pack.",
    icon: "store",
    bullets: [
      "Otimização completa da ficha (categorias, descrição, atributos)",
      "Calendário de posts recorrentes",
      "Estratégia de avaliações e resposta humanizada",
    ],
  },
  {
    slug: "trafego-pago",
    title: "Tráfego Pago",
    summary:
      "Campanhas de Google Ads e Meta Ads com orçamento controlado e foco em lead qualificado.",
    icon: "trending-up",
    bullets: [
      "Estrutura de campanhas por cluster de palavra-chave",
      "Segmentação geográfica focada em Cotia e região",
      "Relatório mensal com CTR, CPC e custo por lead",
    ],
  },
  {
    slug: "software-e-micro-saas",
    title: "Desenvolvimento de Software e Micro-SaaS",
    summary:
      "Além do marketing, desenvolvemos software sob medida e micro-SaaS pra automatizar o seu negócio.",
    icon: "code",
    bullets: [
      "Sistemas internos sob medida pra automatizar processos",
      "Micro-SaaS pra necessidades específicas do seu negócio",
      "Integração com ferramentas que você já usa",
    ],
  },
];

const differentiators = [
  {
    title: "+12 anos no setor de alimentação",
    text: "Liderança operacional em redes como Madero, Coco Bambu, Outback Steakhouse, Astor, Ici Brasserie e Pirajá — uma visão de negócio que vai além do marketing.",
  },
  {
    title: "Especialista em SEO Local e Google Meu Negócio",
    text: "Otimização técnica, conteúdo e ficha do Google trabalhando juntos pra gerar cliente real, não só visita.",
  },
  {
    title: "Parcerias com blogs locais e geração de backlinks",
    text: "Construção de autoridade de domínio com links relevantes da região de Cotia, não links genéricos.",
  },
];

const process = [
  {
    title: "Diagnóstico",
    text: "Auditoria completa do site, da ficha do Google e da concorrência local.",
  },
  {
    title: "Estratégia",
    text: "Plano de SEO local, conteúdo e mídia paga priorizado por impacto e prazo.",
  },
  {
    title: "Execução",
    text: "Implementação técnica, criação de conteúdo e gestão de campanhas.",
  },
  {
    title: "Resultados",
    text: "Acompanhamento mensal de posições, tráfego e conversões — com ajuste contínuo.",
  },
];

const faq = [
  {
    question: "Quanto tempo leva pra aparecer no topo do Google em Cotia?",
    answer:
      "Pra Google Meu Negócio, os primeiros resultados aparecem entre 30 e 60 dias. Pra SEO no site (busca orgânica), o prazo médio é de 3 a 6 meses, dependendo da concorrência do termo e do estado atual do site.",
  },
  {
    question: "A Kazuki Marketing atende só restaurantes?",
    answer:
      "Não. Atendemos negócios locais em geral em Cotia e região — restaurantes são uma especialidade por causa da experiência de mais de 12 anos do fundador no setor de alimentação, mas também atendemos contabilidade, comércio e serviços.",
  },
  {
    question: "O que é SEO local e por que ele é diferente do SEO comum?",
    answer:
      "SEO local foca em aparecer pra buscas com intenção geográfica (\"perto de mim\", \"em Cotia\") e no Google Maps/Local Pack, usando Google Meu Negócio, avaliações, NAP consistente e backlinks locais — diferente do SEO nacional, que disputa termos sem recorte geográfico.",
  },
  {
    question: "Vocês cuidam das avaliações do Google Meu Negócio?",
    answer:
      "Sim. Criamos estratégia pra pedir avaliações de clientes reais e respondemos cada avaliação (positiva ou negativa) com um tom humano, sem resposta automática genérica.",
  },
  {
    question: "Além de marketing, a Kazuki desenvolve sistemas?",
    answer:
      "Sim. Também desenvolvemos software sob medida e micro-SaaS pra automatizar processos do seu negócio — desde sites institucionais até ferramentas internas simples.",
  },
];

const blogPosts = [
  {
    slug: "seo-local-para-restaurantes-cotia",
    title: "SEO Local para Restaurantes em Cotia: o guia completo",
    excerpt:
      "Como um restaurante em Cotia aparece no topo do Google e do Maps — passo a passo, sem enrolação.",
    date: "2026-07-01",
    body: [
      {
        heading: "Por que SEO local é diferente pra restaurante",
        paragraphs: [
          "Quem busca restaurante no Google quase sempre tem intenção imediata — \"almoço perto de mim\", \"restaurante em Cotia aberto agora\". Isso muda a prioridade: Google Meu Negócio e Maps pesam tanto quanto (ou mais que) o site.",
          "Antes de qualquer ação de conteúdo, vale auditar o básico: a ficha do Google está completa? O NAP (nome, endereço, telefone) é idêntico em todos os lugares onde o restaurante aparece online?",
        ],
      },
      {
        heading: "Os 3 pilares que mais pesam",
        paragraphs: [
          "Ficha do Google Meu Negócio completa e ativa, com fotos reais e posts recorrentes.",
          "Avaliações — quantidade, nota média e frequência de resposta do estabelecimento.",
          "Backlinks e menções locais — blogs de gastronomia da região, guias locais, parcerias com influenciadores de Cotia.",
        ],
      },
      {
        heading: "Por onde começar",
        paragraphs: [
          "Comece pela ficha do Google: categoria certa, horário atualizado, cardápio linkado. Depois parta pras avaliações — pedir pro cliente satisfeito avaliar na hora costuma ser o ganho mais rápido. Backlinks e conteúdo vêm na sequência, como trabalho contínuo.",
        ],
      },
    ],
  },
  {
    slug: "google-meu-negocio-para-restaurante",
    title: "Google Meu Negócio para Restaurante: o que otimizar primeiro",
    excerpt:
      "A ordem certa pra otimizar a ficha do Google quando o orçamento e o tempo são limitados.",
    date: "2026-07-08",
    body: [
      {
        heading: "Prioridade 1: informações básicas corretas",
        paragraphs: [
          "Nome idêntico ao da fachada, categoria principal certa (não genérica demais), endereço exato e horário sempre atualizado — inclusive em feriado.",
        ],
      },
      {
        heading: "Prioridade 2: fotos reais",
        paragraphs: [
          "Fachada, ambiente interno, pratos principais e equipe. Fichas com fotos recentes e variadas recebem mais cliques que fichas só com foto de capa genérica.",
        ],
      },
      {
        heading: "Prioridade 3: posts e avaliações recorrentes",
        paragraphs: [
          "Postar pelo menos uma vez por semana (promoção, prato novo, evento) mantém a ficha ativa pro algoritmo. Responder toda avaliação — positiva ou negativa — em até 48h reforça confiança pra quem está decidindo.",
        ],
      },
    ],
  },
  {
    slug: "backlinks-locais-cotia",
    title: "Como conseguir backlinks locais em Cotia sem pagar links genéricos",
    excerpt:
      "Parcerias com blogs e veículos locais valem mais que dezenas de links comprados. Veja como abordar.",
    date: "2026-07-15",
    body: [
      {
        heading: "Por que link local vale mais que link genérico comprado",
        paragraphs: [
          "Um link de um blog de Cotia ou região, relevante pro seu nicho, carrega sinal de relevância geográfica que um link comprado em massa não tem — e reduz risco de penalização do Google.",
        ],
      },
      {
        heading: "Onde procurar parcerias",
        paragraphs: [
          "Blogs de gastronomia e estilo de vida da região, páginas de notícias locais, associações comerciais de Cotia, eventos e feiras locais que aceitam patrocínio com menção no site.",
        ],
      },
      {
        heading: "Como abordar sem parecer spam",
        paragraphs: [
          "Ofereça algo de valor real antes de pedir o link: um conteúdo exclusivo, uma entrevista, uma parceria de divulgação mútua. Pedido direto de \"troca de link\" sem contexto costuma ser ignorado ou prejudica a credibilidade dos dois lados.",
        ],
      },
    ],
  },
  {
    slug: "avaliacoes-google-restaurante",
    title: "Avaliações no Google: como pedir (e responder) sem parecer forçado",
    excerpt:
      "Como pedir avaliação de cliente satisfeito e responder crítica sem soar defensivo.",
    date: "2026-07-22",
    body: [
      {
        heading: "O momento certo de pedir",
        paragraphs: [
          "O melhor momento é logo depois de um elogio espontâneo — na mesa, na saída ou numa mensagem de agradecimento. Pedir em massa por SMS genérico costuma converter pouco.",
        ],
      },
      {
        heading: "Como responder avaliação positiva",
        paragraphs: [
          "Agradecer pelo nome, citar algo concreto do que a pessoa mencionou (o prato, o atendimento) e evitar resposta copiada e colada — isso já é coberto pela skill /responder-avaliacoes da própria operação da Kazuki.",
        ],
      },
      {
        heading: "Como responder avaliação negativa",
        paragraphs: [
          "Reconhecer o problema sem se defender, oferecer solução concreta (não só desculpa genérica) e, se possível, levar a conversa pra um canal direto (WhatsApp, e-mail) pra resolver fora da avaliação pública.",
        ],
      },
    ],
  },
];

module.exports = {
  business,
  navLinks,
  services,
  differentiators,
  process,
  faq,
  blogPosts,
};
