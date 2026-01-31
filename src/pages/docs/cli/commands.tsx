import { DocsContent, Callout, CodeBlock } from '../components/docs-content'

export function DocsCliCommandsPage() {
  return (
    <DocsContent
      title="CLI Commands"
      description="Complete reference for all Duplicate Bin command-line interface commands, options, and usage examples."
    >
      <div className="text-xl text-gray-300 leading-relaxed mb-8">
        Master the Duplicate Bin CLI with this comprehensive command reference. All commands support <code>--help</code> for detailed usage information.
      </div>

      <h2 id="global-options">Global Options</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Options available for all commands:
      </div>

      <CodeBlock language="bash" title="Global options">
{`# Common global options
--config PATH          # Custom config file location
--db-path PATH         # Custom database location  
--verbose, -v          # Verbose output
--quiet, -q            # Suppress non-error output
--help, -h             # Show help information
--version              # Show version information
--no-color             # Disable colored output
--log-file PATH        # Log to file
--log-level LEVEL      # Set log level (debug, info, warn, error)`}
      </CodeBlock>

      <h2 id="scan-command">scan - Find Duplicates</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        The primary command for finding duplicate files:
      </div>

      <CodeBlock language="bash" title="Basic scan usage">
{`# Basic scan
duplicate-bin scan [PATH...]

# Scan current directory
duplicate-bin scan .

# Scan multiple directories
duplicate-bin scan ~/Documents ~/Pictures /media/backup`}
      </CodeBlock>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Scan Options</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">File Filtering</h4>
            <CodeBlock language="bash">
{`--min-size SIZE        # Minimum file size
--max-size SIZE        # Maximum file size
--include PATTERNS     # Include file patterns
--exclude PATTERNS     # Exclude file patterns
--no-hidden           # Skip hidden files
--follow-symlinks     # Follow symbolic links
--cross-filesystem    # Cross filesystem boundaries`}
            </CodeBlock>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Performance</h4>
            <CodeBlock language="bash">
{`--threads NUM         # Number of threads
--memory-limit SIZE   # Memory usage limit
--hash ALGORITHM      # Hash algorithm (sha256, blake3)
--quick-hash-size SIZE # Quick hash size
--batch-size NUM      # Processing batch size`}
            </CodeBlock>
          </div>
        </div>
      </div>

      <h2 id="list-command">list - View Results</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Display and filter scan results:
      </div>

      <CodeBlock language="bash" title="List command usage">
{`# List all duplicate groups
duplicate-bin list

# List with details
duplicate-bin list --detailed

# Sort by size (largest first)
duplicate-bin list --sort size

# Filter by minimum size
duplicate-bin list --min-size 10MB

# Show only specific group
duplicate-bin list --group 5

# Interactive selection
duplicate-bin list --interactive`}
      </CodeBlock>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Output Formats</h3>
          <CodeBlock language="bash">
{`# JSON output
duplicate-bin list --output json

# CSV output  
duplicate-bin list --output csv

# Custom format
duplicate-bin list --format "{{.Size}} {{.Path}}"

# Save to file
duplicate-bin list --output json > results.json`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Sorting & Filtering</h3>
          <CodeBlock language="bash">
{`# Sort options
--sort size           # By file size
--sort name           # By filename
--sort date           # By modification date
--sort path           # By file path

# Filter options
--min-size SIZE       # Minimum size
--max-size SIZE       # Maximum size
--pattern PATTERN     # Filename pattern`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="archive-command">archive - Safe Storage</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Archive duplicates safely before deletion:
      </div>

      <CodeBlock language="bash" title="Archive command usage">
{`# Archive specific group
duplicate-bin archive --group 1

# Archive all duplicates
duplicate-bin archive --all

# Archive with confirmation
duplicate-bin archive --all --interactive

# Archive to custom location
duplicate-bin archive --all --archive-path /custom/archive

# Archive with compression
duplicate-bin archive --all --compress

# Dry run (show what would be archived)
duplicate-bin archive --all --dry-run`}
      </CodeBlock>

      <h2 id="restore-command">restore - Recover Files</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Restore archived files to their original locations:
      </div>

      <CodeBlock language="bash" title="Restore command usage">
{`# Restore specific file
duplicate-bin restore --file "archive/path/file.txt"

# Restore archive group
duplicate-bin restore --group archive-001

# Restore to custom location
duplicate-bin restore --group archive-001 --to /custom/path

# Interactive restoration
duplicate-bin restore --interactive

# Restore with original timestamps
duplicate-bin restore --group archive-001 --preserve-timestamps`}
      </CodeBlock>

      <h2 id="delete-command">delete - Permanent Removal</h2>

      <Callout type="warning" title="Dangerous Command">
        The delete command permanently removes files. Use with extreme caution and consider archiving first.
      </Callout>

      <CodeBlock language="bash" title="Delete command usage">
{`# Delete specific group (requires confirmation)
duplicate-bin delete --group 1 --confirm

# Delete with backup
duplicate-bin delete --group 1 --backup /safe/backup/location

# Delete all duplicates (very dangerous!)
duplicate-bin delete --all --confirm --i-understand-this-is-permanent

# Dry run to see what would be deleted
duplicate-bin delete --all --dry-run`}
      </CodeBlock>

      <h2 id="config-command">config - Configuration</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Manage Duplicate Bin configuration:
      </div>

      <CodeBlock language="bash" title="Configuration commands">
{`# View all configuration
duplicate-bin config list

# Get specific setting
duplicate-bin config get archive.path

# Set configuration value
duplicate-bin config set archive.path /new/archive/location

# Reset to defaults
duplicate-bin config reset

# Edit config file
duplicate-bin config edit`}
      </CodeBlock>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Common Configuration Settings</h3>
        <div className="space-y-4">
          {[
            { setting: "archive.path", desc: "Default archive location", example: "/home/user/.duplicate-bin/archive" },
            { setting: "archive.compress", desc: "Enable compression for archived files", example: "true" },
            { setting: "scan.threads", desc: "Default number of scanning threads", example: "4" },
            { setting: "scan.hash_algorithm", desc: "Default hash algorithm", example: "blake3" },
            { setting: "web.port", desc: "Default web interface port", example: "8080" },
            { setting: "web.auth", desc: "Enable web authentication", example: "false" }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <code className="text-blue-300 font-medium">{item.setting}</code>
                <code className="text-gray-400 text-sm">{item.example}</code>
              </div>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 id="web-command">web - Web Interface</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Start the web interface for visual duplicate management:
      </div>

      <CodeBlock language="bash" title="Web interface commands">
{`# Start web interface (default port 8080)
duplicate-bin web

# Custom port and host
duplicate-bin web --port 3000 --host 0.0.0.0

# Enable authentication
duplicate-bin web --auth

# HTTPS with SSL certificates
duplicate-bin web --ssl-cert cert.pem --ssl-key key.pem

# Development mode with auto-reload
duplicate-bin web --dev --watch`}
      </CodeBlock>

      <h2 id="stats-command">stats - Statistics</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        View detailed statistics about scans and duplicates:
      </div>

      <CodeBlock language="bash" title="Statistics commands">
{`# Show scan statistics
duplicate-bin stats

# Detailed breakdown
duplicate-bin stats --detailed

# Statistics for specific scan
duplicate-bin stats --scan-id 12345

# Export statistics
duplicate-bin stats --output json > stats.json

# Historical statistics
duplicate-bin stats --history --days 30`}
      </CodeBlock>

      <h2 id="verify-command">verify - Integrity Checks</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Verify file integrity and archive health:
      </div>

      <CodeBlock language="bash" title="Verification commands">
{`# Verify all archived files
duplicate-bin verify-archive

# Verify specific archive
duplicate-bin verify-archive --group archive-001

# Check database integrity
duplicate-bin verify-database

# Repair corrupted data
duplicate-bin verify-database --repair

# Generate verification report
duplicate-bin verify-archive --report health-report.json`}
      </CodeBlock>

      <h2 id="cleanup-command">cleanup - Maintenance</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Clean up old archives and temporary files:
      </div>

      <CodeBlock language="bash" title="Cleanup commands">
{`# Clean archives older than 30 days
duplicate-bin cleanup --older-than 30d

# Clean by size (keep only 100GB of archives)
duplicate-bin cleanup --keep-size 100GB

# Clean temporary files
duplicate-bin cleanup --temp-files

# Dry run to see what would be cleaned
duplicate-bin cleanup --dry-run --older-than 60d

# Vacuum database
duplicate-bin cleanup --vacuum-db`}
      </CodeBlock>

      <h2 id="examples">Common Usage Examples</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Cleanup Workflow</h3>
          <CodeBlock language="bash">
{`# 1. Scan for duplicates
duplicate-bin scan ~/Documents

# 2. Review results
duplicate-bin list --sort size

# 3. Archive large duplicates
duplicate-bin archive --min-size 10MB

# 4. Start web interface for detailed review
duplicate-bin web`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Automated Maintenance</h3>
          <CodeBlock language="bash">
{`# Daily scan with auto-archive
duplicate-bin scan /data --min-size 1MB | \\
duplicate-bin archive --all --auto-confirm

# Weekly cleanup
duplicate-bin cleanup --older-than 7d

# Monthly verification
duplicate-bin verify-archive --report monthly.json`}
          </CodeBlock>
        </div>
      </div>

      <Callout type="info" title="Pro Tips">
        <div className="space-y-2">
          <div>• Use <code>--dry-run</code> with destructive operations to preview changes</div>
          <div>• Combine commands with pipes for powerful workflows</div>
          <div>• Set up aliases for frequently used command combinations</div>
          <div>• Use <code>--output json</code> for integration with other tools</div>
        </div>
      </Callout>
    </DocsContent>
  )
}