import { useState } from 'react'
import { Copy, Check, Terminal, Sparkles, Trash2 } from 'lucide-react'
import { Button } from '../ui/button'

export function TransformSection() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const handleCopy = async (command: string, commandId: string) => {
    try {
      await navigator.clipboard.writeText(command)
      setCopiedCommand(commandId)
      setTimeout(() => setCopiedCommand(null), 2000)
    } catch (err) {
      console.error('Failed to copy command:', err)
    }
  }

  return (
    <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto group">
          {/* Main Purple Container with Hover Animation */}
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-[3rem] p-12 sm:p-16 lg:p-20 overflow-hidden shadow-2xl transition-all duration-700 ease-out cursor-pointer group-hover:scale-x-110 group-hover:shadow-3xl group-hover:shadow-purple-500/30">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent group-hover:from-white/15 transition-all duration-700" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 group-hover:scale-125 transition-all duration-1000" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-300/10 rounded-full blur-2xl group-hover:bg-purple-300/20 group-hover:scale-150 transition-all duration-1000" />
            
            {/* Additional Hover Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-300/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Floating Sparkles */}
            <div className="absolute top-8 right-8 opacity-30 group-hover:opacity-60 transition-all duration-500">
              <Sparkles className="h-6 w-6 text-white animate-pulse group-hover:scale-125 transition-transform duration-500" />
            </div>
            <div className="absolute bottom-12 left-12 opacity-20 group-hover:opacity-40 transition-all duration-500 delay-200">
              <Sparkles className="h-4 w-4 text-white animate-pulse group-hover:scale-150 transition-transform duration-500" />
            </div>
            
            {/* Additional Sparkles on Hover */}
            <div className="absolute top-1/4 left-8 opacity-0 group-hover:opacity-30 transition-all duration-700 delay-300">
              <Sparkles className="h-3 w-3 text-purple-200 animate-pulse" />
            </div>
            <div className="absolute bottom-1/4 right-12 opacity-0 group-hover:opacity-25 transition-all duration-700 delay-500">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
            </div>
            
            <div className="relative z-10 text-center transition-all duration-700 group-hover:scale-105">
              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-500 group-hover:text-shadow-lg">
                Transform your terminal
                <br />
                into an AI-powered
                <br />
                <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent group-hover:from-purple-100 group-hover:via-white group-hover:to-purple-100 transition-all duration-700">
                  development environment
                </span>
              </h2>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-purple-100/80 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-500 group-hover:text-purple-50/90">
                Experience the future of file management with intelligent duplicate detection, 
                automated workflows, and seamless integration.
              </p>
              
              {/* Terminal Command */}
              <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 font-mono text-left max-w-2xl mx-auto mb-12 shadow-2xl transition-all duration-500 group-hover:bg-black/40 group-hover:border-white/30 group-hover:shadow-3xl group-hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Terminal className="h-4 w-4 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                    <span className="text-xs text-purple-200 uppercase tracking-wider font-sans group-hover:text-purple-100 transition-colors duration-300">
                      Install & Transform
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy('curl -fsSL https://get.duplicatebin.com/cli | sh', 'transform')}
                    className="h-8 w-8 p-0 text-purple-200 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-110"
                  >
                    {copiedCommand === 'transform' ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400 text-lg group-hover:text-green-300 transition-colors duration-300">$</span>
                  <code className="text-purple-100 text-base sm:text-lg group-hover:text-white transition-colors duration-300">
                    curl -fsSL https://get.duplicatebin.com/cli | sh
                  </code>
                </div>
              </div>

              {/* Dustbin Logo */}
              <div className="relative inline-block">
                <div className="relative animate-bounce group-hover:animate-pulse transition-all duration-500">
                  <img 
                    src="/images/logo.png" 
                    alt="DuplicateBin Logo" 
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain mx-auto filter drop-shadow-2xl transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-3xl"
                    onError={(e) => {
                      // Fallback to a dustbin icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  
                  {/* Fallback Dustbin Icon */}
                  <div className="hidden w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-white/20 group-hover:border-white/40">
                    <Trash2 className="w-12 h-12 sm:w-14 sm:h-14 text-white drop-shadow-lg" />
                  </div>
                </div>
                
                {/* Floating Effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-purple-400/20 rounded-full blur-sm animate-pulse group-hover:w-28 group-hover:bg-purple-300/30 transition-all duration-500"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse delay-500 group-hover:bg-white/20 group-hover:scale-150 transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}