'use server'

import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { isSupabaseConfigured } from '@/lib/supabase/env-public'
import { getAdminAuthCallbackUrl } from '@/lib/supabase/redirect'
import { adminLoginSchema } from '@/lib/validators/admin'

type SignInResult =
  | { ok: true }
  | {
      ok: false
      error: string
    }

function getRequestOrigin(headersList: Headers) {
  const forwardedHost = headersList.get('x-forwarded-host')
  const host = forwardedHost ?? headersList.get('host')

  if (!host) {
    return null
  }

  const forwardedProto = headersList.get('x-forwarded-proto')
  const protocol =
    forwardedProto ?? (host.startsWith('localhost') ? 'http' : 'https')

  return `${protocol}://${host}`
}

export async function sendAdminMagicLink(
  email: string,
  next: string | null,
): Promise<SignInResult> {
  if (!isSupabaseConfigured()) {
    return {
      ok: false,
      error: 'Supabase todavía no está configurado.',
    }
  }

  const parsed = adminLoginSchema.safeParse({ email })

  if (!parsed.success) {
    return {
      ok: false,
      error: parsed.error.issues[0]?.message ?? 'Revisa el email.',
    }
  }

  const origin = getRequestOrigin(await headers())

  if (!origin) {
    return {
      ok: false,
      error: 'No se pudo resolver el dominio de origen.',
    }
  }

  const supabase = await createClient()
  const emailRedirectTo = getAdminAuthCallbackUrl(origin, next)
  const { error } = await supabase.auth.signInWithOtp({
    email: parsed.data.email,
    options: {
      emailRedirectTo,
    },
  })

  if (error) {
    return {
      ok: false,
      error: error.message,
    }
  }

  return { ok: true }
}
