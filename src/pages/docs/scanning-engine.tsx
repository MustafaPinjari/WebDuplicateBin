import { DocsContent, Callout, CodeBlock } from './components/docs-content'

export function DocsScanningEnginePage() {
  return (
    <DocsContent
      title="Scanning Engine"
      description="Deep dive into Duplicate Bin's powerful scanning engine, algorithms, and performance optimization."
    >
      <div className="text-xl text-gray-300 leading-relaxed mb-8">
        Duplicate Bin uses advanced algorithms and optimizations to quickly and accurately identify duplicate files across your system.
      </div>

      <h2 id="how-it-works">How It Works</h2>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Multi-Stage Detection Process</h3>
        <div className="space-y-6">
          {[
            { stage: "1. File Discovery", desc: "Recursively traverse directories and collect file metadata", time: "Fast" },
            { stage: "2. Size Grouping", desc: "Group files by size - files with different sizes cannot be duplicates", time: "Instant" },
            { stage: "3. Quick Hash", desc: "Calculate fast hash (first 8KB) for size-matched files", time: "Fast" },
            { stage: "4. Full Hash", desc: "Calculate complete file hash only for quick-hash matches", time: "Thorough" },
            { stage: "5. Verification", desc: "Byte-by-byte comparison for final confirmation", time: "Precise" }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium min-w-fit">
                {item.stage}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{item.desc}</p>
                <span className="text-gray-400 text-sm">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 id="hash-algorithms">Hash Algorithms</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Choose the right hashing algorithm for your needs:
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">SHA-256 (Default)</h3>
          <div className="space-y-3 mb-4">
            <div className="text-green-400">✓ Cryptographically secure</div>
            <div className="text-green-400">✓ Zero collision risk</div>
            <div className="text-yellow-400">~ Moderate speed</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --hash sha256`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Blake2b (Fast & Secure)</h3>
          <div className="space-y-3 mb-4">
            <div className="text-green-400">✓ Extremely fast</div>
            <div className="text-green-400">✓ Cryptographically secure</div>
            <div className="text-green-400">✓ Modern algorithm</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --hash blake2b`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">xxhash (Ultra Fast)</h3>
          <div className="space-y-3 mb-4">
            <div className="text-green-400">✓ Blazing fast speed</div>
            <div className="text-green-400">✓ Low CPU usage</div>
            <div className="text-yellow-400">~ Non-cryptographic</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --hash xxhash`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">MD5 (Legacy)</h3>
          <div className="space-y-3 mb-4">
            <div className="text-green-400">✓ Fast computation</div>
            <div className="text-green-400">✓ Wide compatibility</div>
            <div className="text-red-400">✗ Not cryptographically secure</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --hash md5`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">CRC32 (Quick Check)</h3>
          <div className="space-y-3 mb-4">
            <div className="text-green-400">✓ Very fast</div>
            <div className="text-yellow-400">~ Good for pre-filtering</div>
            <div className="text-red-400">✗ Higher collision risk</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --hash crc32`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Multi-Algorithm (Recommended)</h3>
          <div className="space-y-3 mb-4">
            <div className="text-green-400">✓ Maximum accuracy</div>
            <div className="text-green-400">✓ Layered verification</div>
            <div className="text-yellow-400">~ Slower but thorough</div>
          </div>
          <CodeBlock language="bash">
{`duplicate-bin scan . --algorithms sha256,md5`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="performance-tuning">Performance Tuning</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Optimize scanning performance for your system:
      </div>

      <CodeBlock language="bash" title="Performance options">
{`# Use multiple threads (default: CPU cores)
duplicate-bin scan . --threads 8

# Adjust memory usage and chunk size
duplicate-bin scan . --memory-limit 2GB --chunk-size 8192

# Skip small files for speed
duplicate-bin scan . --min-size 1MB

# Use faster hash for large datasets
duplicate-bin scan . --hash xxhash --quick-hash-size 64KB

# Enable hash caching for faster re-scans
duplicate-bin scan . --enable-cache --cache-dir ~/.cache/duplicate-bin`}
      </CodeBlock>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Performance Benchmarks</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 text-gray-300">Operation</th>
                <th className="text-left py-3 text-gray-300">Small (1K files)</th>
                <th className="text-left py-3 text-gray-300">Medium (10K files)</th>
                <th className="text-left py-3 text-gray-300">Large (100K files)</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800">
                <td className="py-3">Initial Scan</td>
                <td className="py-3">2.3s</td>
                <td className="py-3">18.7s</td>
                <td className="py-3">3m 42s</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3">Re-scan (cached)</td>
                <td className="py-3">0.8s</td>
                <td className="py-3">4.2s</td>
                <td className="py-3">28.4s</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3">Memory Usage</td>
                <td className="py-3">45 MB</td>
                <td className="py-3">180 MB</td>
                <td className="py-3">850 MB</td>
              </tr>
              <tr>
                <td className="py-3">CPU Usage</td>
                <td className="py-3">25%</td>
                <td className="py-3">65%</td>
                <td className="py-3">85%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-gray-400 text-sm">
          <p className="mb-2"><strong>Optimization Tips:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Enable hash caching for repeated scans</li>
            <li>Use SSD storage for better I/O performance</li>
            <li>Increase thread count on multi-core systems</li>
            <li>Configure memory limits for large datasets</li>
          </ul>
        </div>
      </div>

      <h2 id="scan-modes">Scan Modes</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Scan</h3>
          <p className="text-gray-300 mb-4">Fast scan using file size and partial hashing.</p>
          <CodeBlock language="bash">
{`duplicate-bin scan . --mode quick`}
          </CodeBlock>
          <div className="text-sm text-gray-400 mt-3">
            Best for: Initial exploration, large datasets
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Deep Scan</h3>
          <p className="text-gray-300 mb-4">Thorough scan with full file hashing and verification.</p>
          <CodeBlock language="bash">
{`duplicate-bin scan . --mode deep`}
          </CodeBlock>
          <div className="text-sm text-gray-400 mt-3">
            Best for: Critical data, final cleanup
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Incremental</h3>
          <p className="text-gray-300 mb-4">Only scan new or modified files since last scan.</p>
          <CodeBlock language="bash">
{`duplicate-bin scan . --incremental`}
          </CodeBlock>
          <div className="text-sm text-gray-400 mt-3">
            Best for: Regular maintenance, monitoring
          </div>
        </div>
      </div>

      <h2 id="advanced-options">Advanced Options</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Fine-tune the scanning process with advanced options:
      </div>

      <CodeBlock language="bash" title="Advanced scanning">
{`# Follow symbolic links
duplicate-bin scan . --follow-symlinks

# Cross filesystem boundaries
duplicate-bin scan . --cross-filesystem

# Ignore hidden files
duplicate-bin scan . --no-hidden

# Custom exclusion patterns
duplicate-bin scan . --exclude-pattern "*.tmp,*~,*.bak"

# Scan with progress reporting
duplicate-bin scan . --progress --verbose

# Resume interrupted scan
duplicate-bin scan . --resume`}
      </CodeBlock>

      <Callout type="info" title="Database Storage">
        Scan results are stored in a local SQLite database for fast querying and incremental updates. The database location can be configured with <code>--db-path</code>.
      </Callout>

      <h2 id="network-scanning">Network & Remote Scanning</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Scan network drives and remote locations:
      </div>

      <CodeBlock language="bash" title="Network scanning">
{`# Scan network drive
duplicate-bin scan /mnt/network-drive --network-optimized

# Scan with reduced network calls
duplicate-bin scan smb://server/share --batch-size 1000

# SSH/SFTP scanning
duplicate-bin scan ssh://user@server:/path --ssh-key ~/.ssh/id_rsa`}
      </CodeBlock>

      <Callout type="warning" title="Network Performance">
        Network scanning is significantly slower than local scanning. Consider using filters to reduce the dataset size and enable network optimizations.
      </Callout>

      <h2 id="monitoring">Monitoring & Logging</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Monitor scan progress and performance:
      </div>

      <CodeBlock language="bash" title="Monitoring options">
{`# Enable detailed logging
duplicate-bin scan . --log-level debug --log-file scan.log

# Real-time progress
duplicate-bin scan . --progress --stats

# JSON output for automation
duplicate-bin scan . --output json > results.json

# Performance profiling
duplicate-bin scan . --profile --profile-output profile.json`}
      </CodeBlock>
    </DocsContent>
  )
}