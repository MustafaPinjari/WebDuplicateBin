import { DocsContent, Callout, CodeBlock } from './components/docs-content'

export function DocsFiltersRulesPage() {
  return (
    <DocsContent
      title="Filters & Rules"
      description="Create powerful filters and automated rules to customize duplicate detection and handling for your specific needs."
    >
      <div className="text-xl text-gray-300 leading-relaxed mb-8">
        Duplicate Bin's flexible filtering and rule system allows you to fine-tune duplicate detection, automate common workflows, and handle different file types with precision.
      </div>

      <h2 id="file-filters">File Filters</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Control which files are included or excluded from scans:
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Size Filters</h3>
          <CodeBlock language="bash">
{`# Skip small files (< 1MB)
duplicate-bin scan . --min-size 1MB

# Skip large files (> 100MB)  
duplicate-bin scan . --max-size 100MB

# Specific size range
duplicate-bin scan . --min-size 10KB --max-size 50MB

# Human-readable sizes
duplicate-bin scan . --min-size 1.5GB`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Pattern Filters</h3>
          <CodeBlock language="bash">
{`# Include only images
duplicate-bin scan . --include "*.jpg,*.png,*.gif"

# Exclude temporary files
duplicate-bin scan . --exclude "*.tmp,*.log,*~"

# Complex patterns
duplicate-bin scan . --include "*.{jpg,jpeg,png}" \\
                    --exclude "thumbnail_*"`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="advanced-filters">Advanced Filtering</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Use advanced filters for precise control:
      </div>

      <CodeBlock language="bash" title="Advanced filter examples">
{`# Date-based filtering
duplicate-bin scan . --newer-than 2024-01-01
duplicate-bin scan . --older-than 30d
duplicate-bin scan . --modified-within 7d

# Path-based filtering
duplicate-bin scan . --exclude-paths "/tmp,/var/log"
duplicate-bin scan . --include-paths "~/Documents,~/Pictures"

# Attribute-based filtering
duplicate-bin scan . --no-hidden          # Skip hidden files
duplicate-bin scan . --no-system          # Skip system files
duplicate-bin scan . --executable-only    # Only executable files
duplicate-bin scan . --follow-symlinks    # Follow symbolic links`}
      </CodeBlock>

      <h2 id="rule-system">Automated Rules</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Create rules to automate duplicate handling based on conditions:
      </div>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Rule Configuration File</h3>
        <CodeBlock language="yaml" title="rules.yaml">
{`# Duplicate Bin Rules Configuration
rules:
  - name: "Large Media Files"
    conditions:
      - file_size: ">100MB"
      - extensions: [".mp4", ".mkv", ".avi", ".mov"]
    actions:
      - archive: true
      - notify: "Large media duplicates archived"
    
  - name: "Old Backup Files"
    conditions:
      - path_contains: ["backup", "old", "archive"]
      - older_than: "90d"
    actions:
      - delete: true
      - log: "Deleted old backup duplicates"
    
  - name: "Photo Duplicates"
    conditions:
      - extensions: [".jpg", ".jpeg", ".png", ".raw"]
      - similarity: ">95%"
    actions:
      - archive: true
      - preserve_newest: true
      - compress: true`}
        </CodeBlock>
      </div>

      <CodeBlock language="bash" title="Apply rules">
{`# Apply rules from file
duplicate-bin scan . --rules rules.yaml

# Apply specific rule
duplicate-bin scan . --rule "Large Media Files"

# Dry run with rules
duplicate-bin scan . --rules rules.yaml --dry-run`}
      </CodeBlock>

      <h2 id="conditional-actions">Conditional Actions</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Define actions based on file characteristics and duplicate properties:
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Size-Based Actions</h3>
          <CodeBlock language="yaml">
{`conditions:
  - file_size: ">1GB"
actions:
  - archive: true
  - compress: true
  - notify: "Large file archived"`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Path-Based Actions</h3>
          <CodeBlock language="yaml">
{`conditions:
  - path_contains: ["temp", "cache"]
actions:
  - delete: true
  - skip_confirmation: true`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Age-Based Actions</h3>
          <CodeBlock language="yaml">
{`conditions:
  - older_than: "30d"
  - duplicate_count: ">3"
actions:
  - keep_newest: 1
  - archive_others: true`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="smart-selection">Smart File Selection</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Configure how Duplicate Bin chooses which files to keep vs. archive:
      </div>

      <CodeBlock language="bash" title="Selection preferences">
{`# Prefer oldest files (likely originals)
duplicate-bin scan . --prefer-oldest

# Prefer files in specific directories
duplicate-bin scan . --prefer-paths "~/Documents,~/Projects"

# Prefer files with specific naming patterns
duplicate-bin scan . --prefer-patterns "original*,master*,final*"

# Prefer larger files (better quality)
duplicate-bin scan . --prefer-larger

# Custom selection criteria
duplicate-bin scan . --selection-rules selection.yaml`}
      </CodeBlock>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Selection Priority Order</h3>
        <div className="space-y-4">
          {[
            { priority: "1", criteria: "User-defined patterns", desc: "Files matching --prefer-patterns", example: "original_*, master_*" },
            { priority: "2", criteria: "Path preferences", desc: "Files in --prefer-paths directories", example: "~/Documents over ~/Downloads" },
            { priority: "3", criteria: "Creation date", desc: "Oldest files (likely originals)", example: "2020-01-01 over 2024-01-01" },
            { priority: "4", criteria: "File size", desc: "Larger files (better quality)", example: "10MB over 5MB" },
            { priority: "5", criteria: "Path length", desc: "Shorter paths (primary locations)", example: "/docs/file.pdf over /backup/docs/file.pdf" }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4 border border-gray-700 rounded-lg p-4">
              <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-bold min-w-fit">
                {item.priority}
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">{item.criteria}</h4>
                <p className="text-gray-300 text-sm mb-1">{item.desc}</p>
                <code className="text-gray-400 text-xs">{item.example}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 id="custom-filters">Custom Filter Scripts</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Create custom filters using scripts for complex logic:
      </div>

      <CodeBlock language="bash" title="Custom filter script">
{`#!/bin/bash
# custom-filter.sh - Example custom filter

FILE_PATH="$1"
FILE_SIZE="$2"
FILE_DATE="$3"

# Skip files in development directories
if [[ "$FILE_PATH" == *"/node_modules/"* ]] || [[ "$FILE_PATH" == *"/.git/"* ]]; then
    exit 1  # Exclude file
fi

# Skip files smaller than 1MB in temp directories
if [[ "$FILE_PATH" == *"/tmp/"* ]] && (( FILE_SIZE < 1048576 )); then
    exit 1  # Exclude file
fi

# Include all other files
exit 0`}
      </CodeBlock>

      <CodeBlock language="bash" title="Use custom filter">
{`# Apply custom filter script
duplicate-bin scan . --custom-filter ./custom-filter.sh

# Combine with other filters
duplicate-bin scan . --min-size 1MB --custom-filter ./custom-filter.sh`}
      </CodeBlock>

      <h2 id="whitelist-blacklist">Whitelist & Blacklist</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Manage known duplicates and exclusions:
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Whitelist (Known Duplicates)</h3>
          <p className="text-gray-300 mb-4">Files that are intentionally duplicated and should be ignored.</p>
          <CodeBlock language="bash">
{`# Create whitelist file
echo "/shared/template.docx" >> whitelist.txt
echo "/backup/important.pdf" >> whitelist.txt

# Use whitelist
duplicate-bin scan . --whitelist whitelist.txt`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Blacklist (Never Touch)</h3>
          <p className="text-gray-300 mb-4">Files that should never be considered for duplicate processing.</p>
          <CodeBlock language="bash">
{`# Create blacklist file
echo "/system/*" >> blacklist.txt
echo "*.dll" >> blacklist.txt

# Use blacklist
duplicate-bin scan . --blacklist blacklist.txt`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="performance-filters">Performance Optimization</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Use filters to improve scan performance:
      </div>

      <CodeBlock language="bash" title="Performance-focused filtering">
{`# Skip small files for faster scanning
duplicate-bin scan . --min-size 1MB

# Limit to specific file types
duplicate-bin scan . --include "*.{jpg,png,pdf,mp4,zip}"

# Exclude known fast-changing directories
duplicate-bin scan . --exclude-paths "/tmp,/var/log,/proc"

# Use quick scan mode with filters
duplicate-bin scan . --mode quick --min-size 10MB`}
      </CodeBlock>

      <Callout type="info" title="Filter Performance Tips">
        <div className="space-y-2">
          <div>• Use size filters to skip small files that are less likely to be meaningful duplicates</div>
          <div>• Exclude system directories and temporary locations for faster scans</div>
          <div>• Combine multiple filters to create precise, efficient scans</div>
          <div>• Test filters with --dry-run before applying to large datasets</div>
        </div>
      </Callout>

      <h2 id="examples">Real-World Examples</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Photo Library Cleanup</h3>
          <CodeBlock language="bash">
{`# Focus on photos, skip thumbnails
duplicate-bin scan ~/Pictures \\
  --include "*.{jpg,jpeg,png,raw,tiff}" \\
  --exclude "thumbnail_*,.*" \\
  --min-size 100KB \\
  --prefer-larger`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Development Cleanup</h3>
          <CodeBlock language="bash">
{`# Clean build artifacts and dependencies
duplicate-bin scan ~/Projects \\
  --include "*.{zip,tar.gz,jar,war}" \\
  --exclude-paths "node_modules,.git" \\
  --min-size 1MB \\
  --auto-archive`}
          </CodeBlock>
        </div>
      </div>
    </DocsContent>
  )
}