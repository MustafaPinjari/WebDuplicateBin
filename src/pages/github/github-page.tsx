import { ArrowRight, Github, Star, GitFork, Code, Users, BookOpen, Bug, Heart, Lock, Globe, Calendar, Activity } from 'lucide-react'
import { Navbar } from '../../components/layout/navbar'
import { Footer } from '../../components/layout/footer'
import { Button } from '../../components/ui/button'

export function GitHubPage() {
  const mainRepositories = [
    {
      name: "duplicate-bin",
      description: "🧹 A modern, intelligent, and enterprise-grade duplicate file manager for desktop platforms. Built with Python + PySide6 (Qt) with advanced AI-powered duplicate detection.",
      language: "Python",
      languageColor: "#3776ab",
      visibility: "Private",
      stars: "0",
      forks: "0",
      lastUpdated: "47 minutes ago",
      license: "MIT License",
      url: "https://github.com/MustafaPinjari/duplicate-bin",
      isMain: true,
      features: [
        "AI-Powered Smart Scanning",
        "Intelligent Archive System", 
        "Advanced Preview Engine",
        "Safe Deletion Protocols",
        "High-Performance Processing",
        "Cross-Platform Support"
      ]
    },
    {
      name: "WebDuplicateBin",
      description: "🌐 Modern SaaS website for DuplicateBin - A comprehensive web interface built with React 18, TypeScript, and modern web technologies for duplicate file management.",
      language: "TypeScript",
      languageColor: "#3178c6",
      visibility: "Public",
      stars: "0",
      forks: "0", 
      lastUpdated: "5 hours ago",
      license: "MIT License",
      url: "https://github.com/MustafaPinjari/WebDuplicateBin",
      isMain: true,
      features: [
        "Modern Landing Page",
        "Complete Documentation",
        "Archive-First Safety",
        "Premium UI/UX",
        "Cross-Platform Downloads",
        "Enterprise Features"
      ]
    }
  ]

  const additionalRepositories = [
    {
      name: "duplicate-bin-docs",
      description: "📚 Comprehensive documentation, user guides, and API references for DuplicateBin ecosystem",
      language: "Markdown",
      languageColor: "#083fa1",
      visibility: "Public",
      stars: "12",
      forks: "3",
      url: "https://github.com/MustafaPinjari/duplicate-bin-docs"
    },
    {
      name: "duplicate-bin-plugins",
      description: "🔌 Community plugins and extensions for extending DuplicateBin functionality",
      language: "Python",
      languageColor: "#3776ab",
      visibility: "Public", 
      stars: "8",
      forks: "2",
      url: "https://github.com/MustafaPinjari/duplicate-bin-plugins"
    },
    {
      name: "duplicate-bin-cli",
      description: "⚡ Command-line interface and automation tools for DuplicateBin",
      language: "Rust",
      languageColor: "#dea584",
      visibility: "Public",
      stars: "15",
      forks: "4",
      url: "https://github.com/MustafaPinjari/duplicate-bin-cli"
    },
    {
      name: "duplicate-bin-api",
      description: "🚀 REST API server for DuplicateBin with enterprise integrations",
      language: "Go",
      languageColor: "#00add8",
      visibility: "Private",
      stars: "6",
      forks: "1",
      url: "https://github.com/MustafaPinjari/duplicate-bin-api"
    }
  ]

  const contributionAreas = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Core Development",
      description: "Help improve the Python desktop application with new features, AI algorithms, and performance optimizations.",
      color: "from-blue-500 to-cyan-500",
      repo: "duplicate-bin"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development", 
      description: "Contribute to the React/TypeScript web interface, documentation site, and user experience improvements.",
      color: "from-purple-500 to-pink-500",
      repo: "WebDuplicateBin"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Documentation",
      description: "Write guides, improve existing docs, and help make DuplicateBin more accessible to new users.",
      color: "from-green-500 to-emerald-500",
      repo: "duplicate-bin-docs"
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: "Testing & QA",
      description: "Help test new features across platforms, report bugs, and improve overall quality and reliability.",
      color: "from-orange-500 to-red-500",
      repo: "All repositories"
    }
  ]

  const projectStats = [
    { label: "Total Repositories", value: "6", icon: <Github className="h-5 w-5" /> },
    { label: "Languages Used", value: "5", icon: <Code className="h-5 w-5" /> },
    { label: "Total Commits", value: "247", icon: <Activity className="h-5 w-5" /> },
    { label: "Contributors", value: "3", icon: <Users className="h-5 w-5" /> }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 lg:py-40 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm font-medium mb-8">
                <Github className="h-4 w-4 mr-2" />
                Open Source Project
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
                Open Source{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  Duplicate Management
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-3xl mx-auto mb-8">
                Explore our open source ecosystem for safe duplicate file management. 
                From desktop applications to web interfaces - built with modern technologies and community collaboration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
                  asChild
                >
                  <a href="https://github.com/MustafaPinjari/duplicate-bin" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Start Contributing
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60" />
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {projectStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mx-auto mb-4">
                      <div className="text-gray-300">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Repositories Section */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Main Repositories
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our core projects that power the DuplicateBin ecosystem - from desktop applications to web interfaces.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 mb-16">
                {mainRepositories.map((repo, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-900/60 to-gray-800/40 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-[1.02]"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      {/* Repository Info */}
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <Github className="h-6 w-6 text-gray-400 mr-3" />
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {repo.name}
                          </h3>
                          <div className="ml-3 flex items-center">
                            {repo.visibility === 'Private' ? (
                              <div className="flex items-center px-2 py-1 bg-yellow-900/30 border border-yellow-700/50 rounded-md text-yellow-400 text-xs font-medium">
                                <Lock className="h-3 w-3 mr-1" />
                                Private
                              </div>
                            ) : (
                              <div className="flex items-center px-2 py-1 bg-green-900/30 border border-green-700/50 rounded-md text-green-400 text-xs font-medium">
                                <Globe className="h-3 w-3 mr-1" />
                                Public
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                          {repo.description}
                        </p>

                        {/* Repository Stats */}
                        <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2" 
                              style={{ backgroundColor: repo.languageColor }}
                            ></div>
                            <span>{repo.language}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1" />
                            {repo.stars}
                          </div>
                          <div className="flex items-center">
                            <GitFork className="h-4 w-4 mr-1" />
                            {repo.forks}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Updated {repo.lastUpdated}
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {repo.license}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {repo.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-gray-300 text-sm">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                            asChild
                          >
                            <a href={repo.url} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              View Repository
                            </a>
                          </Button>
                          {repo.visibility === 'Public' && (
                            <Button 
                              variant="outline" 
                              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-2 rounded-lg"
                            >
                              <GitFork className="h-4 w-4 mr-2" />
                              Fork Project
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Repositories */}
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Additional Projects
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Supporting tools, documentation, and community projects that extend the DuplicateBin ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {additionalRepositories.map((repo, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <Github className="h-5 w-5 text-gray-400 mr-2" />
                        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {repo.name}
                        </h4>
                        <div className="ml-2">
                          {repo.visibility === 'Private' ? (
                            <Lock className="h-4 w-4 text-yellow-400" />
                          ) : (
                            <Globe className="h-4 w-4 text-green-400" />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          {repo.stars}
                        </div>
                        <div className="flex items-center">
                          <GitFork className="h-4 w-4 mr-1" />
                          {repo.forks}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: repo.languageColor }}
                        ></div>
                        <span className="text-sm text-gray-400">{repo.language}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                        asChild
                      >
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">
                          View Repository
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Areas */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Ways to Contribute
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Whether you're a developer, designer, writer, or enthusiast, there's a place for you in our community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contributionAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/60 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 group"
                  >
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${area.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <div className="text-sm text-blue-400 font-medium">
                      Primary repo: {area.repo}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology Stack */}
              <div className="mt-16 bg-gradient-to-r from-gray-900/60 to-gray-800/40 border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Technology Stack
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {[
                    { name: "Python", color: "#3776ab" },
                    { name: "TypeScript", color: "#3178c6" },
                    { name: "React", color: "#61dafb" },
                    { name: "Rust", color: "#dea584" },
                    { name: "Go", color: "#00add8" },
                    { name: "Markdown", color: "#083fa1" }
                  ].map((tech, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: tech.color }}
                      >
                        {tech.name.charAt(0)}
                      </div>
                      <div className="text-gray-300 text-sm font-medium">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Contribute?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join our community of contributors and help make DuplicateBin even better.
                </p>
              </div>

              <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Heart className="h-6 w-6 text-red-400 mr-3" />
                  Getting Started Guide
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold mr-4 mt-0.5">1</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Fork the Repository</h4>
                      <p className="text-sm">Start by forking the main repository to your GitHub account.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold mr-4 mt-0.5">2</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Read the Contributing Guide</h4>
                      <p className="text-sm">Check out our CONTRIBUTING.md file for detailed guidelines and setup instructions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold mr-4 mt-0.5">3</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Find an Issue</h4>
                      <p className="text-sm">Look for issues labeled "good first issue" or "help wanted" to get started.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold mr-4 mt-0.5">4</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Submit a Pull Request</h4>
                      <p className="text-sm">Make your changes and submit a pull request with a clear description.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                    asChild
                  >
                    <a href="https://github.com/MustafaPinjari/duplicate-bin/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                      Read Contributing Guide
                      <BookOpen className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-white hover:bg-gray-800 px-6 py-3 rounded-lg"
                    asChild
                  >
                    <a href="https://github.com/MustafaPinjari/duplicate-bin/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22" target="_blank" rel="noopener noreferrer">
                      Find Good First Issues
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}