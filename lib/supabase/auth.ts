import { redirect } from 'next/navigation'
import type { User } from '@supabase/supabase-js'
import { isSupabaseConfigured } from '@/lib/supabase/env-public'
import { isAdminEmail } from '@/lib/supabase/env-server'
import { createClient } from '@/lib/supabase/server'

export async function getCurrentAdmin(): Promise<User> {
  if (!isSupabaseConfigured()) {
    redirect('/admin/login?error=config')
  }

  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/admin/login')
  }

  if (!isAdminEmail(user.email)) {
    await supabase.auth.signOut()
    redirect('/admin/login?error=unauthorized')
  }

  return user
}
