import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { ArrowRight, Play, Shield, Zap, HardDrive, Archive } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-950 to-black" />
      
      {/* Responsive hero content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="mx-auto max-w-[1800px]">
          {/* Top Badge */}
          <div className="mb-6 sm:mb-12">
            <div className="inline-flex items-center rounded-full bg-gray-900/50 border border-gray-800 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base text-gray-300">
              <span className="mr-2 sm:mr-2.5 lg:mr-3 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"></span>
              <span className="hidden sm:inline">New: Safe duplicate cleanup with archive-first protection</span>
              <span className="sm:hidden">Archive-first protection</span>
            </div>
          </div>
          
          {/* Main Content - Responsive layout */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-white leading-tight sm:leading-[0.9] md:leading-[0.85] lg:leading-[0.8] xl:leading-[0.75] 2xl:leading-[0.7] max-w-none">
              Smart duplicate file cleanup<br />
              <span className="text-gray-300">from scan to safe removal</span>
            </h1>
            
            <div className="mt-6 sm:mt-8 lg:mt-12 max-w-3xl lg:max-w-5xl">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-400 font-light">
                DuplicateBin helps you reclaim disk space safely by detecting duplicate files and moving them to a protected archive before deletion — no accidental data loss, ever.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-6">
              <Button size="lg" asChild className="w-full sm:w-auto hover-lift bg-white text-black hover:bg-gray-200 rounded-lg lg:rounded-xl px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                <Link to="/auth/register" className="flex items-center justify-center">
                  Start Free Scan
                  <ArrowRight className="ml-2 sm:ml-2.5 lg:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="w-full sm:w-auto hover-lift border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white rounded-lg lg:rounded-xl px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
                <Play className="mr-2 sm:mr-2.5 lg:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                Watch Demo
              </Button>
            </div>
            
            {/* Supporting Points - Responsive grid */}
            <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-10 text-xs sm:text-sm lg:text-base text-gray-500">
              <div className="flex items-center">
                <Shield className="mr-2 sm:mr-3 lg:mr-4 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-500 flex-shrink-0" />
                <span>System-safe (critical directories protected)</span>
              </div>
              <div className="flex items-center">
                <Zap className="mr-2 sm:mr-3 lg:mr-4 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-500 flex-shrink-0" />
                <span>Fast SHA-256 duplicate detection</span>
              </div>
              <div className="flex items-center">
                <HardDrive className="mr-2 sm:mr-3 lg:mr-4 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-500 flex-shrink-0" />
                <span>Linux-first and privacy-friendly</span>
              </div>
              <div className="flex items-center">
                <Archive className="mr-2 sm:mr-3 lg:mr-4 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-orange-500 flex-shrink-0" />
                <span>Archive before delete, not auto-delete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard Preview - Responsive full width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pb-8 sm:pb-16">
        <div className="mx-auto max-w-[2000px]">
          <div className="rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 xl:p-8">
            <div className="aspect-[16/10] sm:aspect-[20/12] lg:aspect-[22/14] rounded-2xl sm:rounded-3xl overflow-hidden relative">
              <img 
                src="/images/HeroSection.png" 
                alt="DuplicateBin Dashboard Interface" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">Image not available</div>';
                  }
                }}
              />
              {/* Subtle bottom fade effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/100 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}