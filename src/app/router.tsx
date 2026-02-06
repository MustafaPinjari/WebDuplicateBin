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
import { DocsWindowsGuidePage } from '../pages/docs/windows-guide'
import { DocsAuthenticationPage } from '../pages/docs/authentication'
import { DocsFirstScanPage } from '../pages/docs/first-scan'
import { DocsScanningEnginePage } from '../pages/docs/scanning-engine'
import { DocsDuplicateDetectionPage } from '../pages/docs/duplicate-detection'
import { DocsArchiveWorkflowPage } from '../pages/docs/archive-workflow'
import { DocsFiltersRulesPage } from '../pages/docs/filters-rules'
import { PerformanceTuningPage } from '../pages/docs/advanced/performance'
import { LargeFileSystemsPage } from '../pages/docs/advanced/large-systems'
import { NetworkScanningPage } from '../pages/docs/advanced/network-scanning'
import { RestApiPage } from '../pages/docs/api/rest'
import { WebhooksPage } from '../pages/docs/api/webhooks'
import { DatabaseBackendsPage } from '../pages/docs/api/databases'
import { SystemProtectionPage } from '../pages/docs/security/protection'
import { RollbackRecoveryPage } from '../pages/docs/security/recovery'
import { PermissionsModelPage } from '../pages/docs/security/permissions'
import { CommonWorkflowsPage, BestPracticesPage, TroubleshootingPage, PrivacyDataHandlingPage } from '../pages/docs/guides'
import { EnterprisePage } from '../pages/enterprise/enterprise-page'
import { GitHubPage } from '../pages/github/github-page'
import { CommunityPage } from '../pages/community/community-page'
import { CLIPage } from '../pages/cli/cli-page'
import { FeaturesPage } from '../pages/features/features-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/features',
    element: <FeaturesPage />,
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
    path: '/cli',
    element: <CLIPage />,
  },
  {
    path: '/enterprise',
    element: <EnterprisePage />,
  },
  {
    path: '/github',
    element: <GitHubPage />,
  },
  {
    path: '/community',
    element: <CommunityPage />,
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
        path: 'windows-guide',
        element: <DocsWindowsGuidePage />,
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
        path: 'filters-rules',
        element: <DocsFiltersRulesPage />,
      },
      // Advanced Usage Pages
      {
        path: 'advanced/performance',
        element: <PerformanceTuningPage />,
      },
      {
        path: 'advanced/large-systems',
        element: <LargeFileSystemsPage />,
      },
      {
        path: 'advanced/network-scanning',
        element: <NetworkScanningPage />,
      },
      // API & Integrations Pages
      {
        path: 'api/rest',
        element: <RestApiPage />,
      },
      {
        path: 'api/webhooks',
        element: <WebhooksPage />,
      },
      {
        path: 'api/databases',
        element: <DatabaseBackendsPage />,
      },
      // Security & Safety Pages
      {
        path: 'security/protection',
        element: <SystemProtectionPage />,
      },
      {
        path: 'security/recovery',
        element: <RollbackRecoveryPage />,
      },
      {
        path: 'security/permissions',
        element: <PermissionsModelPage />,
      },
      // Guides Pages
      {
        path: 'guides/workflows',
        element: <CommonWorkflowsPage />,
      },
      {
        path: 'guides/best-practices',
        element: <BestPracticesPage />,
      },
      {
        path: 'guides/troubleshooting',
        element: <TroubleshootingPage />,
      },
      {
        path: 'guides/privacy',
        element: <PrivacyDataHandlingPage />,
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