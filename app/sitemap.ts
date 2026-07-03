import type { MetadataRoute } from 'next'
import { brand, pageMetadata } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    pageMetadata.home,
    pageMetadata.servicios,
    pageMetadata.portafolio,
    pageMetadata.sobreMi,
    pageMetadata.contacto,
  ]

  return pages.map((page) => ({
    url: new URL(page.path, brand.url).toString(),
    lastModified: new Date(),
    changeFrequency: page.path === '/' ? 'monthly' : 'yearly',
    priority: page.path === '/' ? 1 : 0.8,
  }))
}
