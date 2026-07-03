import type { Metadata } from 'next'
import { Hero } from '@/components/home/hero'
import { ServicesOverview } from '@/components/home/services-overview'
import { FeaturedPortfolio } from '@/components/home/featured-portfolio'
import { ProcessSection } from '@/components/home/process-section'
import { WhyMe } from '@/components/home/why-me'
import { FinalCta } from '@/components/final-cta'
import { pageMetadata, pageSeo } from '@/lib/site-data'

export const metadata: Metadata = pageSeo(pageMetadata.home)

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedPortfolio />
      <ProcessSection />
      <WhyMe />
      <FinalCta />
    </>
  )
}
