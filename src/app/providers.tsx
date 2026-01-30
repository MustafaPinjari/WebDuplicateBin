import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useThemeStore } from '../store/theme'
import { useEffect } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
})

function ThemeProvider() {
  const { theme } = useThemeStore()

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  return null
}

export function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}