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
            <Link 
              to="/cli" 
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              CLI
            </Link>
            <Link 
              to="/powers" 
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              Powers
            </Link>
            <Link 
              to="/autonomous-agent" 
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              Agent
            </Link>
            <Link 
              to="/enterprise" 
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              Enterprise
            </Link>
            <Link 
              to="/pricing" 
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              Pricing
            </Link>
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
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                    Blog
                  </Link>
                  <Link to="/changelog" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                    Changelog
                  </Link>
                  <Link to="/community" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                    Community
                  </Link>
                  <Link to="/support" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                    Support
                  </Link>
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
                  asChild
                  className="bg-white text-black hover:bg-gray-100 active:bg-gray-200 rounded-lg px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <Link to="/download">Download</Link>
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
              <Link 
                to="/cli" 
                className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CLI
              </Link>
              <Link 
                to="/powers" 
                className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Powers
              </Link>
              <Link 
                to="/autonomous-agent" 
                className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agent
              </Link>
              <Link 
                to="/enterprise" 
                className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enterprise
              </Link>
              <Link 
                to="/pricing" 
                className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
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
                  to="/blog" 
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/changelog" 
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Changelog
                </Link>
                <Link 
                  to="/community" 
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Community
                </Link>
                <Link 
                  to="/support" 
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Support
                </Link>
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
                  <Link 
                    to="/download" 
                    className="block px-3 py-2 text-sm font-medium bg-white text-black hover:bg-gray-100 rounded-lg transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Download
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}