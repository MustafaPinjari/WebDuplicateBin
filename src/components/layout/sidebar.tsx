import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { 
  LayoutDashboard, 
  Search, 
  History, 
  Settings, 
  HardDrive,
  Shield
} from 'lucide-react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Scan Files',
    href: '/dashboard/scan',
    icon: Search,
  },
  {
    name: 'Storage',
    href: '/dashboard/storage',
    icon: HardDrive,
  },
  {
    name: 'History',
    href: '/dashboard/history',
    icon: History,
  },
  {
    name: 'Security',
    href: '/dashboard/security',
    icon: Shield,
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div className="flex h-full w-64 flex-col bg-black border-r border-white/10">
      <div className="flex h-16 items-center border-b border-white/10 px-4">
        <Link to="/dashboard" className="flex items-center space-x-3">
          <img 
            src="/images/logo.png" 
            alt="DuplicateBin Logo" 
            className="h-8 w-8 object-contain"
          />
          <span className="font-bold text-white text-lg">DuplicateBin</span>
        </Link>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white',
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400'
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
      
      <div className="border-t border-white/10 p-4">
        <div className="rounded-lg bg-gray-900 border border-white/10 p-3">
          <p className="text-xs font-medium text-white">Storage Used</p>
          <p className="text-sm text-gray-400">2.4 GB of 10 GB</p>
          <div className="mt-2 h-2 rounded-full bg-gray-800">
            <div className="h-2 w-1/4 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}