import { ArrowRight, Shield, Users, Zap, Building, Globe, BarChart3, Headphones, Award, Star, Play, Archive, Calendar, MessageCircle } from 'lucide-react'
import { Navbar } from '../../components/layout/navbar'
import { Footer } from '../../components/layout/footer'
import { Button } from '../../components/ui/button'

export function EnterprisePage() {
  const enterpriseFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Advanced encryption, audit trails, and compliance features for regulated industries.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Management",
      description: "Role-based access control, team workflows, and centralized administration.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "High Performance",
      description: "Optimized for large-scale deployments with distributed scanning capabilities.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Comprehensive dashboards, usage analytics, and executive reporting.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Priority Support",
      description: "24/7 dedicated support, custom training, and implementation assistance.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Site Deployment",
      description: "Centralized management across multiple locations and cloud environments.",
      color: "from-teal-500 to-blue-500"
    }
  ]

  const complianceStandards = [
    { name: "SOX", description: "Sarbanes-Oxley compliance for financial data" },
    { name: "GDPR", description: "General Data Protection Regulation compliance" },
    { name: "HIPAA", description: "Healthcare data protection and privacy" },
    { name: "PCI DSS", description: "Payment card industry security standards" },
    { name: "ISO 27001", description: "Information security management systems" },
    { name: "FedRAMP", description: "Federal risk and authorization management" }
  ]

  const testimonials = [
    {
      quote: "DuplicateBin Enterprise helped us reclaim 40TB of storage across our global infrastructure while maintaining full compliance with our security requirements.",
      author: "Sarah Chen",
      role: "IT Director",
      company: "TechCorp Global",
      rating: 5
    },
    {
      quote: "The team management features and audit trails are exactly what we needed for our regulated environment. Implementation was seamless.",
      author: "Michael Rodriguez",
      role: "Systems Administrator",
      company: "FinanceFirst Bank",
      rating: 5
    },
    {
      quote: "Outstanding performance at scale. We're processing petabytes of data across 50+ locations with centralized reporting and control.",
      author: "Dr. Emily Watson",
      role: "CTO",
      company: "DataScience Institute",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section - Inspired by landing page */}
        <section className="relative overflow-hidden bg-black h-[50vh] min-h-[400px]">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-950 to-black" />
          
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 sm:pt-32 pb-12 sm:pb-20">
            <div className="mx-auto max-w-[1800px]">
              {/* Top Badge */}
              <div className="mb-6 sm:mb-12">
                <div className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base text-blue-400">
                  <Building className="mr-2 sm:mr-2.5 lg:mr-3 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Enterprise Solution</span>
                  <span className="sm:hidden">Enterprise</span>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="text-left">
                <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-white leading-tight sm:leading-[0.9] md:leading-[0.85] lg:leading-[0.8] xl:leading-[0.75] 2xl:leading-[0.7] max-w-none">
                  Enterprise-grade duplicate management for{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    mission-critical systems
                  </span>
                </h1>
                
                <div className="mt-6 sm:mt-8 lg:mt-12 max-w-3xl lg:max-w-5xl">
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-400 font-light">
                    Scale DuplicateBin across your entire organization with advanced security, 
                    compliance features, and enterprise-grade support.
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-6">
                  <Button size="lg" className="w-full sm:w-auto hover-lift bg-white text-black hover:bg-gray-200 rounded-lg lg:rounded-xl px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                    Request Demo
                    <ArrowRight className="ml-2 sm:ml-2.5 lg:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full sm:w-auto hover-lift border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white rounded-lg lg:rounded-xl px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                    <Play className="mr-2 sm:mr-2.5 lg:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    Contact Sales
                  </Button>
                </div>
                
                {/* Supporting Points */}
                <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  <div className="flex items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <Shield className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-green-500" />
                    <span className="hidden sm:inline">System-safe (critical directories protected)</span>
                    <span className="sm:hidden">System-safe</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <Zap className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-500" />
                    <span className="hidden sm:inline">Fast SHA-256 duplicate detection</span>
                    <span className="sm:hidden">Fast detection</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <Users className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-purple-500" />
                    <span className="hidden sm:inline">Linux-first and privacy-friendly</span>
                    <span className="sm:hidden">Privacy-friendly</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <Archive className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-orange-500" />
                    <span className="hidden sm:inline">Archive before delete, not auto-delete</span>
                    <span className="sm:hidden">Archive-first</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-full blur-3xl opacity-60" />
        </section>

        {/* Enterprise Features */}
        <section className="py-16 sm:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Built for Enterprise Scale
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to deploy, manage, and scale duplicate cleanup across your organization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {enterpriseFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 sm:py-24 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Compliance & Security
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Meet the strictest regulatory requirements with built-in compliance features and security controls.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceStandards.map((standard, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/60 border border-gray-700 rounded-lg p-6 text-center hover:border-gray-600 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full mx-auto mb-4">
                      <Award className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {standard.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {standard.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Trusted by Enterprise Teams
                </h2>
                <p className="text-xl text-gray-300">
                  See how organizations are transforming their storage management with DuplicateBin Enterprise.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hero-style CTA Section */}
        <section className="relative py-20 sm:py-32 lg:py-40 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-black" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-40"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse opacity-50"></div>
            <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30"></div>
          </div>
          
          <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="mx-auto max-w-4xl">
              {/* Top Badge */}
              <div className="mb-6 sm:mb-12 text-center">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base text-blue-400">
                  <Zap className="mr-2 sm:mr-2.5 lg:mr-3 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Ready for Enterprise Scale</span>
                  <span className="sm:hidden">Enterprise Scale</span>
                </div>
              </div>
              
              {/* Hero Content */}
              <div className="text-center">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-white leading-tight sm:leading-[0.9] md:leading-[0.85] lg:leading-[0.8] xl:leading-[0.75] 2xl:leading-[0.7] max-w-none mb-4 sm:mb-6">
                  Enterprise-grade duplicate management for{' '}
                  <span className="text-gray-300">mission-critical systems</span>
                </h1>
                
                <div className="mt-8 sm:mt-12 lg:mt-16">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight leading-tight sm:leading-[0.9] md:leading-[0.85] lg:leading-[0.8] xl:leading-[0.75] 2xl:leading-[0.7] max-w-none mb-6 sm:mb-8">
                    Transform your organization's{' '}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      storage efficiency
                    </span>
                  </h2>
                </div>
                
                <div className="mt-6 sm:mt-8 lg:mt-12 max-w-3xl mx-auto">
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-400 font-light">
                    Join industry leaders who trust DuplicateBin Enterprise to manage petabytes of data 
                    across global infrastructure with complete safety and compliance.
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto group hover-lift bg-white text-black hover:bg-gray-200 rounded-lg lg:rounded-xl px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
                  >
                    <Calendar className="mr-2 sm:mr-2.5 lg:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:rotate-12 transition-transform duration-300" />
                    Schedule Demo
                    <ArrowRight className="ml-2 sm:ml-2.5 lg:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto group hover-lift border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-600 rounded-lg lg:rounded-xl px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <BarChart3 className="mr-2 sm:mr-2.5 lg:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform duration-300" />
                    Get Custom Pricing
                  </Button>
                </div>
                
                {/* Supporting Points - Hero Style */}
                <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-green-500/10 border border-green-500/20 rounded-full mb-2">
                      <Shield className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-green-400" />
                    </div>
                    <span className="text-center">SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/10 border border-blue-500/20 rounded-full mb-2">
                      <Headphones className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-400" />
                    </div>
                    <span className="text-center">24/7 Enterprise Support</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/10 border border-purple-500/20 rounded-full mb-2">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-purple-400" />
                    </div>
                    <span className="text-center">500+ Enterprise Customers</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/10 border border-orange-500/20 rounded-full mb-2">
                      <Globe className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-orange-400" />
                    </div>
                    <span className="text-center">Global Deployment</span>
                  </div>
                </div>
              </div>
              
              {/* Trust Indicators Cards */}
              <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                  <p className="text-gray-400 text-sm">End-to-end encryption with comprehensive audit trails and compliance reporting</p>
                </div>
                
                <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Scale</h3>
                  <p className="text-gray-400 text-sm">Process petabytes of data across thousands of servers with 99.9% uptime</p>
                </div>
                
                <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Headphones className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Dedicated Support</h3>
                  <p className="text-gray-400 text-sm">Priority support with dedicated account management and custom training</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-16 sm:mt-20 lg:mt-24 bg-gradient-to-r from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                    Need a custom solution?
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-lg">
                    Our enterprise team will work with you to design the perfect deployment for your specific requirements, 
                    compliance needs, and scale.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <div className="flex items-center text-gray-300">
                      <MessageCircle className="h-5 w-5 mr-3 text-blue-400" />
                      <span>enterprise@duplicate-bin.com</span>
                    </div>
                    <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
                    <div className="flex items-center text-gray-300">
                      <Globe className="h-5 w-5 mr-3 text-green-400" />
                      <span>Available worldwide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow opacity-60" />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}