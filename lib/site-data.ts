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
    'Diseño gráfico, sitios web y contenido visual para marcas, productos y propiedades que necesitan presentarse mejor. Diego Aranda, creativo con base en Santa Cruz, Bolivia.',
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
      'Branding, diseño web, contenido comercial y contenido inmobiliario para construir una presencia visual más clara, sólida y profesional.',
    path: '/servicios',
  },
  portafolio: {
    title: 'Portafolio',
    description:
      'Selección de proyectos de branding, diseño web y contenido visual aplicados a marcas, productos y propiedades.',
    path: '/portafolio',
  },
  sobreMi: {
    title: 'Sobre mí',
    description:
      'Conoce el enfoque de trabajo de Diego Aranda: diseño, web y contenido visual con criterio, claridad y enfoque comercial.',
    path: '/sobre-mi',
  },
  contacto: {
    title: 'Contacto',
    description:
      'Hablemos de tu proyecto de branding, diseño web o contenido visual. Escríbeme para revisar tu caso y recibir una propuesta clara.',
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
  titleBefore: 'Diseño, sitios web y',
  titleAccent: 'contenido visual',
  titleAfter:
    'para marcas, productos y propiedades que necesitan presentarse mejor.',
  description:
    'Ayudo a negocios, marcas personales y proyectos inmobiliarios a verse más claros, sólidos y profesionales mediante diseño gráfico, sitios web y contenido visual pensado para comunicar mejor y generar más confianza.',
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
    title: 'Diseño, web y contenido bajo una misma dirección visual.',
    ctaLabel: 'Ver todos los servicios',
  },
  portfolio: {
    label: 'Portafolio',
    title: 'Proyectos donde la imagen cumple una función real.',
    ctaLabel: 'Ver portafolio completo',
  },
  process: {
    label: 'Cómo trabajo',
    title: 'Un proceso claro para diseñar con intención, no por intuición.',
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
      'Identidades visuales claras, coherentes y memorables para marcas que necesitan verse a la altura de lo que ofrecen.',
    intro:
      'Desarrollo identidades visuales y sistemas gráficos que ayudan a una marca a presentarse con más claridad, coherencia y personalidad. Desde el logotipo y la paleta hasta las reglas visuales que ordenan su comunicación, la idea es que todo se vea como parte de una misma marca.',
    forWho:
      'Negocios que están comenzando, marcas que necesitan ordenar su imagen o proyectos que ya crecieron, pero cuya identidad visual ya no representa bien lo que ofrecen.',
    why: 'Una identidad bien resuelta hace que una marca se entienda más rápido, se vea más sólida y gane consistencia en cada punto de contacto, desde redes y presentaciones hasta piezas comerciales o un sitio web.',
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
      'Sitios web y landing pages pensados para presentar una oferta con claridad, sostener una imagen profesional y facilitar el contacto.',
    intro:
      'Diseño y estructuro sitios web modernos, responsivos y fáciles de recorrer, con foco en presentar bien una marca, un servicio o un producto. La prioridad no es llenar páginas, sino ordenar la información para que quien entra entienda qué ofreces y qué tiene que hacer después.',
    forWho:
      'Marcas personales, negocios y empresas que necesitan una presencia web más profesional, ya sea para presentar servicios, mostrar un portafolio, exhibir un catálogo o captar contactos.',
    why: 'El sitio web suele ser el lugar donde una persona confirma si una marca se ve seria, clara y confiable. Cuando la estructura y el diseño están bien resueltos, la experiencia transmite orden y ayuda a convertir interés en conversación.',
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
      'Piezas visuales para productos, campañas y canales de venta donde el mensaje necesita verse claro, atractivo y bien resuelto.',
    intro:
      'Diseño contenido comercial para comunicar productos, promociones, beneficios y ofertas de forma más clara y visual. Trabajo piezas para redes, WhatsApp, catálogos y materiales de venta, cuidando que el diseño no distraiga del mensaje, sino que lo haga más fácil de entender y más sólido de percibir.',
    forWho:
      'Negocios, marcas de producto y comercios que necesitan comunicar con más frecuencia, vender por canales digitales o mantener una presencia visual más consistente en campañas y publicaciones.',
    why: 'Gran parte de la percepción de una marca se construye en las piezas que publica todos los días. Cuando ese contenido está bien diseñado, la oferta se entiende mejor, el producto se percibe con más valor y la comunicación gana consistencia.',
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
      'Fotografía, video y piezas visuales para presentar propiedades con más claridad, mejor estética y mayor valor percibido.',
    intro:
      'Produzco contenido visual para propiedades, alquileres temporales y proyectos inmobiliarios, combinando fotografía, video y material promocional para mostrar cada espacio de forma más atractiva y ordenada. El objetivo es que la propiedad se entienda rápido, destaque mejor y genere una mejor primera impresión.',
    forWho:
      'Agentes, propietarios, desarrolladoras y proyectos de alquiler temporal que necesitan presentar inmuebles con un estándar más cuidado en redes, portales, Airbnb, Booking o material comercial.',
    why: 'En inmobiliaria, la primera decisión suele ser visual. Un contenido bien producido mejora la percepción del espacio, atrae mejor al público correcto y ayuda a que la propiedad se vea más valiosa desde el primer contacto.',
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
    'Proyecto desarrollado con foco en claridad visual, coherencia de marca y utilidad comercial. Próximamente compartiré casos más completos con proceso, decisiones y resultados.',
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
  title:
    'No se trata solo de que se vea bien. Se trata de que se entienda, se sostenga y represente mejor tu proyecto.',
  description:
    'Trabajo la imagen como una herramienta de presentación, no como un adorno. Mi foco está en construir marcas, sitios y piezas visuales que se vean bien, sí, pero sobre todo que tengan criterio, coherencia y utilidad real.',
  values: [
    {
      title: 'Diseño con intención',
      description:
        'Cada decisión visual responde a una necesidad concreta: ordenar una marca, presentar mejor una oferta, mejorar una percepción o hacer más clara una comunicación.',
    },
    {
      title: 'Criterio visual + ejecución',
      description:
        'No me quedo solo en la idea. Bajo el concepto a piezas, pantallas, imágenes y entregables listos para usarse en canales reales.',
    },
    {
      title: 'Trato directo',
      description:
        'Trabajo de forma cercana, sin intermediarios ni capas innecesarias. Eso permite entender mejor el contexto del proyecto y tomar decisiones más rápidas.',
    },
    {
      title: 'Coherencia entre canales',
      description:
        'Marca, sitio, piezas comerciales y contenido pueden responder a una misma lógica visual. Eso fortalece la percepción general y evita que cada canal parezca una marca distinta.',
    },
    {
      title: 'Utilidad antes que ruido',
      description:
        'Busco soluciones visuales que sirvan, no solo que decoren. Menos relleno, más claridad, mejor presentación y una ejecución que tenga sentido para el negocio.',
    },
  ],
}

export const finalCta = {
  label: 'Trabajemos juntos',
  title:
    'Si tu proyecto necesita una presencia más clara, sólida y profesional, conversemos.',
  description:
    'Trabajo con marcas, negocios y propiedades que necesitan verse mejor, comunicar con más intención o presentar su oferta de una forma más cuidada. Si crees que puedo ayudarte, escríbeme.',
  primaryCta: 'Hablemos',
  secondaryCta: 'WhatsApp',
}

export const footer = {
  headline:
    'Diseño, web y contenido visual para presentar mejor una marca, un producto o una propiedad.',
  descriptionPrefix: 'Estudio creativo con base en',
  descriptionSuffix:
    'Trabajo con marcas, negocios y proyectos que necesitan una presencia visual más clara, coherente y profesional.',
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
      before: 'Cuéntame qué necesitas',
      accent: 'diseñar o mejorar',
      after: '.',
    },
    description:
      'Si estás trabajando en una marca, un sitio web, una campaña o una propiedad que necesita una mejor presentación visual, escríbeme. Revisaré tu caso y te responderé con una propuesta clara y próximos pasos.',
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
    'Recibí tu mensaje. Te responderé personalmente para revisar el proyecto, tiempos y próximos pasos.',
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
  submitLabel: 'Enviar consulta',
}

export const servicesPage = {
  hero: {
    label: 'Servicios',
    title: {
      before: 'Diseño, web y contenido con una',
      accent: 'dirección clara',
      after: '.',
    },
    description:
      'Servicios pensados para construir o mejorar la presencia visual de una marca, un producto o una propiedad. Desde la identidad y el sitio web hasta las piezas comerciales y el contenido visual, todo bajo una lógica coherente.',
  },
  deliverablesLabel: 'Entregables',
  serviceCtaLabel: 'Solicitar este servicio',
}

export const portfolioPage = {
  hero: {
    label: 'Portafolio',
    title: {
      before: 'Trabajo',
      accent: 'aplicado',
      after: '.',
    },
    description:
      'Una selección de proyectos en branding, diseño web y contenido visual donde el objetivo no fue solo que algo se vea bien, sino que se entienda mejor, se presente mejor o comunique con más intención.',
  },
}

export const aboutPage = {
  hero: {
    label: 'Sobre mí',
    title: {
      before: 'Diseño, criterio y',
      accent: 'enfoque comercial',
      after: '.',
    },
  },
  portrait: {
    src: '/diego-aranda-about.jpg',
    alt: 'Retrato de Diego Aranda',
  },
  intro:
    'Soy Diego Aranda, creativo con base en Santa Cruz, Bolivia. Trabajo con marcas, negocios y proyectos inmobiliarios que necesitan verse más profesionales, comunicar con más claridad y sostener una presencia visual mejor resuelta.',
  paragraphs: [
    'Mi trabajo cruza diseño gráfico, web y contenido visual. No parto desde lo decorativo, sino desde lo que el proyecto necesita explicar, ordenar o vender mejor. A partir de eso, construyo una propuesta visual coherente con el contexto, el canal y el objetivo.',
    'He desarrollado identidades visuales, piezas comerciales, sitios web, catálogos digitales, contenido para redes y material visual para productos y propiedades. Me interesa que cada entrega tenga criterio, se vea cuidada y sea realmente útil para quien la usa.',
    'Trabajo de forma cercana, directa y con atención al detalle. Busco que cada proyecto tenga una ejecución clara, una estética sólida y una lógica comercial que lo haga más fácil de presentar, entender y mover en canales reales.',
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
    headline: 'La estética no reemplaza la estrategia; la vuelve visible.',
    description:
      'Me interesa el punto donde diseño, claridad y utilidad se encuentran. Una marca, un sitio o una pieza visual no deberían verse bien por accidente: deberían responder a una intención, ayudar a comunicar mejor y sostener una presencia más sólida en el tiempo.',
  },
}
