import { Download } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function DownloadCTASection() {
  const navigate = useNavigate()

  const handleDownload = () => {
    // Use GitHub release URL for download
    const githubReleaseUrl = 'https://github.com/MustafaPinjari/duplicate-bin/releases/latest/download/duplicate-bin.deb'
    
    // Trigger download and redirect to success page
    const link = document.createElement('a')
    link.href = githubReleaseUrl
    link.download = 'duplicate-bin.deb'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Redirect to download success page
    setTimeout(() => {
      navigate('/download-success')
    }, 500)
  }

  return (
    <section className="relative py-40 bg-black">
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Much wider rounded container with bright accent background */}
          <div className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-16 lg:p-24">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse-slow" />
            
            <div className="relative z-10 text-center">
              {/* Main heading - Bigger */}
              <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold tracking-tight text-white leading-[0.85] mb-8">
                Clean duplicate files{' '}
                <br className="hidden sm:block" />
                <span className="text-purple-100">safely in minutes</span>
              </h2>
              
              {/* Subheading */}
              <p className="text-2xl sm:text-3xl text-purple-100 font-medium mb-16">
                Get started for free
              </p>
              
              {/* Primary download button with Linux icon */}
              <div className="flex flex-col items-center space-y-8">
                <button
                  onClick={handleDownload}
                  className="group relative inline-flex items-center px-16 py-8 bg-white text-purple-700 font-bold text-2xl rounded-3xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95"
                >
                  {/* Tux penguin icon */}
                  <div className="mr-5 h-10 w-10 flex items-center justify-center">
                    <img 
                      src="/images/tux-penguin.png" 
                      alt="Linux Tux Penguin" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <span>Download for Linux</span>
                  <Download className="ml-5 h-7 w-7 group-hover:translate-y-1 transition-transform duration-300" />
                  
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </button>
                
                {/* Download info */}
                <div className="text-purple-200 text-lg font-medium">
                  <span className="inline-flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                    Latest version • .deb package • AMD64
                  </span>
                </div>
              </div>
              
              {/* App logo with animations */}
              <div className="mt-20 flex justify-center">
                <div className="relative">
                  {/* Large app logo container */}
                  <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-8 animate-bounce-slow">
                    <img 
                      src="/images/logo.png" 
                      alt="DuplicateBin Logo" 
                      className="h-full w-full object-contain animate-pulse-slow"
                    />
                  </div>
                  
                  {/* Floating animated elements around logo */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-80"></div>
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute top-1/2 -right-8 w-5 h-5 bg-purple-400 rounded-full animate-bounce opacity-70"></div>
                  
                  {/* Rotating ring around logo */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin-slow"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced floating elements */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-300/60 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-white/30 rounded-full animate-bounce"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-ping"></div>
          </div>
          
          {/* Trust indicators below the CTA */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center items-center gap-12 text-gray-500 text-base">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                <span>Archive-First Safety</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                <span>Linux Native</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
                <span>No Registration Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}