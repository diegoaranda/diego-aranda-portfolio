import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { SectionLabel } from '@/components/section-label'
import { FinalCta } from '@/components/final-cta'
import { aboutPage, pageMetadata, pageSeo } from '@/lib/site-data'

export const metadata: Metadata = pageSeo(pageMetadata.sobreMi)

export default function SobreMiPage() {
  return (
    <>
      <PageHero
        label={aboutPage.hero.label}
        title={
          <>
            {aboutPage.hero.title.before}{' '}
            <span className="italic text-primary">
              {aboutPage.hero.title.accent}
            </span>{' '}
            {aboutPage.hero.title.after}
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 border-t border-border/60 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border/60 bg-card">
              <Image
                src={aboutPage.portrait.src}
                alt={aboutPage.portrait.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-balance font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
              {aboutPage.intro}
            </p>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              {aboutPage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-12 border-t border-border/60 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-5">
            <SectionLabel>{aboutPage.areas.label}</SectionLabel>
            <h2 className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">
              {aboutPage.areas.title}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-border/60">
              {aboutPage.areas.items.map((area, i) => (
                <li
                  key={area}
                  className="flex items-baseline gap-5 py-5 text-lg tracking-tight text-foreground"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-12 border-t border-border/60 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-5">
            <SectionLabel>{aboutPage.philosophy.label}</SectionLabel>
            <h2 className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">
              {aboutPage.philosophy.title}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-balance font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
              {aboutPage.philosophy.headline}
            </p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {aboutPage.philosophy.description}
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
