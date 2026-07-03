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
  email: 'hola@diegoaranda.art',
  whatsapp: '+591 700 00000',
  whatsappLink: 'https://wa.me/59170000000',
  instagram: '@diego.aranda',
  instagramLink: 'https://instagram.com',
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
    id: 'atelier-norte',
    slug: 'atelier-norte',
    title: 'Atelier Norte',
    category: 'Branding',
    year: '2025',
    shortDescription:
      'Sistema de identidad visual para un estudio de arquitectura con lenguaje sobrio y editorial.',
    overview:
      'Proyecto de identidad pensado para ordenar la presencia de un estudio de arquitectura en propuestas, piezas comerciales y comunicación digital. La dirección visual prioriza claridad, proporción y una sensación premium sin depender de elementos decorativos.',
    services: ['Identidad visual', 'Sistema gráfico', 'Piezas comerciales'],
    role: 'Dirección visual y diseño de identidad',
    coverImage: '/projects/atelier-norte.png',
    gallery: ['/projects/atelier-norte.png'],
    featured: true,
  },
  {
    id: 'lumen-estate',
    slug: 'lumen-estate',
    title: 'Lumen Estate',
    category: 'Inmobiliario',
    year: '2025',
    shortDescription:
      'Contenido visual inmobiliario para presentar una residencia premium con foco en luz, escala y materiales.',
    overview:
      'Producción visual orientada a mostrar una propiedad de alto valor con una lectura clara de espacios, recorridos y detalles. El enfoque evita el exceso de puesta en escena y prioriza imágenes útiles para venta, alquiler y presentación comercial.',
    services: ['Fotografía inmobiliaria', 'Video', 'Dron', 'Dirección visual'],
    role: 'Producción y dirección de contenido',
    coverImage: '/projects/lumen-estate.png',
    gallery: ['/projects/lumen-estate.png'],
    featured: true,
  },
  {
    id: 'sol-cafe',
    slug: 'sol-cafe',
    title: 'Sol Café',
    category: 'Web',
    year: '2024',
    shortDescription:
      'Sitio y catálogo digital para una marca de café, con estructura clara de producto y compra.',
    overview:
      'Diseño web enfocado en presentar una oferta de café de especialidad con jerarquía simple, navegación directa y espacio para producto, origen y contacto comercial. La experiencia se plantea como una base estática fácil de mantener.',
    services: ['Diseño web', 'Landing page', 'Catálogo digital'],
    role: 'Diseño web y estructura de contenido',
    coverImage: '/projects/sol-cafe.png',
    gallery: ['/projects/sol-cafe.png'],
    featured: true,
  },
  {
    id: 'campo-vivo',
    slug: 'campo-vivo',
    title: 'Campo Vivo',
    category: 'Comercial',
    year: '2024',
    shortDescription:
      'Contenido comercial para una línea de alimentos naturales, preparado para campañas y retail.',
    overview:
      'Dirección y producción de piezas visuales para presentar producto de forma consistente en canales comerciales. El trabajo se centra en orden, claridad de mensaje y una estética natural sin perder intención de venta.',
    services: ['Contenido de producto', 'Piezas de campaña', 'Material comercial'],
    role: 'Dirección visual y producción de contenido',
    coverImage: '/projects/campo-vivo.png',
    gallery: ['/projects/campo-vivo.png'],
    featured: true,
  },
  {
    id: 'meridian-studio',
    slug: 'meridian-studio',
    title: 'Meridian Studio',
    category: 'Web',
    year: '2024',
    shortDescription:
      'Portafolio web para un estudio creativo con jerarquía editorial y navegación directa.',
    overview:
      'Estructura de sitio para presentar servicios, proyectos y enfoque creativo en pocas pantallas. La propuesta favorece lectura rápida, ritmo tipográfico y un sistema visual sobrio que puede crecer con nuevos casos.',
    services: ['Diseño web', 'Portafolio digital', 'Sistema visual'],
    role: 'Diseño de interfaz y dirección visual',
    coverImage: '/projects/meridian-studio.png',
    gallery: ['/projects/meridian-studio.png'],
    featured: true,
  },
  {
    id: 'casa-alba',
    slug: 'casa-alba',
    title: 'Casa Alba',
    category: 'Inmobiliario',
    year: '2023',
    shortDescription:
      'Contenido inmobiliario para alquiler temporal premium, pensado para plataformas y comunicación directa.',
    overview:
      'Producción de imágenes y piezas de presentación para comunicar una propiedad de alquiler temporal con mayor claridad. El material busca ayudar a entender ambiente, distribución y nivel de experiencia antes de la visita o reserva.',
    services: ['Fotografía inmobiliaria', 'Contenido para plataformas', 'Piezas promocionales'],
    role: 'Producción visual inmobiliaria',
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
    'Soy Diego Aranda, un profesional creativo con base en Bolivia. Trabajo en la intersección entre el diseño, la web y el contenido visual.',
  paragraphs: [
    'Ayudo a marcas, negocios y proyectos a construir una presencia visual coherente y a la altura de sus objetivos. No creo en el diseño por decoración: cada pieza responde a una intención y a un contexto.',
    'Mi enfoque combina sensibilidad estética, ejecución moderna y pensamiento estratégico. Desde la identidad de una marca hasta el sitio web o el contenido de una propiedad, busco que todo comunique con claridad y con estándar premium.',
    'Trabajo de forma cercana y directa, involucrándome en cada etapa del proceso para entregar resultados sólidos, cuidados y útiles para el negocio.',
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
