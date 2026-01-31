import { ArrowRight, BookOpen, FileText } from 'lucide-react'

interface GuideCard {
  type: 'primary' | 'secondary'
  label?: string
  title: string
  description?: string
  href: string
  icon?: React.ReactNode
}

const guides: GuideCard[] = [
  {
    type: 'primary',
    title: 'Learn by doing: clean your first duplicate set',
    description: 'This step-by-step guide walks you through scanning a folder, reviewing duplicates, and safely archiving files using Duplicate Bin.',
    href: '/guides/first-scan',
    icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
  },
  {
    type: 'secondary',
    label: '{ BLOG }',
    title: 'How safe is archive-first duplicate cleanup?',
    href: '/blog/archive-first-safety',
    icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
  },
  {
    type: 'secondary',
    label: '{ GUIDE }',
    title: 'Your first scan with Duplicate Bin',
    href: '/guides/getting-started',
    icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
  }
]

export function GetStartedSection() {
  const primaryGuide = guides.find(g => g.type === 'primary')!
  const secondaryGuides = guides.filter(g => g.type === 'secondary')

  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-black">
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Large rounded container - Responsive */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-gray-900/40 border border-gray-800 p-6 sm:p-8 lg:p-12 xl:p-20">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-gray-900/50 to-black/70" />
            
            {/* Section heading - Responsive */}
            <div className="relative z-10 text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-white leading-tight">
                Get started fast with{' '}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  quick guides
                </span>
              </h2>
            </div>

            {/* Responsive layout - Stack on mobile, side-by-side on desktop */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
              {/* Primary card - Full width on mobile, 3 columns on desktop */}
              <div className="lg:col-span-3">
                <div className="group relative h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[500px] cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-6 sm:p-8 lg:p-10 xl:p-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Large tilted logo at bottom-right with overflow */}
                  <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 xl:h-56 xl:w-56 transform rotate-12 opacity-80">
                    <img 
                      src="/images/logo.png" 
                      alt="DuplicateBin Logo" 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="pr-6 sm:pr-8 lg:pr-12">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        {primaryGuide.title}
                      </h3>
                      
                      <p className="text-purple-100 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl max-w-lg">
                        {primaryGuide.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-white font-semibold text-base sm:text-lg group-hover:translate-x-2 transition-transform duration-200">
                      <span>Read guide</span>
                      <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary cards - Stack on mobile, 2 columns on desktop */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {secondaryGuides.map((guide, index) => (
                  <div key={index} className="group relative h-[140px] sm:h-[160px] lg:h-[180px] xl:h-[230px] cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800/60 border border-gray-700 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] hover:border-gray-600 hover:bg-gray-800/80 hover:shadow-xl">
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        {guide.label && (
                          <div className="inline-flex items-center rounded-lg bg-gray-700 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-mono text-gray-300 mb-3 sm:mb-4">
                            {guide.label}
                          </div>
                        )}
                        
                        <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl xl:text-2xl leading-snug group-hover:text-gray-100 transition-colors">
                          {guide.title}
                        </h4>
                      </div>
                      
                      {/* Large icon placeholder */}
                      <div className="self-end h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-lg sm:rounded-xl bg-gray-700 border border-gray-600 flex items-center justify-center text-gray-400 group-hover:text-gray-300 transition-colors">
                        {guide.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced background effects */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/15 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/15 rounded-full blur-3xl opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[600px] h-[150px] sm:h-[200px] lg:h-[300px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </div>
    </section>
  )
}