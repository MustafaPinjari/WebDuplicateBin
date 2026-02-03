import { ArrowRight, Database, HardDrive, Server, Layers, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react'

export function LargeFileSystemsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Advanced Usage</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Large File Systems</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Large File Systems</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Handle massive file systems with millions of files efficiently. Learn strategies for enterprise-scale 
          duplicate detection, memory management, and distributed processing across large storage infrastructures.
        </p>
      </div>

      {/* Scale Overview */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Database className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Scale Capabilities</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin is designed to handle enterprise-scale file systems:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">100M+</div>
                <div className="text-gray-300">Files</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">100TB+</div>
                <div className="text-gray-300">Storage</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">1000+</div>
                <div className="text-gray-300">Directories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation Strategies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Layers className="h-6 w-6 mr-3 text-green-400" />
          Preparation Strategies
        </h2>

        <div className="space-y-6">
          {/* System Requirements */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">System Requirements</h3>
            <p className="text-gray-300 mb-4">
              Recommended specifications for large-scale operations:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Minimum Requirements</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-white">16GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU Cores:</span>
                    <span className="text-white">8 cores</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage:</span>
                    <span className="text-white">SSD recommended</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Temp Space:</span>
                    <span className="text-white">10% of scan size</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Optimal Configuration</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-green-400">64GB+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU Cores:</span>
                    <span className="text-green-400">16+ cores</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage:</span>
                    <span className="text-green-400">NVMe SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network:</span>
                    <span className="text-green-400">10Gbps+ for NAS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pre-scan Analysis */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Pre-scan Analysis</h3>
            <p className="text-gray-300 mb-4">
              Analyze your file system before starting the main scan:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Get file system statistics</div>
              <div className="text-white">duplicate-bin analyze --stats /path/to/scan</div>
              <br />
              <div className="text-green-400"># Estimate scan time and resources</div>
              <div className="text-white">duplicate-bin analyze --estimate /path/to/scan</div>
              <br />
              <div className="text-green-400"># Check for potential issues</div>
              <div className="text-white">duplicate-bin analyze --health-check /path/to/scan</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Analysis Output</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Total file count estimation</li>
                  <li>• Size distribution analysis</li>
                  <li>• Directory depth mapping</li>
                  <li>• File type breakdown</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Resource Planning</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Memory requirements</li>
                  <li>• Estimated scan duration</li>
                  <li>• Temporary storage needs</li>
                  <li>• Network bandwidth usage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scanning Strategies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Server className="h-6 w-6 mr-3 text-blue-400" />
          Scanning Strategies
        </h2>

        <div className="space-y-6">
          {/* Incremental Scanning */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Incremental Scanning</h3>
            <p className="text-gray-300 mb-4">
              Break large scans into manageable chunks and track progress:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Directory-based Chunking</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Scan by top-level directories</div>
                  <div className="text-white">for dir in /data/*/; do</div>
                  <div className="text-white">  duplicate-bin scan --resume-db /tmp/scan.db "$dir"</div>
                  <div className="text-white">done</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Size-based Chunking</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Scan files by size ranges</div>
                  <div className="text-white">duplicate-bin scan --min-size 0 --max-size 1MB /data</div>
                  <div className="text-white">duplicate-bin scan --min-size 1MB --max-size 100MB /data</div>
                  <div className="text-white">duplicate-bin scan --min-size 100MB /data</div>
                </div>
              </div>
            </div>
          </div>

          {/* Distributed Processing */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Distributed Processing</h3>
            <p className="text-gray-300 mb-4">
              Scale across multiple machines for massive file systems:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Master Node Setup</h4>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-green-400"># Start coordination server</div>
                  <div className="text-white">duplicate-bin master --port 8080</div>
                  <div className="text-white">  --database /shared/scan.db</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Worker Node Setup</h4>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-green-400"># Connect worker nodes</div>
                  <div className="text-white">duplicate-bin worker</div>
                  <div className="text-white">  --master master-ip:8080</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <HardDrive className="h-6 w-6 mr-3 text-purple-400" />
          Memory Management
        </h2>

        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-300 mb-6">
            Optimize memory usage for large-scale operations:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Memory-Efficient Configuration</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400"># Large system optimized settings</div>
                <div className="text-white">duplicate-bin scan \</div>
                <div className="text-white">  --memory-mode streaming \</div>
                <div className="text-white">  --hash-cache-size 2GB \</div>
                <div className="text-white">  --batch-size 10000 \</div>
                <div className="text-white">  --temp-dir /fast-storage/tmp \</div>
                <div className="text-white">  /massive-dataset</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Streaming Mode</h4>
                <p className="text-gray-400 text-sm mb-2">
                  Process files in streams to minimize memory footprint
                </p>
                <div className="text-xs text-green-400">Memory: ~1-2GB</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Batch Processing</h4>
                <p className="text-gray-400 text-sm mb-2">
                  Process files in configurable batch sizes
                </p>
                <div className="text-xs text-yellow-400">Memory: ~4-8GB</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Full Memory</h4>
                <p className="text-gray-400 text-sm mb-2">
                  Load entire dataset for maximum speed
                </p>
                <div className="text-xs text-red-400">Memory: ~16GB+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring & Progress */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <TrendingUp className="h-6 w-6 mr-3 text-green-400" />
          Monitoring & Progress
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Real-time Monitoring</h3>
            <p className="text-gray-300 mb-4">
              Track progress and performance metrics during large scans:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Enable comprehensive monitoring</div>
              <div className="text-white">duplicate-bin scan \</div>
              <div className="text-white">  --progress-bar \</div>
              <div className="text-white">  --stats-interval 60s \</div>
              <div className="text-white">  --log-level info \</div>
              <div className="text-white">  --metrics-port 9090 \</div>
              <div className="text-white">  /large-dataset</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Key Metrics</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Files processed/remaining
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Processing speed (files/sec)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Memory usage trends
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Estimated completion time
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Alert Conditions</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-center">
                    <AlertCircle className="h-3 w-3 text-yellow-400 mr-2" />
                    Memory usage &gt; 90%
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-3 w-3 text-yellow-400 mr-2" />
                    Processing speed drops
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-3 w-3 text-red-400 mr-2" />
                    I/O errors detected
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-3 w-3 text-red-400 mr-2" />
                    Disk space low
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Resume Capability</h3>
            <p className="text-gray-300 mb-4">
              Large scans can be safely interrupted and resumed:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># Resume interrupted scan</div>
              <div className="text-white">duplicate-bin scan --resume /path/to/checkpoint.db /large-dataset</div>
              <br />
              <div className="text-green-400"># Create periodic checkpoints</div>
              <div className="text-white">duplicate-bin scan --checkpoint-interval 1h /large-dataset</div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              Do's
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Run pre-scan analysis first</li>
              <li>• Use incremental scanning for massive datasets</li>
              <li>• Monitor system resources continuously</li>
              <li>• Set up automated checkpoints</li>
              <li>• Use fast storage for temporary files</li>
              <li>• Plan for 10-20% overhead in time estimates</li>
            </ul>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
              Don'ts
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Don't scan during peak business hours</li>
              <li>• Don't run without sufficient free space</li>
              <li>• Don't ignore memory usage warnings</li>
              <li>• Don't skip the pre-scan analysis</li>
              <li>• Don't use network storage for temp files</li>
              <li>• Don't run multiple large scans simultaneously</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Continue learning about advanced DuplicateBin features:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="/docs/advanced/performance" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Performance Tuning
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
          <a 
            href="/docs/advanced/network-scanning" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Network Scanning
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}