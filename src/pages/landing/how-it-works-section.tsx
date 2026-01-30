import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { FolderOpen, Search, Archive, Trash2 } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: FolderOpen,
    title: 'Select & Configure',
    description: 'Choose directories to scan and set exclusion rules. Duplicate Bin automatically protects system directories and respects your preferences.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Deep Scan',
    description: 'SHA-256 hashing analyzes file content for perfect duplicate detection. Fast, accurate, and works across any file type or naming convention.',
  },
  {
    step: '03',
    icon: Archive,
    title: 'Archive First',
    description: 'Review detected duplicates and move unwanted files to a protected archive. No immediate deletion - you stay in complete control.',
  },
  {
    step: '04',
    icon: Trash2,
    title: 'Safe Cleanup',
    description: 'Permanently delete archived files when you\'re ready, or restore them anytime. Your data is safe until you decide otherwise.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-32 bg-gray-950">
      <div className="container">
        <div className="mx-auto max-w-2xl text-left">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Safe by design, powerful by choice
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            A four-step process that prioritizes data safety while giving you complete control over duplicate cleanup.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {steps.map((step, index) => (
            <Card key={step.step} className="relative hover-lift bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed text-gray-400">
                  {step.description}
                </CardDescription>
              </CardContent>
              
              {index < steps.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 hidden h-8 w-px bg-gray-700 sm:block lg:-right-4 lg:left-auto lg:top-1/2 lg:h-px lg:w-8" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}