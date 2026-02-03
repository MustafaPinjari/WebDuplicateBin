import { ArrowRight, Users, MessageCircle, Calendar, Award, Globe, Heart, Zap, BookOpen, HelpCircle, Play, Shield, Archive } from 'lucide-react'
import { Navbar } from '../../components/layout/navbar'
import { Footer } from '../../components/layout/footer'
import { Button } from '../../components/ui/button'

export function CommunityPage() {
  const communityChannels = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Discord Server",
      description: "Join our active Discord community for real-time discussions, support, and collaboration.",
      members: "2,400+",
      color: "from-indigo-500 to-purple-500",
      url: "https://discord.gg/duplicate-bin"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "GitHub Discussions",
      description: "Participate in feature discussions, share ideas, and get help from the community.",
      members: "1,800+",
      color: "from-gray-600 to-gray-800",
      url: "https://github.com/MustafaPinjari/duplicate-bin/discussions"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Community Forum",
      description: "Our dedicated forum for in-depth discussions, tutorials, and community support.",
      members: "3,200+",
      color: "from-blue-500 to-cyan-500",
      url: "https://forum.duplicate-bin.org"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Monthly Meetups",
      description: "Join our virtual monthly meetups to discuss features, share use cases, and network.",
      members: "500+",
      color: "from-green-500 to-emerald-500",
      url: "#meetups"
    }
  ]

  const communityStats = [
    { label: "Community Members", value: "8,500+", icon: <Users className="h-5 w-5" /> },
    { label: "Countries", value: "67", icon: <Globe className="h-5 w-5" /> },
    { label: "Monthly Active Users", value: "12k+", icon: <Zap className="h-5 w-5" /> },
    { label: "Community Projects", value: "156", icon: <Heart className="h-5 w-5" /> }
  ]

  const upcomingEvents = [
    {
      title: "DuplicateBin Monthly Meetup",
      date: "March 15, 2024",
      time: "2:00 PM UTC",
      type: "Virtual Meetup",
      description: "Monthly community meetup featuring new features, user showcases, and Q&A session."
    },
    {
      title: "Contributing Workshop",
      date: "March 22, 2024",
      time: "6:00 PM UTC",
      type: "Workshop",
      description: "Learn how to contribute to DuplicateBin with hands-on guidance from core maintainers."
    },
    {
      title: "Enterprise Use Cases Panel",
      date: "April 5, 2024",
      time: "3:00 PM UTC",
      type: "Panel Discussion",
      description: "Enterprise users share their experiences and best practices for large-scale deployments."
    }
  ]

  const communitySpotlight = [
    {
      name: "Alex Chen",
      role: "Community Moderator",
      contribution: "Created the most comprehensive DuplicateBin tutorial series",
      avatar: "AC",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Maria Rodriguez",
      role: "Plugin Developer",
      contribution: "Developed 12+ community plugins and extensions",
      avatar: "MR",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "David Kim",
      role: "Documentation Lead",
      contribution: "Improved documentation accessibility and translated to 5 languages",
      avatar: "DK",
      color: "from-orange-500 to-red-500"
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
                <div className="inline-flex items-center rounded-full bg-purple-500/10 border border-purple-500/20 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base text-purple-400">
                  <Users className="mr-2 sm:mr-2.5 lg:mr-3 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Join Our Community</span>
                  <span className="sm:hidden">Community</span>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="text-left">
                <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-white leading-tight sm:leading-[0.9] md:leading-[0.85] lg:leading-[0.8] xl:leading-[0.75] 2xl:leading-[0.7] max-w-none">
                  Connect with{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    DuplicateBin enthusiasts
                  </span>{' '}
                  worldwide
                </h1>
                
                <div className="mt-6 sm:mt-8 lg:mt-12 max-w-3xl lg:max-w-5xl">
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-400 font-light">
                    Join thousands of users, developers, and contributors in our vibrant community. 
                    Get help, share knowledge, and shape the future of DuplicateBin together.
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-6">
                  <Button size="lg" className="w-full sm:w-auto hover-lift bg-white text-black hover:bg-gray-200 rounded-lg lg:rounded-xl px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                    Join Discord
                    <MessageCircle className="ml-2 sm:ml-2.5 lg:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full sm:w-auto hover-lift border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white rounded-lg lg:rounded-xl px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                    <Play className="mr-2 sm:mr-2.5 lg:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    Browse Forum
                  </Button>
                </div>
                
                {/* Supporting Points */}
                <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  <div className="flex items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <Shield className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-green-500" />
                    <span className="hidden sm:inline">8,500+ active members</span>
                    <span className="sm:hidden">8.5k+ members</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <Zap className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-500" />
                    <span className="hidden sm:inline">67 countries represented</span>
                    <span className="sm:hidden">67 countries</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <Users className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-purple-500" />
                    <span className="hidden sm:inline">24/7 community support</span>
                    <span className="sm:hidden">24/7 support</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs sm:text-sm lg:text-base">
                    <Archive className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-orange-500" />
                    <span className="hidden sm:inline">156 community projects</span>
                    <span className="sm:hidden">156 projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl opacity-60" />
        </section>

        {/* Community Stats */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {communityStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg mx-auto mb-4">
                      <div className="text-purple-400">
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

        {/* Community Channels */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Community Channels
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Find the perfect place to connect, learn, and contribute to the DuplicateBin community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {communityChannels.map((channel, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${channel.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {channel.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Members</div>
                        <div className="text-lg font-semibold text-white">{channel.members}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {channel.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {channel.description}
                    </p>
                    
                    <Button 
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                      asChild
                    >
                      <a href={channel.url} target="_blank" rel="noopener noreferrer">
                        Join Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 sm:py-24 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Upcoming Events
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join us for workshops, meetups, and special events to connect with the community.
                </p>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/60 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                          <span className="text-sm text-blue-400 font-medium">{event.type}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-300 mb-4 lg:mb-0">
                          {event.description}
                        </p>
                      </div>
                      <div className="lg:ml-6 lg:text-right">
                        <div className="text-lg font-semibold text-white mb-1">
                          {event.date}
                        </div>
                        <div className="text-gray-400 mb-4 lg:mb-0">
                          {event.time}
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Spotlight */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Community Spotlight
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Celebrating the amazing contributors who make our community thrive.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {communitySpotlight.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-colors duration-300"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-blue-400 text-sm font-medium mb-3">
                      {member.role}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.contribution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-16 sm:py-24 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Community Guidelines
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Help us maintain a welcoming and inclusive environment for everyone.
                </p>
              </div>

              <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Heart className="h-5 w-5 text-red-400 mr-2" />
                      Be Respectful
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Treat all community members with respect and kindness</li>
                      <li>• Use inclusive language and be mindful of different perspectives</li>
                      <li>• Avoid personal attacks, harassment, or discriminatory behavior</li>
                      <li>• Give constructive feedback and accept it gracefully</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <HelpCircle className="h-5 w-5 text-blue-400 mr-2" />
                      Be Helpful
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Share knowledge and help others learn</li>
                      <li>• Provide clear and detailed information when asking for help</li>
                      <li>• Search existing discussions before posting new questions</li>
                      <li>• Contribute to documentation and community resources</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="text-center">
                    <p className="text-gray-300 mb-4">
                      By participating in our community, you agree to follow our Code of Conduct.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-gray-600 text-white hover:bg-gray-800"
                      asChild
                    >
                      <a href="https://github.com/MustafaPinjari/duplicate-bin/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer">
                        Read Full Code of Conduct
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to join our community?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Connect with thousands of DuplicateBin users and contributors. 
                Get help, share knowledge, and be part of something amazing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Join Discord Now
                  <MessageCircle className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Explore Forum
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}