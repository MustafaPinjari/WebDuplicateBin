"use client"
import { useEffect } from "react"
import { CheckCircle, Download, ExternalLink, Terminal, FileText, Shield, Zap, Users, ArrowRight, Monitor } from 'lucide-react'
import { Link } from 'react-router-dom'

// Enhanced confetti component
const Confetti = () => {
  useEffect(() => {
    // Create confetti particles
    const createConfetti = () => {
      const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#6366f1']
      const shapes = ['circle', 'square', 'triangle']
      const confettiCount = 75 // Reduced from 150 to 75 (50% reduction)
      
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div')
        const shape = shapes[Math.floor(Math.random() * shapes.length)]
        const color = colors[Math.floor(Math.random() * colors.length)]
        
        confetti.className = 'confetti-particle'
        confetti.style.cssText = `
          position: fixed;
          width: ${6 + Math.random() * 4}px;
          height: ${6 + Math.random() * 4}px;
          background: ${color};
          left: ${Math.random() * 100}vw;
          top: -20px;
          z-index: 1000;
          pointer-events: none;
          border-radius: ${shape === 'circle' ? '50%' : shape === 'triangle' ? '0' : '2px'};
          ${shape === 'triangle' ? `
            width: 0;
            height: 0;
            background: transparent;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 6px solid ${color};
          ` : ''}
          animation: confetti-fall ${1.5 + Math.random() * 2}s linear forwards;
          transform: rotate(${Math.random() * 360}deg);
        `
        document.body.appendChild(confetti)
        
        // Remove confetti after animation (reduced time)
        setTimeout(() => {
          if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti)
          }
        }, 3500) // Reduced from 6000 to 3500
      }
    }
    
    // Add confetti animation CSS
    const style = document.createElement('style')
    style.textContent = `
      @keyframes confetti-fall {
        0% {
          transform: translateY(-20px) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
    
    // Start confetti immediately
    createConfetti()
    
    // Continue confetti for shorter time
    const interval = setInterval(createConfetti, 300) // Increased interval from 200 to 300
    setTimeout(() => clearInterval(interval), 2500) // Reduced from 5000 to 2500
    
    return () => {
      clearInterval(interval)
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [])
  
  return null
}

export function DownloadSuccessPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Confetti />
      
      {/* Enhanced background effects - reduced animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-green-900/15" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-blue-500/8 via-purple-500/10 to-green-500/8 rounded-full blur-3xl animate-pulse opacity-40" />
      </div>
      
      {/* Floating particles - reduced animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-25"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-35"></div>
      </div>
      
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            {/* Animated success icon - reduced animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20">
                  <CheckCircle className="h-14 w-14 text-white" />
                </div>
                {/* Subtle pulsing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-green-400/20 animate-pulse"></div>
              </div>
            </div>
            
            {/* Main heading with gradient */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Download Started!
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-2xl sm:text-3xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              🎉 Your DuplicateBin installer is downloading now.
              <br className="hidden sm:block" />
              Get ready to reclaim your disk space safely!
            </p>
            
            {/* Status indicator */}
            <div className="inline-flex items-center bg-green-900/30 border border-green-700 rounded-full px-6 py-3 text-green-300 mb-12">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="font-medium">duplicate-bin.deb • Latest Release</span>
            </div>
          </div>

          {/* Download fallback section */}
          <div className="text-center mb-16">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-6">Download not started?</h3>
              <p className="text-gray-400 mb-8">Choose your platform and download manually</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Linux Download */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src="/images/tux-penguin.png" 
                      alt="Linux" 
                      className="h-8 w-8 mr-3"
                    />
                    <h4 className="text-lg font-semibold text-white">Linux (.deb)</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Ubuntu, Debian, and derivatives</p>
                  <a
                    href="https://github.com/MustafaPinjari/duplicate-bin/releases/download/v1.0.0/duplicate-bin.deb"
                    download="duplicate-bin.deb"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-102 focus:outline-none focus:ring-4 focus:ring-purple-500/30 w-full justify-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Linux
                  </a>
                </div>

                {/* Windows Download */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Monitor className="h-8 w-8 text-blue-400 mr-3" />
                    <h4 className="text-lg font-semibold text-white">Windows (.exe)</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Windows 10/11, standalone executable</p>
                  <a
                    href="https://github.com/MustafaPinjari/duplicate-bin/releases/download/v0.1.1/DuplicateBin.exe"
                    download="DuplicateBin.exe"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-102 focus:outline-none focus:ring-4 focus:ring-blue-500/30 w-full justify-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Windows
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Guide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Quick Installation */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Terminal className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Quick Installation</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">1</span>
                  <div>
                    <p className="text-white font-medium mb-1">Open Terminal</p>
                    <p className="text-gray-400 text-sm">Press Ctrl+Alt+T or search for "Terminal"</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">2</span>
                  <div>
                    <p className="text-white font-medium mb-1">Navigate to Downloads</p>
                    <code className="bg-gray-800 px-3 py-1 rounded text-green-400 font-mono text-sm block mt-2">
                      cd ~/Downloads
                    </code>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">3</span>
                  <div>
                    <p className="text-white font-medium mb-1">Install Package</p>
                    <code className="bg-gray-800 px-3 py-1 rounded text-green-400 font-mono text-sm block mt-2">
                      sudo dpkg -i duplicate-bin.deb
                    </code>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">4</span>
                  <div>
                    <p className="text-white font-medium mb-1">Fix Dependencies (if needed)</p>
                    <code className="bg-gray-800 px-3 py-1 rounded text-green-400 font-mono text-sm block mt-2">
                      sudo apt-get install -f
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* System Requirements */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">System Requirements</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Ubuntu 20.04+ / Debian 11+</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">64-bit AMD/Intel processor</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">512 MB RAM minimum</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">50 MB disk space</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Root/sudo access</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
                <p className="text-blue-300 text-sm">
                  <strong>Note:</strong> DuplicateBin works on most Linux distributions that support .deb packages.
                </p>
              </div>
            </div>
          </div>

          {/* What's Next Section */}
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-800/50 rounded-3xl p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">What's Next?</h2>
              <p className="text-xl text-gray-300">Get the most out of DuplicateBin</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">First Scan</h3>
                <p className="text-gray-400">Run your first duplicate scan on a test folder to see how it works.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Read Docs</h3>
                <p className="text-gray-400">Learn about advanced features and safety settings in our documentation.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Join Community</h3>
                <p className="text-gray-400">Connect with other users and get help in our community forums.</p>
              </div>
            </div>
          </div>

          {/* Quick Start Commands */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Start Commands</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">GUI Mode</h4>
                <code className="bg-gray-800 px-4 py-3 rounded-lg text-green-400 font-mono text-sm block">
                  duplicate-bin
                </code>
                <p className="text-gray-400 text-sm mt-2">Launch the graphical interface</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">CLI Mode</h4>
                <code className="bg-gray-800 px-4 py-3 rounded-lg text-green-400 font-mono text-sm block">
                  duplicate-bin --scan /path/to/folder
                </code>
                <p className="text-gray-400 text-sm mt-2">Scan a specific folder from terminal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                ← Back to home
              </Link>
              
              <div className="w-px h-6 bg-gray-700 hidden sm:block"></div>
              
              <a
                href="/docs"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
              >
                View Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}