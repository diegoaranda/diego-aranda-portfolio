import { SectionLabel } from '@/components/section-label'

export function PageHero({
  label,
  title,
  description,
}: {
  label: string
  title: React.ReactNode
  description?: string
}) {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-28 md:pb-16 md:pt-40 lg:px-10 lg:pb-20 lg:pt-48">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-8 max-w-4xl text-balance font-serif text-4xl leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
