import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSession = create()(
  persist(
    (set) => ({
      session: null,
      isAuthenticated: false,

      signIn: async (email, _password, role) => {
        // Mock authentication
        await new Promise((resolve) => setTimeout(resolve, 500))

        const mockSession = {
          id: Math.random().toString(36).substring(7),
          name: email.split('@')[0],
          email,
          role: role || 'participant',
        }

        set({ session: mockSession, isAuthenticated: true })
      },

      signUp: async (name, email, _password) => {
        // Mock registration
        await new Promise((resolve) => setTimeout(resolve, 500))

        const mockSession = {
          id: Math.random().toString(36).substring(7),
          name,
          email,
          role: 'participant',
        }

        set({ session: mockSession, isAuthenticated: true })
      },

      signOut: () => {
        set({ session: null, isAuthenticated: false })
      },

      setRole: (role) => {
        set((state) => ({
          session: state.session
            ? { ...state.session, role }
            : null,
        }))
      },
    }),
    {
      name: 'hackverse-session',
    }
  )
)
