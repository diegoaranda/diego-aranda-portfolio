import type { Metadata } from 'next'
import { Suspense } from 'react'
import { AdminLoginForm } from '@/components/admin/admin-login-form'
import { brand } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Admin | ${brand.name}`,
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-6 py-16">
      <section className="w-full max-w-md rounded-2xl border border-border/60 bg-card/40 p-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Panel privado
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight">
          Acceso admin
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Ingresa con el email autorizado para administrar el contenido de
          Diego Aranda.
        </p>
        <Suspense>
          <AdminLoginForm />
        </Suspense>
      </section>
    </main>
  )
}
