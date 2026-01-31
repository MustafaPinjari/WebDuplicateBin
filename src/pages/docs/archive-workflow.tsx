import { DocsContent, Callout, CodeBlock } from './components/docs-content'

export function DocsArchiveWorkflowPage() {
  return (
    <DocsContent
      title="Archive-First Workflow"
      description="Learn about Duplicate Bin's safe archive-first approach to duplicate file management, ensuring you never lose important data."
    >
      <div className="text-xl text-gray-300 leading-relaxed mb-8">
        Duplicate Bin's archive-first workflow prioritizes data safety by moving duplicates to a secure archive before any permanent deletion, giving you complete control and peace of mind.
      </div>

      <h2 id="why-archive-first">Why Archive-First?</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="bg-green-900/20 border border-green-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-green-300 mb-4">✅ Safe & Reversible</h3>
          <div className="space-y-3 text-green-200">
            <div>• Files are moved, not deleted</div>
            <div>• Complete restoration capability</div>
            <div>• Maintains file metadata</div>
            <div>• Preserves directory structure</div>
          </div>
        </div>

        <div className="bg-red-900/20 border border-red-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-red-300 mb-4">⚠️ Direct Deletion Risks</h3>
          <div className="space-y-3 text-red-200">
            <div>• Permanent data loss</div>
            <div>• No recovery options</div>
            <div>• Potential false positives</div>
            <div>• System file corruption</div>
          </div>
        </div>
      </div>

      <h2 id="archive-process">Archive Process</h2>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Step-by-Step Archive Workflow</h3>
        <div className="space-y-6">
          {[
            { 
              step: "1. Scan & Identify", 
              desc: "Duplicate Bin scans your files and identifies duplicate groups",
              command: "duplicate-bin scan /path/to/directory"
            },
            { 
              step: "2. Review Results", 
              desc: "Review duplicate groups and select which ones to archive",
              command: "duplicate-bin list --interactive"
            },
            { 
              step: "3. Archive Duplicates", 
              desc: "Move selected duplicates to the secure archive location",
              command: "duplicate-bin archive --group 1,2,3"
            },
            { 
              step: "4. Verify & Test", 
              desc: "Ensure your system works correctly with archived files",
              command: "duplicate-bin verify-archive"
            },
            { 
              step: "5. Cleanup (Optional)", 
              desc: "After verification, permanently delete archived files if desired",
              command: "duplicate-bin cleanup --older-than 30d"
            }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-semibold">{item.step}</h4>
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                  {index < 3 ? 'Required' : 'Optional'}
                </span>
              </div>
              <p className="text-gray-300 mb-3">{item.desc}</p>
              <CodeBlock language="bash">{item.command}</CodeBlock>
            </div>
          ))}
        </div>
      </div>

      <h2 id="archive-location">Archive Configuration</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Configure where and how duplicates are archived:
      </div>

      <CodeBlock language="bash" title="Archive configuration">
{`# Set custom archive location
duplicate-bin config set archive.path /safe/archive/location

# Configure archive structure
duplicate-bin config set archive.structure "date-based"  # or "source-based"

# Set compression for archived files
duplicate-bin config set archive.compress true

# Configure retention policy
duplicate-bin config set archive.retention 90d

# Enable archive encryption
duplicate-bin config set archive.encrypt true`}
      </CodeBlock>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Archive Structure Options</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-gray-700 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-3">Date-Based Structure</h4>
            <div className="text-gray-300 text-sm mb-3">
              Organizes archived files by archive date
            </div>
            <CodeBlock language="text">
{`archive/
├── 2024-01-15/
│   ├── duplicates-001/
│   └── duplicates-002/
├── 2024-01-16/
│   └── duplicates-003/
└── metadata.db`}
            </CodeBlock>
          </div>
          
          <div className="border border-gray-700 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-3">Source-Based Structure</h4>
            <div className="text-gray-300 text-sm mb-3">
              Maintains original directory structure
            </div>
            <CodeBlock language="text">
{`archive/
├── home/user/Documents/
│   ├── file1.pdf
│   └── file2.pdf
├── home/user/Pictures/
│   └── photo.jpg
└── metadata.db`}
            </CodeBlock>
          </div>
        </div>
      </div>

      <h2 id="archive-operations">Archive Operations</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Common operations for managing archived duplicates:
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Archive Duplicates</h3>
          <CodeBlock language="bash">
{`# Archive specific group
duplicate-bin archive --group 5

# Archive all duplicates
duplicate-bin archive --all

# Archive with confirmation
duplicate-bin archive --all --interactive

# Archive only large duplicates
duplicate-bin archive --min-size 10MB`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">List Archived Files</h3>
          <CodeBlock language="bash">
{`# List all archived files
duplicate-bin archive list

# List by date
duplicate-bin archive list --date 2024-01-15

# Search archived files
duplicate-bin archive search "*.pdf"

# Show archive statistics
duplicate-bin archive stats`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="restoration">File Restoration</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Restore archived files when needed:
      </div>

      <CodeBlock language="bash" title="Restoration commands">
{`# Restore specific file
duplicate-bin restore --file "path/to/archived/file.pdf"

# Restore entire archive group
duplicate-bin restore --group archive-001

# Restore to custom location
duplicate-bin restore --group archive-001 --to /custom/location

# Restore with original timestamps
duplicate-bin restore --group archive-001 --preserve-timestamps

# Interactive restoration
duplicate-bin restore --interactive`}
      </CodeBlock>

      <Callout type="info" title="Restoration Safety">
        Restoration checks for conflicts and can rename files or prompt for overwrite decisions to prevent data loss.
      </Callout>

      <h2 id="verification">Archive Verification</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Regularly verify archive integrity:
      </div>

      <CodeBlock language="bash" title="Verification commands">
{`# Verify all archived files
duplicate-bin verify-archive

# Verify specific archive
duplicate-bin verify-archive --group archive-001

# Check for corruption
duplicate-bin verify-archive --check-integrity

# Repair corrupted archives
duplicate-bin verify-archive --repair

# Generate verification report
duplicate-bin verify-archive --report archive-health.json`}
      </CodeBlock>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Archive Health Monitoring</h3>
        <div className="space-y-4">
          {[
            { check: "File Integrity", desc: "Verify checksums match original files", frequency: "Daily" },
            { check: "Storage Health", desc: "Monitor archive storage device health", frequency: "Weekly" },
            { check: "Metadata Consistency", desc: "Ensure archive database is consistent", frequency: "Weekly" },
            { check: "Access Permissions", desc: "Verify archive files remain accessible", frequency: "Monthly" }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between border border-gray-700 rounded-lg p-4">
              <div>
                <h4 className="text-white font-medium">{item.check}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-lg text-sm font-medium">
                {item.frequency}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h2 id="cleanup-policies">Cleanup Policies</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Configure automatic cleanup of old archived files:
      </div>

      <CodeBlock language="bash" title="Cleanup configuration">
{`# Set retention period
duplicate-bin config set archive.retention 90d

# Enable automatic cleanup
duplicate-bin config set archive.auto_cleanup true

# Cleanup files older than specified period
duplicate-bin cleanup --older-than 30d

# Cleanup by size (keep only recent archives)
duplicate-bin cleanup --keep-size 100GB

# Dry run to see what would be cleaned
duplicate-bin cleanup --dry-run --older-than 60d`}
      </CodeBlock>

      <Callout type="warning" title="Cleanup Warning">
        Cleanup permanently deletes archived files. Ensure you have verified your system works correctly before enabling automatic cleanup.
      </Callout>

      <h2 id="best-practices">Best Practices</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
        {[
          {
            title: "Archive Location",
            practices: [
              "Use a separate drive for archives",
              "Ensure sufficient storage space",
              "Regular backup of archive location",
              "Monitor disk health"
            ]
          },
          {
            title: "Verification Schedule",
            practices: [
              "Weekly integrity checks",
              "Test restoration process monthly",
              "Monitor archive growth",
              "Document restoration procedures"
            ]
          },
          {
            title: "Retention Policy",
            practices: [
              "Start with longer retention (90+ days)",
              "Gradually reduce after confidence builds",
              "Keep archives of critical data longer",
              "Document cleanup decisions"
            ]
          },
          {
            title: "Security Considerations",
            practices: [
              "Enable archive encryption",
              "Secure archive location permissions",
              "Regular security audits",
              "Backup encryption keys safely"
            ]
          }
        ].map((section, index) => (
          <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
            <div className="space-y-2">
              {section.practices.map((practice, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{practice}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DocsContent>
  )
}