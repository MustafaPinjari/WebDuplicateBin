import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, FileText, Shield, Zap, Settings, Book, HelpCircle } from 'lucide-react'

interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
  icon?: React.ReactNode
}

const navigationData: NavItem[] = [
  {
    title: "Get Started",
    icon: <Book className="h-4 w-4" />,
    items: [
      { title: "Introduction", href: "/docs", icon: <FileText className="h-4 w-4" /> },
      { title: "Installation", href: "/docs/installation", icon: <Settings className="h-4 w-4" /> },
      { title: "Windows Guide", href: "/docs/windows-guide", icon: <Settings className="h-4 w-4" /> },
      { title: "Authentication", href: "/docs/authentication", icon: <Shield className="h-4 w-4" /> },
      { title: "Your First Scan", href: "/docs/first-scan", icon: <Zap className="h-4 w-4" /> },
    ]
  },
  {
    title: "Core Features",
    icon: <Settings className="h-4 w-4" />,
    items: [
      { title: "Scanning Engine", href: "/docs/scanning-engine" },
      { title: "Duplicate Detection", href: "/docs/duplicate-detection" },
      { title: "Archive-First Workflow", href: "/docs/archive-workflow" },
      { title: "Filters & Rules", href: "/docs/filters-rules" },
    ]
  },
  {
    title: "Advanced Usage",
    icon: <Zap className="h-4 w-4" />,
    items: [
      { title: "Performance Tuning", href: "/docs/advanced/performance" },
      { title: "Large File Systems", href: "/docs/advanced/large-systems" },
      { title: "Network Scanning", href: "/docs/advanced/network-scanning" },
    ]
  },
  {
    title: "API & Integrations",
    icon: <Settings className="h-4 w-4" />,
    items: [
      { title: "REST API", href: "/docs/api/rest" },
      { title: "Webhooks", href: "/docs/api/webhooks" },
      { title: "Database Backends", href: "/docs/api/databases" },
    ]
  },
  {
    title: "Security & Safety",
    icon: <Shield className="h-4 w-4" />,
    items: [
      { title: "System Protection", href: "/docs/security/protection" },
      { title: "Rollback & Recovery", href: "/docs/security/recovery" },
      { title: "Permissions Model", href: "/docs/security/permissions" },
    ]
  },
  {
    title: "Guides",
    icon: <HelpCircle className="h-4 w-4" />,
    items: [
      { title: "Common Workflows", href: "/docs/guides/workflows" },
      { title: "Best Practices", href: "/docs/guides/best-practices" },
      { title: "Troubleshooting", href: "/docs/guides/troubleshooting" },
      { title: "Privacy & Data Handling", href: "/docs/guides/privacy" },
    ]
  }
]

interface NavSectionProps {
  section: NavItem
  level?: number
}

function NavSection({ section, level = 0 }: NavSectionProps) {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  const hasActiveChild = section.items?.some(item => 
    item.href === location.pathname || 
    (item.items && item.items.some(subItem => subItem.href === location.pathname))
  )

  return (
    <div className="mb-2">
      {section.href ? (
        <Link
          to={section.href}
          className={`
            flex items-center w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl transition-all duration-200 group
            ${location.pathname === section.href 
              ? 'bg-white/10 text-white font-medium border border-white/20 shadow-lg' 
              : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
            }
          `}
          style={{ paddingLeft: `${12 + level * 16}px` }}
        >
          {section.icon && (
            <span className={`mr-2.5 sm:mr-3 ${location.pathname === section.href ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
              {section.icon}
            </span>
          )}
          <span className="flex-1 truncate">{section.title}</span>
        </Link>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium rounded-xl transition-all duration-200 group
            ${hasActiveChild ? 'text-white bg-white/5 border border-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'}
          `}
          style={{ paddingLeft: `${12 + level * 16}px` }}
        >
          <div className="flex items-center min-w-0">
            {section.icon && (
              <span className={`mr-2.5 sm:mr-3 flex-shrink-0 ${hasActiveChild ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                {section.icon}
              </span>
            )}
            <span className="truncate">{section.title}</span>
          </div>
          {section.items && (
            <ChevronRight 
              className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 flex-shrink-0 ml-2 ${isOpen ? 'rotate-90' : ''} ${hasActiveChild ? 'text-white' : 'text-gray-500'}`} 
            />
          )}
        </button>
      )}
      
      {section.items && isOpen && (
        <div className="mt-1 sm:mt-2 space-y-1">
          {section.items.map((item, index) => (
            <NavSection key={`${item.title}-${item.href || index}`} section={item} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function DocsSidebar() {
  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 h-full flex flex-col">
      <div className="flex-1 space-y-2 sm:space-y-3">
        {navigationData.map((section, index) => (
          <NavSection key={`${section.title}-${section.href || index}`} section={section} />
        ))}
      </div>
      
      {/* Footer */}
      <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex-shrink-0">
        <div className="text-xs text-gray-500 space-y-2">
          <div>Version 1.0.0</div>
          <div>
            <a href="/changelog" className="hover:text-gray-300 transition-colors">
              What's new
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}