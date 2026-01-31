import { useState, useEffect } from 'react'
import { Hash } from 'lucide-react'

interface TocItem {
  id: string
  title: string
  level: number
}

export function DocsTableOfContents() {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract headings from the page
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const items: TocItem[] = Array.from(headings).map((heading) => ({
      id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      title: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1))
    }))
    
    setTocItems(items)

    // Set up intersection observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0
      }
    )

    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading)
      }
    })

    return () => observer.disconnect()
  }, [])

  if (tocItems.length === 0) {
    return null
  }

  return (
    <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 sticky top-8">
      <div className="flex items-center mb-6">
        <Hash className="h-4 w-4 text-gray-400 mr-2" />
        <h4 className="text-sm font-semibold text-white">On this page</h4>
      </div>
      
      <nav className="space-y-2">
        {tocItems.map((item, index) => (
          <a
            key={`${item.id}-${index}`}
            href={`#${item.id}`}
            className={`
              block text-sm transition-all duration-200 hover:text-white py-2 px-3 rounded-lg border-l-2 transition-all duration-200
              ${activeId === item.id 
                ? 'text-white font-medium bg-white/5 border-white' 
                : 'text-gray-400 hover:bg-white/5 border-transparent hover:border-gray-600'
              }
            `}
            style={{ 
              marginLeft: `${(item.level - 1) * 16}px`
            }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById(item.id)
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  )
}