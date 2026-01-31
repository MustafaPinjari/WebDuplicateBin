import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '../../../components/ui/button'

export function DocsNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = href
    } else {
      const element = document.querySelector(href.split('#')[1] ? `#${href.split('#')[1]}` : href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full h-16 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <img 
                src="/images/logo.png" 
                alt="DuplicateBin Logo" 
                className="h-7 w-7 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="font-medium text-white text-base tracking-tight">DuplicateBin</span>
            </Link>
          </div>
          
          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            <button 
              onClick={() => handleNavClick('/#cli-installation')}
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              CLI
            </button>
            <button 
              onClick={() => handleNavClick('/#features')}
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick('/#get-started')}
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              Enterprise
            </button>
            <button 
              onClick={() => handleNavClick('/#download')}
              className="px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              Pricing
            </button>
            <Link 
              to="/docs" 
              className="px-3 py-1.5 text-sm font-medium text-white bg-white/[0.05] transition-colors duration-200 rounded-lg"
            >
              Docs
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]">
                Resources
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/docs" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                    Documentation
                  </Link>
                  <button 
                    onClick={() => handleNavClick('/#faq')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    FAQ
                  </button>
                  <a href="https://github.com/duplicate-bin" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                    GitHub
                  </a>
                  <button 
                    onClick={() => handleNavClick('/#testimonials')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    Community
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Search Command */}
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
            
            {/* Sign In Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="hidden sm:inline-flex text-gray-400 hover:text-white hover:bg-white/[0.05] border-none px-3 py-1.5 text-sm font-medium transition-all duration-200"
            >
              <Link to="/auth/login">Sign in</Link>
            </Button>
            
            {/* Download CTA */}
            <Button 
              size="sm" 
              className="hidden sm:inline-flex bg-white text-black hover:bg-gray-100 active:bg-gray-200 rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-gray-900"
              onClick={() => handleNavClick('/#download')}
            >
              Download
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => handleNavClick('/#cli-installation')}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                CLI
              </button>
              <button 
                onClick={() => handleNavClick('/#features')}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavClick('/#get-started')}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Enterprise
              </button>
              <button 
                onClick={() => handleNavClick('/#download')}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Pricing
              </button>
              <Link 
                to="/docs" 
                className="block px-3 py-2 text-sm font-medium text-white bg-white/[0.05] rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </Link>
              
              <div className="border-t border-gray-800 pt-4 space-y-2">
                <Link 
                  to="/auth/login" 
                  className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <button 
                  onClick={() => handleNavClick('/#download')}
                  className="block w-full text-left bg-white text-black hover:bg-gray-100 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}