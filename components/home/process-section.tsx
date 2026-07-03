import { SectionLabel } from '@/components/section-label'
import { homeSections, process } from '@/lib/site-data'

export function ProcessSection() {
  return (
    <section className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 lg:py-32">
        <SectionLabel>{homeSections.process.label}</SectionLabel>
        <h2 className="mt-6 max-w-2xl text-balance font-serif text-3xl leading-[1.05] tracking-tight sm:text-5xl">
          {homeSections.process.title}
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="flex flex-col gap-6 bg-background p-8 lg:p-10"
            >
              <span className="font-serif text-4xl text-primary/80 sm:text-5xl">
                {item.step}
              </span>
              <div className="space-y-3">
                <h3 className="text-lg tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
