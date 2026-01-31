import { useState } from 'react'
import { Navbar } from '../../components/layout/navbar'
import { Footer } from '../../components/layout/footer'
import { Button } from '../../components/ui/button'
import { ResourcesSection } from '../../components/sections/resources-section'
import { TextDivider } from '../../components/sections/text-divider'
import { TransformSection } from '../../components/sections/transform-section'
import { Terminal, Download, Zap, Archive, Settings, CheckCircle, Copy, Check, Play, ArrowRight } from 'lucide-react'

export function CLIPage() {
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
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-black" />
          
          {/* Background Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[200px] bg-blue-500/5 rounded-full blur-3xl" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[0.9] mb-8">
                Prompt to code to deployment
                <br />
                <span className="text-gray-300">in your terminal</span>
              </h1>
              
              {/* Supporting Text */}
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-400 font-light max-w-4xl mx-auto mb-12">
                Unleash <span className="text-blue-400 font-semibold">custom agents</span> in a highly interactive terminal experience. 
                Build features in complex codebases. Automate workflows in seconds. Analyze errors and trace bugs with precision.
              </p>
              
              {/* Installation Command */}
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 font-mono text-left max-w-3xl mx-auto mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-sans">Install DuplicateBin CLI</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy('curl -fsSL https://get.duplicatebin.com/cli | sh', 'install')}
                    className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-800"
                  >
                    {copiedCommand === 'install' ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400 text-lg">$</span>
                  <code className="text-blue-300 text-base sm:text-lg">
                    curl -fsSL https://get.duplicatebin.com/cli | sh
                  </code>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-2xl"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
                >
                  View Examples
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal Preview Section */}
        <section className="relative py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  See it in action
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                  Watch how DuplicateBin CLI identifies, analyzes, and safely manages duplicate files 
                  with precision and speed.
                </p>
              </div>

              {/* Terminal Window */}
              <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700/50 flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono ml-4">DuplicateBin CLI</div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-8 font-mono text-sm sm:text-base space-y-6 bg-gray-900/30">
                  <div className="text-gray-300">
                    <span className="text-green-400">$</span> duplicate-bin scan ~/Documents
                  </div>
                  <div className="text-blue-300 pl-6 space-y-2">
                    <div>🔍 Scanning ~/Documents...</div>
                    <div>📁 Processed 1,247 files (2.3 GB)</div>
                    <div>⚡ Found 89 duplicate groups (156 files, 847 MB)</div>
                  </div>
                  
                  <div className="text-gray-300">
                    <span className="text-green-400">$</span> duplicate-bin list --sort size
                  </div>
                  <div className="text-purple-300 pl-6 font-mono text-sm">
                    <div className="border border-gray-600 rounded p-4 bg-gray-800/30">
                      <div className="text-yellow-300 mb-2">┌─────────────────────────────────────────────────────────────┐</div>
                      <div className="text-yellow-300 mb-2">│ <span className="text-yellow-400">Duplicate Group #1</span> (3 files, 24.5 MB)                     │</div>
                      <div className="text-yellow-300 mb-2">├─────────────────────────────────────────────────────────────┤</div>
                      <div className="text-gray-300 mb-1">│ ✓ ~/Documents/presentation.pdf                             │</div>
                      <div className="text-gray-400 mb-1">│ • ~/Documents/presentation (1).pdf                         │</div>
                      <div className="text-gray-400 mb-2">│ • ~/Documents/backup/presentation.pdf                      │</div>
                      <div className="text-yellow-300">└─────────────────────────────────────────────────────────────┘</div>
                    </div>
                  </div>
                  
                  <div className="text-gray-300">
                    <span className="text-green-400">$</span> duplicate-bin archive --group 1
                  </div>
                  <div className="text-green-300 pl-6 space-y-1">
                    <div>✅ Archived 2 duplicate files (24.5 MB saved)</div>
                    <div>📦 Archive location: ~/.duplicatebin/archive/2024-01-31</div>
                  </div>
                  
                  <div className="text-gray-300">
                    <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="relative py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Powerful CLI commands
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                  Everything you need to manage duplicates efficiently from the command line.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Scan Command */}
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:bg-gray-900/50">
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-500/10 p-3 rounded-xl mr-4">
                      <Zap className="h-6 w-6 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">scan</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Discover duplicate files across your system with advanced filtering and performance options.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400">$ duplicate-bin scan ~/Documents</div>
                    <div className="text-gray-500 mt-1"># Scan with filters</div>
                    <div className="text-blue-300">$ duplicate-bin scan . --min-size 1MB</div>
                  </div>
                </div>

                {/* List Command */}
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:bg-gray-900/50">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-500/10 p-3 rounded-xl mr-4">
                      <Archive className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">list</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    View and filter discovered duplicates with detailed information and export options.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400">$ duplicate-bin list --sort size</div>
                    <div className="text-gray-500 mt-1"># Export to JSON</div>
                    <div className="text-blue-300">$ duplicate-bin list --output json</div>
                  </div>
                </div>

                {/* Archive Command */}
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:bg-gray-900/50">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500/10 p-3 rounded-xl mr-4">
                      <Archive className="h-6 w-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">archive</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Safely move duplicates to protected storage before deletion with compression options.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400">$ duplicate-bin archive --group 1</div>
                    <div className="text-gray-500 mt-1"># Archive all with compression</div>
                    <div className="text-blue-300">$ duplicate-bin archive --all --compress</div>
                  </div>
                </div>

                {/* Config Command */}
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:bg-gray-900/50">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500/10 p-3 rounded-xl mr-4">
                      <Settings className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">config</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Manage configuration settings, archive paths, and performance tuning options.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400">$ duplicate-bin config list</div>
                    <div className="text-gray-500 mt-1"># Set archive path</div>
                    <div className="text-blue-300">$ duplicate-bin config set archive.path /backup</div>
                  </div>
                </div>

                {/* Restore Command */}
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:bg-gray-900/50">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500/10 p-3 rounded-xl mr-4">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">restore</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Recover archived files to their original locations with timestamp preservation.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400">$ duplicate-bin restore --list</div>
                    <div className="text-gray-500 mt-1"># Restore specific group</div>
                    <div className="text-blue-300">$ duplicate-bin restore --group archive-001</div>
                  </div>
                </div>

                {/* Web Command */}
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300 hover:bg-gray-900/50">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-500/10 p-3 rounded-xl mr-4">
                      <Terminal className="h-6 w-6 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">web</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Launch the visual web interface for interactive duplicate management and analysis.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400">$ duplicate-bin web</div>
                    <div className="text-gray-500 mt-1"># Custom port and auth</div>
                    <div className="text-blue-300">$ duplicate-bin web --port 3000 --auth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="relative py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                Get started in seconds
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Install DuplicateBin CLI with your preferred package manager and start cleaning up duplicates immediately.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Quick Install</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500 text-xs">curl (recommended)</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy('curl -fsSL https://get.duplicatebin.com/cli | sh', 'curl')}
                          className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                        >
                          {copiedCommand === 'curl' ? (
                            <Check className="h-3 w-3 text-green-500" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <div className="text-blue-300">curl -fsSL https://get.duplicatebin.com/cli | sh</div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500 text-xs">npm</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy('npm install -g @duplicatebin/cli', 'npm')}
                          className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                        >
                          {copiedCommand === 'npm' ? (
                            <Check className="h-3 w-3 text-green-500" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      <div className="text-blue-300">npm install -g @duplicatebin/cli</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Verify Installation</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-400 mb-2">$ duplicate-bin --version</div>
                      <div className="text-gray-400">duplicate-bin v2.1.0</div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-400 mb-2">$ duplicate-bin --help</div>
                      <div className="text-gray-400">Shows available commands...</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-white mb-2">First Time Setup</h4>
                    <p className="text-blue-200 mb-3">
                      Run <code className="bg-blue-500/20 px-2 py-1 rounded text-blue-300">duplicate-bin init</code> to create your configuration file and set up default scan directories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="relative py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Real-world examples
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                  See how DuplicateBin CLI fits into common workflows and automation scenarios.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Clean Downloads Folder</h3>
                  <p className="text-gray-400 mb-6">
                    Regular cleanup workflow with safety checks and verification.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-6 font-mono text-sm space-y-3">
                    <div><span className="text-gray-500"># Step 1: Scan Downloads</span></div>
                    <div className="text-blue-300">duplicate-bin scan ~/Downloads --min-size 1MB</div>
                    <div><span className="text-gray-500"># Step 2: Review results</span></div>
                    <div className="text-blue-300">duplicate-bin list --sort size</div>
                    <div><span className="text-gray-500"># Step 3: Archive safely</span></div>
                    <div className="text-blue-300">duplicate-bin archive --keep-newest</div>
                  </div>
                </div>

                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Automated Cleanup</h3>
                  <p className="text-gray-400 mb-6">
                    Schedule regular maintenance with cron jobs and logging.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-6 font-mono text-sm space-y-3">
                    <div><span className="text-gray-500"># Weekly cleanup (crontab)</span></div>
                    <div className="text-blue-300">0 2 * * 0 duplicate-bin scan ~/Downloads --archive</div>
                    <div><span className="text-gray-500"># With logging</span></div>
                    <div className="text-blue-300">duplicate-bin scan . --quiet --log-file cleanup.log</div>
                    <div><span className="text-gray-500"># Dry run first</span></div>
                    <div className="text-blue-300">duplicate-bin archive --all --dry-run</div>
                  </div>
                </div>

                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Photo Library Cleanup</h3>
                  <p className="text-gray-400 mb-6">
                    Deduplicate image collections while preserving quality.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-6 font-mono text-sm space-y-3">
                    <div><span className="text-gray-500"># Scan image files only</span></div>
                    <div className="text-blue-300">{`duplicate-bin scan ~/Pictures --include "*.jpg,*.png"`}</div>
                    <div><span className="text-gray-500"># Keep highest resolution</span></div>
                    <div className="text-blue-300">duplicate-bin archive --keep-largest</div>
                    <div><span className="text-gray-500"># Export for review</span></div>
                    <div className="text-blue-300">{`duplicate-bin list --output json > photos.json`}</div>
                  </div>
                </div>

                <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Development Projects</h3>
                  <p className="text-gray-400 mb-6">
                    Clean up code repositories while excluding build artifacts.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-6 font-mono text-sm space-y-3">
                    <div><span className="text-gray-500"># Exclude build directories</span></div>
                    <div className="text-blue-300">{`duplicate-bin scan ~/Projects --exclude "node_modules/**"`}</div>
                    <div><span className="text-gray-500"># Focus on documentation</span></div>
                    <div className="text-blue-300">{`duplicate-bin scan . --include "*.md,*.pdf"`}</div>
                    <div><span className="text-gray-500"># Archive with compression</span></div>
                    <div className="text-blue-300">duplicate-bin archive --compress</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <ResourcesSection />

        {/* Text Divider */}
        <TextDivider 
          text="Ready to supercharge your development workflow?"
          subtext="Experience the next generation of intelligent file management with AI-powered duplicate detection and automated cleanup workflows."
        />

        {/* Transform Section */}
        <TransformSection />
      </main>
      
      <Footer />
    </div>
  )
}