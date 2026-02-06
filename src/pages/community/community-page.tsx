import { 
  ArrowRight, 
  Users, 
  MessageCircle, 
  Calendar, 
  Globe, 
  Heart, 
  Zap, 
  BookOpen, 
  HelpCircle, 
  Shield, 
  Code2,
  Sparkles,
  Trophy,
  Rocket,
  Github,
  Twitter,
  Youtube,
  Linkedin,
  Star,
  TrendingUp,
  Award
} from 'lucide-react'
import { Navbar } from '../../components/layout/navbar'
import { Footer } from '../../components/layout/footer'
import { Button } from '../../components/ui/button'

export function CommunityPage() {
  const communityChannels = [
    {
      icon: <MessageCircle className="h-7 w-7" />,
      title: "Discord Server",
      description: "Join our active Discord community for real-time discussions, support, and collaboration with fellow users.",
      members: "2,400+",
      activity: "500+ online",
      color: "from-indigo-500 to-purple-500",
      url: "https://discord.gg/duplicate-bin",
      badge: "Most Active"
    },
    {
      icon: <Github className="h-7 w-7" />,
      title: "GitHub Discussions",
      description: "Participate in feature discussions, share ideas, report issues, and contribute to the open-source project.",
      members: "1,800+",
      activity: "50+ discussions",
      color: "from-gray-600 to-gray-800",
      url: "https://github.com/MustafaPinjari/duplicate-bin/discussions",
      badge: "Open Source"
    },
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Community Forum",
      description: "Our dedicated forum for in-depth discussions, tutorials, best practices, and community support.",
      members: "3,200+",
      activity: "200+ topics",
      color: "from-blue-500 to-cyan-500",
      url: "https://forum.duplicate-bin.org",
      badge: "Knowledge Base"
    },
    {
      icon: <Calendar className="h-7 w-7" />,
      title: "Monthly Meetups",
      description: "Join our virtual monthly meetups to discuss features, share use cases, network, and learn from experts.",
      members: "500+",
      activity: "Next: Mar 15",
      color: "from-green-500 to-emerald-500",
      url: "#meetups",
      badge: "Live Events"
    }
  ]

  const communityStats = [
    { 
      label: "Community Members", 
      value: "8,500+", 
      icon: <Users className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      trend: "+12% this month"
    },
    { 
      label: "Countries Worldwide", 
      value: "67", 
      icon: <Globe className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      trend: "Global reach"
    },
    { 
      label: "Monthly Active", 
      value: "12k+", 
      icon: <Zap className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      trend: "+25% growth"
    },
    { 
      label: "Community Projects", 
      value: "156", 
      icon: <Code2 className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      trend: "Open source"
    }
  ]

  const upcomingEvents = [
    {
      title: "DuplicateBin Monthly Meetup",
      date: "March 15, 2026",
      time: "2:00 PM UTC",
      type: "Virtual Meetup",
      description: "Monthly community meetup featuring new features, user showcases, and Q&A session with the core team.",
      attendees: "120+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Contributing Workshop",
      date: "March 22, 2026",
      time: "6:00 PM UTC",
      type: "Workshop",
      description: "Learn how to contribute to DuplicateBin with hands-on guidance from core maintainers and experienced contributors.",
      attendees: "45+",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Enterprise Use Cases Panel",
      date: "April 5, 2026",
      time: "3:00 PM UTC",
      type: "Panel Discussion",
      description: "Enterprise users share their experiences and best practices for large-scale deployments and data management.",
      attendees: "80+",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const communitySpotlight = [
    {
      name: "Alex Chen",
      role: "Community Moderator",
      contribution: "Created the most comprehensive DuplicateBin tutorial series with 50+ videos",
      avatar: "AC",
      color: "from-blue-500 to-purple-500",
      stats: { tutorials: "50+", views: "25k+" }
    },
    {
      name: "Maria Rodriguez",
      role: "Plugin Developer",
      contribution: "Developed 12+ community plugins and extensions used by thousands",
      avatar: "MR",
      color: "from-green-500 to-teal-500",
      stats: { plugins: "12+", downloads: "15k+" }
    },
    {
      name: "David Kim",
      role: "Documentation Lead",
      contribution: "Improved documentation accessibility and translated to 5 languages",
      avatar: "DK",
      color: "from-orange-500 to-red-500",
      stats: { languages: "5", pages: "200+" }
    }
  ]

  const socialPlatforms = [
    {
      name: "Discord",
      icon: <MessageCircle className="h-5 w-5" />,
      followers: "2.4k",
      color: "from-indigo-500 to-purple-500",
      url: "https://discord.gg/duplicate-bin"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      followers: "1.8k",
      color: "from-gray-600 to-gray-800",
      url: "https://github.com/MustafaPinjari/duplicate-bin"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      followers: "3.2k",
      color: "from-blue-400 to-cyan-400",
      url: "https://twitter.com/duplicatebin"
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      followers: "1.5k",
      color: "from-red-500 to-pink-500",
      url: "https://youtube.com/@duplicatebin"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      followers: "900",
      color: "from-blue-600 to-blue-700",
      url: "https://linkedin.com/company/duplicatebin"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 lg:py-36 bg-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-pink-500 rounded-full animate-ping opacity-40"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse opacity-50"></div>
            <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-ping opacity-30"></div>
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-sm text-purple-400 font-medium">Join 8,500+ Community Members</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
                Connect with{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  DuplicateBin enthusiasts
                </span>{' '}
                worldwide
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-400 max-w-3xl mx-auto mb-10">
                Join thousands of users, developers, and contributors in our vibrant community. 
                Get help, share knowledge, and shape the future of DuplicateBin together.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                  asChild
                >
                  <a href="https://discord.gg/duplicate-bin" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Join Discord
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-700 text-white hover:bg-gray-900 hover:border-gray-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-200"
                  asChild
                >
                  <a href="https://forum.duplicate-bin.org" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Browse Forum
                  </a>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">8.5k+</div>
                  <div className="text-sm text-gray-400">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">67</div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">156</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[300px] lg:h-[400px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl opacity-60" />
        </section>

        {/* Community Stats */}
        <section className="relative py-16 sm:py-20 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {communityStats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 mb-2">
                      {stat.label}
                    </div>
                    <div className="flex items-center text-xs text-green-400">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.trend}
                    </div>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Channels */}
        <section className="relative py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Community Channels
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                  Find the perfect place to connect, learn, and contribute to the DuplicateBin community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {communityChannels.map((channel, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${channel.color} text-white`}>
                        {channel.badge}
                      </span>
                    </div>

                    <div className="flex items-start mb-6">
                      <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${channel.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {channel.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {channel.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {channel.description}
                    </p>

                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-800">
                      <div>
                        <div className="text-sm text-gray-500">Members</div>
                        <div className="text-lg font-semibold text-white">{channel.members}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Activity</div>
                        <div className="text-lg font-semibold text-white">{channel.activity}</div>
                      </div>
                    </div>
                    
                    <Button 
                      className={`w-full bg-gradient-to-r ${channel.color} hover:opacity-90 text-white font-semibold py-6 rounded-xl transition-all duration-300`}
                      asChild
                    >
                      <a href={channel.url} target="_blank" rel="noopener noreferrer">
                        Join Now
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>

                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${channel.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Platforms */}
        <section className="relative py-16 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Follow Us Everywhere
                </h2>
                <p className="text-lg text-gray-400">
                  Stay updated with the latest news, tips, and community highlights.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {socialPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {platform.icon}
                    </div>
                    <div className="text-white font-semibold mb-1">{platform.name}</div>
                    <div className="text-sm text-gray-400">{platform.followers}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="relative py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Upcoming Events
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                  Join us for workshops, meetups, and special events to connect with the community.
                </p>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-900/40 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02]"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center flex-wrap gap-3 mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${event.color} text-white`}>
                            {event.type}
                          </span>
                          <div className="flex items-center text-sm text-gray-400">
                            <Users className="h-4 w-4 mr-1" />
                            {event.attendees} registered
                          </div>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                          {event.description}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Zap className="h-4 w-4 mr-2 text-purple-400" />
                            {event.time}
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:ml-6">
                        <Button 
                          size="lg"
                          className={`w-full lg:w-auto bg-gradient-to-r ${event.color} hover:opacity-90 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300`}
                        >
                          Register Now
                          <Rocket className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>

                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Spotlight */}
        <section className="relative py-16 sm:py-24 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Community Spotlight
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                  Celebrating the amazing contributors who make our community thrive.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {communitySpotlight.map((member, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105"
                  >
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {member.avatar}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${member.color} text-white mb-4`}>
                      <Award className="h-3 w-3 mr-1" />
                      {member.role}
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {member.contribution}
                    </p>

                    <div className="flex justify-center gap-4 text-sm">
                      {Object.entries(member.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-white font-semibold">{value}</div>
                          <div className="text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="relative py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Community Guidelines
                </h2>
                <p className="text-lg sm:text-xl text-gray-400">
                  Help us maintain a welcoming and inclusive environment for everyone.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white mr-4">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Be Respectful</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Treat all community members with respect and kindness</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Use inclusive language and be mindful of different perspectives</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Avoid personal attacks, harassment, or discriminatory behavior</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-pink-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Give constructive feedback and accept it gracefully</span>
                    </li>
                  </ul>
                </div>
                
                <div className="group bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white mr-4">
                      <HelpCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Be Helpful</h3>
                  </div>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Share knowledge and help others learn</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Provide clear and detailed information when asking for help</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Search existing discussions before posting new questions</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Contribute to documentation and community resources</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center">
                <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-6 text-lg">
                  By participating in our community, you agree to follow our Code of Conduct.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-700 text-white hover:bg-gray-900 hover:border-gray-600 rounded-full px-8 py-6 text-lg font-semibold"
                  asChild
                >
                  <a href="https://github.com/MustafaPinjari/duplicate-bin/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer">
                    Read Full Code of Conduct
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-purple-600 via-purple-700 to-fuchsia-600 rounded-3xl overflow-hidden py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-fuchsia-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>

              <div className="relative text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-8 relative">
                  <Sparkles className="h-16 w-16 text-white animate-pulse" />
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to join our community?
                </h2>
                
                {/* Description */}
                <p className="text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Connect with thousands of DuplicateBin users and contributors. Get help, share knowledge, and be part of something amazing.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-700 hover:bg-gray-50 px-8 py-6 text-base sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[200px]"
                    asChild
                  >
                    <a href="https://discord.gg/duplicate-bin" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Join Discord Now
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-purple-800/50 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-purple-800/70 hover:border-white/50 px-8 py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 min-w-[200px]"
                    asChild
                  >
                    <a href="https://forum.duplicate-bin.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Explore Forum
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
