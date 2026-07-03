import Link from 'next/link'
import { SectionLabel } from '@/components/section-label'
import { contact, finalCta, links } from '@/lib/site-data'

export function FinalCta() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 lg:py-36">
        <SectionLabel>{finalCta.label}</SectionLabel>
        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {finalCta.title}
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 lg:col-span-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {finalCta.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={links.contact}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {finalCta.primaryCta} {'→'}
              </Link>
              <a
                href={contact.whatsappLink}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {finalCta.secondaryCta}
              </a>
            </div>
            <div className="mt-2 border-t border-border/60 pt-4 text-sm text-muted-foreground">
              <a
                href={`mailto:${contact.email}`}
                className="break-all transition-colors hover:text-primary"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
