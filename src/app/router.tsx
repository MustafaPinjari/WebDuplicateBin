import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LandingPage } from '../pages/landing/landing-page'
import { LoginPage } from '../pages/auth/login-page'
import { RegisterPage } from '../pages/auth/register-page'
import { ForgotPasswordPage } from '../pages/auth/forgot-password-page'
import { DownloadSuccessPage } from '../pages/download-success'
import { AppLayout } from '../components/layout/app-layout'
import { DashboardPage } from '../pages/dashboard/dashboard-page'
import { ProtectedRoute } from './protected-route'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/download-success',
    element: <DownloadSuccessPage />,
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/register',
    element: <RegisterPage />,
  },
  {
    path: '/auth/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'scan',
        element: <div className="p-6">Scan page coming soon...</div>,
      },
      {
        path: 'storage',
        element: <div className="p-6">Storage page coming soon...</div>,
      },
      {
        path: 'history',
        element: <div className="p-6">History page coming soon...</div>,
      },
      {
        path: 'security',
        element: <div className="p-6">Security page coming soon...</div>,
      },
      {
        path: 'settings',
        element: <div className="p-6">Settings page coming soon...</div>,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])