import { ArrowRight, Star, Shield, Zap, CheckCircle, AlertTriangle, Target, TrendingUp } from 'lucide-react'

export function BestPracticesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Guides</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Best Practices</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Best Practices</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Proven best practices for using DuplicateBin effectively and safely. Learn from real-world experience 
          to maximize efficiency, ensure data safety, and avoid common pitfalls in duplicate file management.
        </p>
      </div>

      {/* Best Practices Overview */}
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Star className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Core Principles</h3>
            <p className="text-gray-300 mb-4">
              Follow these fundamental principles for successful duplicate file management:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-green-400 font-semibold mb-1">Safety First</div>
                <div className="text-gray-300">Always archive before delete</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-blue-400 font-semibold mb-1">Start Small</div>
                <div className="text-gray-300">Begin with test directories</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-purple-400 font-semibold mb-1">Verify Results</div>
                <div className="text-gray-300">Always check before cleanup</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-semibold mb-1">Document Process</div>
                <div className="text-gray-300">Keep records of operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Shield className="h-6 w-6 mr-3 text-green-400" />
          Safety & Security Best Practices
        </h2>

        <div className="space-y-6">
          {/* Pre-Scan Safety */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Pre-Scan Safety Checklist</h3>
            <p className="text-gray-300 mb-4">
              Always complete this checklist before running any duplicate detection scan:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">System Preparation</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Create full system backup</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Verify available disk space (20% free minimum)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Close applications using target directories</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Test archive location accessibility</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Configuration Verification</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Review protected paths configuration</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Confirm safety level settings</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Validate exclusion patterns</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Enable operation logging</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># Pre-scan safety verification</div>
              <div className="text-white">duplicate-bin safety-check --path /target/directory</div>
              <div className="text-white">duplicate-bin config verify --safety-level conservative</div>
              <div className="text-white">duplicate-bin test-archive --archive-path /safe/archive</div>
            </div>
          </div>

          {/* Archive Management */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Archive Management Best Practices</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Archive Location Strategy</h4>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-green-400 mb-2">Recommended Locations</h5>
                      <ul className="space-y-1 text-gray-300">
                        <li>• Separate physical drive</li>
                        <li>• Network attached storage</li>
                        <li>• Cloud storage with sync</li>
                        <li>• External backup drive</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-400 mb-2">Avoid These Locations</h5>
                      <ul className="space-y-1 text-gray-300">
                        <li>• Same drive as source files</li>
                        <li>• Temporary directories</li>
                        <li>• System directories</li>
                        <li>• Shared network drives without backup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Archive Retention Policy</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Recommended retention configuration</div>
                  <div className="text-white">duplicate-bin config set archive_retention_policy tiered</div>
                  <div className="text-white">duplicate-bin config set archive_retention_immediate 30d</div>
                  <div className="text-white">duplicate-bin config set archive_retention_extended 1y</div>
                  <div className="text-white">duplicate-bin config set archive_compression true</div>
                  <div className="text-white">duplicate-bin config set archive_encryption true</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Zap className="h-6 w-6 mr-3 text-yellow-400" />
          Performance Optimization
        </h2>

        <div className="space-y-6">
          {/* Scan Optimization */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Scan Optimization Strategies</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">File Size Filtering</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Focus on files that provide the most storage savings:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-green-400"># Focus on larger files first</div>
                  <div className="text-white">duplicate-bin scan /data \</div>
                  <div className="text-white">  --min-size 10MB \</div>
                  <div className="text-white">  --sort-by-size desc</div>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  Start with 10MB+ files for maximum impact
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">File Type Prioritization</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Target file types most likely to have duplicates:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-green-400"># High-duplicate file types</div>
                  <div className="text-white">duplicate-bin scan /data \</div>
                  <div className="text-white">  --file-types "jpg,mp4,pdf,zip" \</div>
                  <div className="text-white">  --priority-types</div>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  Media and archive files often have duplicates
                </div>
              </div>
            </div>
          </div>

          {/* Resource Management */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Resource Management</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">CPU and Memory Optimization</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Optimize for your system</div>
                  <div className="text-white">duplicate-bin config set threads auto</div>
                  <div className="text-white">duplicate-bin config set memory_limit 4GB</div>
                  <div className="text-white">duplicate-bin config set cpu_priority normal</div>
                  <div className="text-white">duplicate-bin config set io_priority low</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-blue-400 mb-2">Light System Load</h5>
                  <div className="text-sm text-gray-300">
                    <div>Threads: CPU cores × 2</div>
                    <div>Memory: 50% of available</div>
                    <div>I/O Priority: Normal</div>
                  </div>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-yellow-400 mb-2">Heavy System Load</h5>
                  <div className="text-sm text-gray-300">
                    <div>Threads: CPU cores ÷ 2</div>
                    <div>Memory: 25% of available</div>
                    <div>I/O Priority: Low</div>
                  </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-medium text-green-400 mb-2">Dedicated System</h5>
                  <div className="text-sm text-gray-300">
                    <div>Threads: CPU cores × 1.5</div>
                    <div>Memory: 75% of available</div>
                    <div>I/O Priority: High</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Target className="h-6 w-6 mr-3 text-purple-400" />
          Operational Excellence
        </h2>

        <div className="space-y-6">
          {/* Planning and Scheduling */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Planning & Scheduling</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Optimal Timing</h4>
                <div className="space-y-3">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <h5 className="font-medium text-green-400 mb-1">Best Times to Scan</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Off-peak business hours</li>
                      <li>• Weekends for large operations</li>
                      <li>• After system backups complete</li>
                      <li>• During maintenance windows</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <h5 className="font-medium text-red-400 mb-1">Avoid These Times</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• During active development</li>
                      <li>• Peak business hours</li>
                      <li>• During system updates</li>
                      <li>• Before important deadlines</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Scheduling Strategy</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Recommended schedule</div>
                  <div className="text-white"># Daily quick scans</div>
                  <div className="text-white">0 2 * * * duplicate-bin scan --quick</div>
                  <br />
                  <div className="text-white"># Weekly full scans</div>
                  <div className="text-white">0 1 * * 0 duplicate-bin scan --full</div>
                  <br />
                  <div className="text-white"># Monthly deep analysis</div>
                  <div className="text-white">0 0 1 * * duplicate-bin analyze --deep</div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring and Alerting */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Monitoring & Alerting</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Key Metrics to Monitor</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <h5 className="font-medium text-white mb-2">Performance Metrics</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Scan completion time</li>
                      <li>• Files processed per minute</li>
                      <li>• Memory usage patterns</li>
                      <li>• I/O wait times</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <h5 className="font-medium text-white mb-2">Business Metrics</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Storage space recovered</li>
                      <li>• Duplicate detection rate</li>
                      <li>• Archive growth rate</li>
                      <li>• Cost savings achieved</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Alert Configuration</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Configure intelligent alerts</div>
                  <div className="text-white">duplicate-bin alerts set --metric "scan_failure" --action email</div>
                  <div className="text-white">duplicate-bin alerts set --metric "storage_savings" --threshold 1GB</div>
                  <div className="text-white">duplicate-bin alerts set --metric "performance_degradation" --threshold 50%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <TrendingUp className="h-6 w-6 mr-3 text-blue-400" />
          Team Collaboration Best Practices
        </h2>

        <div className="space-y-6">
          {/* Communication */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Communication & Coordination</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Before Operations</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Notify affected teams 24-48 hours in advance</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Share scan scope and expected duration</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Establish rollback procedures</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Get necessary approvals</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">During Operations</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Provide regular progress updates</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Monitor for issues and user reports</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Be available for immediate response</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Document any unexpected findings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Documentation Standards</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Operation Documentation Template</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 text-sm">
                  <div className="text-gray-300 space-y-2">
                    <div><strong className="text-white">Operation ID:</strong> DEDUP-2024-001</div>
                    <div><strong className="text-white">Date/Time:</strong> 2024-02-03 02:00 UTC</div>
                    <div><strong className="text-white">Scope:</strong> /data/projects (500GB, ~2M files)</div>
                    <div><strong className="text-white">Operator:</strong> john.doe@company.com</div>
                    <div><strong className="text-white">Approver:</strong> storage-team@company.com</div>
                    <div><strong className="text-white">Safety Level:</strong> Conservative</div>
                    <div><strong className="text-white">Archive Location:</strong> /backup/archive/2024-02-03</div>
                    <div><strong className="text-white">Expected Duration:</strong> 4-6 hours</div>
                    <div><strong className="text-white">Rollback Plan:</strong> Restore from archive within 2 hours</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Post-Operation Report</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Generate comprehensive report</div>
                  <div className="text-white">duplicate-bin report generate \</div>
                  <div className="text-white">  --operation-id DEDUP-2024-001 \</div>
                  <div className="text-white">  --include-metrics \</div>
                  <div className="text-white">  --include-files-affected \</div>
                  <div className="text-white">  --format pdf \</div>
                  <div className="text-white">  --output /reports/DEDUP-2024-001.pdf</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Common Pitfalls to Avoid</h2>
        
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Critical Mistakes to Avoid</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-400 mb-2">Never Do This</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Skip the archive step and delete directly</li>
                      <li>• Run scans on system directories without protection</li>
                      <li>• Ignore safety warnings and confirmations</li>
                      <li>• Operate without proper backups</li>
                      <li>• Use aggressive settings on production systems</li>
                      <li>• Ignore performance impact on running services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-400 mb-2">Always Do This Instead</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Use archive-first workflow consistently</li>
                      <li>• Configure and respect protected paths</li>
                      <li>• Read and understand all warnings</li>
                      <li>• Maintain current system backups</li>
                      <li>• Start with conservative settings</li>
                      <li>• Monitor system performance during operations</li>
                    </ul>
                  </div>
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
          Continue improving your DuplicateBin expertise:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="/docs/guides/workflows" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Common Workflows
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
          <a 
            href="/docs/guides/troubleshooting" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Troubleshooting
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}