import type { Metadata } from 'next'
import { AdminShell } from '@/components/admin/admin-shell'
import { getCurrentAdmin } from '@/lib/supabase/auth'
import { brand } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Admin | ${brand.name}`,
  robots: {
    index: false,
    follow: false,
  },
}

export const dynamic = 'force-dynamic'

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentAdmin()

  return <AdminShell userEmail={user.email ?? ''}>{children}</AdminShell>
}
