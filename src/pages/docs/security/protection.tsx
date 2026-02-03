import { ArrowRight, Shield, Lock, AlertTriangle, CheckCircle, FileX, Folder, Settings } from 'lucide-react'

export function SystemProtectionPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Security & Safety</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">System Protection</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">System Protection</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          DuplicateBin includes comprehensive system protection mechanisms to prevent accidental deletion of critical files, 
          system directories, and essential data. Learn about built-in safeguards and how to configure additional protection layers.
        </p>
      </div>

      {/* Protection Overview */}
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Shield className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Multi-Layer Protection</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin employs multiple protection layers to ensure system safety:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-green-400 font-semibold mb-1">Path Filtering</div>
                <div className="text-gray-300">System directories</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-blue-400 font-semibold mb-1">File Analysis</div>
                <div className="text-gray-300">Critical file detection</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-purple-400 font-semibold mb-1">Archive First</div>
                <div className="text-gray-300">Never direct delete</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-semibold mb-1">User Confirmation</div>
                <div className="text-gray-300">Interactive prompts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Protected Directories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Folder className="h-6 w-6 mr-3 text-blue-400" />
          Protected System Directories
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Default Protected Paths</h3>
            <p className="text-gray-300 mb-4">
              These directories are automatically excluded from scanning and operations:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Linux System Paths</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm space-y-1">
                  <div className="text-red-400">/bin</div>
                  <div className="text-red-400">/sbin</div>
                  <div className="text-red-400">/usr/bin</div>
                  <div className="text-red-400">/usr/sbin</div>
                  <div className="text-red-400">/lib</div>
                  <div className="text-red-400">/lib64</div>
                  <div className="text-red-400">/usr/lib</div>
                  <div className="text-red-400">/etc</div>
                  <div className="text-red-400">/boot</div>
                  <div className="text-red-400">/sys</div>
                  <div className="text-red-400">/proc</div>
                  <div className="text-red-400">/dev</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Application & Runtime</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm space-y-1">
                  <div className="text-yellow-400">/var/log</div>
                  <div className="text-yellow-400">/var/run</div>
                  <div className="text-yellow-400">/var/lock</div>
                  <div className="text-yellow-400">/tmp</div>
                  <div className="text-yellow-400">/run</div>
                  <div className="text-yellow-400">~/.ssh</div>
                  <div className="text-yellow-400">~/.gnupg</div>
                  <div className="text-yellow-400">~/.config/systemd</div>
                  <div className="text-yellow-400">~/.local/share/keyrings</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Custom Protection Rules</h3>
                <p className="text-gray-300 mb-4">
                  Add additional protected paths for your specific environment:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Add custom protected paths</div>
                  <div className="text-white">duplicate-bin config add-protected-path /critical/data</div>
                  <div className="text-white">duplicate-bin config add-protected-path /backup/system</div>
                  <br />
                  <div className="text-green-400"># Protect by pattern</div>
                  <div className="text-white">duplicate-bin config add-protected-pattern "*.key"</div>
                  <div className="text-white">duplicate-bin config add-protected-pattern "*.pem"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* File Type Protection */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <FileX className="h-6 w-6 mr-3 text-red-400" />
          Critical File Protection
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Protected File Types</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-red-400" />
                  System Files
                </h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>• Executable binaries (.bin, .exe)</div>
                  <div>• System libraries (.so, .dll)</div>
                  <div>• Configuration files (.conf, .cfg)</div>
                  <div>• Service definitions (.service)</div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-yellow-400" />
                  Security Files
                </h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>• SSH keys (.pub, .key, id_rsa)</div>
                  <div>• SSL certificates (.crt, .pem)</div>
                  <div>• GPG keys (.gpg, .asc)</div>
                  <div>• Password files (.passwd, .shadow)</div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-blue-400" />
                  Database Files
                </h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>• SQLite databases (.db, .sqlite)</div>
                  <div>• Database logs (.log, .wal)</div>
                  <div>• Index files (.idx, .ndx)</div>
                  <div>• Backup files (.bak, .backup)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Smart File Analysis</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin analyzes file content and metadata to identify critical files:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Content Analysis</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Enable deep content analysis</div>
                  <div className="text-white">duplicate-bin scan --content-analysis --safety-level high</div>
                  <br />
                  <div className="text-green-400"># Check for executable signatures</div>
                  <div className="text-white">duplicate-bin scan --check-executables --verify-signatures</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-white mb-2">Detection Methods</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Magic number analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      File header inspection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Permission bit analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Symlink resolution
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-white mb-2">Safety Levels</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Conservative:</span>
                      <span className="text-green-400">Maximum protection</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Balanced:</span>
                      <span className="text-yellow-400">Standard protection</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Aggressive:</span>
                      <span className="text-red-400">Minimal protection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive-First Safety */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Settings className="h-6 w-6 mr-3 text-purple-400" />
          Archive-First Safety Model
        </h2>

        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">How Archive-First Works</h3>
          <p className="text-gray-300 mb-6">
            DuplicateBin never deletes files directly. Instead, it follows a safe archive-first approach:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">1</div>
              <div className="text-white font-semibold mb-1">Identify</div>
              <div className="text-gray-400 text-sm">Find duplicate files</div>
            </div>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">2</div>
              <div className="text-white font-semibold mb-1">Archive</div>
              <div className="text-gray-400 text-sm">Move to safe location</div>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">3</div>
              <div className="text-white font-semibold mb-1">Verify</div>
              <div className="text-gray-400 text-sm">Confirm system stability</div>
            </div>
            
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">4</div>
              <div className="text-white font-semibold mb-1">Clean</div>
              <div className="text-gray-400 text-sm">Optional permanent removal</div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
            <div className="text-green-400"># Archive duplicates safely</div>
            <div className="text-white">duplicate-bin archive --scan-id scan_123 --archive-path /safe/archive</div>
            <br />
            <div className="text-green-400"># Verify system after archiving</div>
            <div className="text-white">duplicate-bin verify --check-links --test-applications</div>
            <br />
            <div className="text-green-400"># Only after verification, optionally clean</div>
            <div className="text-white">duplicate-bin clean --archive-path /safe/archive --confirm</div>
          </div>
        </div>
      </section>

      {/* Safety Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Safety Configuration</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Configuration Options</h3>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># ~/.config/duplicate-bin/safety.conf</div>
              <div className="text-white">{`# Protection settings
safety_level = conservative
archive_before_delete = true
require_confirmation = true
check_system_files = true
verify_file_integrity = true

# Protected paths (in addition to defaults)
protected_paths = [
  "/home/user/important",
  "/opt/critical-app",
  "/var/backups"
]

# Protected file patterns
protected_patterns = [
  "*.key",
  "*.pem", 
  "*.p12",
  "*.jks",
  "config.*",
  "*.env"
]

# Archive settings
archive_retention_days = 30
archive_compression = true
archive_encryption = true
archive_verification = true`}</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Safety Levels</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-500/10 border border-green-500/20 rounded p-2">
                    <div className="font-medium text-green-400">Conservative</div>
                    <div className="text-gray-300">Maximum protection, extensive checks</div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-2">
                    <div className="font-medium text-yellow-400">Balanced</div>
                    <div className="text-gray-300">Standard protection, reasonable checks</div>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded p-2">
                    <div className="font-medium text-red-400">Aggressive</div>
                    <div className="text-gray-300">Minimal protection, basic checks</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Verification Options</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    File integrity checksums
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Symlink validation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Application dependency checks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    System service validation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Emergency Recovery</h3>
                <p className="text-gray-300 mb-4">
                  If something goes wrong, DuplicateBin provides emergency recovery options:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Emergency restore all archived files</div>
                  <div className="text-white">duplicate-bin emergency-restore --all --archive-path /safe/archive</div>
                  <br />
                  <div className="text-green-400"># Restore specific files</div>
                  <div className="text-white">duplicate-bin restore --pattern "*.conf" --from-archive</div>
                  <br />
                  <div className="text-green-400"># System integrity check</div>
                  <div className="text-white">duplicate-bin system-check --repair --verbose</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Learn more about DuplicateBin's safety and security features:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="/docs/security/recovery" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Rollback & Recovery
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
          <a 
            href="/docs/security/permissions" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Permissions Model
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}