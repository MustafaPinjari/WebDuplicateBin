import { DocsContent, Callout, CodeBlock } from './components/docs-content'

export function DocsFirstScanPage() {
  return (
    <DocsContent
      title="Your First Scan"
      description="Learn how to perform your first duplicate file scan with Duplicate Bin and understand the results."
    >
      <div className="text-xl text-gray-300 leading-relaxed mb-8">
        Get started with Duplicate Bin by running your first scan. This guide walks you through the process step-by-step.
      </div>

      <h2 id="quick-start">Quick Start</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        The simplest way to start scanning for duplicates:
      </div>

      <CodeBlock language="bash" title="Basic scan command">
{`# Scan current directory
duplicate-bin scan .

# Scan specific directory
duplicate-bin scan /path/to/directory

# Scan multiple directories
duplicate-bin scan ~/Documents ~/Pictures ~/Downloads`}
      </CodeBlock>

      <Callout type="info" title="First Run">
        On your first scan, Duplicate Bin will create a configuration file and database to store scan results.
      </Callout>

      <h2 id="scan-options">Common Scan Options</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">File Size Filters</h3>
          <CodeBlock language="bash">
{`# Skip files smaller than 1MB
duplicate-bin scan . --min-size 1MB

# Skip files larger than 100MB
duplicate-bin scan . --max-size 100MB

# Scan only specific size range
duplicate-bin scan . --min-size 10KB --max-size 50MB`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">File Type Filters</h3>
          <CodeBlock language="bash">
{`# Scan only images
duplicate-bin scan . --include "*.jpg,*.png,*.gif"

# Exclude system files
duplicate-bin scan . --exclude "*.tmp,*.log"

# Scan only documents
duplicate-bin scan . --include "*.pdf,*.doc,*.txt"`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="understanding-results">Understanding Scan Results</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        After scanning, Duplicate Bin shows you detailed results:
      </div>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Sample Output</h3>
        <CodeBlock language="text">
{`Duplicate Bin v1.0.0 - Scan Results
=====================================

📁 Scanned: /home/user/Documents
⏱️  Duration: 2m 34s
📊 Files processed: 15,847
🔍 Duplicates found: 342 files in 156 groups
💾 Space wasted: 2.3 GB
🎯 Potential savings: 2.1 GB (after keeping originals)

Top duplicate groups by size:
1. vacation-photos.zip (5 copies) - 450 MB
2. presentation.pptx (3 copies) - 125 MB  
3. backup-data.tar.gz (4 copies) - 89 MB

Next steps:
• Review duplicates: duplicate-bin list
• Archive duplicates: duplicate-bin archive
• View web interface: duplicate-bin web`}
        </CodeBlock>
      </div>

      <h2 id="reviewing-duplicates">Reviewing Duplicates</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Before taking action, review what duplicates were found:
      </div>

      <CodeBlock language="bash" title="Review commands">
{`# List all duplicate groups
duplicate-bin list

# Show details for specific group
duplicate-bin show --group 1

# List duplicates by size (largest first)
duplicate-bin list --sort size

# Show only large duplicates (>10MB)
duplicate-bin list --min-size 10MB`}
      </CodeBlock>

      <h2 id="safe-actions">Taking Safe Actions</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Duplicate Bin uses an archive-first approach for safety:
      </div>

      <div className="space-y-6">
        <div className="bg-green-900/20 border border-green-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-green-300 mb-4">✅ Recommended: Archive First</h3>
          <CodeBlock language="bash">
{`# Archive duplicates (safe, reversible)
duplicate-bin archive --group 1

# Archive all duplicates
duplicate-bin archive --all

# Archive with confirmation
duplicate-bin archive --all --interactive`}
          </CodeBlock>
          <p className="text-green-200 mt-4">
            Archived files are moved to a safe location and can be restored anytime.
          </p>
        </div>

        <div className="bg-red-900/20 border border-red-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-red-300 mb-4">⚠️ Advanced: Direct Deletion</h3>
          <CodeBlock language="bash">
{`# Delete duplicates permanently (use with caution)
duplicate-bin delete --group 1 --confirm

# Delete with backup
duplicate-bin delete --all --backup /safe/location`}
          </CodeBlock>
          <p className="text-red-200 mt-4">
            Only use direct deletion when you're absolutely certain about the duplicates.
          </p>
        </div>
      </div>

      <Callout type="warning" title="Safety First">
        Always test with a small directory first and consider using the archive feature before permanent deletion.
      </Callout>

      <h2 id="web-interface">Using the Web Interface</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        For easier duplicate management, use the web interface:
      </div>

      <CodeBlock language="bash" title="Start web interface">
{`# Start web interface
duplicate-bin web

# Custom port and host
duplicate-bin web --port 8080 --host 0.0.0.0

# With authentication
duplicate-bin web --auth`}
      </CodeBlock>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Web Interface Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { feature: "Visual duplicate browser", desc: "Browse duplicates with thumbnails and previews" },
            { feature: "Batch operations", desc: "Select and process multiple duplicate groups" },
            { feature: "Real-time scanning", desc: "Monitor scan progress with live updates" },
            { feature: "Archive management", desc: "View and restore archived files easily" }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-500 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium">{item.feature}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 id="next-steps">Next Steps</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Now that you've completed your first scan, explore these advanced features:
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Scanning Engine", href: "/docs/scanning-engine", desc: "Learn about advanced scanning options and performance tuning" },
          { title: "Filters & Rules", href: "/docs/filters-rules", desc: "Set up custom rules for automated duplicate handling" },
          { title: "CLI Commands", href: "/docs/cli/commands", desc: "Master all available command-line options" }
        ].map((item, index) => (
          <a 
            key={index}
            href={item.href}
            className="block bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 hover:border-blue-500/50 transition-colors backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </a>
        ))}
      </div>
    </DocsContent>
  )
}