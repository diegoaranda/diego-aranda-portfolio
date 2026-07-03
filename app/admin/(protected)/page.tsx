import Link from 'next/link'
import { FolderKanban, Image, Layers3, PencilLine } from 'lucide-react'

const adminCards = [
  {
    href: '/admin/servicios',
    title: 'Servicios',
    description: 'Base preparada para editar servicios en el próximo sprint.',
    icon: Layers3,
  },
  {
    href: '/admin/proyectos',
    title: 'Proyectos',
    description: 'Base preparada para gestionar casos del portafolio.',
    icon: FolderKanban,
  },
  {
    href: '/admin/contenido',
    title: 'Contenido',
    description: 'Base preparada para editar textos públicos del sitio.',
    icon: PencilLine,
  },
  {
    href: '/admin/media',
    title: 'Media',
    description: 'Base preparada para conectar Supabase Storage.',
    icon: Image,
  },
]

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="border-b border-border/60 pb-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Dashboard
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight">
          Panel de administración
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          La autenticación y la estructura admin ya están listas. Los CRUD de
          servicios, proyectos, contenido y media se implementarán en los
          siguientes sprints.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {adminCards.map((card) => {
          const Icon = card.icon

          return (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-border/60 bg-card/30 p-6 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border/60 text-primary">
                  <Icon className="size-5" />
                </span>
                <h2 className="text-lg tracking-tight">{card.title}</h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <p className="mt-6 text-sm text-primary">Abrir {'→'}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
