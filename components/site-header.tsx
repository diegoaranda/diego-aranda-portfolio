'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { brand, header, links, nav } from '@/lib/site-data'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
        <Link
          href="/"
          className="group flex items-baseline gap-2 text-sm tracking-tight"
        >
          <span className="font-medium text-foreground">{brand.name}</span>
          <span className="hidden text-muted-foreground sm:inline">
            / {brand.descriptor}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm transition-colors hover:text-foreground',
                  active ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={links.contact}
            className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {header.ctaLabel}
            <span className="transition-transform group-hover:translate-x-0.5">
              {'→'}
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-label={open ? header.mobileCloseLabel : header.mobileOpenLabel}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-background pt-16 transition-all duration-300 lg:hidden',
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <nav className="flex flex-1 flex-col justify-center gap-2 px-6 pb-16">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline gap-4 border-b border-border/50 py-4 font-serif text-4xl tracking-tight text-foreground"
            >
              <span className="font-sans text-xs text-muted-foreground">
                0{i + 1}
              </span>
              {item.label}
            </Link>
          ))}
          <Link
            href={links.contact}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            {header.ctaLabel} {'→'}
          </Link>
        </nav>
      </div>
    </header>
  )
}
