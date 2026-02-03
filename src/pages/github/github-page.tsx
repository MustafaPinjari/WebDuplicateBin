import { ArrowRight, Github, Star, GitFork, Download, Code, Users, BookOpen, Bug, Heart } from 'lucide-react'
import { Navbar } from '../../components/layout/navbar'
import { Footer } from '../../components/layout/footer'
import { Button } from '../../components/ui/button'

export function GitHubPage() {
  const repositories = [
    {
      name: "duplicate-bin",
      description: "The main DuplicateBin application - safe duplicate file cleanup with archive-first workflow",
      language: "Rust",
      stars: "2.1k",
      forks: "156",
      url: "https://github.com/MustafaPinjari/duplicate-bin"
    },
    {
      name: "duplicate-bin-web",
      description: "Web interface and dashboard for DuplicateBin with modern React frontend",
      language: "TypeScript",
      stars: "487",
      forks: "73",
      url: "https://github.com/MustafaPinjari/duplicate-bin-web"
    },
    {
      name: "duplicate-bin-docs",
      description: "Documentation, guides, and examples for DuplicateBin users and contributors",
      language: "Markdown",
      stars: "234",
      forks: "89",
      url: "https://github.com/MustafaPinjari/duplicate-bin-docs"
    },
    {
      name: "duplicate-bin-plugins",
      description: "Community plugins and extensions for DuplicateBin functionality",
      language: "Various",
      stars: "156",
      forks: "42",
      url: "https://github.com/MustafaPinjari/duplicate-bin-plugins"
    }
  ]

  const contributionAreas = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Core Development",
      description: "Help improve the core Rust application with new features, performance optimizations, and bug fixes.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Documentation",
      description: "Write guides, improve existing docs, and help make DuplicateBin more accessible to new users.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: "Testing & QA",
      description: "Help test new features, report bugs, and improve the overall quality and reliability.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Support",
      description: "Help other users in discussions, answer questions, and share your DuplicateBin expertise.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const stats = [
    { label: "GitHub Stars", value: "3.2k+", icon: <Star className="h-5 w-5" /> },
    { label: "Contributors", value: "47", icon: <Users className="h-5 w-5" /> },
    { label: "Forks", value: "360+", icon: <GitFork className="h-5 w-5" /> },
    { label: "Releases", value: "28", icon: <Download className="h-5 w-5" /> }
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
                Built in the open,{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  powered by community
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-3xl mx-auto mb-8">
                DuplicateBin is completely open source. Explore the code, contribute to development, 
                and help build the future of safe duplicate file management.
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
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
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

        {/* Repositories Section */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Repositories
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our open source projects and find the perfect place to contribute.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {repositories.map((repo, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <Github className="h-5 w-5 text-gray-400 mr-2" />
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {repo.name}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
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
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
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
        <section className="py-16 sm:py-24 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Ways to Contribute
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Whether you're a developer, writer, or enthusiast, there's a place for you in our community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contributionAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/60 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 group"
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
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