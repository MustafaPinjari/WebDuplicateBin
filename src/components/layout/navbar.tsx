import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { Search, Menu, X, Home, FileText, Download, LogIn, ExternalLink } from 'lucide-react'
import { useAuthStore } from '../../store/auth'
import { UserDropdown } from './user-dropdown'
import { useState, useEffect } from 'react'

export function Navbar() {
  const { isAuthenticated } = useAuthStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (elementId: string) => {
    // If we're not on the landing page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${elementId}`
      return
    }
    
    // If we're on the landing page, scroll to the element
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100) // Small delay to ensure DOM is ready
      }
    }

    // Handle initial hash on page load
    handleHashChange()
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [location.pathname])

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-transparent py-3 sm:py-4">
        <div className="mx-auto max-w-[70.2rem] px-6 sm:px-8">
          <div className="flex h-14 items-center justify-between bg-black/20 backdrop-blur-xl border border-gray-700/30 rounded-2xl px-5 shadow-2xl shadow-black/20">
            {/* Left Section - Brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <img 
                  src="/images/logo.png" 
                  alt="DuplicateBin Logo" 
                  className="h-5 w-5 object-contain transition-all duration-200 group-hover:opacity-80 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="font-medium text-white text-base tracking-tight">Duplicate Bin</span>
              </Link>
            </div>
            
            {/* Center Navigation - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link 
                to="/cli"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1"
              >
                CLI
              </Link>
              
              <Link 
                to="/features"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1"
              >
                Features
              </Link>
              
              <Link 
                to="/enterprise"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1"
              >
                Enterprise
              </Link>
              
              <Link 
                to="/docs" 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1"
              >
                Docs
              </Link>
              
              <Link 
                to="/github"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1"
              >
                GitHub
              </Link>
              
              <Link 
                to="/community"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 px-2 py-1"
              >
                Community
              </Link>
            </div>
            
            {/* Right Section - Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Command Hint - Hidden on mobile */}
              <div className="hidden md:flex items-center text-gray-400 border border-gray-600 hover:border-gray-500 rounded-lg px-2 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer hover:bg-gray-800/50">
                <Search className="h-3 w-3 mr-2" />
                <span className="mr-2">Search</span>
                <kbd className="inline-flex items-center rounded border border-gray-500 px-1.5 py-0.5 font-mono text-xs text-gray-400">
                  ⌘K
                </kbd>
              </div>
              
              {isAuthenticated ? (
                <UserDropdown />
              ) : (
                <>
                  {/* Sign In Button */}
                  <Button 
                    variant="ghost" 
                    size="default" 
                    asChild
                    className="hidden sm:inline-flex text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-600 hover:border-gray-500 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg"
                  >
                    <Link to="/auth/login">Sign in</Link>
                  </Button>
                  
                  {/* Download CTA */}
                  <Button 
                    size="default" 
                    className="bg-white text-black hover:bg-gray-100 active:bg-gray-200 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black shadow-lg hover:shadow-xl"
                    onClick={() => handleNavClick('download')}
                  >
                    Download
                  </Button>
                </>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative p-2 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-gray-800 rounded-lg"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-5 h-5">
                  <span className={`absolute inset-0 transition-all duration-200 ${
                    isMobileMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
                  }`}>
                    <Menu className="h-5 w-5" />
                  </span>
                  <span className={`absolute inset-0 transition-all duration-200 ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
                  }`}>
                    <X className="h-5 w-5" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-gray-900 border-l border-gray-800 shadow-2xl transform transition-transform duration-200 ease-out">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/logo.png" 
                  alt="DuplicateBin Logo" 
                  className="h-7 w-7 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="font-semibold text-white text-lg">Duplicate Bin</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Main Navigation */}
              <div className="flex-1 px-4 py-6 space-y-1">
                <Link 
                  to="/"
                  className="flex items-center w-full px-4 py-3.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="h-4 w-4 mr-3 text-gray-500 group-hover:text-gray-400 transition-colors" />
                  Home
                </Link>
                
                <Link 
                  to="/cli"
                  className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="h-4 w-4 mr-3 text-gray-500 group-hover:text-gray-400 transition-colors" />
                  CLI Documentation
                </Link>
                
                <Link 
                  to="/features"
                  className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="h-4 w-4 mr-3 text-gray-500 group-hover:text-gray-400 transition-colors" />
                  Features
                </Link>
                
                <Link 
                  to="/enterprise"
                  className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ExternalLink className="h-4 w-4 mr-3 text-gray-500 group-hover:text-gray-400 transition-colors" />
                  Enterprise
                </Link>
                
                <Link 
                  to="/docs" 
                  className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="h-4 w-4 mr-3 text-gray-500 group-hover:text-gray-400 transition-colors" />
                  Documentation
                </Link>

                <Link 
                  to="/github"
                  className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ExternalLink className="h-4 w-4 mr-3 text-gray-500 group-hover:text-gray-400 transition-colors" />
                  GitHub
                </Link>

                <Link 
                  to="/community"
                  className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ExternalLink className="h-4 w-4 mr-3 text-gray-500 group-hover:text-gray-400 transition-colors" />
                  Community
                </Link>
              </div>

              {/* Bottom Actions */}
              {!isAuthenticated && (
                <div className="p-4 border-t border-gray-800 space-y-3">
                  <Link 
                    to="/auth/login" 
                    className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 rounded-md transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign in
                  </Link>
                  <button 
                    className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium bg-white text-black hover:bg-gray-100 rounded-full transition-all duration-200"
                    onClick={() => handleNavClick('download')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}