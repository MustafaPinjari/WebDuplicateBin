import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'dark' | 'light'

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'dark', // Default to dark theme as requested
      setTheme: (theme) => {
        set({ theme })
        // Apply theme to document
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(theme)
      },
      toggleTheme: () => {
        const currentTheme = get().theme
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
        get().setTheme(newTheme)
      },
    }),
    {
      name: 'duplicate-bin-theme',
      onRehydrateStorage: () => (state) => {
        // Apply theme on hydration
        if (state?.theme) {
          const root = window.document.documentElement
          root.classList.remove('light', 'dark')
          root.classList.add(state.theme)
        }
      },
    }
  )
)