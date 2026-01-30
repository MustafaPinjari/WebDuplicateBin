import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Shield, Zap, HardDrive, Archive } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-950 to-black" />
      
      {/* Maximum width hero content */}
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 2xl:px-28 pt-32 pb-20">
        <div className="mx-auto max-w-[1800px]">
          {/* Top Badge */}
          <div className="mb-16">
            <div className="inline-flex items-center rounded-full bg-gray-900/50 border border-gray-800 px-8 py-4 text-lg text-gray-300">
              <span className="mr-4 h-2.5 w-2.5 rounded-full bg-green-500"></span>
              New: Safe duplicate cleanup with archive-first protection
            </div>
          </div>
          
          {/* Main Content - Ultra wide layout */}
          <div className="text-left">
            <h1 className="text-8xl font-bold tracking-tight text-white sm:text-[10rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[12rem] leading-[0.8] max-w-none">
              Smart duplicate file cleanup<br />
              <span className="text-gray-300">from scan to safe removal</span>
            </h1>
            
            <div className="mt-16 max-w-7xl">
              <p className="text-3xl leading-relaxed text-gray-400 font-light">
                DuplicateBin helps you reclaim disk space safely by detecting duplicate files and moving them to a protected archive before deletion — no accidental data loss, ever.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-20 flex items-center gap-x-10">
              <Button size="lg" asChild className="hover-lift bg-white text-black hover:bg-gray-200 rounded-2xl px-16 py-8 text-2xl font-semibold">
                <Link to="/auth/register">
                  Start Free Scan
                  <ArrowRight className="ml-4 h-7 w-7" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="hover-lift border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white rounded-2xl px-16 py-8 text-2xl font-semibold">
                <Play className="mr-4 h-7 w-7" />
                Watch Demo
              </Button>
            </div>
            
            {/* Supporting Points - Ultra wide grid */}
            <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-10 text-lg text-gray-500">
              <div className="flex items-center">
                <Shield className="mr-5 h-7 w-7 text-green-500 flex-shrink-0" />
                <span>System-safe (critical directories protected)</span>
              </div>
              <div className="flex items-center">
                <Zap className="mr-5 h-7 w-7 text-blue-500 flex-shrink-0" />
                <span>Fast SHA-256 duplicate detection</span>
              </div>
              <div className="flex items-center">
                <HardDrive className="mr-5 h-7 w-7 text-purple-500 flex-shrink-0" />
                <span>Linux-first and privacy-friendly</span>
              </div>
              <div className="flex items-center">
                <Archive className="mr-5 h-7 w-7 text-orange-500 flex-shrink-0" />
                <span>Archive before delete, not auto-delete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard Preview - Full width at bottom */}
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 pb-16">
        <div className="mx-auto max-w-[2000px]">
          <div className="rounded-3xl p-6 lg:p-8">
            <div className="aspect-[22/14] rounded-3xl overflow-hidden relative">
              <img 
                src="/images/HeroSection.png" 
                alt="DuplicateBin Dashboard Interface" 
                className="w-full h-full object-cover"
              />
              {/* Subtle bottom fade effect like reference */}
              <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-gradient-to-t from-black/90 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}