import {
  adminEmailsSchema,
  supabasePublicEnvSchema,
  supabaseServiceRoleEnvSchema,
} from '@/lib/validators/env'

export function getSupabasePublicEnv() {
  return supabasePublicEnvSchema.parse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  })
}

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

export function isSupabaseConfigured() {
  return supabasePublicEnvSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }).success
}
