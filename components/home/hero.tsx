import Image from 'next/image'
import Link from 'next/link'
import { contact, homeHero, links } from '@/lib/site-data'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-28 md:pt-40 lg:px-10 lg:pb-24 lg:pt-48">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {homeHero.eyebrowPrefix} — {contact.location}
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h1 className="text-balance text-[2.65rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {homeHero.titleBefore}{' '}
              <span className="font-serif italic text-primary">
                {homeHero.titleAccent}
              </span>{' '}
              {homeHero.titleAfter}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {homeHero.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={links.portfolio}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {homeHero.primaryCta} {'→'}
              </Link>
              <Link
                href={links.contact}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {homeHero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border/60 bg-card">
                <Image
                  src={homeHero.mainImage.src}
                  alt={homeHero.mainImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Layered floating preview */}
              <div className="absolute -bottom-8 -left-6 hidden w-44 overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl sm:block lg:-left-10 lg:w-52">
                <div className="relative aspect-4/3">
                  <Image
                    src={homeHero.previewImage.src}
                    alt={homeHero.previewImage.alt}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -right-4 top-8 hidden rounded-xl border border-border/60 bg-background/80 px-4 py-3 backdrop-blur-md lg:block">
                <p className="font-serif text-2xl leading-none text-primary">
                  {homeHero.stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {homeHero.stat.label} <br /> {homeHero.stat.secondLine}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
