import { useState } from 'react'
import { Copy, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CLIInstallationSection() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const commands = [
    {
      id: 'download',
      label: 'Download the latest release',
      command: 'curl -L -o duplicate-bin.deb https://github.com/MustafaPinjari/duplicate-bin/releases/latest/download/duplicate-bin.deb'
    },
    {
      id: 'install',
      label: 'Install the package',
      command: 'sudo dpkg -i duplicate-bin.deb'
    },
    {
      id: 'dependencies',
      label: 'Install any missing dependencies',
      command: 'sudo apt-get install -f'
    },
    {
      id: 'run',
      label: 'Run the application',
      command: 'duplicate-bin'
    }
  ]

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
    <section className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.9] mb-8">
            Clean duplicates safely,{' '}
            <span className="text-gray-300">directly from your system</span>
          </h2>
          
          {/* Supporting Text */}
          <p className="text-xl sm:text-2xl leading-relaxed text-gray-400 font-light max-w-3xl mx-auto mb-6">
            Duplicate Bin scans your storage, detects duplicate files with precision, and archives them safely before deletion. No risky automation. No system damage. Just full control.
          </p>
          
          {/* Learn More Link */}
          <div className="mb-16">
            <button className="inline-flex items-center text-gray-500 hover:text-gray-300 transition-colors text-sm font-medium">
              Learn more about CLI
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          {/* Terminal Command Boxes */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {commands.map((cmd) => (
              <div key={cmd.id} className="text-left">
                {/* Command Label */}
                <div className="text-sm text-gray-500 mb-2 font-mono">
                  # {cmd.label}
                </div>
                
                {/* Terminal Box */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 font-mono text-sm relative group hover:border-gray-700 transition-colors">
                  <div className="flex items-center justify-between">
                    <code className="text-green-400 flex-1 pr-4 break-all">
                      {cmd.command}
                    </code>
                    
                    {/* Copy Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(cmd.command, cmd.id)}
                      className="flex-shrink-0 h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    >
                      {copiedCommand === cmd.id ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer Hint */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 font-medium">
              Works on Linux • Desktop & Server
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-3xl opacity-40" />
    </section>
  )
}