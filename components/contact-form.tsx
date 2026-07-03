'use client'

import { useState } from 'react'
import { contactForm, services } from '@/lib/site-data'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const inputClass =
    'w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary'

  if (sent) {
    return (
      <div className="rounded-2xl border border-border/60 bg-card p-10 text-center">
        <p className="font-serif text-3xl tracking-tight text-primary">
          {contactForm.successTitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {contactForm.successMessage}
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary"
        >
          {contactForm.sendAnotherLabel}
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="space-y-8"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nombre"
            className="text-xs uppercase tracking-widest text-muted-foreground"
          >
            {contactForm.fields.name.label}
          </label>
          <input
            id="nombre"
            name="nombre"
            required
            placeholder={contactForm.fields.name.placeholder}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="empresa"
            className="text-xs uppercase tracking-widest text-muted-foreground"
          >
            {contactForm.fields.company.label}
          </label>
          <input
            id="empresa"
            name="empresa"
            placeholder={contactForm.fields.company.placeholder}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-widest text-muted-foreground"
          >
            {contactForm.fields.email.label}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={contactForm.fields.email.placeholder}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="servicio"
            className="text-xs uppercase tracking-widest text-muted-foreground"
          >
            {contactForm.fields.service.label}
          </label>
          <select
            id="servicio"
            name="servicio"
            defaultValue=""
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled className="bg-card">
              {contactForm.fields.service.placeholder}
            </option>
            {services.map((service) => (
              <option
                key={service.id}
                value={service.title}
                className="bg-card"
              >
                {service.title}
              </option>
            ))}
            <option value="Otro" className="bg-card">
              {contactForm.fields.service.otherOption}
            </option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="text-xs uppercase tracking-widest text-muted-foreground"
        >
          {contactForm.fields.message.label}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          placeholder={contactForm.fields.message.placeholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {contactForm.submitLabel} {'→'}
      </button>
    </form>
  )
}
