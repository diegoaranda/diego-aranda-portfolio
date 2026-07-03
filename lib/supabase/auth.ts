import { redirect } from 'next/navigation'
import type { User } from '@supabase/supabase-js'
import { isAdminEmail, isSupabaseConfigured } from '@/lib/supabase/env'
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
