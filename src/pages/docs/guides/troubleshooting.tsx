import { ArrowRight, AlertCircle, Search, Settings, Zap, RefreshCw, HelpCircle } from 'lucide-react'

export function TroubleshootingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Guides</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Troubleshooting</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Troubleshooting</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Comprehensive troubleshooting guide for common DuplicateBin issues. Find solutions to performance problems, 
          scan failures, permission errors, and other common challenges with step-by-step resolution procedures.
        </p>
      </div>

      {/* Quick Diagnostic */}
      <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Search className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Quick Diagnostic</h3>
            <p className="text-gray-300 mb-4">
              Run these commands to quickly identify common issues:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># System health check</div>
              <div className="text-white">duplicate-bin doctor --comprehensive</div>
              <br />
              <div className="text-green-400"># Configuration validation</div>
              <div className="text-white">duplicate-bin config validate --verbose</div>
              <br />
              <div className="text-green-400"># Performance analysis</div>
              <div className="text-white">duplicate-bin performance-test --quick</div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Issues */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <AlertCircle className="h-6 w-6 mr-3 text-red-400" />
          Common Issues & Solutions
        </h2>

        <div className="space-y-6">
          {/* Scan Failures */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-red-400" />
              Scan Failures & Errors
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white mb-2">Error: "Permission denied accessing directory"</h4>
                <p className="text-gray-300 text-sm mb-3">
                  The scan process cannot access certain directories due to insufficient permissions.
                </p>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-3">
                  <h5 className="font-medium text-red-400 mb-2">Symptoms</h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Scan stops with permission errors</li>
                    <li>• Incomplete scan results</li>
                    <li>• "Access denied" messages in logs</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Solutions</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-white mb-1">1. Check and fix permissions:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">sudo chmod -R +r /target/directory</div>
                        <div className="text-white">duplicate-bin permissions check --path /target/directory</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">2. Run with elevated privileges:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">sudo duplicate-bin scan /target/directory --preserve-permissions</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">3. Exclude problematic directories:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin scan /target --exclude "/target/restricted/*"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-white mb-2">Error: "Insufficient disk space for operation"</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Not enough free disk space to complete the scan or archive operation.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Solutions</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-white mb-1">1. Check available space:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">df -h</div>
                        <div className="text-white">duplicate-bin space-check --path /target --estimate</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">2. Use external archive location:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin scan /target --archive-path /external/drive/archive</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">3. Enable compression:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin config set archive_compression true</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white mb-2">Error: "Scan process killed or interrupted"</h4>
                <p className="text-gray-300 text-sm mb-3">
                  The scan process was terminated unexpectedly due to system issues or resource constraints.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Solutions</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-white mb-1">1. Resume interrupted scan:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin scan --resume --scan-id scan_123</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">2. Reduce resource usage:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin scan /target --threads 2 --memory-limit 2GB</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">3. Enable auto-checkpointing:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin config set auto_checkpoint true</div>
                        <div className="text-white">duplicate-bin config set checkpoint_interval 1h</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Issues */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-yellow-400" />
              Performance Issues
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-white mb-2">Issue: "Scan is extremely slow"</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Scan performance is significantly slower than expected.
                </p>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-3">
                  <h5 className="font-medium text-yellow-400 mb-2">Diagnostic Steps</h5>
                  <div className="bg-gray-900/50 rounded p-3 font-mono text-xs">
                    <div className="text-white">duplicate-bin performance-monitor --scan-id scan_123</div>
                    <div className="text-white">duplicate-bin bottleneck-analysis --real-time</div>
                  </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Optimization Solutions</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-white mb-1">CPU Optimization:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin config set threads auto</div>
                        <div className="text-white">duplicate-bin config set cpu_affinity balanced</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">I/O Optimization:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin config set io_mode async</div>
                        <div className="text-white">duplicate-bin config set buffer_size 64KB</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white mb-2">Issue: "High memory usage causing system slowdown"</h4>
                <p className="text-gray-300 text-sm mb-3">
                  DuplicateBin is consuming too much system memory.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Memory Management Solutions</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-white mb-1">1. Limit memory usage:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin config set memory_limit 4GB</div>
                        <div className="text-white">duplicate-bin config set memory_mode conservative</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">2. Enable streaming mode:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin scan /target --streaming-mode --batch-size 1000</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">3. Reduce hash cache size:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin config set hash_cache_size 256MB</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Archive Issues */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <RefreshCw className="h-5 w-5 mr-2 text-blue-400" />
              Archive & Recovery Issues
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-white mb-2">Issue: "Cannot restore files from archive"</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Archive restoration fails or files cannot be found in the archive.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Diagnostic & Recovery Steps</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-white mb-1">1. Verify archive integrity:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin archive verify --archive-path /path/to/archive</div>
                        <div className="text-white">duplicate-bin archive list --detailed --archive-path /path/to/archive</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">2. Search for files in archive:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin archive search --pattern "*.txt" --archive-path /path/to/archive</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">3. Force restore with recovery mode:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin restore --force --recovery-mode --archive-path /path/to/archive</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-white mb-2">Issue: "Archive corruption detected"</h4>
                <p className="text-gray-300 text-sm mb-3">
                  The archive appears to be corrupted or contains invalid data.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Recovery Procedures</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-white mb-1">1. Attempt automatic repair:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin archive repair --archive-path /path/to/archive --auto-fix</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">2. Extract recoverable files:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin archive extract-recoverable --archive-path /path/to/archive --output /recovery</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white mb-1">3. Use backup archive if available:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                        <div className="text-white">duplicate-bin restore --from-backup --backup-location /backup/archives</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Integration Issues */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <HelpCircle className="h-6 w-6 mr-3 text-purple-400" />
          System Integration Issues
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Database Connection Issues</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-white mb-2">Error: "Database connection failed"</h4>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Troubleshooting Steps</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <div className="font-medium text-white">1. Test database connectivity:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-1">
                        <div className="text-white">duplicate-bin db test-connection --verbose</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white">2. Check database configuration:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-1">
                        <div className="text-white">duplicate-bin config show database</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white">3. Reset database connection:</div>
                      <div className="bg-gray-900/50 rounded p-2 font-mono text-xs mt-1">
                        <div className="text-white">duplicate-bin db reconnect --reset-pool</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Network Storage Issues</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-white mb-2">Issue: "Network timeouts during scan"</h4>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Network Optimization</h5>
                  <div className="bg-gray-900/50 rounded p-3 font-mono text-sm">
                    <div className="text-green-400"># Increase network timeouts</div>
                    <div className="text-white">duplicate-bin config set network_timeout 60s</div>
                    <div className="text-white">duplicate-bin config set retry_count 5</div>
                    <div className="text-white">duplicate-bin config set retry_delay 10s</div>
                    <br />
                    <div className="text-green-400"># Reduce concurrent connections</div>
                    <div className="text-white">duplicate-bin config set max_concurrent_network_ops 2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Tools */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Diagnostic Tools & Commands</h2>
        
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Built-in Diagnostic Commands</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-3">System Health</h4>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm space-y-2">
                <div className="text-green-400"># Comprehensive system check</div>
                <div className="text-white">duplicate-bin doctor --all</div>
                <br />
                <div className="text-green-400"># Performance benchmark</div>
                <div className="text-white">duplicate-bin benchmark --quick</div>
                <br />
                <div className="text-green-400"># Resource usage analysis</div>
                <div className="text-white">duplicate-bin resources --monitor 60s</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Configuration & Logs</h4>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm space-y-2">
                <div className="text-green-400"># Validate configuration</div>
                <div className="text-white">duplicate-bin config validate --fix-issues</div>
                <br />
                <div className="text-green-400"># View recent logs</div>
                <div className="text-white">duplicate-bin logs --tail 100 --level error</div>
                <br />
                <div className="text-green-400"># Export diagnostic data</div>
                <div className="text-white">duplicate-bin export-diagnostics --output /tmp/diag.zip</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Help */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Getting Additional Help</h2>
        
        <div className="space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Before Contacting Support</h3>
            <p className="text-gray-300 mb-4">
              Gather this information to help support resolve your issue quickly:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># Generate support bundle</div>
              <div className="text-white">duplicate-bin support-bundle --include-logs --include-config --output support.zip</div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-white mb-2">Include This Information:</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• DuplicateBin version and build</li>
                  <li>• Operating system and version</li>
                  <li>• Error messages and log excerpts</li>
                  <li>• Steps to reproduce the issue</li>
                  <li>• System specifications (CPU, RAM, storage)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Support Channels:</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• GitHub Issues (bugs and feature requests)</li>
                  <li>• Community Forum (general questions)</li>
                  <li>• Email Support (enterprise customers)</li>
                  <li>• Documentation and FAQ</li>
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
          Continue learning about DuplicateBin with these helpful resources:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="/docs/guides/best-practices" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Best Practices
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
          <a 
            href="/docs/guides/workflows" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Common Workflows
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}