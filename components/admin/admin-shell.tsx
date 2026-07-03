import Link from 'next/link'
import { LayoutDashboard, FolderKanban, Image, Layers3, LogOut, PencilLine } from 'lucide-react'
import { logoutAdmin } from '@/app/admin/actions'
import { brand } from '@/lib/site-data'

const adminNav = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/servicios', label: 'Servicios', icon: Layers3 },
  { href: '/admin/proyectos', label: 'Proyectos', icon: FolderKanban },
  { href: '/admin/contenido', label: 'Contenido', icon: PencilLine },
  { href: '/admin/media', label: 'Media', icon: Image },
]

export function AdminShell({
  children,
  userEmail,
}: {
  children: React.ReactNode
  userEmail: string
}) {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <div className="grid min-h-svh lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-border/60 bg-card/40 lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col px-6 py-6">
            <div>
              <Link href="/" className="text-sm text-muted-foreground">
                Volver al sitio
              </Link>
              <div className="mt-8">
                <p className="font-serif text-2xl tracking-tight">
                  {brand.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Admin
                </p>
              </div>
            </div>

            <nav className="mt-10 grid gap-1">
              {adminNav.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-10 border-t border-border/60 pt-6 lg:mt-auto">
              <p className="break-all text-xs text-muted-foreground">
                {userEmail}
              </p>
              <form action={logoutAdmin} className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <LogOut className="size-4" />
                  Salir
                </button>
              </form>
            </div>
          </div>
        </aside>

        <main className="px-6 py-8 lg:px-10 lg:py-10">{children}</main>
      </div>
    </div>
  )
}
