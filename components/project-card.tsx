import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/site-data'

export function ProjectCard({
  project,
  className,
  priority = false,
}: {
  project: Project
  className?: string
  priority?: boolean
}) {
  return (
    <article className={cn('group flex flex-col', className)}>
      <div className="relative aspect-4/5 overflow-hidden rounded-xl border border-border/60 bg-card">
        <Image
          src={project.coverImage}
          alt={`Proyecto ${project.title} — ${project.category}`}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60" />
        <span className="absolute left-4 top-4 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-foreground/90 backdrop-blur-md">
          {project.category}
        </span>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-lg tracking-tight text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <span className="text-xs text-muted-foreground">{project.year}</span>
      </div>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {project.shortDescription}
      </p>
    </article>
  )
}
