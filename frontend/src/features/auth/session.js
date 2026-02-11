const SESSION_KEY = 'hackverse_session'

export const getSession = () => {
  if (typeof window === 'undefined') return null

  const stored = localStorage.getItem(SESSION_KEY)
  if (!stored) return null

  try {
    return JSON.parse(stored)
  } catch {
    return null
  }
}

export const setSession = (session) => {
  if (typeof window === 'undefined') return
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export const clearSession = () => {
  if (typeof window === 'undefined') return
  localStorage.removeItem(SESSION_KEY)
}

export const updateRole = (role) => {
  const session = getSession()
  if (session) {
    setSession({ ...session, role })
  }
}

export const isAuthenticated = () => {
  const session = getSession()
  return session?.isAuthenticated ?? false
}
