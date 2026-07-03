import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { contact, contactPage, pageMetadata, pageSeo } from '@/lib/site-data'

export const metadata: Metadata = pageSeo(pageMetadata.contacto)

export default function ContactoPage() {
  return (
    <>
      <PageHero
        label={contactPage.hero.label}
        title={
          <>
            {contactPage.hero.title.before}{' '}
            <span className="italic text-primary">
              {contactPage.hero.title.accent}
            </span>
            {contactPage.hero.title.after}
          </>
        }
        description={contactPage.hero.description}
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 border-t border-border/60 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-8">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
                  {contactPage.directLabel}
                </h2>
                <div className="mt-5 space-y-4">
                  <a
                    href={contact.whatsappLink}
                    className="flex items-center justify-between gap-4 border-b border-border/60 pb-4 text-sm transition-colors hover:text-primary"
                  >
                    <span>{contactPage.links.whatsapp}</span>
                    <span className="min-w-0 break-words text-right text-muted-foreground">
                      {contact.whatsapp}
                    </span>
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-between gap-4 border-b border-border/60 pb-4 text-sm transition-colors hover:text-primary"
                  >
                    <span>{contactPage.links.email}</span>
                    <span className="min-w-0 break-all text-right text-muted-foreground">
                      {contact.email}
                    </span>
                  </a>
                  <a
                    href={contact.instagramLink}
                    className="flex items-center justify-between gap-4 border-b border-border/60 pb-4 text-sm transition-colors hover:text-primary"
                  >
                    <span>{contactPage.links.instagram}</span>
                    <span className="min-w-0 break-words text-right text-muted-foreground">
                      {contact.instagram}
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
                  {contactPage.locationLabel}
                </h2>
                <p className="mt-5 text-sm text-foreground">
                  {contact.location}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {contactPage.locationNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
