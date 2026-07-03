import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import type { Database } from '@/lib/types/database'
import {
  getSupabasePublicEnv,
  isSupabaseConfigured,
} from '@/lib/supabase/env-public'
import { isAdminEmail } from '@/lib/supabase/env-server'

function redirectToLogin(request: NextRequest, error?: string) {
  const url = request.nextUrl.clone()
  url.pathname = '/admin/login'
  url.searchParams.set('next', request.nextUrl.pathname)

  if (error) {
    url.searchParams.set('error', error)
  }

  return NextResponse.redirect(url)
}

function redirectToAdmin(request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = '/admin'
  url.search = ''

  return NextResponse.redirect(url)
}

export async function updateSession(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginRoute = request.nextUrl.pathname === '/admin/login'

  if (!isAdminRoute || !isSupabaseConfigured()) {
    return isAdminRoute && !isLoginRoute
      ? redirectToLogin(request, 'config')
      : NextResponse.next({ request })
  }

  let response = NextResponse.next({ request })
  const env = getSupabasePublicEnv()

  const supabase = createServerClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value)
            response.cookies.set(name, value, options)
          })

          Object.entries(headers).forEach(([key, value]) => {
            response.headers.set(key, value)
          })
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (isLoginRoute) {
    if (user && isAdminEmail(user.email)) {
      return redirectToAdmin(request)
    }

    return response
  }

  if (!user) {
    return redirectToLogin(request)
  }

  if (!isAdminEmail(user.email)) {
    response = redirectToLogin(request, 'unauthorized')
    await supabase.auth.signOut()
    return response
  }

  return response
}
