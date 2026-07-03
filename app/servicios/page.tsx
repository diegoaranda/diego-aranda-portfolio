import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { FinalCta } from '@/components/final-cta'
import {
  links,
  pageMetadata,
  pageSeo,
  services,
  servicesPage,
} from '@/lib/site-data'

export const metadata: Metadata = pageSeo(pageMetadata.servicios)

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        label={servicesPage.hero.label}
        title={
          <>
            {servicesPage.hero.title.before}{' '}
            <span className="italic text-primary">
              {servicesPage.hero.title.accent}
            </span>
            {servicesPage.hero.title.after}
          </>
        }
        description={servicesPage.hero.description}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-t border-border/60 py-16 lg:py-24"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <span className="font-mono text-sm text-muted-foreground">
                  {service.index}
                </span>
                <h2 className="mt-5 text-balance font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {service.intro}
                </p>
                <Link
                  href={links.contact}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {servicesPage.serviceCtaLabel} {'→'}
                </Link>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                  {servicesPage.deliverablesLabel}
                </h3>
                <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 bg-background px-5 py-4 text-sm text-foreground"
                    >
                      <span className="size-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <FinalCta />
    </>
  )
}
