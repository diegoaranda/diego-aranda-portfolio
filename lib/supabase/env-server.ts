import {
  adminEmailsSchema,
  supabaseServiceRoleEnvSchema,
} from '@/lib/validators/env'

export function getSupabaseServiceRoleKey() {
  return supabaseServiceRoleEnvSchema.parse({
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }).SUPABASE_SERVICE_ROLE_KEY
}

export function getAdminEmails() {
  const parsed = adminEmailsSchema.safeParse(process.env.ADMIN_EMAILS)

  return parsed.success ? parsed.data : []
}

export function isAdminEmail(email: string | null | undefined) {
  if (!email) return false

  return getAdminEmails().includes(email.trim().toLowerCase())
}
