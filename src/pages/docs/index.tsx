import { DocsContent, Callout, CodeBlock } from './components/docs-content'
import { ArrowRight, Shield, Zap, Archive, CheckCircle } from 'lucide-react'

export function DocsIndexPage() {
  return (
    <DocsContent
      title="Welcome to Duplicate Bin"
      description="Safe duplicate file management with archive-first protection. Clean your storage without fear of data loss."
      heroImage="/images/HeroSection.png"
    >
      <div className="text-xl text-gray-300 leading-relaxed mb-8">
        Duplicate Bin is an enterprise-grade, AI-powered duplicate file management tool designed for developers, 
        system administrators, and organizations who need precise control over their file cleanup processes with maximum safety.
      </div>

      <h2 id="why-duplicate-bin">Why Duplicate Bin?</h2>
      
      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Traditional duplicate cleaners delete files immediately, risking accidental data loss. 
        Duplicate Bin revolutionizes file management with advanced AI algorithms and enterprise-grade safety features:
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Archive className="h-6 w-6 text-blue-400 mr-3" />
            <h3 className="text-xl font-semibold text-white">Archive-First Workflow</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Files are moved to a protected archive before deletion, with automated organization and compression options.
          </p>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-green-400 mr-3" />
            <h3 className="text-xl font-semibold text-white">Multi-Layer Protection</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Critical directories are automatically excluded with smart detection and customizable safety rules.
          </p>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-yellow-400 mr-3" />
            <h3 className="text-xl font-semibold text-white">AI-Powered Detection</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Multi-algorithm hashing (SHA-256, MD5, Blake2b) with content-aware analysis and fuzzy matching.
          </p>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-6 w-6 text-purple-400 mr-3" />
            <h3 className="text-xl font-semibold text-white">Cross-Platform Native</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Native applications for Linux and Windows with GUI, CLI, and API interfaces.
          </p>
        </div>
      </div>

      <Callout type="info" title="Enterprise-Grade Features">
        Duplicate Bin includes advanced features like parallel processing, plugin architecture, 
        API integration, and enterprise security compliance for professional environments.
      </Callout>

      <h2 id="quick-start">Quick Start</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-8">
        Get up and running with Duplicate Bin in minutes:
      </div>

      <h3 id="installation">1. Installation</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Linux Installation</h4>
          <CodeBlock language="bash" title="Install on Ubuntu/Debian">
{`# Download the latest release
curl -L -o duplicate-bin.deb https://github.com/MustafaPinjari/duplicate-bin/releases/download/v1.0.0/duplicate-bin.deb

# Install the package
sudo dpkg -i duplicate-bin.deb

# Install any missing dependencies
sudo apt-get install -f`}
          </CodeBlock>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Windows Installation</h4>
          <CodeBlock language="powershell" title="Download Windows executable">
{`# Download from GitHub releases
# Visit: https://fanciful-shortbread-d39145.netlify.app/public/DuplicateBin.exe

# Run the standalone executable
.\\DuplicateBin.exe

# No installation required!`}
          </CodeBlock>
        </div>
      </div>

      <h3 id="first-scan">2. Your First Scan</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Linux CLI</h4>
          <CodeBlock language="bash" title="Basic scan command">
{`# Scan your Downloads folder
duplicate-bin scan ~/Downloads

# Advanced scan with all features
duplicate-bin scan ~/Documents \\
  --algorithms sha256 md5 \\
  --content-analysis \\
  --fuzzy-matching \\
  --similarity 0.90 \\
  --threads 8

# Review and archive
duplicate-bin review
duplicate-bin archive --confirm`}
          </CodeBlock>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Windows GUI/CLI</h4>
          <CodeBlock language="cmd" title="Windows usage">
{`# GUI Mode (recommended)
DuplicateBin.exe --gui

# CLI Mode
DuplicateBin.exe scan "C:\\Users\\%USERNAME%\\Documents"

# Generate report
DuplicateBin.exe scan "C:\\Data" --report-format json`}
          </CodeBlock>
        </div>
      </div>

      <h3 id="web-interface">3. Web Interface</h3>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Launch the web interface for a visual duplicate management experience:
      </div>

      <CodeBlock language="bash">
{`# Start the web interface
duplicate-bin web --port 8080

# Open http://localhost:8080 in your browser`}
      </CodeBlock>

      <Callout type="success" title="You're Ready!">
        You now have Duplicate Bin installed and ready to safely clean your file system. 
        Check out the <a href="/docs/first-scan" className="text-green-300 hover:text-green-200 font-medium">detailed first scan guide</a> for more advanced usage.
      </Callout>

      <h2 id="advanced-features">Advanced Features</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Duplicate Bin includes 30+ advanced features for enterprise-grade duplicate management:
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h4 className="text-lg font-semibold text-white mb-4">🔍 Intelligent Detection</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Multi-Algorithm Hashing (SHA-256, MD5, CRC32, Blake2b)</li>
            <li>• Content-Aware Analysis for images, videos, documents</li>
            <li>• Fuzzy Matching with configurable similarity thresholds</li>
            <li>• Metadata Comparison (EXIF, ID3, document properties)</li>
            <li>• Binary Diff Analysis for precision detection</li>
          </ul>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h4 className="text-lg font-semibold text-white mb-4">⚡ Performance & Scale</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Multi-Threading Engine with worker pools</li>
            <li>• Memory Optimization for large files</li>
            <li>• Progress Tracking with ETA calculations</li>
            <li>• Incremental Scanning (resume interrupted scans)</li>
            <li>• Persistent Cache System for faster re-scans</li>
          </ul>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h4 className="text-lg font-semibold text-white mb-4">🛡️ Security & Safety</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Backup Integration with automatic backups</li>
            <li>• Complete Rollback System</li>
            <li>• Quarantine Mode for suspicious duplicates</li>
            <li>• Permission Validation and integrity checks</li>
            <li>• Audit Trails with complete operation history</li>
          </ul>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h4 className="text-lg font-semibold text-white mb-4">🎯 Smart Filtering</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Advanced Filters (size, date, type, location)</li>
            <li>• Regex Pattern Matching</li>
            <li>• Whitelist/Blacklist support</li>
            <li>• Auto-Selection Rules</li>
            <li>• Custom Priority Rules (newest, largest, best quality)</li>
          </ul>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h4 className="text-lg font-semibold text-white mb-4">📊 Analytics & Reports</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Detailed Statistics and analytics</li>
            <li>• Visual Charts and graphs</li>
            <li>• Export Reports (PDF, CSV, JSON)</li>
            <li>• Complete Audit Trails</li>
            <li>• Storage Impact Analysis</li>
          </ul>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h4 className="text-lg font-semibold text-white mb-4">🔧 Enterprise Ready</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• REST API for integrations</li>
            <li>• Plugin Architecture</li>
            <li>• Scheduled Scans</li>
            <li>• Network Scanning support</li>
            <li>• Database Backend (SQLite/PostgreSQL)</li>
          </ul>
        </div>
      </div>

      <h2 id="core-concepts">Core Concepts</h2>

      <h3 id="archive-first-workflow">Archive-First Workflow</h3>
      
      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        The heart of Duplicate Bin's safety model is the archive-first workflow:
      </div>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { step: 1, title: "Scan", desc: "Detect duplicates using multiple algorithms" },
            { step: 2, title: "Review", desc: "Examine results and select files for archiving" },
            { step: 3, title: "Archive", desc: "Move selected files to protected archive" },
            { step: 4, title: "Verify", desc: "Confirm your system works correctly" },
            { step: 5, title: "Cleanup", desc: "Permanently delete archived files when ready" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                {item.step}
              </div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <h3 id="system-protection">System Protection</h3>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Duplicate Bin automatically excludes critical system directories:
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { path: "/bin, /sbin, /usr/bin", desc: "System binaries" },
          { path: "/etc", desc: "System configuration" },
          { path: "/proc, /sys", desc: "Virtual filesystems" },
          { path: "/boot", desc: "Boot loader files" }
        ].map((item, index) => (
          <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
            <code className="text-blue-400 font-mono text-base">{item.path}</code>
            <span className="text-gray-400 ml-3">- {item.desc}</span>
          </div>
        ))}
      </div>

      <Callout type="warning" title="Custom Exclusions">
        You can add custom exclusion patterns for your specific environment. 
        See the <a href="/docs/filters-rules" className="text-yellow-300 hover:text-yellow-200 font-medium">Filters & Rules</a> documentation.
      </Callout>

      <h2 id="next-steps">Next Steps</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700/50 transition-colors group">
          <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">Installation Guide</h4>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Detailed installation instructions for all supported platforms.
          </p>
          <a href="/docs/installation" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-lg font-medium group">
            Read installation guide 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700/50 transition-colors group">
          <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">CLI Reference</h4>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Complete command-line interface documentation and examples.
          </p>
          <a href="/docs/cli/commands" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-lg font-medium group">
            View CLI docs 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700/50 transition-colors group">
          <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">Best Practices</h4>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Learn proven workflows and optimization techniques.
          </p>
          <a href="/docs/guides/best-practices" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-lg font-medium group">
            View best practices 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700/50 transition-colors group">
          <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">API Integration</h4>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Integrate Duplicate Bin into your applications and workflows.
          </p>
          <a href="/docs/api/rest" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-lg font-medium group">
            Explore API docs 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <h2 id="support">Support & Community</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-8">
        Need help? Our community and support resources are here for you:
      </div>

      <div className="space-y-4">
        {[
          { title: "Troubleshooting Guide", desc: "Common issues and solutions", href: "/docs/guides/troubleshooting" },
          { title: "Community Forum", desc: "Ask questions and share knowledge", href: "/community" },
          { title: "Enterprise Support", desc: "Professional support options", href: "/support" },
          { title: "GitHub Repository", desc: "Source code and issue tracking", href: "https://github.com/MustafaPinjari/duplicate-bin" }
        ].map((item, index) => (
          <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-gray-700/50 transition-colors">
            <a href={item.href} className="flex items-center justify-between group">
              <div>
                <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-300 transition-colors">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        ))}
      </div>
    </DocsContent>
  )
}