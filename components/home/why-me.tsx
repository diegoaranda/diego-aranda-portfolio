import { SectionLabel } from '@/components/section-label'
import { whyMe } from '@/lib/site-data'

export function WhyMe() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionLabel>{whyMe.label}</SectionLabel>
            <h2 className="mt-6 text-balance font-serif text-3xl leading-[1.05] tracking-tight sm:text-5xl">
              {whyMe.title}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {whyMe.description}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <dl className="divide-y divide-border/60">
              {whyMe.values.map((value) => (
                <div
                  key={value.title}
                  className="grid gap-2 py-6 sm:grid-cols-5 sm:gap-6"
                >
                  <dt className="text-sm text-foreground sm:col-span-2">
                    {value.title}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground sm:col-span-3">
                    {value.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
