'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  portfolioFilters,
  portfolioModal,
  projects,
  type PortfolioFilter,
  type Project,
} from '@/lib/site-data'

export function PortfolioGallery() {
  const [active, setActive] = useState<PortfolioFilter>('Todos')
  const [selected, setSelected] = useState<Project | null>(null)

  const visible =
    active === 'Todos'
      ? projects
      : projects.filter((p) => p.category === active)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 border-y border-border/60 py-5">
        {portfolioFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-colors',
              active === filter
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground',
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            className={cn(
              'group flex flex-col text-left',
              // editorial rhythm: nudge some cards down on larger screens
              i % 3 === 1 && 'lg:mt-16',
            )}
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-xl border border-border/60 bg-card">
              <Image
                src={project.coverImage}
                alt={`Proyecto ${project.title} — ${project.category}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60" />
              <span className="absolute left-4 top-4 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-foreground/90 backdrop-blur-md">
                {project.category}
              </span>
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h2 className="text-lg tracking-tight text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h2>
              <span className="text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
          </button>
        ))}
      </div>

      {/* Detail modal */}
      {selected ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${portfolioModal.ariaLabelPrefix} ${selected.title}`}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-2xl border border-border/60 bg-card sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground backdrop-blur-md transition-colors hover:text-primary"
              aria-label={portfolioModal.closeLabel}
            >
              <X className="size-4" />
            </button>
            <div className="relative aspect-video w-full">
              <Image
                src={selected.coverImage}
                alt={`Proyecto ${selected.title}`}
                fill
                sizes="(min-width: 1024px) 56rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span>{selected.category}</span>
                <span className="size-1 rounded-full bg-muted-foreground/50" />
                <span>{selected.year}</span>
              </div>
              <h3 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                {selected.title}
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {selected.shortDescription}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {selected.overview || portfolioModal.detail}
              </p>
              {selected.services.length > 0 ? (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {selected.services.join(' · ')}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
