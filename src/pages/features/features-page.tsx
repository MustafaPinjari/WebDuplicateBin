import { Navbar } from '../../components/layout/navbar'
import { Footer } from '../../components/layout/footer'
import { 
  Settings, 
  Search, 
  Archive,
  CheckCircle,
  Shield,
  Zap,
  Database,
  Lock,
  RefreshCw,
  FileSearch,
  HardDrive,
  Clock,
  Filter,
  BarChart3,
  Terminal,
  Cloud
} from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

interface FeatureCategory {
  title: string
  subtitle: string
  features: Feature[]
}

export function FeaturesPage() {
  const coreFeatures: Feature[] = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Smart Configuration",
      description: "Intuitive setup with intelligent defaults. Configure file types, size limits, and exclusion patterns with ease.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Deep Scanning",
      description: "SHA-256 hashing and fuzzy matching for precision duplicate detection across your entire file system.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Archive className="h-6 w-6" />,
      title: "Archive-First Protection",
      description: "Never lose data. All duplicates are archived before any action, giving you complete peace of mind.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Safe Cleanup",
      description: "Review, restore, or permanently delete archived files on your schedule. You're always in control.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const securityFeatures: Feature[] = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "System Protection",
      description: "Built-in safeguards prevent accidental deletion of system files and critical directories.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Permission Model",
      description: "Respects file permissions and ownership. Only processes files you have access to.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Rollback & Recovery",
      description: "Instant restoration of archived files with full metadata preservation and path integrity.",
      color: "from-green-500 to-teal-500"
    }
  ]

  const performanceFeatures: Feature[] = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized scanning engine processes thousands of files per second with minimal resource usage.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Smart Caching",
      description: "Intelligent caching system remembers previous scans, dramatically reducing rescan times.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "Large File Systems",
      description: "Handles millions of files efficiently with incremental scanning and parallel processing.",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const advancedFeatures: Feature[] = [
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: "Fuzzy Matching",
      description: "Detects similar files with different names using advanced content analysis algorithms.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Filter className="h-6 w-6" />,
      title: "Custom Rules",
      description: "Create sophisticated filtering rules based on file type, size, date, and custom patterns.",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Detailed Analytics",
      description: "Comprehensive reports showing space savings, duplicate patterns, and cleanup history.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Scheduled Scans",
      description: "Automate duplicate detection with scheduled scans and customizable notification settings.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "CLI & API",
      description: "Full-featured command-line interface and REST API for automation and integration.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Network Scanning",
      description: "Scan network drives and cloud storage with the same safety and efficiency as local files.",
      color: "from-blue-500 to-sky-500"
    }
  ]

  const categories: FeatureCategory[] = [
    {
      title: "Core Features",
      subtitle: "The foundation of safe duplicate management",
      features: coreFeatures
    },
    {
      title: "Security & Safety",
      subtitle: "Your data protection is our priority",
      features: securityFeatures
    },
    {
      title: "Performance",
      subtitle: "Speed and efficiency at scale",
      features: performanceFeatures
    },
    {
      title: "Advanced Capabilities",
      subtitle: "Power features for demanding workflows",
      features: advancedFeatures
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 lg:py-36 bg-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-40"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse opacity-50"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
                Everything you need for{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  safe duplicate management
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-400 max-w-3xl mx-auto">
                Powerful features designed to protect your data while giving you complete control over duplicate cleanup.
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[300px] lg:h-[400px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-60" />
        </section>

        {/* Feature Categories */}
        {categories.map((category, categoryIndex) => (
          <section 
            key={categoryIndex}
            className="relative py-16 sm:py-20 lg:py-24 bg-black"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-7xl mx-auto">
                {/* Category Header */}
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                    {category.subtitle}
                  </p>
                </div>

                {/* Feature Grid */}
                <div className={`grid gap-6 sm:gap-8 ${
                  category.features.length === 4 
                    ? 'md:grid-cols-2 lg:grid-cols-4' 
                    : category.features.length === 3
                    ? 'md:grid-cols-3'
                    : 'md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {category.features.map((feature, index) => (
                    <div
                      key={index}
                      className="group relative bg-gray-900/40 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
                    >
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>

                      {/* Hover Glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="relative py-20 sm:py-24 lg:py-32 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to reclaim your storage?
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10">
                Start managing duplicates safely with DuplicateBin today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/#download"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Download Now
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-gray-700 rounded-full hover:border-gray-600 hover:bg-gray-900 transition-all duration-200"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
