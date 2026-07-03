import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { FinalCta } from '@/components/final-cta'
import { pageMetadata, pageSeo, portfolioPage } from '@/lib/site-data'

export const metadata: Metadata = pageSeo(pageMetadata.portafolio)

export default function PortafolioPage() {
  return (
    <>
      <PageHero
        label={portfolioPage.hero.label}
        title={
          <>
            {portfolioPage.hero.title.before}{' '}
            <span className="italic text-primary">
              {portfolioPage.hero.title.accent}
            </span>
            {portfolioPage.hero.title.after}
          </>
        }
        description={portfolioPage.hero.description}
      />
      <PortfolioGallery />
      <FinalCta />
    </>
  )
}
