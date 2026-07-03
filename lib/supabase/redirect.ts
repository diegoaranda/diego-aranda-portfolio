export function getSafeAdminRedirectPath(value: string | null | undefined) {
  if (
    !value ||
    value.startsWith('//') ||
    (value !== '/admin' && !value.startsWith('/admin/'))
  ) {
    return '/admin'
  }

  return value
}

export function getAdminAuthCallbackUrl(origin: string, next?: string | null) {
  return `${origin}/auth/callback?next=${getSafeAdminRedirectPath(next)}`
}
