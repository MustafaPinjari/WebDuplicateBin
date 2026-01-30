import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Terminal } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-black">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 py-20 text-center shadow-2xl border border-gray-800 sm:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50" />
          
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to reclaim your disk space safely?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join developers and Linux users who trust Duplicate Bin for safe, intelligent duplicate file cleanup. 
              Start with a free scan today.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild className="hover-lift bg-white text-black hover:bg-gray-200 rounded-lg px-8 py-4 text-lg font-semibold">
                <Link to="/auth/register">
                  Start Free Scan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg px-8 py-4 text-lg font-semibold">
                View Documentation
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span className="text-sm">Archive-First Safety</span>
              </div>
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm">Linux Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}