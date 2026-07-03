import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { isSupabaseConfigured } from '@/lib/supabase/env-public'

function getSafeAdminRedirectPath(value: string | null, origin: string) {
  if (
    !value ||
    value.startsWith('//') ||
    (value !== '/admin' && !value.startsWith('/admin/'))
  ) {
    return '/admin'
  }

  try {
    const url = new URL(value, origin)

    if (
      url.origin !== origin ||
      (url.pathname !== '/admin' && !url.pathname.startsWith('/admin/'))
    ) {
      return '/admin'
    }

    return `${url.pathname}${url.search}${url.hash}`
  } catch {
    return '/admin'
  }
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = getSafeAdminRedirectPath(
    requestUrl.searchParams.get('next'),
    requestUrl.origin,
  )

  if (!isSupabaseConfigured()) {
    return NextResponse.redirect(
      new URL('/admin/login?error=config', requestUrl.origin),
    )
  }

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return NextResponse.redirect(new URL(next, requestUrl.origin))
    }
  }

  return NextResponse.redirect(
    new URL('/admin/login?error=callback', requestUrl.origin),
  )
}
