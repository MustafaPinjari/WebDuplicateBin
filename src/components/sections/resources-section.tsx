import { ArrowRight, Book, Users, ExternalLink, Sparkles, Zap, Github } from 'lucide-react'

interface ResourceCardProps {
  label: string
  title: string
  description: string
  href: string
  isPrimary?: boolean
  icon?: React.ReactNode
  external?: boolean
  badge?: string
}

function ResourceCard({ label, title, description, href, isPrimary = false, icon, external = false, badge }: ResourceCardProps) {
  const CardComponent = external ? 'a' : 'div'
  const cardProps = external ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <CardComponent
      {...cardProps}
      className={`
        group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer
        ${isPrimary 
          ? 'bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-[1px] hover:from-purple-500 hover:via-purple-600 hover:to-indigo-700 transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/30' 
          : 'bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 p-[1px] hover:from-gray-700/60 hover:via-gray-800/60 hover:to-gray-700/60 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/50'
        }
      `}
    >
      {/* Inner Card */}
      <div className={`
        relative h-full rounded-3xl p-8 transition-all duration-500
        ${isPrimary 
          ? 'bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800' 
          : 'bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-sm'
        }
      `}>
        {/* Animated Background Effects */}
        {isPrimary && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-300/10 rounded-full blur-2xl group-hover:bg-purple-300/20 group-hover:scale-125 transition-all duration-700" />
            
            {/* Sparkle Effect */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
              <Sparkles className="h-5 w-5 text-white/60 animate-pulse" />
            </div>
          </>
        )}

        {!isPrimary && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
                backgroundSize: '24px 24px',
                animation: 'float 6s ease-in-out infinite'
              }} />
            </div>

            {/* Community Dots Animation */}
            <div className="absolute top-8 right-8 opacity-30 group-hover:opacity-60 transition-all duration-500">
              <div className="relative">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute -top-1 -right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300" />
                <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700" />
              </div>
            </div>
          </>
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {/* Label with Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className={`
                text-xs font-mono uppercase tracking-wider font-bold
                ${isPrimary ? 'text-purple-200' : 'text-gray-400'}
              `}>
                {label}
              </span>
              {badge && (
                <span className={`
                  text-xs font-semibold px-2 py-1 rounded-full
                  ${isPrimary 
                    ? 'bg-white/20 text-white' 
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }
                `}>
                  {badge}
                </span>
              )}
            </div>
            {external && (
              <div className="flex items-center space-x-1">
                <ExternalLink className={`
                  h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110
                  ${isPrimary ? 'text-purple-200 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-300'}
                `} />
              </div>
            )}
          </div>

          {/* Icon with Enhanced Styling */}
          {icon && (
            <div className={`
              mb-8 p-4 rounded-2xl w-fit transition-all duration-300 group-hover:scale-110
              ${isPrimary 
                ? 'bg-white/15 group-hover:bg-white/25 shadow-lg' 
                : 'bg-gray-800/60 group-hover:bg-gray-700/80 border border-gray-700/50 group-hover:border-gray-600/50'
              }
            `}>
              <div className={`
                h-7 w-7 transition-all duration-300
                ${isPrimary ? 'text-white drop-shadow-sm' : 'text-gray-300 group-hover:text-white'}
              `}>
                {icon}
              </div>
            </div>
          )}

          {/* Title with Better Typography */}
          <h3 className={`
            text-2xl lg:text-3xl font-bold mb-5 transition-all duration-300 leading-tight
            ${isPrimary 
              ? 'text-white drop-shadow-sm' 
              : 'text-white group-hover:text-white'
            }
          `}>
            {title}
          </h3>

          {/* Enhanced Description */}
          <p className={`
            text-base lg:text-lg leading-relaxed mb-8 transition-all duration-300
            ${isPrimary 
              ? 'text-purple-100/90' 
              : 'text-gray-400 group-hover:text-gray-300'
            }
          `}>
            {description}
          </p>

          {/* Enhanced Action Indicator */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className={`
                text-sm font-semibold transition-all duration-300
                ${isPrimary 
                  ? 'text-white/90 group-hover:text-white' 
                  : 'text-gray-500 group-hover:text-gray-300'
                }
              `}>
                {isPrimary ? 'Explore documentation' : 'Join community'}
              </span>
              <ArrowRight className={`
                ml-3 h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110
                ${isPrimary 
                  ? 'text-white/90 group-hover:text-white' 
                  : 'text-gray-500 group-hover:text-gray-300'
                }
              `} />
            </div>
            
            {/* Progress Indicator */}
            <div className={`
              w-12 h-1 rounded-full transition-all duration-500 group-hover:w-16
              ${isPrimary 
                ? 'bg-white/30 group-hover:bg-white/50' 
                : 'bg-gray-700 group-hover:bg-purple-500/50'
              }
            `} />
          </div>
        </div>
      </div>
    </CardComponent>
  )
}

export function ResourcesSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-black to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[200px] bg-indigo-500/5 rounded-full blur-2xl" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-ping delay-1000" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/30 rounded-full animate-ping delay-2000" />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-indigo-400/30 rounded-full animate-ping delay-3000" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Enhanced Main Container */}
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900/40 via-gray-900/20 to-gray-800/40 backdrop-blur-xl border border-gray-800/50 rounded-[2rem] p-8 sm:p-12 lg:p-20 shadow-2xl">
            {/* Enhanced Inner Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-[2rem] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-[2rem] pointer-events-none" />
            
            <div className="relative z-10">
              {/* Enhanced Section Header */}
              <div className="text-center mb-16 sm:mb-20">
                {/* Improved Top Label */}
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
                    <Zap className="h-3 w-3 text-purple-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
                      RESOURCES
                    </span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>
                
                {/* Enhanced Main Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  Get started with{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Duplicate Bin CLI
                  </span>
                </h2>
                
                {/* Enhanced Subtitle */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  Everything you need to master the command line interface and connect with our{' '}
                  <span className="text-purple-300 font-semibold">thriving community</span>.
                </p>
              </div>

              {/* Enhanced Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                {/* Primary Card - Documentation */}
                <div className="lg:col-span-1">
                  <ResourceCard
                    label="DOCUMENTATION"
                    title="CLI Documentation"
                    description="Complete guide to Duplicate Bin CLI commands, configuration options, and best practices. Learn everything from basic scanning to advanced automation workflows with real-world examples."
                    href="/cli"
                    isPrimary={true}
                    icon={<Book className="h-7 w-7" />}
                    badge="Updated"
                  />
                </div>

                {/* Secondary Card - Community */}
                <div className="lg:col-span-1">
                  <ResourceCard
                    label="COMMUNITY"
                    title="Join the community"
                    description="Connect with other users of Duplicate Bin, ask questions, share workflows, and get help from experienced developers and maintainers. Join 2,500+ active members."
                    href="https://github.com/duplicate-bin/community"
                    isPrimary={false}
                    icon={<Users className="h-7 w-7" />}
                    external={true}
                    badge="2.5k+ members"
                  />
                </div>
              </div>

              {/* Enhanced Additional Resources */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent h-px" />
                <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/30">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Quick Links */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                      <a 
                        href="/docs" 
                        className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group hover:scale-105"
                      >
                        <div className="bg-blue-500/10 p-2 rounded-lg mr-3 group-hover:bg-blue-500/20 transition-colors duration-300">
                          <Book className="h-4 w-4 text-blue-400" />
                        </div>
                        <span className="text-sm font-semibold">Full Documentation</span>
                      </a>
                      
                      <a 
                        href="https://github.com/duplicate-bin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group hover:scale-105"
                      >
                        <div className="bg-gray-500/10 p-2 rounded-lg mr-3 group-hover:bg-gray-500/20 transition-colors duration-300">
                          <Github className="h-4 w-4 text-gray-400" />
                        </div>
                        <span className="text-sm font-semibold">GitHub Repository</span>
                      </a>
                      
                      <a 
                        href="/changelog" 
                        className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group hover:scale-105"
                      >
                        <div className="bg-green-500/10 p-2 rounded-lg mr-3 group-hover:bg-green-500/20 transition-colors duration-300">
                          <div className="h-4 w-4 rounded-full bg-green-500/80 flex items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                          </div>
                        </div>
                        <span className="text-sm font-semibold">What's New</span>
                      </a>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">50k+</div>
                        <div className="text-gray-500">Downloads</div>
                      </div>
                      <div className="w-px h-8 bg-gray-700" />
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">2.5k+</div>
                        <div className="text-gray-500">Community</div>
                      </div>
                      <div className="w-px h-8 bg-gray-700" />
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">99.9%</div>
                        <div className="text-gray-500">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for floating effect */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </section>
  )
}