import { Github, Twitter, Linkedin, Youtube, Instagram, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerSections = [
  {
    title: "PRODUCT",
    links: [
      { name: "About Us", href: "/about" },
      { name: "CLI", href: "/cli" },
      { name: "Powers", href: "/powers" },
      { name: "Autonomous Agent", href: "/autonomous-agent" },
      { name: "Pricing", href: "/pricing" },
      { name: "Downloads", href: "/downloads" }
    ]
  },
  {
    title: "FOR",
    links: [
      { name: "Enterprise", href: "/enterprise" },
      { name: "Startups", href: "/startups" },
      { name: "Developers", href: "/developers" },
      { name: "System Admins", href: "/sysadmins" },
      { name: "Data Teams", href: "/data-teams" }
    ]
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Changelog", href: "/changelog" },
      { name: "FAQs", href: "/faqs" },
      { name: "Report a bug", href: "/bug-report" },
      { name: "Billing Support", href: "/billing-support" }
    ]
  }
]

const socialLinks = [
  { name: "Discord", icon: <div className="w-5 h-5 bg-white rounded text-black flex items-center justify-center text-xs font-bold">D</div>, href: "https://discord.gg/duplicatebin" },
  { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/duplicatebin" },
  { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/duplicatebin" },
  { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/duplicatebin" },
  { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com/@duplicatebin" },
  { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "https://github.com/MustafaPinjari/duplicate-bin" },
  { name: "Twitch", icon: <div className="w-5 h-5 bg-purple-600 rounded text-white flex items-center justify-center text-xs font-bold">T</div>, href: "https://twitch.tv/duplicatebin" }
]

const legalLinks = [
  { name: "Site Terms", href: "/terms" },
  { name: "Licenses", href: "/licenses" },
  { name: "Responsible AI Policy", href: "/ai-policy" },
  { name: "Legal", href: "/legal" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cookie Preferences", href: "/cookies" }
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo and brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/logo.png" 
                alt="DuplicateBin Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-white text-2xl">DuplicateBin</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
              Safe duplicate file management with archive-first protection. 
              Clean your storage without fear of data loss.
            </p>
            
            {/* Social links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">SOCIAL</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2026 DuplicateBin. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}