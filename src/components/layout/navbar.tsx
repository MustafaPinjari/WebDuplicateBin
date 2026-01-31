import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import { useAuthStore } from '../../store/auth'
import { UserDropdown } from './user-dropdown'
import { useState } from 'react'

export function Navbar() {
  const { isAuthenticated } = useAuthStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full py-3 sm:py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-12 sm:h-14 items-center justify-between bg-transparent border border-gray-800 rounded-xl sm:rounded-2xl px-4 sm:px-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-2.5 group">
              <img 
                src="/images/logo.png" 
                alt="DuplicateBin Logo" 
                className="h-6 w-6 sm:h-7 sm:w-7 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="font-medium text-white text-sm sm:text-base tracking-tight">DuplicateBin</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a 
              href="#cli-installation" 
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('cli-installation')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              CLI
            </a>
            <a 
              href="#features" 
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('features')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Features
            </a>
            <a 
              href="#comprehensive-features" 
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('comprehensive-features')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Enterprise
            </a>
            <a 
              href="#download" 
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('download')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Pricing
            </a>
            <Link 
              to="/docs" 
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              Docs
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]">
                Resources
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/docs" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                    Documentation
                  </Link>
                  <a 
                    href="#faq" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.getElementById('faq')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    FAQ
                  </a>
                  <a href="https://github.com/duplicate-bin" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                    GitHub
                  </a>
                  <a 
                    href="#testimonials" 
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.getElementById('testimonials')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    Community
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Command - Hidden on mobile */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex items-center text-gray-400 hover:text-white hover:bg-white/[0.05] border border-gray-700 hover:border-gray-600 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200"
            >
              <Search className="h-3.5 w-3.5 mr-2" />
              <span className="mr-2">Search</span>
              <kbd className="inline-flex items-center rounded border border-gray-600 px-1 font-mono text-[10px] text-gray-500">
                ⌘K
              </kbd>
            </Button>
            
            {isAuthenticated ? (
              <UserDropdown />
            ) : (
              <>
                {/* Sign In Button - Hidden on small mobile */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  asChild
                  className="hidden sm:inline-flex text-gray-400 hover:text-white hover:bg-white/[0.05] border-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200"
                >
                  <Link to="/auth/login">Sign in</Link>
                </Button>
                
                {/* Download CTA */}
                <Button 
                  size="sm" 
                  className="bg-white text-black hover:bg-gray-100 active:bg-gray-200 rounded-lg px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-gray-900"
                  onClick={() => {
                    const element = document.getElementById('download')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Download
                </Button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-gray-900 border border-gray-800 rounded-xl shadow-xl">
            <div className="py-4 px-4 space-y-2">
              <a 
                href="#cli-installation" 
                className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('cli-installation')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                  setIsMobileMenuOpen(false)
                }}
              >
                CLI
              </a>
              <a 
                href="#features" 
                className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('features')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                  setIsMobileMenuOpen(false)
                }}
              >
                Features
              </a>
              <a 
                href="#comprehensive-features" 
                className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('comprehensive-features')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                  setIsMobileMenuOpen(false)
                }}
              >
                Enterprise
              </a>
              <a 
                href="#download" 
                className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('download')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                  setIsMobileMenuOpen(false)
                }}
              >
                Pricing
              </a>
              <Link 
                to="/docs" 
                className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </Link>
              
              {/* Mobile Resources */}
              <div className="border-t border-gray-800 pt-2 mt-2">
                <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Resources</div>
                <Link 
                  to="/docs" 
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Documentation
                </Link>
                <a 
                  href="#faq" 
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('faq')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                    setIsMobileMenuOpen(false)
                  }}
                >
                  FAQ
                </a>
                <a href="https://github.com/duplicate-bin" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                  GitHub
                </a>
                <a 
                  href="#testimonials" 
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('testimonials')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Community
                </a>
              </div>

              {/* Mobile Auth Actions */}
              {!isAuthenticated && (
                <div className="border-t border-gray-800 pt-2 mt-2 space-y-2">
                  <Link 
                    to="/auth/login" 
                    className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <button 
                    className="block w-full px-3 py-2 text-sm font-medium bg-white text-black hover:bg-gray-100 rounded-lg transition-colors text-center"
                    onClick={() => {
                      const element = document.getElementById('download')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Download
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}