import { ArrowRight, Wifi, Shield, Globe, Server, AlertTriangle, CheckCircle, Lock, Network } from 'lucide-react'

export function NetworkScanningPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Advanced Usage</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Network Scanning</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Network Scanning</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Scan files across network-attached storage, remote file systems, and distributed storage solutions. 
          Learn about authentication, performance optimization, and security considerations for network-based duplicate detection.
        </p>
      </div>

      {/* Network Support Overview */}
      <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Network className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Supported Network Protocols</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin supports scanning across various network storage protocols:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-blue-400 font-semibold mb-1">SMB/CIFS</div>
                <div className="text-gray-300">Windows shares</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-green-400 font-semibold mb-1">NFS</div>
                <div className="text-gray-300">Unix/Linux shares</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-purple-400 font-semibold mb-1">SFTP</div>
                <div className="text-gray-300">SSH file transfer</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-semibold mb-1">FTP/FTPS</div>
                <div className="text-gray-300">File transfer protocol</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication & Access */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Shield className="h-6 w-6 mr-3 text-green-400" />
          Authentication & Access
        </h2>

        <div className="space-y-6">
          {/* Credential Management */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Credential Management</h3>
            <p className="text-gray-300 mb-4">
              Securely store and manage network credentials for automated scanning:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">SMB/CIFS Authentication</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Store credentials securely</div>
                  <div className="text-white">duplicate-bin auth add-smb \</div>
                  <div className="text-white">  --server fileserver.company.com \</div>
                  <div className="text-white">  --username domain\\user \</div>
                  <div className="text-white">  --password-prompt</div>
                  <br />
                  <div className="text-green-400"># Scan with stored credentials</div>
                  <div className="text-white">duplicate-bin scan smb://fileserver.company.com/share</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">SSH Key Authentication</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Configure SSH key access</div>
                  <div className="text-white">duplicate-bin auth add-ssh \</div>
                  <div className="text-white">  --server remote-server.com \</div>
                  <div className="text-white">  --username scanuser \</div>
                  <div className="text-white">  --key-file ~/.ssh/id_rsa</div>
                  <br />
                  <div className="text-green-400"># Scan remote directory</div>
                  <div className="text-white">duplicate-bin scan sftp://remote-server.com/data</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Considerations */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start">
              <Lock className="h-6 w-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Security Best Practices</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-white mb-1">Credential Security</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Use dedicated service accounts with minimal permissions</li>
                      <li>• Enable credential encryption at rest</li>
                      <li>• Rotate credentials regularly</li>
                      <li>• Use SSH keys instead of passwords when possible</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-1">Network Security</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Use encrypted protocols (SFTP, FTPS, SMB3+)</li>
                      <li>• Scan during off-peak hours to minimize impact</li>
                      <li>• Configure firewall rules for scanning hosts</li>
                      <li>• Monitor network traffic for anomalies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Wifi className="h-6 w-6 mr-3 text-blue-400" />
          Network Configuration
        </h2>

        <div className="space-y-6">
          {/* Connection Settings */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Connection Optimization</h3>
            <p className="text-gray-300 mb-4">
              Configure network settings for optimal performance and reliability:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Connection Tuning</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Optimize for network scanning</div>
                  <div className="text-white">duplicate-bin scan \</div>
                  <div className="text-white">  --network-timeout 30s \</div>
                  <div className="text-white">  --retry-count 3 \</div>
                  <div className="text-white">  --concurrent-connections 4 \</div>
                  <div className="text-white">  --buffer-size 1MB \</div>
                  <div className="text-white">  smb://server/share</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Bandwidth Management</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Limit bandwidth usage</div>
                  <div className="text-white">duplicate-bin scan \</div>
                  <div className="text-white">  --bandwidth-limit 10MB/s \</div>
                  <div className="text-white">  --throttle-cpu 50% \</div>
                  <div className="text-white">  --schedule "02:00-06:00" \</div>
                  <div className="text-white">  nfs://nas.local/data</div>
                </div>
              </div>
            </div>
          </div>

          {/* Protocol-Specific Settings */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Protocol-Specific Configuration</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2">SMB/CIFS Optimization</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># SMB performance settings</div>
                  <div className="text-white">duplicate-bin scan \</div>
                  <div className="text-white">  --smb-version 3.0 \</div>
                  <div className="text-white">  --smb-dialect SMB3 \</div>
                  <div className="text-white">  --smb-cache-size 256MB \</div>
                  <div className="text-white">  smb://fileserver/department</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">NFS Optimization</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># NFS performance settings</div>
                  <div className="text-white">duplicate-bin scan \</div>
                  <div className="text-white">  --nfs-version 4.1 \</div>
                  <div className="text-white">  --nfs-read-size 1MB \</div>
                  <div className="text-white">  --nfs-cache-attrs 60s \</div>
                  <div className="text-white">  nfs://nas-server/export/data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Optimization */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Server className="h-6 w-6 mr-3 text-purple-400" />
          Performance Optimization
        </h2>

        <div className="space-y-6">
          {/* Caching Strategies */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Caching Strategies</h3>
            <p className="text-gray-300 mb-4">
              Implement intelligent caching to reduce network overhead:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Metadata Caching</h4>
                <div className="bg-gray-900/50 rounded-lg p-3 text-sm">
                  <div className="text-gray-300 mb-2">Cache file metadata locally to avoid repeated network calls:</div>
                  <div className="font-mono text-xs">
                    <div className="text-white">--metadata-cache /tmp/cache</div>
                    <div className="text-white">--cache-ttl 24h</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Hash Caching</h4>
                <div className="bg-gray-900/50 rounded-lg p-3 text-sm">
                  <div className="text-gray-300 mb-2">Store computed hashes to avoid re-processing:</div>
                  <div className="font-mono text-xs">
                    <div className="text-white">--hash-cache /var/cache/hashes</div>
                    <div className="text-white">--persistent-cache</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parallel Processing */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Parallel Network Operations</h3>
            <p className="text-gray-300 mb-4">
              Optimize concurrent network operations for maximum throughput:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Parallel network scanning configuration</div>
              <div className="text-white">duplicate-bin scan \</div>
              <div className="text-white">  --parallel-dirs 8 \</div>
              <div className="text-white">  --concurrent-files 16 \</div>
              <div className="text-white">  --network-workers 4 \</div>
              <div className="text-white">  --prefetch-depth 3 \</div>
              <div className="text-white">  smb://server1/share1 smb://server2/share2</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="font-semibold text-white mb-1">Directory Parallelism</div>
                <div className="text-gray-400">Scan multiple directories simultaneously</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="font-semibold text-white mb-1">File Parallelism</div>
                <div className="text-gray-400">Process multiple files concurrently</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="font-semibold text-white mb-1">Prefetching</div>
                <div className="text-gray-400">Pre-load file metadata ahead of processing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring & Troubleshooting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Globe className="h-6 w-6 mr-3 text-green-400" />
          Monitoring & Troubleshooting
        </h2>

        <div className="space-y-6">
          {/* Network Monitoring */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Network Performance Monitoring</h3>
            <p className="text-gray-300 mb-4">
              Monitor network performance and identify bottlenecks:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Enable network monitoring</div>
              <div className="text-white">duplicate-bin scan \</div>
              <div className="text-white">  --network-stats \</div>
              <div className="text-white">  --connection-log /var/log/network.log \</div>
              <div className="text-white">  --bandwidth-monitor \</div>
              <div className="text-white">  --latency-tracking \</div>
              <div className="text-white">  smb://remote-server/data</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Key Metrics</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Network throughput (MB/s)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Connection latency
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Error rates and retries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Active connections
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Alert Conditions</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-center">
                    <AlertTriangle className="h-3 w-3 text-yellow-400 mr-2" />
                    Throughput drops &gt; 50%
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-3 w-3 text-yellow-400 mr-2" />
                    Latency increases &gt; 2x
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-3 w-3 text-red-400 mr-2" />
                    Connection failures
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-3 w-3 text-red-400 mr-2" />
                    Authentication errors
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
              Common Network Issues
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-1">Connection Timeouts</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Increase timeout values and enable connection pooling:
                </p>
                <div className="bg-gray-900/50 rounded p-2 font-mono text-sm">
                  <div className="text-white">--network-timeout 60s --connection-pool-size 10</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-1">Slow Performance</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Optimize buffer sizes and reduce concurrent connections:
                </p>
                <div className="bg-gray-900/50 rounded p-2 font-mono text-sm">
                  <div className="text-white">--buffer-size 2MB --concurrent-connections 2</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-1">Authentication Failures</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Verify credentials and check domain/workgroup settings:
                </p>
                <div className="bg-gray-900/50 rounded p-2 font-mono text-sm">
                  <div className="text-white">duplicate-bin auth test smb://server/share</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Scenarios */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Advanced Network Scenarios</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Multi-Site Scanning</h3>
            <p className="text-gray-300 mb-4">
              Scan across multiple geographic locations and data centers:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># Multi-site configuration</div>
              <div className="text-white">duplicate-bin scan \</div>
              <div className="text-white">  --site-priority "local,regional,remote" \</div>
              <div className="text-white">  --cross-site-dedup \</div>
              <div className="text-white">  --site-bandwidth-limits "local:unlimited,remote:10MB/s" \</div>
              <div className="text-white">  smb://site1-nas/data smb://site2-nas/data nfs://site3-nas/data</div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Storage Integration</h3>
            <p className="text-gray-300 mb-4">
              Scan files stored in cloud storage services:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># Cloud storage scanning</div>
              <div className="text-white">duplicate-bin scan \</div>
              <div className="text-white">  --cloud-provider aws \</div>
              <div className="text-white">  --region us-east-1 \</div>
              <div className="text-white">  --storage-class "STANDARD,IA" \</div>
              <div className="text-white">  s3://my-bucket/documents/</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Explore more advanced DuplicateBin features and optimization techniques:
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
            href="/docs/advanced/large-systems" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Large File Systems
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}