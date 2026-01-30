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
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    type: 'secondary',
    label: '{ BLOG }',
    title: 'How safe is archive-first duplicate cleanup?',
    href: '/blog/archive-first-safety',
    icon: <FileText className="h-5 w-5" />
  },
  {
    type: 'secondary',
    label: '{ GUIDE }',
    title: 'Your first scan with Duplicate Bin',
    href: '/guides/getting-started',
    icon: <BookOpen className="h-5 w-5" />
  }
]

export function GetStartedSection() {
  const primaryGuide = guides.find(g => g.type === 'primary')!
  const secondaryGuides = guides.filter(g => g.type === 'secondary')

  return (
    <section className="relative py-40 bg-black">
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Large rounded container - Much bigger */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-900/40 border border-gray-800 p-12 lg:p-20">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-gray-900/50 to-black/70" />
            
            {/* Section heading - Bigger */}
            <div className="relative z-10 text-center mb-20">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-tight">
                Get started fast with{' '}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  quick guides
                </span>
              </h2>
            </div>

            {/* Two-column layout - Much bigger cards */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Left: Primary card - Takes 3 columns */}
              <div className="lg:col-span-3">
                <div className="group relative h-[400px] lg:h-[500px] cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-10 lg:p-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Large tilted logo at bottom-right with overflow */}
                  <div className="absolute -bottom-8 -right-8 h-48 w-48 lg:h-56 lg:w-56 transform rotate-12 opacity-80">
                    <img 
                      src="/images/logo.png" 
                      alt="DuplicateBin Logo" 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="pr-8 lg:pr-12">
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                        {primaryGuide.title}
                      </h3>
                      
                      <p className="text-purple-100 leading-relaxed text-lg lg:text-xl max-w-lg">
                        {primaryGuide.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-white font-semibold text-lg group-hover:translate-x-2 transition-transform duration-200">
                      <span>Read guide</span>
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Two stacked secondary cards - Takes 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                {secondaryGuides.map((guide, index) => (
                  <div key={index} className="group relative h-[180px] lg:h-[230px] cursor-pointer overflow-hidden rounded-2xl bg-gray-800/60 border border-gray-700 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-gray-600 hover:bg-gray-800/80 hover:shadow-xl">
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        {guide.label && (
                          <div className="inline-flex items-center rounded-lg bg-gray-700 px-3 py-1.5 text-sm font-mono text-gray-300 mb-4">
                            {guide.label}
                          </div>
                        )}
                        
                        <h4 className="text-white font-bold text-xl lg:text-2xl leading-snug group-hover:text-gray-100 transition-colors">
                          {guide.title}
                        </h4>
                      </div>
                      
                      {/* Large icon placeholder */}
                      <div className="self-end h-16 w-16 rounded-xl bg-gray-700 border border-gray-600 flex items-center justify-center text-gray-400 group-hover:text-gray-300 transition-colors">
                        {guide.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced background effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </div>
    </section>
  )
}