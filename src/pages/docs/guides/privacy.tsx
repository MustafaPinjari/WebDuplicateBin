import { ArrowRight, Shield, Lock, Eye, Database, FileText, Users, AlertTriangle } from 'lucide-react'

export function PrivacyDataHandlingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Guides</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Privacy & Data Handling</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Privacy & Data Handling</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Comprehensive guide to privacy protection and secure data handling in DuplicateBin. Learn how to maintain 
          data confidentiality, comply with privacy regulations, and implement secure duplicate file management practices.
        </p>
      </div>

      {/* Privacy Overview */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Shield className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Privacy-First Approach</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin is designed with privacy as a core principle, ensuring your data remains secure and confidential:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-blue-400 font-semibold mb-1">Local Processing</div>
                <div className="text-gray-300">All data stays on your system</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-green-400 font-semibold mb-1">Zero Cloud</div>
                <div className="text-gray-300">No data sent to external servers</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-purple-400 font-semibold mb-1">Encrypted Storage</div>
                <div className="text-gray-300">Archives encrypted by default</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-semibold mb-1">Audit Trails</div>
                <div className="text-gray-300">Complete operation logging</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Collection & Processing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Database className="h-6 w-6 mr-3 text-green-400" />
          Data Collection & Processing
        </h2>

        <div className="space-y-6">
          {/* What Data is Processed */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">What Data Does DuplicateBin Process?</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-green-400" />
                  File Metadata Only
                </h4>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-gray-300 text-sm mb-3">
                    DuplicateBin analyzes file metadata and generates hashes, but never reads file contents:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• File paths and names</li>
                    <li>• File sizes and timestamps</li>
                    <li>• Cryptographic hashes (SHA-256)</li>
                    <li>• File permissions and ownership</li>
                    <li>• Basic file type information</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-red-400" />
                  What We Never Access
                </h4>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-gray-300 text-sm mb-3">
                    Your actual file contents remain completely private:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Document contents or text</li>
                    <li>• Image or media content</li>
                    <li>• Personal information within files</li>
                    <li>• Application data or databases</li>
                    <li>• Any file content beyond metadata</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Technical Implementation</h4>
              <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                <div className="text-green-400"># Example: How hashing works without reading content</div>
                <div className="text-white">duplicate-bin scan /data --hash-only --no-content-access</div>
                <div className="text-white">duplicate-bin config set content_scanning false</div>
                <div className="text-white">duplicate-bin config set metadata_only true</div>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                Files are processed using streaming hash algorithms that never load full content into memory.
              </p>
            </div>
          </div>

          {/* Local Data Storage */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Local Data Storage & Security</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Database Security</h4>
                <p className="text-gray-300 text-sm mb-3">
                  All scan results and metadata are stored locally with enterprise-grade security:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Enable database encryption</div>
                  <div className="text-white">duplicate-bin config set database_encryption true</div>
                  <div className="text-white">duplicate-bin config set encryption_key_rotation 30d</div>
                  <div className="text-white">duplicate-bin config set database_backup_encryption true</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-blue-400 mb-2">Security Features</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• AES-256 database encryption</li>
                    <li>• Automatic key rotation</li>
                    <li>• Secure key storage</li>
                    <li>• Access control and permissions</li>
                    <li>• Audit logging for all access</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-purple-400 mb-2">Data Locations</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• ~/.duplicatebin/database/</li>
                    <li>• ~/.duplicatebin/config/</li>
                    <li>• ~/.duplicatebin/logs/</li>
                    <li>• User-specified archive locations</li>
                    <li>• Temporary processing directories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Controls */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Eye className="h-6 w-6 mr-3 text-purple-400" />
          Privacy Controls & Configuration
        </h2>

        <div className="space-y-6">
          {/* Privacy Settings */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Privacy Configuration Options</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Maximum Privacy Mode</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Enable the highest level of privacy protection for sensitive environments:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Enable maximum privacy mode</div>
                  <div className="text-white">duplicate-bin config set privacy_mode maximum</div>
                  <div className="text-white">duplicate-bin config set logging_level minimal</div>
                  <div className="text-white">duplicate-bin config set store_file_paths false</div>
                  <div className="text-white">duplicate-bin config set anonymous_hashing true</div>
                  <div className="text-white">duplicate-bin config set temp_file_cleanup immediate</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Path Privacy Options</h4>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium text-white mb-1">Hash-Only Mode:</div>
                        <div className="text-gray-300">Store only file hashes, no paths</div>
                        <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-1">
                          <div className="text-white">--store-paths false</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-white mb-1">Relative Paths:</div>
                        <div className="text-gray-300">Store relative paths only</div>
                        <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-1">
                          <div className="text-white">--relative-paths-only</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-white mb-1">Path Obfuscation:</div>
                        <div className="text-gray-300">Encrypt stored file paths</div>
                        <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-1">
                          <div className="text-white">--obfuscate-paths</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Logging Privacy</h4>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium text-white mb-1">Minimal Logging:</div>
                        <div className="text-gray-300">Log operations only, no file details</div>
                        <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-1">
                          <div className="text-white">--log-level minimal</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-white mb-1">Anonymous Logs:</div>
                        <div className="text-gray-300">Remove identifying information</div>
                        <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-1">
                          <div className="text-white">--anonymous-logging</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-white mb-1">Auto-Purge:</div>
                        <div className="text-gray-300">Automatically delete old logs</div>
                        <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-1">
                          <div className="text-white">--log-retention 7d</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sensitive Data Handling */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Sensitive Data Protection</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Protected Directory Configuration</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Automatically exclude directories containing sensitive information:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Configure protected directories</div>
                  <div className="text-white">duplicate-bin config add-protected-path "~/.ssh"</div>
                  <div className="text-white">duplicate-bin config add-protected-path "~/.gnupg"</div>
                  <div className="text-white">duplicate-bin config add-protected-path "*/passwords/*"</div>
                  <div className="text-white">duplicate-bin config add-protected-path "*/credentials/*"</div>
                  <div className="text-white">duplicate-bin config add-protected-path "*/private/*"</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-red-400 mb-2">Automatically Protected</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• SSH keys and certificates</li>
                    <li>• Password managers</li>
                    <li>• Browser credential stores</li>
                    <li>• Cryptocurrency wallets</li>
                    <li>• System authentication files</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-yellow-400 mb-2">Custom Protection Patterns</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• File extension patterns</li>
                    <li>• Directory name patterns</li>
                    <li>• Content-based detection</li>
                    <li>• Metadata-based exclusion</li>
                    <li>• User-defined rules</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Regulations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Users className="h-6 w-6 mr-3 text-blue-400" />
          Compliance & Regulatory Requirements
        </h2>

        <div className="space-y-6">
          {/* GDPR Compliance */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">GDPR Compliance Features</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Data Subject Rights</h4>
                <div className="space-y-3">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <h5 className="font-medium text-blue-400 mb-1">Right to Access</h5>
                    <p className="text-gray-300 text-sm">Export all data processed about specific files or directories</p>
                    <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-2">
                      <div className="text-white">duplicate-bin export-data --path /user/data --format json</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <h5 className="font-medium text-green-400 mb-1">Right to Erasure</h5>
                    <p className="text-gray-300 text-sm">Completely remove all traces of specific data</p>
                    <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-2">
                      <div className="text-white">duplicate-bin forget --path /user/data --permanent</div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                    <h5 className="font-medium text-purple-400 mb-1">Right to Portability</h5>
                    <p className="text-gray-300 text-sm">Export data in machine-readable formats</p>
                    <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-2">
                      <div className="text-white">duplicate-bin export --format csv,json,xml</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Technical Measures</h4>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h5 className="font-medium text-white mb-2">GDPR Configuration</h5>
                  <div className="bg-gray-900/50 rounded p-3 font-mono text-sm">
                    <div className="text-green-400"># Enable GDPR compliance mode</div>
                    <div className="text-white">duplicate-bin config set compliance_mode gdpr</div>
                    <div className="text-white">duplicate-bin config set data_retention_policy strict</div>
                    <div className="text-white">duplicate-bin config set consent_tracking true</div>
                    <div className="text-white">duplicate-bin config set audit_trail_retention 6y</div>
                  </div>
                  
                  <div className="mt-4">
                    <h6 className="font-medium text-white mb-2">Automated Compliance</h6>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Automatic data retention enforcement</li>
                      <li>• Consent verification before processing</li>
                      <li>• Comprehensive audit logging</li>
                      <li>• Data breach detection and reporting</li>
                      <li>• Privacy impact assessment tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Compliance Standards */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Additional Compliance Standards</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-medium text-blue-400 mb-2">HIPAA Compliance</h4>
                <p className="text-gray-300 text-sm mb-3">Healthcare data protection features:</p>
                <ul className="space-y-1 text-xs text-gray-300">
                  <li>• PHI detection and protection</li>
                  <li>• Access logging and monitoring</li>
                  <li>• Encryption at rest and in transit</li>
                  <li>• Audit trail requirements</li>
                </ul>
                <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-2">
                  <div className="text-white">--compliance hipaa</div>
                </div>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h4 className="font-medium text-green-400 mb-2">SOX Compliance</h4>
                <p className="text-gray-300 text-sm mb-3">Financial data governance:</p>
                <ul className="space-y-1 text-xs text-gray-300">
                  <li>• Financial record protection</li>
                  <li>• Change management controls</li>
                  <li>• Segregation of duties</li>
                  <li>• Retention policy enforcement</li>
                </ul>
                <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-2">
                  <div className="text-white">--compliance sox</div>
                </div>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-medium text-purple-400 mb-2">PCI DSS</h4>
                <p className="text-gray-300 text-sm mb-3">Payment card data security:</p>
                <ul className="space-y-1 text-xs text-gray-300">
                  <li>• Cardholder data protection</li>
                  <li>• Secure data transmission</li>
                  <li>• Access control measures</li>
                  <li>• Regular security testing</li>
                </ul>
                <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-2">
                  <div className="text-white">--compliance pci-dss</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Lifecycle Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <AlertTriangle className="h-6 w-6 mr-3 text-yellow-400" />
          Data Lifecycle & Retention
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Automated Data Lifecycle Management</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Retention Policy Configuration</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Configure data retention policies</div>
                  <div className="text-white">duplicate-bin retention set-policy --type scan_results --duration 1y</div>
                  <div className="text-white">duplicate-bin retention set-policy --type archive_data --duration 7y</div>
                  <div className="text-white">duplicate-bin retention set-policy --type audit_logs --duration 10y</div>
                  <div className="text-white">duplicate-bin retention set-policy --type temp_files --duration 24h</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-blue-400 mb-2">Automatic Cleanup</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Scheduled data purging</li>
                    <li>• Expired archive removal</li>
                    <li>• Log rotation and cleanup</li>
                    <li>• Temporary file management</li>
                    <li>• Database optimization</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Compliance Tracking</h5>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Retention policy enforcement</li>
                    <li>• Data age monitoring</li>
                    <li>• Compliance reporting</li>
                    <li>• Audit trail maintenance</li>
                    <li>• Legal hold management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Privacy Best Practices</h2>
        
        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Recommended Privacy Configuration</h3>
            <p className="text-gray-300 mb-4">
              Follow these recommendations for optimal privacy protection:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-white mb-2">Essential Settings</h4>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-green-400"># Recommended privacy setup</div>
                  <div className="text-white">duplicate-bin config set privacy_mode high</div>
                  <div className="text-white">duplicate-bin config set database_encryption true</div>
                  <div className="text-white">duplicate-bin config set archive_encryption true</div>
                  <div className="text-white">duplicate-bin config set anonymous_hashing true</div>
                  <div className="text-white">duplicate-bin config set minimal_logging true</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-2">Operational Practices</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>Regularly review and update protected paths</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>Monitor access logs for unusual activity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>Use separate encryption keys for different projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>Implement regular key rotation schedules</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span>Maintain offline backups of encryption keys</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Continue learning about secure DuplicateBin usage:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="/docs/security/protection" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            System Protection
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
          <a 
            href="/docs/guides/best-practices" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Best Practices
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}