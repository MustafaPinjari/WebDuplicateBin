import { Zap, ArrowDown } from 'lucide-react'

interface TextDividerProps {
  text?: string
  subtext?: string
}

export function TextDivider({ 
  text = "Ready to transform your workflow?", 
  subtext = "Join thousands of developers who've already upgraded their file management experience" 
}: TextDividerProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-gray-600"></div>
            <div className="mx-6 p-3 bg-gray-900/50 border border-gray-800/50 rounded-full backdrop-blur-sm">
              <Zap className="h-5 w-5 text-purple-400" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-600 via-gray-700 to-transparent"></div>
          </div>
          
          {/* Main Text */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {text}
          </h3>
          
          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            {subtext}
          </p>
          
          {/* Arrow Indicator */}
          <div className="flex justify-center">
            <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-full animate-bounce">
              <ArrowDown className="h-5 w-5 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}