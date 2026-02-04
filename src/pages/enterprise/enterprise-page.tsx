import { ArrowRight, Shield, Users, Zap, Building, Globe, BarChart3, Headphones, Award, Star, Play, Archive, Calendar, MessageCircle, Download, Monitor, CheckCircle, Database, Lock, Cpu, Cloud, Settings, FileText } from 'lucide-react'
import { Navbar } from '../../components/layout/navbar'
import { Footer } from '../../components/layout/footer'
import { Button } from '../../components/ui/button'

export function EnterprisePage() {
  const enterpriseFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Advanced encryption, audit trails, SOC 2 compliance, and multi-factor authentication for regulated industries.",
      color: "from-blue-500 to-cyan-500",
      features: ["End-to-end encryption", "Audit trails", "SOC 2 Type II", "MFA support"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Management",
      description: "Role-based access control, team workflows, centralized administration, and user provisioning.",
      color: "from-purple-500 to-pink-500",
      features: ["RBAC", "SSO integration", "Team workflows", "User provisioning"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "High Performance",
      description: "Optimized for large-scale deployments with distributed scanning and parallel processing.",
      color: "from-orange-500 to-red-500",
      features: ["Distributed scanning", "Parallel processing", "Auto-scaling", "Load balancing"]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Comprehensive dashboards, usage analytics, executive reporting, and custom metrics.",
      color: "from-green-500 to-emerald-500",
      features: ["Real-time dashboards", "Custom reports", "API analytics", "Executive summaries"]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Enterprise Storage",
      description: "Support for enterprise storage systems, cloud providers, and hybrid deployments.",
      color: "from-indigo-500 to-purple-500",
      features: ["Multi-cloud support", "On-premise integration", "Hybrid deployments", "Storage optimization"]
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Priority Support",
      description: "24/7 dedicated support, custom training, implementation assistance, and SLA guarantees.",
      color: "from-teal-500 to-blue-500",
      features: ["24/7 support", "Dedicated CSM", "Custom training", "99.9% SLA"]
    }
  ]

  const deploymentOptions = [
    {
      title: "Cloud Deployment",
      description: "Fully managed cloud solution with automatic scaling and updates",
      icon: <Cloud className="h-8 w-8" />,
      features: ["Auto-scaling", "Managed updates", "Global CDN", "99.99% uptime"],
      pricing: "Starting at $2,500/month"
    },
    {
      title: "On-Premise",
      description: "Deploy in your own infrastructure with complete control and customization",
      icon: <Building className="h-8 w-8" />,
      features: ["Full control", "Custom configuration", "Air-gapped support", "Local data"],
      pricing: "Starting at $10,000/year"
    },
    {
      title: "Hybrid Solution",
      description: "Best of both worlds with cloud management and on-premise processing",
      icon: <Globe className="h-8 w-8" />,
      features: ["Cloud management", "Local processing", "Flexible deployment", "Unified dashboard"],
      pricing: "Custom pricing"
    }
  ]

  const complianceStandards = [
    { name: "SOC 2 Type II", description: "Security, availability, and confidentiality controls", icon: <Shield className="h-6 w-6" /> },
    { name: "GDPR", description: "General Data Protection Regulation compliance", icon: <Lock className="h-6 w-6" /> },
    { name: "HIPAA", description: "Healthcare data protection and privacy", icon: <FileText className="h-6 w-6" /> },
    { name: "PCI DSS", description: "Payment card industry security standards", icon: <Award className="h-6 w-6" /> },
    { name: "ISO 27001", description: "Information security management systems", icon: <Settings className="h-6 w-6" /> },
    { name: "FedRAMP", description: "Federal risk and authorization management", icon: <Building className="h-6 w-6" /> }
  ]

  const testimonials = [
    {
      quote: "DuplicateBin Enterprise helped us reclaim 40TB of storage across our global infrastructure while maintaining full compliance with our security requirements. The ROI was immediate.",
      author: "Sarah Chen",
      role: "IT Director",
      company: "TechCorp Global",
      rating: 5,
      savings: "40TB reclaimed",
      timeframe: "3 months"
    },
    {
      quote: "The team management features and audit trails are exactly what we needed for our regulated environment. Implementation was seamless with their enterprise support team.",
      author: "Michael Rodriguez",
      role: "Systems Administrator", 
      company: "FinanceFirst Bank",
      rating: 5,
      savings: "$2.3M annually",
      timeframe: "6 months"
    },
    {
      quote: "Outstanding performance at scale. We're processing petabytes of data across 50+ locations with centralized reporting and control. Game-changing technology.",
      author: "Dr. Emily Watson",
      role: "CTO",
      company: "DataScience Institute",
      rating: 5,
      savings: "2.1PB processed",
      timeframe: "12 months"
    }
  ]

  const handleLinuxDownload = () => {
    const githubReleaseUrl = 'https://github.com/MustafaPinjari/duplicate-bin/releases/download/v1.0.0/duplicate-bin.deb'
    const link = document.createElement('a')
    link.href = githubReleaseUrl
    link.download = 'duplicate-bin.deb'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleWindowsDownload = () => {
    const githubReleaseUrl = 'https://github.com/MustafaPinjari/duplicate-bin/releases/download/v0.1.1/DuplicateBin.exe'
    const link = document.createElement('a')
    link.href = githubReleaseUrl
    link.download = 'DuplicateBin.exe'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black min-h-[80vh] flex items-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-950 to-black" />
          
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 sm:py-32">
            <div className="mx-auto max-w-[1800px]">
              {/* Top Badge */}
              <div className="mb-6 sm:mb-12 text-center">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-blue-400">
                  <Building className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Enterprise Solution</span>
                  <Award className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                </div>
              </div>
              
              {/* Main Content */}
              <div className="text-center">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight mb-6 sm:mb-8">
                  Enterprise-grade{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    duplicate management
                  </span>
                </h1>
                
                <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
                  <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gray-300 font-light">
                    Scale DuplicateBin across your entire organization with advanced security, 
                    compliance features, and enterprise-grade support. Trusted by Fortune 500 companies.
                  </p>
                </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-400 text-sm sm:text-base">Enterprise Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">2.1PB</div>
                    <div className="text-gray-400 text-sm sm:text-base">Data Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-gray-400 text-sm sm:text-base">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-400 text-sm sm:text-base">Support</div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
                  <Button size="lg" className="w-full sm:w-auto group hover-lift bg-white text-black hover:bg-gray-200 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105">
                    <Calendar className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    Schedule Demo
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full sm:w-auto group hover-lift border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white rounded-xl px-8 py-4 text-lg font-semibold">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Contact Sales
                  </Button>
                </div>

                {/* Download Section for Enterprise */}
                <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Try Enterprise Features</h3>
                  <p className="text-gray-300 mb-6">Download the full-featured version and explore enterprise capabilities with our 30-day trial</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Linux Enterprise Download */}
                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors">
                      <div className="flex items-center mb-4">
                        <img 
                          src="/images/tux-penguin.png" 
                          alt="Linux" 
                          className="h-8 w-8 mr-3"
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-white">Linux Enterprise</h4>
                          <p className="text-gray-400 text-sm">Ubuntu, RHEL, CentOS, SUSE</p>
                        </div>
                      </div>
                      <ul className="text-gray-300 text-sm mb-4 space-y-1">
                        <li>• Full enterprise features</li>
                        <li>• Advanced security controls</li>
                        <li>• Multi-user support</li>
                        <li>• API access included</li>
                      </ul>
                      <button
                        onClick={handleLinuxDownload}
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Linux (.deb)
                      </button>
                    </div>

                    {/* Windows Enterprise Download */}
                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors">
                      <div className="flex items-center mb-4">
                        <Monitor className="h-8 w-8 text-blue-400 mr-3" />
                        <div>
                          <h4 className="text-lg font-semibold text-white">Windows Enterprise</h4>
                          <p className="text-gray-400 text-sm">Windows 10/11, Server 2019+</p>
                        </div>
                      </div>
                      <ul className="text-gray-300 text-sm mb-4 space-y-1">
                        <li>• Native Windows application</li>
                        <li>• Active Directory integration</li>
                        <li>• Group Policy support</li>
                        <li>• PowerShell modules</li>
                      </ul>
                      <button
                        onClick={handleWindowsDownload}
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Windows (.exe)
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-gray-400 text-sm">
                      30-day enterprise trial • No credit card required • Full feature access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-60" />
        </section>

        {/* Enterprise Features */}
        <section className="py-16 sm:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Built for Enterprise Scale
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to deploy, manage, and scale duplicate cleanup across your organization with enterprise-grade security and compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {enterpriseFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/40 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="py-16 sm:py-24 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Flexible Deployment Options
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the deployment model that best fits your organization's requirements, security policies, and infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {deploymentOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/60 border border-gray-700 rounded-2xl p-8 text-center hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {option.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {option.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {option.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-white mb-6">
                      {option.pricing}
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Compliance & Security Standards
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Meet the strictest regulatory requirements with built-in compliance features, security controls, and audit capabilities designed for regulated industries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {complianceStandards.map((standard, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/60 border border-gray-700 rounded-xl p-8 text-center hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-green-400">
                        {standard.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {standard.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional Security Features */}
              <div className="mt-16 bg-gradient-to-r from-gray-900/60 to-gray-800/60 border border-gray-700 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Additional Security Features</h3>
                  <p className="text-gray-300">Comprehensive security controls for enterprise environments</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Lock className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">End-to-End Encryption</h4>
                    <p className="text-gray-400 text-sm">AES-256 encryption for data at rest and in transit</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Zero Trust Architecture</h4>
                    <p className="text-gray-400 text-sm">Verify every access request and user identity</p>
                  </div>
                  <div className="text-center">
                    <FileText className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Audit Logging</h4>
                    <p className="text-gray-400 text-sm">Comprehensive audit trails for all operations</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Identity Management</h4>
                    <p className="text-gray-400 text-sm">SSO, SAML, and Active Directory integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Trusted by Enterprise Teams Worldwide
                </h2>
                <p className="text-xl text-gray-300">
                  See how organizations are transforming their storage management and achieving significant cost savings with DuplicateBin Enterprise.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{testimonial.savings}</div>
                        <div className="text-gray-400 text-sm">{testimonial.timeframe}</div>
                      </div>
                    </div>
                    <blockquote className="text-gray-300 mb-6 leading-relaxed text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-gray-800 pt-6">
                      <div className="font-semibold text-white text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400">
                        {testimonial.role}
                      </div>
                      <div className="text-blue-400 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ROI Calculator CTA */}
              <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Calculate Your ROI</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  See how much storage costs you could save and calculate the return on investment for your organization.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Start ROI Calculator
                </Button>
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