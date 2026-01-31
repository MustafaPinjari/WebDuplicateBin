import { 
  Settings, 
  Search, 
  Archive,
  CheckCircle
} from 'lucide-react'

interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  delay: string
}

export function ComprehensiveFeaturesSection() {
  const mainFeatures: FeatureCard[] = [
    {
      icon: <Settings className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Select & Configure",
      description: "Choose directories to scan and set intelligent rules. Configure file types, size limits, and exclusion patterns for precise control.",
      color: "from-blue-500 to-cyan-500",
      delay: "delay-100"
    },
    {
      icon: <Search className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Deep Scan",
      description: "SHA-256 hashing and fuzzy matching for precision duplicate detection. Fast scanning with smart caching for large file systems.",
      color: "from-purple-500 to-pink-500",
      delay: "delay-200"
    },
    {
      icon: <Archive className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Archive First",
      description: "Review and sort duplicates and move unwanted files to a protected archive. No immediate deletion - you stay in complete control.",
      color: "from-orange-500 to-red-500",
      delay: "delay-300"
    },
    {
      icon: <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Safe Cleanup",
      description: "Permanently delete archived files when you're ready, or restore them anytime. Your data is safe until you decide otherwise.",
      color: "from-green-500 to-emerald-500",
      delay: "delay-500"
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-ping opacity-30"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with animation */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4 sm:mb-6">
              Safe by design, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">powerful by choice</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto">
              A four-step process that prioritizes data safety while giving you complete control over duplicate cleanup.
            </p>
          </div>

          {/* Simplified Mobile-First Layout */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative animate-fade-in-up ${feature.delay} group`}
              >
                {/* Feature Card */}
                <div className="bg-gray-900/40 border border-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-gray-700 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Step Number and Icon */}
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${feature.color} text-white font-bold text-base sm:text-lg mr-3 sm:mr-4 shadow-lg`}>
                      {index + 1}
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-800 text-gray-300 group-hover:text-white transition-all duration-300 group-hover:bg-gray-700">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced background glow with animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse-slow opacity-60" />
    </section>
  )
}