import { NavItem, ProjectItem, ServiceItem, PillarItem, ProcessStep } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', number: '01', label: 'Início', href: '#inicio' },
  { id: 'projetos', number: '02', label: 'Projetos', href: '#projetos' },
  { id: 'servicos', number: '03', label: 'Serviços', href: '#servicos' },
  { id: 'sobre', number: '04', label: 'Sobre', href: '#sobre' },
  { id: 'fundador', number: '05', label: 'Fundador', href: '#fundador' },
  { id: 'contato', number: '06', label: 'Contato', href: '#contato' },
];

export const HERO_DATA = {
  badge: 'GOMES STUDIO • DIGITAL DESIGN & SOLUTIONS',
  headlineStart: 'Design que ',
  headlineHighlight: 'conecta',
  headlineEnd: ', soluções que impulsionam.',
  subtitle: 'Transformamos ideias e negócios em experiências digitais profissionais, estratégicas e capazes de gerar novas oportunidades.',
  whatsappUrl: 'https://wa.me/5533991031052?text=Ol%C3%A1%20Lucas!%20Vim%20pelo%20site%20da%20Gomes%20Studio%20e%20gostaria%20de%20um%20or%C3%A7amento.',
  stats: [
    { value: '100%', label: 'PERSONALIZADO' },
    { value: 'Alta', label: 'CONVERSÃO' },
    { value: 'Direto', label: 'AO WHATSAPP' },
  ]
};

export const MANIFESTO_DATA = {
  sectionNumber: '01 // MANIFESTO & POSICIONAMENTO',
  headline: 'Mais do que presença digital. Construímos autoridade.',
  pills: ['PRESENÇA', 'DESIGN', 'TECNOLOGIA', 'ESTRATÉGIA'],
  bodyP1: 'A GOMES STUDIO nasceu com um propósito claro: transformar negócios em marcas digitalmente relevantes.',
  bodyP2: 'Em um mercado onde a primeira impressão acontece cada vez mais no ambiente online, acreditamos que uma presença digital estratégica pode ser o ponto de virada para empresas que desejam crescer, se destacar e conquistar novos clientes.'
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'doce-desejo',
    number: '#01',
    title: 'DOCE DESEJO',
    category: 'CONFEITARIA ARTESANAL / LANDING PAGE',
    description: 'Landing page e cardápio digital interativo desenvolvidos para a Doce Desejo Confeitaria Artesanal, com vitrine de produtos e pedidos diretos no WhatsApp.',
    imageSrc: 'assets/projects/doce-desejo.jpg',
    relativeImagePath: 'assets/projects/doce-desejo.jpg',
    tags: ['Cardápio Digital', 'WhatsApp Checkout', 'Alta Conversão', 'Ao Vivo'],
    ctaLabel: 'VER SITE AO VIVO',
    href: 'https://doce-desejo-confeitaria-artesanal.ai.studio',
    liveUrl: 'https://doce-desejo-confeitaria-artesanal.ai.studio',
    isExternal: true,
    clientType: 'Doce Desejo Confeitaria Artesanal',
    highlightText: 'Site no Ar • Pedidos em 1 Clique'
  },
  {
    id: 'gomes-studio-platform',
    number: '#02',
    title: 'GOMES STUDIO',
    category: 'WEBSITE INSTITUCIONAL',
    description: 'Experiência digital e arquitetura de marca do próprio estúdio, unindo visual escuro moderno, microinterações e alta performance.',
    imageSrc: '/assets/projects/gomes-studio.svg',
    relativeImagePath: 'assets/projects/gomes-studio.svg',
    tags: ['Design System', 'Cyber-Swiss', 'Interativo'],
    ctaLabel: 'EXPLORANDO AGORA',
    href: '#inicio',
    clientType: 'Design & Tecnologia Digital',
    highlightText: 'Studio Showcase & Portfólio'
  },
  {
    id: 'proximo-projeto',
    number: '#03',
    title: 'BRIEFING DO SEU PROJETO',
    category: 'DIAGNÓSTICO / SOB MEDIDA',
    description: 'Inicie seu projeto exclusivo. Acesse nosso formulário de briefing interativo para mapearmos seus objetivos e desenharmos a solução digital ideal para sua marca.',
    imageSrc: 'assets/projects/briefing-gomes-studio.png',
    relativeImagePath: 'assets/projects/briefing-gomes-studio.png',
    tags: ['Briefing Interativo', 'Diagnóstico Estratégico', 'Sob Medida', 'Online'],
    ctaLabel: 'PREENCHER BRIEFING',
    href: 'https://lucasgomes3621-ui.github.io/Gomes-Studio-/',
    liveUrl: 'https://lucasgomes3621-ui.github.io/Gomes-Studio-/',
    isExternal: true,
    clientType: 'Novos Parceiros & Empresas',
    highlightText: 'Briefing Oficial Online'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'LANDING PAGE PROFISSIONAL',
    badge: 'DESIGN • CONVERSÃO • WHATSAPP',
    description: 'Uma página criada para apresentar, valorizar e conectar sua empresa aos clientes. Desenvolvemos páginas modernas e personalizadas com informações estratégicas, identidade visual e caminhos diretos para contato pelo WhatsApp.',
    ctaText: 'QUERO UMA LANDING PAGE',
    serviceKey: 'Landing Page Profissional'
  },
  {
    number: '02',
    title: 'ARTES PARA DIVULGAÇÃO',
    badge: 'SOCIAL MEDIA & CRIATIVOS',
    description: 'Criativos profissionais para divulgar produtos, serviços, promoções e campanhas, mantendo a identidade visual e o profissionalismo absoluto da sua marca nas redes.',
    ctaText: 'QUERO DIVULGAR MINHA MARCA',
    serviceKey: 'Artes para Divulgação'
  },
  {
    number: '03',
    title: 'ANIMAÇÃO DE LOGO',
    badge: 'MOTION & IDENTIDADE SONORA/VISUAL',
    description: 'Vídeos curtos e modernos que dão movimento e mais impacto à identidade da sua marca, perfeitos para reels, introduções institucionais e anúncios.',
    ctaText: 'QUERO ANIMAR MINHA MARCA',
    serviceKey: 'Animação de Logo'
  }
];

export const PILLARS_DATA: PillarItem[] = [
  {
    number: '01',
    title: 'Atendimento Ágil e Personalizado',
    description: 'Cada cliente é único. Por isso, oferecemos um atendimento próximo, rápido e personalizado, entendendo as necessidades do seu negócio para criar soluções que realmente façam sentido.'
  },
  {
    number: '02',
    title: 'Design Exclusivo e Profissional',
    description: 'Nada de soluções genéricas. Cada projeto é desenvolvido com atenção aos detalhes, identidade da marca e uma estética moderna, criando uma presença digital que transmite mais credibilidade.'
  },
  {
    number: '03',
    title: 'Tecnologia com Propósito',
    description: 'Utilizamos tecnologia e design para criar experiências digitais funcionais, modernas e rigorosamente alinhadas aos objetivos estratégicos da sua empresa.'
  },
  {
    number: '04',
    title: 'Foco Real no Resultado',
    description: 'Cada elemento do projeto deve ter uma função: apresentar, conectar, gerar confiança e facilitar o contato direto e imediato entre a sua empresa e os clientes.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'ETAPA 01',
    title: 'Conversa',
    description: 'Entendemos o negócio, o público e o objetivo principal do projeto.'
  },
  {
    step: 'ETAPA 02',
    title: 'Estratégia',
    description: 'Definimos a melhor estrutura, fluxo de conteúdo e experiência de navegação.'
  },
  {
    step: 'ETAPA 03',
    title: 'Design',
    description: 'Criamos uma identidade visual moderna e alinhada à essência da marca.'
  },
  {
    step: 'ETAPA 04',
    title: 'Desenvolvimento',
    description: 'Transformamos o conceito em código de alta performance e responsividade.'
  },
  {
    step: 'ETAPA 05',
    title: 'Entrega',
    description: 'Publicamos o projeto e deixamos tudo testado e pronto para gerar conexões.'
  }
];

export const ABOUT_DATA = {
  sectionNumber: '04 // SOBRE O STUDIO',
  headline: 'Design que conecta, soluções que impulsionam.',
  badgeLocation: 'GOMES STUDIO',
  locationDetails: 'Sediado em Nanuque - MG, Brasil. Atendimento para empresas e marcas visionárias.',
  p1: 'Somos um estúdio criativo especializado em transformar ideias em experiências digitais que conectam marcas e pessoas. Na GOMES STUDIO, não criamos apenas sites — construímos presença, autoridade e oportunidades para negócios que desejam evoluir.',
  p2: 'Cada detalhe é desenvolvido com propósito: design moderno, identidade visual, experiência do usuário e soluções digitais alinhadas à essência de cada empresa.',
  quote: '“Porque para nós, ter um site não é apenas estar na internet. É ocupar o espaço que a sua marca merece.”'
};

export const FOUNDER_DATA = {
  sectionNumber: '05 // FUNDADOR',
  titlePrefix: 'Por trás da ',
  titleBrand: 'GOMES STUDIO',
  nameGreeting: 'Eu sou Lucas Gomes, fundador e desenvolvedor da GOMES STUDIO.',
  role: 'Fundador & Lead Developer / Designer',
  location: 'Nanuque - MG',
  bio1: 'Movido por tecnologia, criatividade e empreendedorismo, criei a GOMES STUDIO com o propósito de transformar ideias em experiências digitais modernas, funcionais e profissionais.',
  bio2: 'Cada projeto carrega um pouco da minha visão: design com propósito, atenção aos detalhes e soluções que realmente fazem sentido.',
  avatarPath: 'assets/founder/lucas-gomes.jpg',
  whatsappDirect: 'https://wa.me/5533991031052?text=Ol%C3%A1%20Lucas!%20Gostaria%20de%20falar%20diretamente%20com%20voc%C3%AA%20sobre%20um%20projeto.'
};

export const CONTACT_DATA = {
  sectionNumber: '06 // VAMOS CONVERSAR',
  headline: 'Pronto para levar sua empresa para o próximo nível?',
  subtext: 'Vamos transformar sua ideia em uma presença digital que realmente representa a relevância do seu negócio.',
  whatsapp: '(33) 99103-1052',
  whatsappRaw: '5533991031052',
  email: 'gomes.studio.ai@gmail.com',
  location: 'Nanuque - MG, Brasil'
};
