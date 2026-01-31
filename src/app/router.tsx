import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LandingPage } from '../pages/landing/landing-page'
import { LoginPage } from '../pages/auth/login-page'
import { RegisterPage } from '../pages/auth/register-page'
import { ForgotPasswordPage } from '../pages/auth/forgot-password-page'
import { DownloadSuccessPage } from '../pages/download-success'
import { AppLayout } from '../components/layout/app-layout'
import { DashboardPage } from '../pages/dashboard/dashboard-page'
import { ProtectedRoute } from './protected-route'
import { DocsLayout } from '../pages/docs/docs-layout'
import { DocsIndexPage } from '../pages/docs/index'
import { DocsInstallationPage } from '../pages/docs/installation'
import { DocsAuthenticationPage } from '../pages/docs/authentication'
import { DocsFirstScanPage } from '../pages/docs/first-scan'
import { DocsScanningEnginePage } from '../pages/docs/scanning-engine'
import { DocsDuplicateDetectionPage } from '../pages/docs/duplicate-detection'
import { DocsArchiveWorkflowPage } from '../pages/docs/archive-workflow'
import { DocsFiltersRulesPage } from '../pages/docs/filters-rules'
import { DocsCliCommandsPage } from '../pages/docs/cli/commands'

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
    path: '/docs',
    element: <DocsLayout />,
    children: [
      {
        index: true,
        element: <DocsIndexPage />,
      },
      {
        path: 'installation',
        element: <DocsInstallationPage />,
      },
      {
        path: 'authentication',
        element: <DocsAuthenticationPage />,
      },
      {
        path: 'first-scan',
        element: <DocsFirstScanPage />,
      },
      {
        path: 'scanning-engine',
        element: <DocsScanningEnginePage />,
      },
      {
        path: 'duplicate-detection',
        element: <DocsDuplicateDetectionPage />,
      },
      {
        path: 'archive-workflow',
        element: <DocsArchiveWorkflowPage />,
      },
      {
        path: 'cli/commands',
        element: <DocsCliCommandsPage />,
      },
      // Placeholder routes for remaining pages
      {
        path: 'filters-rules',
        element: <DocsFiltersRulesPage />,
      },
      {
        path: 'cli/installation',
        element: <div className="p-8 text-center text-gray-400">CLI Installation documentation coming soon...</div>,
      },
      {
        path: 'cli/automation',
        element: <div className="p-8 text-center text-gray-400">CLI Automation documentation coming soon...</div>,
      },
      {
        path: 'advanced/performance',
        element: <div className="p-8 text-center text-gray-400">Performance Tuning documentation coming soon...</div>,
      },
      {
        path: 'advanced/large-systems',
        element: <div className="p-8 text-center text-gray-400">Large File Systems documentation coming soon...</div>,
      },
      {
        path: 'advanced/network-scanning',
        element: <div className="p-8 text-center text-gray-400">Network Scanning documentation coming soon...</div>,
      },
      {
        path: 'api/rest',
        element: <div className="p-8 text-center text-gray-400">REST API documentation coming soon...</div>,
      },
      {
        path: 'api/webhooks',
        element: <div className="p-8 text-center text-gray-400">Webhooks documentation coming soon...</div>,
      },
      {
        path: 'api/databases',
        element: <div className="p-8 text-center text-gray-400">Database Backends documentation coming soon...</div>,
      },
      {
        path: 'security/protection',
        element: <div className="p-8 text-center text-gray-400">System Protection documentation coming soon...</div>,
      },
      {
        path: 'security/recovery',
        element: <div className="p-8 text-center text-gray-400">Rollback & Recovery documentation coming soon...</div>,
      },
      {
        path: 'security/permissions',
        element: <div className="p-8 text-center text-gray-400">Permissions Model documentation coming soon...</div>,
      },
      {
        path: 'guides/workflows',
        element: <div className="p-8 text-center text-gray-400">Common Workflows documentation coming soon...</div>,
      },
      {
        path: 'guides/best-practices',
        element: <div className="p-8 text-center text-gray-400">Best Practices documentation coming soon...</div>,
      },
      {
        path: 'guides/troubleshooting',
        element: <div className="p-8 text-center text-gray-400">Troubleshooting documentation coming soon...</div>,
      },
      {
        path: 'guides/privacy',
        element: <div className="p-8 text-center text-gray-400">Privacy & Data Handling documentation coming soon...</div>,
      },
    ],
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