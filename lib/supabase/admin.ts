import 'server-only'

import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/lib/types/database'
import {
  getSupabasePublicEnv,
  getSupabaseServiceRoleKey,
} from '@/lib/supabase/env'

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
