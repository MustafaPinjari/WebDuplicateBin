import { ArrowRight, Cpu, HardDrive, Zap, Settings, AlertTriangle, CheckCircle, Info } from 'lucide-react'

export function PerformanceTuningPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Advanced Usage</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Performance Tuning</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Performance Tuning</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Optimize DuplicateBin for maximum performance on your system. Learn how to configure scanning parameters, 
          memory usage, and processing threads for optimal duplicate detection speed.
        </p>
      </div>

      {/* Quick Performance Tips */}
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Zap className="h-6 w-6 text-green-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Quick Performance Boost</h3>
            <p className="text-gray-300 mb-4">
              For immediate performance improvements, try these settings:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># Increase thread count for multi-core systems</div>
              <div className="text-white">duplicate-bin scan --threads 8 /path/to/scan</div>
              <br />
              <div className="text-green-400"># Use memory-optimized mode for large datasets</div>
              <div className="text-white">duplicate-bin scan --memory-mode optimized /path/to/scan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Options */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Settings className="h-6 w-6 mr-3 text-purple-400" />
          Configuration Options
        </h2>

        <div className="space-y-8">
          {/* Thread Configuration */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Cpu className="h-5 w-5 mr-2 text-blue-400" />
              Thread Configuration
            </h3>
            <p className="text-gray-300 mb-4">
              Configure the number of processing threads based on your system capabilities:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Recommended Settings</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">2-4 CPU cores:</span>
                    <span className="text-white font-mono">--threads 2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">4-8 CPU cores:</span>
                    <span className="text-white font-mono">--threads 4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">8+ CPU cores:</span>
                    <span className="text-white font-mono">--threads 8</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Example Commands</h4>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-gray-400"># Auto-detect optimal threads</div>
                  <div className="text-white">duplicate-bin scan --threads auto</div>
                  <br />
                  <div className="text-gray-400"># Manual thread setting</div>
                  <div className="text-white">duplicate-bin scan --threads 6</div>
                </div>
              </div>
            </div>
          </div>

          {/* Memory Management */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <HardDrive className="h-5 w-5 mr-2 text-green-400" />
              Memory Management
            </h3>
            <p className="text-gray-300 mb-4">
              Optimize memory usage for different system configurations and dataset sizes:
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Conservative Mode</h4>
                  <p className="text-gray-400 text-sm mb-3">For systems with limited RAM (&lt;4GB)</p>
                  <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                    <div className="text-white">--memory-mode conservative</div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Balanced Mode</h4>
                  <p className="text-gray-400 text-sm mb-3">Default mode for most systems (4-16GB)</p>
                  <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                    <div className="text-white">--memory-mode balanced</div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Aggressive Mode</h4>
                  <p className="text-gray-400 text-sm mb-3">For high-memory systems (16GB+)</p>
                  <div className="bg-gray-900/50 rounded p-2 font-mono text-xs">
                    <div className="text-white">--memory-mode aggressive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Monitoring */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Performance Monitoring</h2>
        
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            Monitor your scan performance with built-in metrics and profiling tools:
          </p>
          
          <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
            <div className="text-green-400"># Enable detailed performance metrics</div>
            <div className="text-white">duplicate-bin scan --verbose --profile /path/to/scan</div>
            <br />
            <div className="text-green-400"># Monitor real-time progress</div>
            <div className="text-white">duplicate-bin scan --progress-bar --stats /path/to/scan</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Key Metrics to Monitor</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Files processed per second
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Memory usage patterns
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  CPU utilization per thread
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  I/O wait times
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Performance Indicators</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Excellent:</span>
                  <span className="text-green-400">&gt;1000 files/sec</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Good:</span>
                  <span className="text-yellow-400">500-1000 files/sec</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Needs tuning:</span>
                  <span className="text-red-400">&lt;500 files/sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Strategies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Optimization Strategies</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">SSD vs HDD Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Different storage types require different optimization approaches:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">SSD Systems</h4>
                    <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                      <div className="text-white">--io-mode parallel</div>
                      <div className="text-white">--threads 8</div>
                      <div className="text-white">--buffer-size large</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">HDD Systems</h4>
                    <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                      <div className="text-white">--io-mode sequential</div>
                      <div className="text-white">--threads 2</div>
                      <div className="text-white">--buffer-size small</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Common Performance Issues</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-1">High Memory Usage</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      If memory usage is too high, try reducing the hash cache size:
                    </p>
                    <div className="bg-gray-900/50 rounded p-2 font-mono text-sm">
                      <div className="text-white">duplicate-bin scan --hash-cache-size 256MB</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-1">Slow I/O Performance</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      For network drives or slow storage, use conservative settings:
                    </p>
                    <div className="bg-gray-900/50 rounded p-2 font-mono text-sm">
                      <div className="text-white">duplicate-bin scan --io-timeout 30s --retry-count 3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Advanced Configuration</h2>
        
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Configuration File</h3>
          <p className="text-gray-300 mb-4">
            Create a performance configuration file for consistent settings across scans:
          </p>
          
          <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
            <div className="text-gray-400"># ~/.config/duplicate-bin/performance.conf</div>
            <div className="text-white">threads = auto</div>
            <div className="text-white">memory_mode = balanced</div>
            <div className="text-white">io_mode = parallel</div>
            <div className="text-white">hash_cache_size = 512MB</div>
            <div className="text-white">buffer_size = 64KB</div>
            <div className="text-white">progress_bar = true</div>
            <div className="text-white">verbose = false</div>
          </div>
          
          <p className="text-gray-300 text-sm">
            Use the configuration file with: <code className="bg-gray-800 px-2 py-1 rounded text-white">duplicate-bin scan --config performance.conf</code>
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Now that you've optimized performance, learn about handling large file systems and network scanning:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="/docs/advanced/large-systems" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Large File Systems
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