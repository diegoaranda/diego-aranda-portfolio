import 'server-only'

import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/lib/types/database'
import { getSupabasePublicEnv } from '@/lib/supabase/env-public'
import { getSupabaseServiceRoleKey } from '@/lib/supabase/env-server'

export function createAdminClient() {
  const env = getSupabasePublicEnv()

  return createSupabaseClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    getSupabaseServiceRoleKey(),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  )
}
