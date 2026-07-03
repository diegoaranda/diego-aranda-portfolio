import Link from 'next/link'
import { SectionLabel } from '@/components/section-label'
import { homeSections, links, services } from '@/lib/site-data'

export function ServicesOverview() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>{homeSections.services.label}</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-balance font-serif text-3xl leading-[1.05] tracking-tight sm:text-5xl">
              {homeSections.services.title}
            </h2>
          </div>
          <Link
            href={links.services}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {homeSections.services.ctaLabel} {'→'}
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/servicios#${service.id}`}
              className="group relative flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-card lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {service.index}
                </span>
                <span className="text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                  {'→'}
                </span>
              </div>
              <h3 className="text-xl tracking-tight text-foreground transition-colors group-hover:text-primary lg:text-2xl">
                {service.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {service.short}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
