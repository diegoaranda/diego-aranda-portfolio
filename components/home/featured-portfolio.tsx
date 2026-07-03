import Link from 'next/link'
import { SectionLabel } from '@/components/section-label'
import { ProjectCard } from '@/components/project-card'
import { featuredProjects, homeSections, links } from '@/lib/site-data'

export function FeaturedPortfolio() {
  const featured = featuredProjects.slice(0, 6)

  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>{homeSections.portfolio.label}</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-balance font-serif text-3xl leading-[1.05] tracking-tight sm:text-5xl">
              {homeSections.portfolio.title}
            </h2>
          </div>
          <Link
            href={links.portfolio}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {homeSections.portfolio.ctaLabel} {'→'}
          </Link>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={i < 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
