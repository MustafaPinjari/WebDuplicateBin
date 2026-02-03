import { ArrowRight, Database, Server, Layers, Settings, CheckCircle, AlertTriangle, Zap } from 'lucide-react'

export function DatabaseBackendsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>API & Integrations</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Database Backends</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Database Backends</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Configure custom database backends for storing scan results, metadata, and system data. 
          Support for PostgreSQL, MySQL, MongoDB, and enterprise database solutions with high availability and scalability.
        </p>
      </div>

      {/* Supported Databases */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Database className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Supported Database Systems</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin supports multiple database backends for different use cases and scale requirements:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-blue-400 font-semibold mb-1">PostgreSQL</div>
                <div className="text-gray-300">Recommended</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-orange-400 font-semibold mb-1">MySQL</div>
                <div className="text-gray-300">High performance</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-green-400 font-semibold mb-1">MongoDB</div>
                <div className="text-gray-300">Document store</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-purple-400 font-semibold mb-1">SQLite</div>
                <div className="text-gray-300">Embedded</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Settings className="h-6 w-6 mr-3 text-green-400" />
          Database Configuration
        </h2>

        <div className="space-y-6">
          {/* PostgreSQL */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              PostgreSQL Configuration
            </h3>
            <p className="text-gray-300 mb-4">
              Recommended for production environments with advanced features and excellent performance:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Connection Configuration</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># config/database.yml</div>
                  <div className="text-white">{`database:
  type: postgresql
  host: localhost
  port: 5432
  database: duplicatebin_production
  username: duplicatebin_user
  password: secure_password
  
  # Connection pool settings
  pool_size: 20
  max_connections: 100
  connection_timeout: 30s
  
  # Performance tuning
  statement_timeout: 300s
  lock_timeout: 30s
  
  # SSL configuration
  ssl_mode: require
  ssl_cert: /path/to/client-cert.pem
  ssl_key: /path/to/client-key.pem
  ssl_ca: /path/to/ca-cert.pem`}</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Optimization Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-white mb-1">Performance</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Enable connection pooling</li>
                      <li>• Configure appropriate work_mem</li>
                      <li>• Set shared_buffers to 25% of RAM</li>
                      <li>• Enable query plan caching</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Reliability</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Configure WAL archiving</li>
                      <li>• Set up streaming replication</li>
                      <li>• Enable point-in-time recovery</li>
                      <li>• Regular VACUUM and ANALYZE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MySQL */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
              MySQL Configuration
            </h3>
            <p className="text-gray-300 mb-4">
              High-performance option with excellent compatibility and mature ecosystem:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># config/database.yml</div>
              <div className="text-white">{`database:
  type: mysql
  host: localhost
  port: 3306
  database: duplicatebin_production
  username: duplicatebin_user
  password: secure_password
  charset: utf8mb4
  collation: utf8mb4_unicode_ci
  
  # InnoDB settings
  innodb_buffer_pool_size: 2G
  innodb_log_file_size: 256M
  innodb_flush_log_at_trx_commit: 1
  
  # Connection settings
  max_connections: 200
  connect_timeout: 10
  wait_timeout: 600
  interactive_timeout: 600`}</div>
            </div>
          </div>

          {/* MongoDB */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              MongoDB Configuration
            </h3>
            <p className="text-gray-300 mb-4">
              Document-based storage ideal for flexible schemas and horizontal scaling:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># config/database.yml</div>
              <div className="text-white">{`database:
  type: mongodb
  uri: mongodb://username:password@localhost:27017/duplicatebin_production
  
  # Replica set configuration
  replica_set: rs0
  read_preference: secondaryPreferred
  write_concern:
    w: majority
    j: true
    wtimeout: 5000
  
  # Connection pool
  max_pool_size: 50
  min_pool_size: 5
  max_idle_time: 300000
  
  # Indexes for performance
  auto_create_indexes: true
  index_background: true`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Layers className="h-6 w-6 mr-3 text-purple-400" />
          Schema Management
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Database Schema</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin automatically manages database schema creation and migrations:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Core Tables/Collections</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <h5 className="font-medium text-white mb-1">scans</h5>
                    <p className="text-gray-400">Scan metadata and configuration</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <h5 className="font-medium text-white mb-1">files</h5>
                    <p className="text-gray-400">File information and hashes</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <h5 className="font-medium text-white mb-1">duplicates</h5>
                    <p className="text-gray-400">Duplicate file relationships</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <h5 className="font-medium text-white mb-1">archives</h5>
                    <p className="text-gray-400">Archived file tracking</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Migration Commands</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Initialize database schema</div>
                  <div className="text-white">duplicate-bin db init</div>
                  <br />
                  <div className="text-green-400"># Run pending migrations</div>
                  <div className="text-white">duplicate-bin db migrate</div>
                  <br />
                  <div className="text-green-400"># Check migration status</div>
                  <div className="text-white">duplicate-bin db status</div>
                  <br />
                  <div className="text-green-400"># Rollback last migration</div>
                  <div className="text-white">duplicate-bin db rollback</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Index Optimization</h3>
            <p className="text-gray-300 mb-4">
              Proper indexing is crucial for performance with large datasets:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># PostgreSQL index examples</div>
              <div className="text-white">{`CREATE INDEX CONCURRENTLY idx_files_hash ON files(hash);
CREATE INDEX CONCURRENTLY idx_files_size ON files(size);
CREATE INDEX CONCURRENTLY idx_files_path ON files(path);
CREATE INDEX CONCURRENTLY idx_scans_created_at ON scans(created_at);
CREATE INDEX CONCURRENTLY idx_duplicates_scan_id ON duplicates(scan_id);`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* High Availability */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Server className="h-6 w-6 mr-3 text-blue-400" />
          High Availability & Scaling
        </h2>

        <div className="space-y-6">
          {/* Replication */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Database Replication</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Master-Slave Setup</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Configure read replicas for improved performance:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-white">{`# Primary database (writes)
primary:
  host: db-primary.company.com
  port: 5432
  
# Read replicas (reads)
replicas:
  - host: db-replica-1.company.com
    port: 5432
    weight: 1
  - host: db-replica-2.company.com
    port: 5432
    weight: 1`}</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Failover Configuration</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Automatic failover for high availability:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-white">{`failover:
  enabled: true
  check_interval: 30s
  timeout: 10s
  max_retries: 3
  
  # Automatic promotion
  auto_promote: true
  promote_timeout: 60s`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sharding */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Database Sharding</h3>
            <p className="text-gray-300 mb-4">
              Horizontal scaling for massive datasets using database sharding:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Sharding configuration</div>
              <div className="text-white">{`sharding:
  enabled: true
  strategy: hash  # hash, range, or directory
  shard_key: scan_id
  
  shards:
    shard_1:
      host: db-shard-1.company.com
      database: duplicatebin_shard_1
      range: [0, 1000000]
      
    shard_2:
      host: db-shard-2.company.com
      database: duplicatebin_shard_2
      range: [1000001, 2000000]
      
    shard_3:
      host: db-shard-3.company.com
      database: duplicatebin_shard_3
      range: [2000001, null]`}</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <h5 className="font-medium text-white mb-1">Hash Sharding</h5>
                <p className="text-gray-400">Even distribution based on hash function</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <h5 className="font-medium text-white mb-1">Range Sharding</h5>
                <p className="text-gray-400">Data split by value ranges</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <h5 className="font-medium text-white mb-1">Directory Sharding</h5>
                <p className="text-gray-400">Lookup service for shard routing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Tuning */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Zap className="h-6 w-6 mr-3 text-yellow-400" />
          Performance Tuning
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Query Optimization</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Batch Operations</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Optimize bulk operations for better performance:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Batch configuration</div>
                  <div className="text-white">{`batch_operations:
  insert_batch_size: 1000
  update_batch_size: 500
  delete_batch_size: 200
  
  # Use prepared statements
  use_prepared_statements: true
  statement_cache_size: 100
  
  # Transaction settings
  transaction_timeout: 300s
  max_transaction_size: 10000`}</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Connection Pooling</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-white mb-1">Pool Settings</h5>
                    <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                      <div className="text-white">{`pool:
  min_size: 5
  max_size: 50
  acquire_timeout: 30s
  idle_timeout: 600s
  max_lifetime: 3600s`}</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Monitoring</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Active connections</li>
                      <li>• Pool utilization</li>
                      <li>• Wait times</li>
                      <li>• Connection errors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Performance Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  Monitor database performance and identify bottlenecks:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">Key Metrics</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Query execution time
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Connection pool usage
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Lock wait times
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Cache hit ratios
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">Monitoring Tools</h4>
                    <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                      <div className="text-green-400"># Enable query logging</div>
                      <div className="text-white">duplicate-bin db monitor --enable</div>
                      <br />
                      <div className="text-green-400"># View slow queries</div>
                      <div className="text-white">duplicate-bin db slow-queries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backup & Recovery */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Backup & Recovery</h2>
        
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Backup Strategies</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Automated Backups</h4>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400"># Backup configuration</div>
                <div className="text-white">{`backup:
  enabled: true
  schedule: "0 2 * * *"  # Daily at 2 AM
  retention: 30d
  
  # Full backup weekly
  full_backup:
    schedule: "0 1 * * 0"  # Sunday at 1 AM
    retention: 12w
  
  # Storage location
  storage:
    type: s3
    bucket: duplicatebin-backups
    encryption: true
    compression: gzip`}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Point-in-Time Recovery</h5>
                <p className="text-gray-400 text-sm">Restore to any point within retention period</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Cross-Region Replication</h5>
                <p className="text-gray-400 text-sm">Backup data replicated across regions</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Disaster Recovery</h5>
                <p className="text-gray-400 text-sm">Complete system recovery procedures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Complete your integration setup with these related topics:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="/docs/api/rest" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            REST API
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
          <a 
            href="/docs/api/webhooks" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Webhooks
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}