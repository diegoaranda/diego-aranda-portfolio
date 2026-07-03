export type LinkItem = {
  label: string
  href: string
}

export type MetadataContent = {
  title: string
  description: string
  path: string
}

export type SplitTitle = {
  before: string
  accent: string
  after?: string
}

export type Contact = {
  email: string
  whatsapp: string
  whatsappLink: string
  instagram: string
  instagramLink: string
  location: string
}

export const brand = {
  name: 'Diego Aranda',
  descriptor: 'Estudio creativo',
  title: 'Diego Aranda — Diseño, Web y Contenido Visual',
  copyright: 'Todos los derechos reservados.',
  url: 'https://diegoaranda.art',
  locale: 'es_ES',
}

export const contact: Contact = {
  email: 'diego.aranda.a@outlook.com',
  whatsapp: '+591 69006014',
  whatsappLink: 'https://wa.me/59169006014',
  instagram: '@diego.aranda.a',
  instagramLink: 'https://www.instagram.com/diego.aranda.a',
  location: 'Santa Cruz, Bolivia',
}

export const nav: LinkItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Contacto', href: '/contacto' },
]

export const seo = {
  titleTemplate: '%s | Diego Aranda',
  defaultTitle: brand.title,
  description:
    'Diseño marcas, sitios web y contenido visual que elevan la presencia de negocios, productos y propiedades. Estudio creativo con base en Santa Cruz, Bolivia.',
  keywords: [
    'Diego Aranda',
    'diseño gráfico Bolivia',
    'branding Santa Cruz',
    'diseño web Bolivia',
    'contenido comercial',
    'contenido inmobiliario',
    'fotografía inmobiliaria',
    'dirección visual',
    'portfolio creativo',
  ],
  ogImage: {
    url: '/diego-portrait.png',
    width: 1024,
    height: 1024,
    alt: 'Diego Aranda — diseño, web y contenido visual',
  },
}

export const siteMetadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  generator: 'v0.app',
  keywords: seo.keywords,
  authors: [{ name: brand.name, url: brand.url }],
  creator: brand.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: seo.defaultTitle,
    description: seo.description,
    url: '/',
    siteName: brand.name,
    images: [seo.ogImage],
    type: 'website' as const,
    locale: brand.locale,
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: seo.defaultTitle,
    description: seo.description,
    images: [seo.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const pageMetadata = {
  home: {
    title: 'Inicio',
    description: seo.description,
    path: '/',
  },
  servicios: {
    title: 'Servicios',
    description:
      'Branding, diseño web, contenido comercial y contenido inmobiliario. Servicios creativos con estándar premium.',
    path: '/servicios',
  },
  portafolio: {
    title: 'Portafolio',
    description:
      'Proyectos seleccionados de branding, diseño web, contenido comercial y contenido inmobiliario.',
    path: '/portafolio',
  },
  sobreMi: {
    title: 'Sobre mí',
    description:
      'Diego Aranda es un profesional creativo que combina diseño, ejecución digital y pensamiento estratégico.',
    path: '/sobre-mi',
  },
  contacto: {
    title: 'Contacto',
    description:
      'Hablemos de tu proyecto de branding, diseño web o contenido visual. Escríbeme por email o WhatsApp.',
    path: '/contacto',
  },
} satisfies Record<string, MetadataContent>

export function pageSeo(page: MetadataContent) {
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title:
        page.path === '/'
          ? seo.defaultTitle
          : `${page.title} | ${brand.name}`,
      description: page.description,
      url: page.path,
      siteName: brand.name,
      images: [seo.ogImage],
      type: 'website' as const,
      locale: brand.locale,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title:
        page.path === '/'
          ? seo.defaultTitle
          : `${page.title} | ${brand.name}`,
      description: page.description,
      images: [seo.ogImage.url],
    },
  }
}

export const links = {
  portfolio: '/portafolio',
  contact: '/contacto',
  services: '/servicios',
}

export const header = {
  ctaLabel: 'Hablemos',
  mobileOpenLabel: 'Abrir menú',
  mobileCloseLabel: 'Cerrar menú',
}

export const homeHero = {
  eyebrowPrefix: 'Disponible para nuevos proyectos',
  titleBefore: 'Diseño marcas, sitios web y',
  titleAccent: 'contenido visual',
  titleAfter: 'que elevan la presencia de negocios, productos y propiedades.',
  description:
    'Estudio creativo enfocado en branding, diseño web y producción de contenido. Combino criterio estético, pensamiento estratégico y ejecución cuidada para que tu proyecto se vea — y venda — mejor.',
  primaryCta: 'Ver proyectos',
  secondaryCta: 'Hablemos',
  mainImage: {
    src: '/projects/lumen-estate.png',
    alt: 'Proyecto destacado — dirección visual y producción de contenido',
  },
  previewImage: {
    src: '/projects/sol-cafe.png',
    alt: 'Vista previa de proyecto web',
  },
  stat: {
    value: '8+',
    label: 'años de',
    secondLine: 'trabajo creativo',
  },
}

export const homeSections = {
  services: {
    label: 'Servicios',
    title: 'Cuatro disciplinas, una misma dirección visual.',
    ctaLabel: 'Ver todos los servicios',
  },
  portfolio: {
    label: 'Portafolio',
    title: 'Proyectos seleccionados.',
    ctaLabel: 'Ver portafolio completo',
  },
  process: {
    label: 'Cómo trabajo',
    title: 'Un proceso claro, del diagnóstico a la entrega.',
  },
}

export type Service = {
  id: string
  index: string
  title: string
  short: string
  intro: string
  forWho: string
  why: string
  deliverables: string[]
}

export const services: Service[] = [
  {
    id: 'branding',
    index: '01',
    title: 'Diseño gráfico & branding',
    short:
      'Identidades visuales con criterio y sistemas gráficos coherentes que hacen que una marca se reconozca y se recuerde.',
    intro:
      'Defino la identidad visual de una marca y el sistema gráfico que la sostiene: logotipo, tipografías, color y las reglas que hacen que todo se vea como una sola cosa, dentro y fuera de pantalla.',
    forWho:
      'Marcas nuevas que arrancan de cero y negocios en marcha que ya no se ven a la altura de lo que ofrecen.',
    why: 'Una identidad ordenada hace que una marca se entienda rápido, transmita seriedad y sea fácil de reconocer en cualquier canal.',
    deliverables: [
      'Identidad visual y logotipo',
      'Sistema y manual de marca',
      'Piezas comerciales',
      'Catálogos y presentaciones',
      'Plantillas para redes',
    ],
  },
  {
    id: 'web',
    index: '02',
    title: 'Diseño web',
    short:
      'Sitios y landing pages rápidos, claros y elegantes, pensados para presentar y para convertir.',
    intro:
      'Diseño y construyo sitios web modernos y responsivos, con una estructura clara que guía al visitante hacia lo importante: entender la oferta y dar el siguiente paso.',
    forWho:
      'Negocios que necesitan un sitio que represente su nivel, y proyectos que quieren una landing enfocada en captar contactos o ventas.',
    why: 'El sitio suele ser el primer contacto real con un cliente. Uno claro y bien resuelto genera confianza y convierte esa visita en una conversación.',
    deliverables: [
      'Landing pages',
      'Sitios corporativos',
      'Portafolios y catálogos digitales',
      'Diseño responsive',
      'Estructura orientada a conversión',
    ],
  },
  {
    id: 'comercial',
    index: '03',
    title: 'Contenido comercial',
    short:
      'Contenido visual para producto y campañas que comunica valor y acompaña la venta.',
    intro:
      'Produzco contenido visual para producto, promociones y campañas: piezas pensadas para mostrar el valor de lo que vendes y sostener el mensaje en cada punto de contacto.',
    forWho:
      'Marcas de producto, comercios y negocios que necesitan alimentar redes, campañas y material de venta con una imagen consistente.',
    why: 'El contenido es lo que la gente ve todos los días. Cuando es coherente y cuidado, la marca se percibe más sólida y el producto se vende mejor.',
    deliverables: [
      'Contenido de producto',
      'Piezas para campañas',
      'Material para ventas',
      'Contenido para redes',
      'Dirección visual de sesiones',
    ],
  },
  {
    id: 'inmobiliario',
    index: '04',
    title: 'Contenido inmobiliario',
    short:
      'Fotografía, video y dron para presentar propiedades con estándar premium y venderlas mejor.',
    intro:
      'Creo contenido inmobiliario de alto nivel —fotografía, video y tomas aéreas— que muestra cada propiedad en su mejor versión y ayuda a que se venda o se alquile antes.',
    forWho:
      'Agentes, desarrolladoras y propietarios que promocionan propiedades, proyectos o alquileres temporales premium.',
    why: 'Una propiedad bien presentada capta más interés, atrae al público correcto y sostiene mejor su precio. La primera impresión es visual.',
    deliverables: [
      'Fotografía de propiedades',
      'Video y recorridos',
      'Tomas con dron',
      'Contenido para alquiler temporal',
      'Piezas para promoción y portales',
    ],
  },
]

export type ProjectCategory = 'Branding' | 'Web' | 'Comercial' | 'Inmobiliario'

export type Project = {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  year: string
  shortDescription: string
  overview: string
  services: string[]
  client?: string
  role?: string
  results?: string[]
  coverImage: string
  gallery?: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'diego-aranda-portfolio',
    slug: 'diego-aranda-portfolio',
    title: 'Diego Aranda Portfolio',
    category: 'Web',
    year: '2026',
    shortDescription:
      'Sitio web personal diseñado para presentar servicios creativos, portafolio y contacto profesional.',
    overview:
      'Diseño y construcción de una presencia digital personal con enfoque premium, orientada a mostrar servicios de diseño, web y contenido visual de forma clara y profesional.',
    services: [
      'Diseño web',
      'Dirección visual',
      'Estructura de contenido',
      'Portfolio personal',
    ],
    role: 'Dirección visual, estructura, diseño web y contenido.',
    results: [
      'Base pública lista para evolucionar hacia portafolio dinámico y panel de administración.',
    ],
    coverImage: '/projects/atelier-norte.png',
    gallery: ['/projects/atelier-norte.png'],
    featured: true,
  },
  {
    id: 'home-finance-os',
    slug: 'home-finance-os',
    title: 'Home Finance OS',
    category: 'Web',
    year: '2026',
    shortDescription:
      'Aplicación web para gestión de finanzas personales y del hogar.',
    overview:
      'Proyecto digital orientado al control de cuentas, movimientos, presupuestos, metas y gastos recurrentes, con una interfaz clara para uso cotidiano.',
    services: [
      'Diseño de interfaz',
      'Producto digital',
      'Estructura funcional',
    ],
    role:
      'Dirección de producto, estructura de pantallas, revisión UX y coordinación de desarrollo.',
    results: ['Aplicación funcional publicada en producción para uso personal/familiar.'],
    coverImage: '/projects/lumen-estate.png',
    gallery: ['/projects/lumen-estate.png'],
    featured: true,
  },
  {
    id: 'rey-del-abasto',
    slug: 'rey-del-abasto',
    title: 'Rey del Abasto',
    category: 'Comercial',
    year: '2026',
    shortDescription:
      'Contenido comercial para productos de consumo, energía e importación orientado a ventas y generación de leads.',
    overview:
      'Desarrollo de piezas visuales para comunicar productos, precios, beneficios y disponibilidad comercial en canales digitales como Facebook y WhatsApp.',
    services: [
      'Diseño gráfico',
      'Contenido comercial',
      'Piezas para redes',
      'Comunicación visual',
    ],
    role:
      'Diseño gráfico, dirección visual, adaptación de mensajes comerciales y creación de artes.',
    results: [
      'Sistema visual útil para campañas, difusión de productos y comunicación comercial directa.',
    ],
    coverImage: '/projects/sol-cafe.png',
    gallery: ['/projects/sol-cafe.png'],
    featured: true,
  },
  {
    id: 'medalleros-santa-cruz',
    slug: 'medalleros-santa-cruz',
    title: 'Medalleros Santa Cruz',
    category: 'Branding',
    year: '2025',
    shortDescription:
      'Marca de portamedalleros personalizados enfocada en deportistas, familias y regalos memorables.',
    overview:
      'Construcción de comunicación visual para un producto personalizado, combinando fotografía, diseño gráfico, campañas estacionales y piezas para venta por WhatsApp/redes.',
    services: [
      'Branding',
      'Contenido para redes',
      'Piezas comerciales',
      'Catálogo visual',
    ],
    role:
      'Dirección visual, diseño de piezas, contenido comercial y estructura de comunicación.',
    results: [
      'Marca con identidad clara, campañas activas y sistema visual adaptable a temporadas y disciplinas deportivas.',
    ],
    coverImage: '/projects/campo-vivo.png',
    gallery: ['/projects/campo-vivo.png'],
    featured: true,
  },
  {
    id: 'solusec',
    slug: 'solusec',
    title: 'Solusec',
    category: 'Web',
    year: '2026',
    shortDescription:
      'Aplicación web para generar cotizaciones de servicios de forma ordenada y profesional.',
    overview:
      'Diseño y estructuración de una herramienta comercial para crear propuestas, organizar servicios, manejar datos de empresa y presentar cotizaciones de manera más profesional.',
    services: [
      'Diseño web',
      'Estructura de app',
      'Propuesta digital',
      'Interfaz comercial',
    ],
    role:
      'Estructura funcional, dirección de producto, revisión de interfaz y enfoque comercial.',
    results: [
      'Base digital publicada para mejorar el proceso de cotización y presentación comercial.',
    ],
    coverImage: '/projects/meridian-studio.png',
    gallery: ['/projects/meridian-studio.png'],
    featured: true,
  },
  {
    id: 'contenido-inmobiliario',
    slug: 'contenido-inmobiliario',
    title: 'Contenido inmobiliario',
    category: 'Inmobiliario',
    year: '2026',
    shortDescription:
      'Contenido visual para propiedades orientado a alquiler temporal, venta directa y presencia digital.',
    overview:
      'Producción y dirección de contenido para mostrar propiedades con mayor claridad, estética y valor percibido en plataformas digitales.',
    services: [
      'Fotografía',
      'Video',
      'Contenido para alquiler temporal',
      'Piezas para promoción de propiedades',
    ],
    role:
      'Dirección visual, fotografía/video, selección de encuadres y piezas para promoción.',
    results: [
      'Contenido preparado para mejorar la presentación de propiedades en canales digitales.',
    ],
    coverImage: '/projects/casa-alba.png',
    gallery: ['/projects/casa-alba.png'],
    featured: true,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export const portfolioFilters = [
  'Todos',
  'Branding',
  'Web',
  'Comercial',
  'Inmobiliario',
] as const

export type PortfolioFilter = (typeof portfolioFilters)[number]

export const portfolioModal = {
  ariaLabelPrefix: 'Detalle del proyecto',
  closeLabel: 'Cerrar detalle',
  detail:
    'Un proyecto trabajado desde el diagnóstico hasta la entrega, cuidando la coherencia visual y el objetivo del negocio en cada pieza. Próximamente compartiré el caso completo.',
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Diagnóstico',
    description:
      'Entiendo el negocio, el contexto y el objetivo antes de proponer nada. La estrategia guía el diseño.',
  },
  {
    step: '02',
    title: 'Dirección creativa',
    description:
      'Defino el rumbo visual: concepto, referencias y sistema. Claridad antes de la producción.',
  },
  {
    step: '03',
    title: 'Producción / diseño',
    description:
      'Ejecuto con estándar premium, cuidando cada detalle de la marca, el sitio o el contenido.',
  },
  {
    step: '04',
    title: 'Entrega y optimización',
    description:
      'Entrego archivos listos para usar y ajusto según resultados para que todo rinda mejor.',
  },
]

export const whyMe = {
  label: 'Por qué trabajar conmigo',
  title: 'No es solo diseño bonito. Es diseño que trabaja para tu proyecto.',
  description:
    'Combino sensibilidad visual con pensamiento estratégico para construir presencias sólidas y coherentes, capaces de sostener el crecimiento de una marca en el tiempo.',
  values: [
    {
      title: 'Diseño con intención de negocio',
      description:
        'Cada decisión visual responde a un objetivo: comunicar mejor, diferenciar y vender. La estética con propósito.',
    },
    {
      title: 'Ejecución moderna',
      description:
        'Herramientas y estándares actuales, del branding al desarrollo web, para resultados que se sienten vigentes.',
    },
    {
      title: 'Colaboración cercana',
      description:
        'Trato directo, sin intermediarios. Entiendo tu contexto y trabajo contigo durante todo el proceso.',
    },
    {
      title: 'Estándar visual premium',
      description:
        'Cuido el detalle, la composición y la coherencia. El nivel se nota en cada pieza entregada.',
    },
    {
      title: 'Visión integral',
      description:
        'Marca, web y contenido bajo una misma dirección, para una presencia consistente en todos los canales.',
    },
  ],
}

export const finalCta = {
  label: 'Trabajemos juntos',
  title: '¿Tienes un proyecto en mente? Démosle una presencia a la altura.',
  description:
    'Cuéntame sobre tu marca, negocio o propiedad. Respondo personalmente y con propuestas claras.',
  primaryCta: 'Hablemos',
  secondaryCta: 'WhatsApp',
}

export const footer = {
  headline: 'Diseño, web y contenido visual con criterio.',
  descriptionPrefix: 'Estudio creativo con base en',
  descriptionSuffix:
    'Trabajo con marcas, negocios y proyectos que buscan verse — y vender — mejor.',
  navigationLabel: 'Navegación',
  contactLabel: 'Contacto',
  contactLinks: {
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
  },
}

export const contactPage = {
  hero: {
    label: 'Contacto',
    title: {
      before: 'Hablemos de tu',
      accent: 'próximo proyecto',
      after: '.',
    },
    description:
      'Cuéntame qué necesitas y te responderé personalmente con una propuesta clara. Sin compromiso.',
  },
  directLabel: 'Directo',
  locationLabel: 'Ubicación',
  locationNote: 'Trabajo con clientes locales y remotos.',
  links: {
    whatsapp: 'WhatsApp',
    email: 'Email',
    instagram: 'Instagram',
  },
}

export const contactForm = {
  successTitle: '¡Gracias!',
  successMessage:
    'Recibí tu mensaje. Te responderé personalmente lo antes posible.',
  sendAnotherLabel: 'Enviar otro mensaje',
  fields: {
    name: {
      label: 'Nombre',
      placeholder: 'Tu nombre',
    },
    company: {
      label: 'Empresa / proyecto',
      placeholder: 'Nombre del proyecto',
    },
    email: {
      label: 'Email',
      placeholder: 'tu@correo.com',
    },
    service: {
      label: 'Servicio de interés',
      placeholder: 'Selecciona una opción',
      otherOption: 'Otro',
    },
    message: {
      label: 'Mensaje',
      placeholder: 'Cuéntame sobre tu proyecto…',
    },
  },
  submitLabel: 'Enviar mensaje',
}

export const servicesPage = {
  hero: {
    label: 'Servicios',
    title: {
      before: 'Marca, web y contenido, bajo una',
      accent: 'misma dirección',
      after: '.',
    },
    description:
      'Cuatro disciplinas complementarias para construir y mantener una presencia visual sólida en cada canal.',
  },
  deliverablesLabel: 'Entregables',
  serviceCtaLabel: 'Solicitar este servicio',
}

export const portfolioPage = {
  hero: {
    label: 'Portafolio',
    title: {
      before: 'Trabajo',
      accent: 'seleccionado',
      after: '.',
    },
    description:
      'Una muestra de proyectos en branding, web y producción de contenido. Filtra por disciplina para explorar.',
  },
}

export const aboutPage = {
  hero: {
    label: 'Sobre mí',
    title: {
      before: 'Diseño, criterio y',
      accent: 'ejecución',
      after: 'en un mismo lugar.',
    },
  },
  portrait: {
    src: '/diego-portrait.png',
    alt: 'Retrato de Diego Aranda',
  },
  intro:
    'Soy Diego Aranda, profesional creativo con base en Santa Cruz, Bolivia. Trabajo entre el diseño, la web y el contenido visual para ayudar a marcas, negocios y proyectos a construir una presencia más clara, cuidada y coherente.',
  paragraphs: [
    'Mi enfoque combina criterio estético, pensamiento estratégico y ejecución práctica. No trabajo la imagen como algo decorativo, sino como una herramienta para comunicar mejor, presentar mejor una oferta y generar más confianza.',
    'He desarrollado proyectos de branding, piezas comerciales, sitios web, contenido para redes, catálogos digitales y propuestas visuales para negocios, productos y propiedades.',
    'Trabajo de forma cercana, directa y con atención al detalle, buscando que cada entrega tenga utilidad real: que se vea mejor, comunique mejor y tenga mayor intención comercial.',
  ],
  areas: {
    label: 'Áreas de trabajo',
    title: 'En qué me enfoco',
    items: [
      'Diseño gráfico & branding',
      'Diseño web',
      'Contenido comercial',
      'Contenido inmobiliario',
    ],
  },
  philosophy: {
    label: 'Filosofía',
    title: 'Mi manera de trabajar',
    headline: 'La buena estética no compite con los resultados: los potencia.',
    description:
      'Busco el equilibrio entre belleza y función. Menos ruido, más intención. Cada proyecto es una oportunidad de dejar una marca más clara, más sólida y más memorable.',
  },
}
