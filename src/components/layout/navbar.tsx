import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { Search, ChevronDown, Menu, X, Home, FileText, Download, LogIn, ExternalLink } from 'lucide-react'
import { useAuthStore } from '../../store/auth'
import { UserDropdown } from './user-dropdown'
import { useState, useEffect } from 'react'

export function Navbar() {
  const { isAuthenticated } = useAuthStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'
      }`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className={`flex h-16 sm:h-14 items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'bg-black/95 backdrop-blur-md border border-gray-700/50 shadow-lg shadow-black/20' 
              : 'bg-transparent border border-gray-800'
          } rounded-xl sm:rounded-2xl px-6 sm:px-6`}>
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 sm:space-x-2.5 group">
                <img 
                  src="/images/logo.png" 
                  alt="DuplicateBin Logo" 
                  className="h-8 w-8 sm:h-7 sm:w-7 object-contain transition-transform duration-200 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="font-medium text-white text-lg sm:text-base tracking-tight">DuplicateBin</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link 
                to="/cli"
                className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
              >
                CLI
              </Link>
              
              <button 
                onClick={() => handleNavClick('features')}
                className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavClick('comprehensive-features')}
                className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
              >
                Enterprise
              </button>
              <button 
                onClick={() => handleNavClick('download')}
                className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
              >
                Pricing
              </button>
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
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <div className="py-2">
                    <Link to="/docs" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
                      Documentation
                    </Link>
                    <button 
                      onClick={() => handleNavClick('faq')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                      FAQ
                    </button>
                    <a href="https://github.com/duplicate-bin" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
                      GitHub
                    </a>
                    <button 
                      onClick={() => handleNavClick('testimonials')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                      Community
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section */}
            <div className="flex items-center space-x-3 sm:space-x-3">
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
                    className="hidden sm:inline-flex text-gray-400 hover:text-white hover:bg-white/[0.05] border-none px-3 sm:px-3 py-1.5 sm:py-1.5 text-sm sm:text-sm font-medium transition-all duration-200"
                  >
                    <Link to="/auth/login">Sign in</Link>
                  </Button>
                  
                  {/* Download CTA */}
                  <Button 
                    size="sm" 
                    className="bg-white text-black hover:bg-gray-100 active:bg-gray-200 rounded-lg px-4 sm:px-4 py-1.5 sm:py-1.5 text-sm sm:text-sm font-medium transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-gray-900"
                    onClick={() => handleNavClick('download')}
                  >
                    Download
                  </Button>
                </>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative p-3 text-gray-400 hover:text-white transition-all duration-200 hover:bg-white/[0.05] rounded-lg"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
                  }`}>
                    <Menu className="h-6 w-6" />
                  </span>
                  <span className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
                  }`}>
                    <X className="h-6 w-6" />
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 shadow-2xl transform transition-transform duration-300 ease-out">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
              <div className="flex items-center space-x-2.5">
                <img 
                  src="/images/logo.png" 
                  alt="DuplicateBin Logo" 
                  className="h-6 w-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="font-medium text-white text-base">DuplicateBin</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
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
                  className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  Home
                </Link>
                
                <Link 
                  to="/cli"
                  className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  CLI Documentation
                </Link>
                
                <button 
                  onClick={() => handleNavClick('cli-installation')}
                  className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 group"
                >
                  <FileText className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  CLI Installation
                </button>
                
                <button 
                  onClick={() => handleNavClick('features')}
                  className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 group"
                >
                  <FileText className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  Features
                </button>
                
                <button 
                  onClick={() => handleNavClick('comprehensive-features')}
                  className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 group"
                >
                  <ExternalLink className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  Enterprise
                </button>
                
                <button 
                  onClick={() => handleNavClick('download')}
                  className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 group"
                >
                  <Download className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  Pricing
                </button>
                
                <Link 
                  to="/docs" 
                  className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  Documentation
                </Link>

                {/* Resources Section */}
                <div className="pt-4">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Resources</div>
                  <div className="space-y-1">
                    <button 
                      onClick={() => handleNavClick('faq')}
                      className="flex items-center w-full px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-200"
                    >
                      FAQ
                    </button>
                    <a 
                      href="https://github.com/duplicate-bin" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center w-full px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-200"
                    >
                      GitHub
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </a>
                    <button 
                      onClick={() => handleNavClick('testimonials')}
                      className="flex items-center w-full px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-200"
                    >
                      Community
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              {!isAuthenticated && (
                <div className="p-4 border-t border-gray-800/50 space-y-3">
                  <Link 
                    to="/auth/login" 
                    className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 rounded-xl transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="h-5 w-5 mr-2" />
                    Sign in
                  </Link>
                  <button 
                    className="flex items-center justify-center w-full px-4 py-3 text-base font-medium bg-white text-black hover:bg-gray-100 rounded-xl transition-all duration-200"
                    onClick={() => handleNavClick('download')}
                  >
                    <Download className="h-5 w-5 mr-2" />
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