import { useState } from 'react'
import { Copy, Check, ArrowRight, Monitor } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'

export function CLIInstallationSection() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<'linux' | 'windows'>('linux')

  const linuxCommands = [
    {
      id: 'download',
      label: 'Download the latest release',
      command: 'curl -L -o duplicate-bin.deb https://github.com/MustafaPinjari/duplicate-bin/releases/download/v1.0.0/duplicate-bin.deb'
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

  const windowsCommands = [
    {
      id: 'download',
      label: 'Download Windows executable',
      command: 'Invoke-WebRequest -Uri "https://fanciful-shortbread-d39145.netlify.app/public/DuplicateBin.exe" -OutFile "DuplicateBin.exe"'
    },
    {
      id: 'run-gui',
      label: 'Run GUI application',
      command: '.\\DuplicateBin.exe --gui'
    },
    {
      id: 'run-cli',
      label: 'Run CLI scan',
      command: '.\\DuplicateBin.exe scan "C:\\Users\\%USERNAME%\\Documents"'
    },
    {
      id: 'help',
      label: 'Show help',
      command: '.\\DuplicateBin.exe --help'
    }
  ]

  const commands = selectedPlatform === 'linux' ? linuxCommands : windowsCommands

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
    <section id="cli-installation" className="relative py-16 sm:py-24 lg:py-32 bg-black">
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[0.9] mb-6 sm:mb-8">
            Clean duplicates safely,{' '}
            <span className="text-gray-300">on any platform</span>
          </h2>
          
          {/* Supporting Text */}
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-400 font-light max-w-3xl mx-auto mb-4 sm:mb-6">
            Duplicate Bin scans your storage, detects duplicate files with precision, and archives them safely before deletion. Available for Linux and Windows with native performance.
          </p>
          
          {/* Platform Selector */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-1 flex">
              <button
                onClick={() => setSelectedPlatform('linux')}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedPlatform === 'linux'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <img 
                  src="/images/tux-penguin.png" 
                  alt="Linux" 
                  className="h-4 w-4 mr-2"
                />
                Linux
              </button>
              <button
                onClick={() => setSelectedPlatform('windows')}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedPlatform === 'windows'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Monitor className="h-4 w-4 mr-2" />
                Windows
              </button>
            </div>
          </div>
          
          {/* Learn More Link */}
          <div className="mb-12 sm:mb-16">
            <Link 
              to="/docs/cli" 
              className="inline-flex items-center text-gray-500 hover:text-gray-300 transition-colors text-sm font-medium hover:underline"
            >
              Learn more about CLI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          {/* Terminal Command Boxes with Dracula Theme */}
          <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            {commands.map((cmd, index) => (
              <div key={cmd.id} className="text-left">
                {/* Command Label with Dracula comment color */}
                <div className="text-xs sm:text-sm text-[#6272a4] mb-2 font-mono px-1 flex items-center">
                  <span className="text-[#ff79c6] mr-2">❯</span>
                  <span># {cmd.label}</span>
                </div>
                
                {/* Terminal Box with Dracula background */}
                <div className="bg-[#282a36] border border-[#44475a] rounded-lg sm:rounded-xl p-3 sm:p-4 font-mono text-xs sm:text-sm relative group hover:border-[#6272a4] transition-all shadow-lg hover:shadow-xl">
                  <div className="flex items-start sm:items-center justify-between gap-2 sm:gap-4">
                    {/* Command with syntax highlighting */}
                    <code className="flex-1 break-all leading-relaxed">
                      <span className="text-[#8be9fd]">$</span>
                      <span className="text-[#f8f8f2]"> </span>
                      <span className="text-[#50fa7b]">{cmd.command.split(' ')[0]}</span>
                      <span className="text-[#f8f8f2]"> </span>
                      <span className="text-[#8be9fd]">{cmd.command.split(' ').slice(1).join(' ')}</span>
                    </code>
                    
                    {/* Copy Button with Dracula colors */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(cmd.command, cmd.id)}
                      className="flex-shrink-0 h-7 w-7 sm:h-8 sm:w-8 p-0 text-[#6272a4] hover:text-[#f8f8f2] hover:bg-[#44475a] transition-colors"
                    >
                      {copiedCommand === cmd.id ? (
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#50fa7b]" />
                      ) : (
                        <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                    </Button>
                  </div>
                  
                  {/* Terminal prompt indicator */}
                  <div className="absolute left-2 top-2 flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5555]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#f1fa8c]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#50fa7b]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer Hint */}
          <div className="mt-8 sm:mt-12">
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              {selectedPlatform === 'linux' 
                ? 'Works on Linux • Desktop & Server • Ubuntu, Debian, CentOS, Fedora'
                : 'Works on Windows • Desktop Application • Windows 10/11 • No Python Required'
              }
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] bg-green-500/5 rounded-full blur-3xl opacity-40" />
    </section>
  )
}