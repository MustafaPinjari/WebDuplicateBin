import { Download, Monitor } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function DownloadCTASection() {
  const navigate = useNavigate()

  const handleLinuxDownload = () => {
    // Use GitHub release URL for Linux download
    const githubReleaseUrl = 'https://github.com/MustafaPinjari/duplicate-bin/releases/download/v1.0.0/duplicate-bin.deb'
    
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

  const handleWindowsDownload = () => {
    // Use direct GitHub download URL for Windows
    const githubReleaseUrl = 'https://github.com/MustafaPinjari/duplicate-bin/releases/download/v0.1.1/DuplicateBin.exe'
    
    // Trigger direct download
    const link = document.createElement('a')
    link.href = githubReleaseUrl
    link.download = 'DuplicateBin.exe'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Redirect to download success page
    setTimeout(() => {
      navigate('/download-success')
    }, 500)
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main content card */}
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 transition-all duration-500 hover:scale-110 cursor-pointer">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent" />
            
            <div className="relative px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 text-center">
              {/* Main heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Clean duplicate files{' '}
                <span className="block sm:inline text-purple-100">safely in minutes</span>
              </h2>
              
              {/* Subheading */}
              <p className="text-lg sm:text-xl text-purple-100 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Get started for free with our cross-platform duplicate file cleaner
              </p>
              
              {/* Download buttons */}
              <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Linux Download Button */}
                  <button
                    onClick={handleLinuxDownload}
                    className="group relative inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-purple-700 hover:text-purple-800 font-semibold text-lg sm:text-xl rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/25 focus:outline-none focus:ring-4 focus:ring-white/50"
                  >
                    {/* Linux icon */}
                    <div className="mr-3 sm:mr-4 h-6 w-6 sm:h-7 sm:w-7 flex items-center justify-center">
                      <img 
                        src="/images/tux-penguin.png" 
                        alt="Linux" 
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span>Download for Linux</span>
                    <Download className="ml-3 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </button>

                  {/* Windows Download Button */}
                  <button
                    onClick={handleWindowsDownload}
                    className="group relative inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg sm:text-xl rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                  >
                    {/* Windows icon */}
                    <Monitor className="mr-3 sm:mr-4 h-6 w-6 sm:h-7 sm:w-7" />
                    <span>Download for Windows</span>
                    <Download className="ml-3 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </button>
                </div>
                
                {/* Download info */}
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-purple-200">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                    <span>Latest version v0.1.1</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-purple-300 rounded-full" />
                  <span>Linux: .deb package</span>
                  <div className="hidden sm:block w-1 h-1 bg-purple-300 rounded-full" />
                  <span>Windows: .exe installer</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-green-400 rounded-full" />
              </div>
              <h3 className="text-white font-semibold mb-2">Archive-First Safety</h3>
              <p className="text-gray-400 text-sm">Files are archived before deletion for maximum safety</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-400 rounded-full" />
              </div>
              <h3 className="text-white font-semibold mb-2">Cross-Platform</h3>
              <p className="text-gray-400 text-sm">Available for Linux and Windows with native performance</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-purple-400 rounded-full" />
              </div>
              <h3 className="text-white font-semibold mb-2">No Registration</h3>
              <p className="text-gray-400 text-sm">Download and use immediately without any signup</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-orange-400 rounded-full" />
              </div>
              <h3 className="text-white font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400 text-sm">Advanced algorithms for intelligent duplicate detection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}