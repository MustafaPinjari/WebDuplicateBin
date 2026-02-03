import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { DocsNavbar } from './components/docs-navbar'
import { DocsSidebar } from './components/docs-sidebar'
import { DocsTableOfContents } from './components/docs-table-of-contents'

export function DocsLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navbar */}
      <DocsNavbar />
      
      {/* Main Layout */}
      <div className="flex h-[calc(100vh-5rem)]">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar - Fixed */}
        <aside className={`
          fixed top-20 left-0 z-50 h-[calc(100vh-5rem)] w-72 sm:w-80 transform bg-gray-950/95 backdrop-blur-sm border-r border-gray-800/50 transition-transform duration-300 ease-in-out lg:relative lg:top-0 lg:translate-x-0 lg:z-0 lg:bg-gray-950/50 lg:w-80 flex-shrink-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full overflow-y-auto hide-scrollbar">
            <DocsSidebar />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 flex">
          {/* Content */}
          <div className="flex-1 overflow-y-auto hide-scrollbar">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 max-w-4xl mx-auto w-full">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden mb-6 sm:mb-8 flex items-center text-gray-400 hover:text-white transition-colors bg-gray-900/50 border border-gray-800 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="text-xs sm:text-sm font-medium">Menu</span>
              </button>

              <Outlet />
            </div>
          </div>

          {/* Right Sidebar - Table of Contents - Fixed */}
          <aside className="hidden xl:block w-80 flex-shrink-0 border-l border-gray-800/50">
            <div className="sticky top-28 h-[calc(100vh-10rem)] overflow-y-auto hide-scrollbar px-6 py-8">
              <DocsTableOfContents />
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}