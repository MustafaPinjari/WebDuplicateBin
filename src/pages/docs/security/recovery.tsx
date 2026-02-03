import { ArrowRight, RotateCcw, Database, Clock, AlertCircle, CheckCircle, History, RefreshCw } from 'lucide-react'

export function RollbackRecoveryPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Security & Safety</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Rollback & Recovery</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Rollback & Recovery</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Comprehensive rollback and recovery mechanisms to restore files, undo operations, and recover from errors. 
          DuplicateBin maintains detailed operation history and provides multiple recovery options for maximum data safety.
        </p>
      </div>

      {/* Recovery Overview */}
      <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <RotateCcw className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Recovery Capabilities</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin provides multiple recovery mechanisms to handle different scenarios:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-blue-400 font-semibold mb-1">Archive Restore</div>
                <div className="text-gray-300">Restore archived files</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-green-400 font-semibold mb-1">Operation Undo</div>
                <div className="text-gray-300">Reverse recent actions</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-purple-400 font-semibold mb-1">Point-in-Time</div>
                <div className="text-gray-300">Restore to specific state</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-semibold mb-1">Emergency</div>
                <div className="text-gray-300">Full system recovery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Archive Recovery */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <RefreshCw className="h-6 w-6 mr-3 text-green-400" />
          Archive Recovery
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Restoring Archived Files</h3>
            <p className="text-gray-300 mb-4">
              Restore files from the archive back to their original locations or new destinations:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Basic Restore Operations</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># List archived files</div>
                  <div className="text-white">duplicate-bin archive list --archive-path /safe/archive</div>
                  <br />
                  <div className="text-green-400"># Restore specific file</div>
                  <div className="text-white">duplicate-bin restore --file "/path/to/file.txt" --from-archive</div>
                  <br />
                  <div className="text-green-400"># Restore by pattern</div>
                  <div className="text-white">duplicate-bin restore --pattern "*.jpg" --from-archive</div>
                  <br />
                  <div className="text-green-400"># Restore entire directory</div>
                  <div className="text-white">duplicate-bin restore --directory "/home/user/photos" --from-archive</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Restore Options</h4>
                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400"># Restore with options</div>
                    <div className="text-white">duplicate-bin restore \</div>
                    <div className="text-white">  --scan-id scan_123 \</div>
                    <div className="text-white">  --destination /restore/location \</div>
                    <div className="text-white">  --preserve-permissions \</div>
                    <div className="text-white">  --preserve-timestamps \</div>
                    <div className="text-white">  --verify-integrity</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Selective Restore</h4>
                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400"># Interactive restore</div>
                    <div className="text-white">duplicate-bin restore \</div>
                    <div className="text-white">  --interactive \</div>
                    <div className="text-white">  --preview \</div>
                    <div className="text-white">  --confirm-each</div>
                    <br />
                    <div className="text-green-400"># Restore by date range</div>
                    <div className="text-white">duplicate-bin restore \</div>
                    <div className="text-white">  --archived-after "2024-01-01" \</div>
                    <div className="text-white">  --archived-before "2024-02-01"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Archive Browser</h3>
            <p className="text-gray-300 mb-4">
              Browse and explore archived files before restoring:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># Launch interactive archive browser</div>
              <div className="text-white">duplicate-bin archive browse --archive-path /safe/archive</div>
              <br />
              <div className="text-green-400"># Search within archive</div>
              <div className="text-white">duplicate-bin archive search --query "*.conf" --show-metadata</div>
              <br />
              <div className="text-green-400"># Show archive statistics</div>
              <div className="text-white">duplicate-bin archive stats --detailed --by-date</div>
            </div>
          </div>
        </div>
      </section>

      {/* Operation History */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <History className="h-6 w-6 mr-3 text-purple-400" />
          Operation History & Undo
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Operation Tracking</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin maintains a detailed history of all operations for easy rollback:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">View Operation History</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Show recent operations</div>
                  <div className="text-white">duplicate-bin history --limit 10 --detailed</div>
                  <br />
                  <div className="text-green-400"># Filter by operation type</div>
                  <div className="text-white">duplicate-bin history --type archive --since "1 week ago"</div>
                  <br />
                  <div className="text-green-400"># Show specific operation details</div>
                  <div className="text-white">duplicate-bin history --operation-id op_123456 --show-files</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Tracked Operations</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      File archiving operations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Scan executions and results
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Configuration changes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Restore operations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Cleanup and deletion
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Operation Metadata</h4>
                  <div className="bg-gray-900/50 rounded-lg p-3 text-sm">
                    <div className="text-gray-300">Each operation includes:</div>
                    <div className="mt-2 space-y-1 text-gray-400">
                      <div>• Timestamp and duration</div>
                      <div>• User and system context</div>
                      <div>• Files affected (paths, sizes)</div>
                      <div>• Operation parameters</div>
                      <div>• Success/failure status</div>
                      <div>• Rollback information</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Undo Operations</h3>
            <p className="text-gray-300 mb-4">
              Reverse recent operations with intelligent undo capabilities:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Undo last operation</div>
              <div className="text-white">duplicate-bin undo --last</div>
              <br />
              <div className="text-green-400"># Undo specific operation</div>
              <div className="text-white">duplicate-bin undo --operation-id op_123456</div>
              <br />
              <div className="text-green-400"># Undo multiple operations</div>
              <div className="text-white">duplicate-bin undo --last 3 --confirm-each</div>
              <br />
              <div className="text-green-400"># Preview undo without executing</div>
              <div className="text-white">duplicate-bin undo --operation-id op_123456 --dry-run</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h5 className="font-medium text-green-400 mb-2">Undoable Operations</h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• File archiving</li>
                  <li>• Directory moves</li>
                  <li>• Configuration changes</li>
                  <li>• Batch operations</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h5 className="font-medium text-yellow-400 mb-2">Non-Undoable Operations</h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Permanent deletions</li>
                  <li>• Archive cleanup</li>
                  <li>• System modifications</li>
                  <li>• External tool operations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Point-in-Time Recovery */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Clock className="h-6 w-6 mr-3 text-blue-400" />
          Point-in-Time Recovery
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Snapshots & Checkpoints</h3>
            <p className="text-gray-300 mb-4">
              Create and restore from system snapshots at specific points in time:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Creating Snapshots</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Create manual snapshot</div>
                  <div className="text-white">duplicate-bin snapshot create --name "before-cleanup" --description "Pre-cleanup state"</div>
                  <br />
                  <div className="text-green-400"># Auto-snapshot before operations</div>
                  <div className="text-white">duplicate-bin config set auto_snapshot_before_operations true</div>
                  <br />
                  <div className="text-green-400"># Scheduled snapshots</div>
                  <div className="text-white">duplicate-bin config set snapshot_schedule "daily"</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Managing Snapshots</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># List available snapshots</div>
                  <div className="text-white">duplicate-bin snapshot list --detailed --sort-by-date</div>
                  <br />
                  <div className="text-green-400"># Show snapshot details</div>
                  <div className="text-white">duplicate-bin snapshot info --snapshot-id snap_123</div>
                  <br />
                  <div className="text-green-400"># Compare snapshots</div>
                  <div className="text-white">duplicate-bin snapshot diff --from snap_123 --to snap_456</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Restoring from Snapshots</h3>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Restore to specific snapshot</div>
              <div className="text-white">duplicate-bin snapshot restore --snapshot-id snap_123</div>
              <br />
              <div className="text-green-400"># Partial restore (specific paths)</div>
              <div className="text-white">duplicate-bin snapshot restore --snapshot-id snap_123 --paths "/home/user/docs"</div>
              <br />
              <div className="text-green-400"># Restore with verification</div>
              <div className="text-white">duplicate-bin snapshot restore --snapshot-id snap_123 --verify --test-integrity</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h5 className="font-medium text-blue-400 mb-2">Full Restore</h5>
                <p className="text-gray-300 text-sm">Complete system state restoration to snapshot point</p>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h5 className="font-medium text-green-400 mb-2">Selective Restore</h5>
                <p className="text-gray-300 text-sm">Restore only specific files or directories</p>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <h5 className="font-medium text-purple-400 mb-2">Merge Restore</h5>
                <p className="text-gray-300 text-sm">Intelligently merge snapshot with current state</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Recovery */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <AlertCircle className="h-6 w-6 mr-3 text-red-400" />
          Emergency Recovery
        </h2>

        <div className="space-y-6">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Emergency Scenarios</h3>
            <p className="text-gray-300 mb-4">
              When things go wrong, DuplicateBin provides emergency recovery procedures:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">System Recovery Mode</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Enter emergency recovery mode</div>
                  <div className="text-white">duplicate-bin emergency --mode recovery</div>
                  <br />
                  <div className="text-green-400"># Restore all archived files immediately</div>
                  <div className="text-white">duplicate-bin emergency --restore-all --no-confirm</div>
                  <br />
                  <div className="text-green-400"># System integrity check and repair</div>
                  <div className="text-white">duplicate-bin emergency --system-check --auto-repair</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Recovery Procedures</h4>
                  <ol className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">1</span>
                      <span>Stop all DuplicateBin operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">2</span>
                      <span>Assess system state and damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">3</span>
                      <span>Restore critical files first</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">4</span>
                      <span>Verify system functionality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">5</span>
                      <span>Complete full restoration</span>
                    </li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Recovery Tools</h4>
                  <div className="bg-gray-900/50 rounded-lg p-3 text-sm">
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        <span>Archive integrity checker</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        <span>File system repair tools</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        <span>Dependency resolver</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        <span>System state validator</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Recovery Best Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-white mb-2">Prevention</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Regular automated snapshots</li>
                  <li>• Archive integrity verification</li>
                  <li>• System health monitoring</li>
                  <li>• Backup of DuplicateBin configuration</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-2">Response</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Immediate operation halt</li>
                  <li>• Damage assessment first</li>
                  <li>• Critical files priority</li>
                  <li>• Incremental verification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Database className="h-6 w-6 mr-3 text-green-400" />
          Recovery Configuration
        </h2>

        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Recovery Settings</h3>
          
          <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
            <div className="text-green-400"># ~/.config/duplicate-bin/recovery.conf</div>
            <div className="text-white">{`# Recovery configuration
auto_snapshot_before_operations = true
snapshot_retention_days = 90
archive_retention_days = 365
operation_history_retention_days = 180

# Emergency settings
emergency_restore_location = "/emergency/restore"
emergency_contact_email = "admin@company.com"
emergency_notification_enabled = true

# Recovery verification
verify_restored_files = true
check_file_integrity = true
validate_permissions = true
test_file_accessibility = true

# Backup locations
primary_archive_path = "/safe/archive"
secondary_archive_path = "/backup/archive"
offsite_backup_enabled = true
offsite_backup_schedule = "weekly"`}</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Retention Policies</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Snapshots:</span>
                  <span className="text-white">90 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Archives:</span>
                  <span className="text-white">1 year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Operation logs:</span>
                  <span className="text-white">6 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Emergency backups:</span>
                  <span className="text-white">Permanent</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Verification Levels</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-500/10 border border-green-500/20 rounded p-2">
                  <div className="font-medium text-green-400">Full Verification</div>
                  <div className="text-gray-300">Complete integrity and functionality check</div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-2">
                  <div className="font-medium text-yellow-400">Basic Verification</div>
                  <div className="text-gray-300">File existence and basic integrity</div>
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
          Complete your understanding of DuplicateBin's security features:
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