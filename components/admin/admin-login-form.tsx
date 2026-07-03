'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { sendAdminMagicLink } from '@/app/admin/login/actions'
import { adminLoginSchema } from '@/lib/validators/admin'

const errorMessages: Record<string, string> = {
  callback: 'No se pudo completar el inicio de sesión. Intenta nuevamente.',
  config:
    'Supabase todavía no está configurado. Revisa las variables de entorno.',
  unauthorized:
    'Tu email no está autorizado para acceder al panel de administración.',
}

export function AdminLoginForm() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(
    errorMessages[searchParams.get('error') ?? ''] ?? null,
  )
  const [isPending, startTransition] = useTransition()

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setMessage(null)

    const parsed = adminLoginSchema.safeParse({ email })

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Revisa el email.')
      return
    }

    startTransition(async () => {
      try {
        const result = await sendAdminMagicLink(
          parsed.data.email,
          searchParams.get('next'),
        )

        if (!result.ok) {
          setError(result.error)
          return
        }

        setMessage('Te envié un enlace de acceso. Revisa tu correo.')
      } catch {
        setError('No se pudo iniciar sesión. Revisa la configuración.')
      }
    })
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-5">
      <div>
        <label
          htmlFor="admin-email"
          className="text-xs uppercase tracking-widest text-muted-foreground"
        >
          Email administrador
        </label>
        <input
          id="admin-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="tu@email.com"
          className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
        />
      </div>

      {error ? (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      {message ? (
        <p className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Enviando enlace...' : 'Entrar al panel'}
      </button>
    </form>
  )
}
