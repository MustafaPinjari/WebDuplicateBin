import { DocsContent, Callout, CodeBlock } from './components/docs-content'

export function DocsDuplicateDetectionPage() {
  return (
    <DocsContent
      title="Duplicate Detection"
      description="Understand how Duplicate Bin identifies and categorizes different types of duplicate files with precision and accuracy."
    >
      <div className="text-xl text-gray-300 leading-relaxed mb-8">
        Duplicate Bin uses sophisticated algorithms to detect various types of duplicates, from exact matches to similar content, ensuring comprehensive coverage of your duplicate files.
      </div>

      <h2 id="detection-types">Types of Duplicate Detection</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Exact Duplicates</h3>
          <p className="text-gray-300 mb-4">Files with identical content, byte-for-byte matches.</p>
          <div className="space-y-2 text-sm">
            <div className="text-green-400">✓ 100% accuracy</div>
            <div className="text-green-400">✓ Safe to remove</div>
            <div className="text-green-400">✓ Hash-based detection</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --type exact`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Similar Files</h3>
          <p className="text-gray-300 mb-4">Files with similar content but minor differences.</p>
          <div className="space-y-2 text-sm">
            <div className="text-yellow-400">~ Content analysis</div>
            <div className="text-yellow-400">~ Configurable threshold</div>
            <div className="text-yellow-400">~ Requires review</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --type similar --threshold 95%`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="detection-algorithms">Detection Algorithms</h2>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Multi-Layer Detection Process</h3>
        <div className="space-y-6">
          {[
            { 
              layer: "Size Matching", 
              desc: "Initial filtering by file size - different sizes cannot be exact duplicates",
              accuracy: "100%",
              speed: "Instant"
            },
            { 
              layer: "Quick Hash", 
              desc: "Fast hash of first few KB to eliminate obvious non-matches",
              accuracy: "99.9%",
              speed: "Very Fast"
            },
            { 
              layer: "Full Hash", 
              desc: "Complete file hash (SHA-256/Blake3) for definitive matching",
              accuracy: "100%",
              speed: "Fast"
            },
            { 
              layer: "Byte Verification", 
              desc: "Optional byte-by-byte comparison for absolute certainty",
              accuracy: "100%",
              speed: "Thorough"
            }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-semibold">{item.layer}</h4>
                <div className="flex space-x-4 text-sm">
                  <span className="text-green-400">{item.accuracy}</span>
                  <span className="text-blue-400">{item.speed}</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 id="content-analysis">Content-Based Analysis</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        For similar file detection, Duplicate Bin analyzes file content beyond simple hashing:
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Image Analysis</h3>
          <div className="space-y-3 mb-4">
            <div className="text-gray-300">• Perceptual hashing</div>
            <div className="text-gray-300">• Histogram comparison</div>
            <div className="text-gray-300">• Feature detection</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --type similar \\
  --include "*.jpg,*.png" \\
  --image-threshold 90%`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Document Analysis</h3>
          <div className="space-y-3 mb-4">
            <div className="text-gray-300">• Text extraction</div>
            <div className="text-gray-300">• Fuzzy matching</div>
            <div className="text-gray-300">• Metadata comparison</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --type similar \\
  --include "*.pdf,*.doc,*.txt" \\
  --text-threshold 85%`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Audio/Video Analysis</h3>
          <div className="space-y-3 mb-4">
            <div className="text-gray-300">• Audio fingerprinting</div>
            <div className="text-gray-300">• Frame comparison</div>
            <div className="text-gray-300">• Duration matching</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --type similar \\
  --include "*.mp3,*.mp4,*.avi" \\
  --media-threshold 95%`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="grouping-logic">Duplicate Grouping Logic</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Duplicate Bin intelligently groups related duplicates and identifies the best "original" file:
      </div>

      <CodeBlock language="bash" title="Grouping preferences">
{`# Prefer files by creation date (oldest first)
duplicate-bin scan . --prefer-oldest

# Prefer files by path (shortest path first)
duplicate-bin scan . --prefer-shortest-path

# Prefer files by name pattern
duplicate-bin scan . --prefer-pattern "original*,master*"

# Custom grouping rules
duplicate-bin scan . --group-by "size,name,date"`}
      </CodeBlock>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Original File Selection Criteria</h3>
        <div className="space-y-4">
          {[
            { criteria: "Creation Date", desc: "Oldest file is typically the original", weight: "High" },
            { criteria: "File Path", desc: "Shorter paths often indicate primary locations", weight: "Medium" },
            { criteria: "File Name", desc: "Names like 'original', 'master' get priority", weight: "Medium" },
            { criteria: "Directory Type", desc: "Source folders preferred over backup/temp", weight: "High" },
            { criteria: "File Size", desc: "Larger files may have better quality", weight: "Low" }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between border border-gray-700 rounded-lg p-4">
              <div>
                <h4 className="text-white font-medium">{item.criteria}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
              <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                item.weight === 'High' ? 'bg-green-900 text-green-300' :
                item.weight === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                'bg-gray-700 text-gray-300'
              }`}>
                {item.weight}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h2 id="false-positives">Handling False Positives</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Minimize false positives with smart filtering and verification:
      </div>

      <CodeBlock language="bash" title="False positive prevention">
{`# Exclude system files that may appear identical
duplicate-bin scan . --exclude-system-files

# Ignore empty files
duplicate-bin scan . --min-size 1B

# Skip common false positives
duplicate-bin scan . --exclude "*.dll,*.so,*.dylib"

# Verify with byte comparison
duplicate-bin scan . --verify-bytes

# Whitelist known duplicates
duplicate-bin scan . --whitelist-file known-duplicates.txt`}
      </CodeBlock>

      <Callout type="info" title="Smart Exclusions">
        Duplicate Bin automatically excludes common false positives like empty files, system libraries, and temporary files unless explicitly included.
      </Callout>

      <h2 id="accuracy-metrics">Accuracy & Confidence</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Each duplicate detection includes confidence metrics:
      </div>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Confidence Levels</h3>
        <div className="space-y-4">
          {[
            { level: "100%", desc: "Exact hash match + byte verification", color: "green", action: "Safe to archive/delete" },
            { level: "99%", desc: "Exact hash match (SHA-256/Blake3)", color: "green", action: "Safe to archive/delete" },
            { level: "95-98%", desc: "High similarity with content analysis", color: "yellow", action: "Review recommended" },
            { level: "85-94%", desc: "Moderate similarity, possible duplicates", color: "yellow", action: "Manual review required" },
            { level: "<85%", desc: "Low similarity, likely different files", color: "red", action: "Not recommended for removal" }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between border border-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-lg text-sm font-bold ${
                  item.color === 'green' ? 'bg-green-900 text-green-300' :
                  item.color === 'yellow' ? 'bg-yellow-900 text-yellow-300' :
                  'bg-red-900 text-red-300'
                }`}>
                  {item.level}
                </span>
                <div>
                  <h4 className="text-white font-medium">{item.desc}</h4>
                  <p className="text-gray-400 text-sm">{item.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 id="custom-rules">Custom Detection Rules</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Create custom rules for specific duplicate detection scenarios:
      </div>

      <CodeBlock language="bash" title="Custom rule examples">
{`# Create rule file
cat > custom-rules.yaml << EOF
rules:
  - name: "Photo Duplicates"
    include: ["*.jpg", "*.png", "*.raw"]
    similarity_threshold: 92%
    ignore_metadata: true
    
  - name: "Document Versions"
    include: ["*.doc", "*.pdf"]
    text_similarity: 85%
    prefer_newest: true
    
  - name: "Code Duplicates"
    include: ["*.js", "*.py", "*.java"]
    ignore_whitespace: true
    ignore_comments: true
EOF

# Apply custom rules
duplicate-bin scan . --rules custom-rules.yaml`}
      </CodeBlock>

      <Callout type="info" title="Performance Tip">
        Use specific file type filters and appropriate thresholds to balance detection accuracy with scan performance. Higher similarity thresholds are faster but may miss some duplicates.
      </Callout>
    </DocsContent>
  )
}