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
      icon: <Settings className="h-6 w-6" />,
      title: "Select & Configure",
      description: "Choose directories to scan and set intelligent rules. Configure file types, size limits, and exclusion patterns for precise control.",
      color: "from-blue-500 to-cyan-500",
      delay: "delay-100"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Deep Scan",
      description: "SHA-256 hashing and fuzzy matching for precision duplicate detection. Fast scanning with smart caching for large file systems.",
      color: "from-purple-500 to-pink-500",
      delay: "delay-200"
    },
    {
      icon: <Archive className="h-6 w-6" />,
      title: "Archive First",
      description: "Review and sort duplicates and move unwanted files to a protected archive. No immediate deletion - you stay in complete control.",
      color: "from-orange-500 to-red-500",
      delay: "delay-300"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Safe Cleanup",
      description: "Permanently delete archived files when you're ready, or restore them anytime. Your data is safe until you decide otherwise.",
      color: "from-green-500 to-emerald-500",
      delay: "delay-500"
    }
  ]

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-ping opacity-30"></div>
      </div>
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with animation */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              Safe by design, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">powerful by choice</span>
            </h2>
            
            <p className="text-lg sm:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto">
              A four-step process that prioritizes data safety while giving you complete control over duplicate cleanup.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 to-green-500 transform -translate-x-1/2 opacity-30"></div>
            
            {/* Horizontal Timeline Line - Visible on mobile */}
            <div className="lg:hidden absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 transform -translate-y-1/2 opacity-30"></div>

            {/* Feature Cards Grid with Timeline Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in-up ${feature.delay} group`}
                >
                  {/* Timeline Connector */}
                  <div className={`hidden lg:block absolute ${index % 2 === 0 ? 'right-0 translate-x-8' : 'left-0 -translate-x-8'} top-1/2 w-8 h-0.5 bg-gradient-to-r ${feature.color} opacity-60 transform -translate-y-1/2`}></div>
                  
                  {/* Timeline Node */}
                  <div className={`hidden lg:block absolute ${index % 2 === 0 ? 'right-0 translate-x-12' : 'left-0 -translate-x-12'} top-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${feature.color} transform -translate-y-1/2 animate-pulse shadow-lg`}></div>

                  {/* Feature Card */}
                  <div className={`bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl ${index % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'}`}>
                    {/* Step Number and Icon */}
                    <div className="flex items-center mb-6">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} text-white font-bold text-lg mr-4 shadow-lg animate-bounce-slow`}>
                        {index + 1}
                      </div>
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800 text-gray-300 group-hover:text-white transition-all duration-300 group-hover:bg-gray-700">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Feature Content */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced background glow with animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse-slow opacity-60" />
    </section>
  )
}