import Link from 'next/link'
import { brand, contact, footer, nav } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-3xl leading-tight tracking-tight text-balance md:text-4xl">
              {footer.headline}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {footer.descriptionPrefix} {contact.location}.{' '}
              {footer.descriptionSuffix}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
              {footer.navigationLabel}
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/90 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
              {footer.contactLabel}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-foreground/90 transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappLink}
                  className="text-foreground/90 transition-colors hover:text-primary"
                >
                  {footer.contactLinks.whatsapp} {contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramLink}
                  className="text-foreground/90 transition-colors hover:text-primary"
                >
                  {footer.contactLinks.instagram} {contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {brand.name}. {brand.copyright}
          </p>
          <p>{contact.location}</p>
        </div>
      </div>
    </footer>
  )
}
