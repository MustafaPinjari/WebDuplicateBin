import { ArrowRight, Code, Key, Globe, Database, CheckCircle, AlertTriangle } from 'lucide-react'

export function RestApiPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>API & Integrations</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">REST API</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">REST API</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Integrate DuplicateBin into your applications and workflows with our comprehensive REST API. 
          Programmatically manage scans, retrieve results, and automate duplicate file management at scale.
        </p>
      </div>

      {/* Quick Start */}
      <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Code className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
            <p className="text-gray-300 mb-4">
              Get started with the DuplicateBin API in minutes:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># Get your API key</div>
              <div className="text-white">curl -X POST https://api.duplicatebin.com/auth/login \</div>
              <div className="text-white">  -H "Content-Type: application/json" \</div>
              <div className="text-white">  -d '&#123;"email":"user@example.com","password":"password"&#125;'</div>
              <br />
              <div className="text-green-400"># Start a scan</div>
              <div className="text-white">curl -X POST https://api.duplicatebin.com/v1/scans \</div>
              <div className="text-white">  -H "Authorization: Bearer YOUR_API_KEY" \</div>
              <div className="text-white">  -H "Content-Type: application/json" \</div>
              <div className="text-white">  -d '&#123;"path":"/data","name":"My Scan"&#125;'</div>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Key className="h-6 w-6 mr-3 text-green-400" />
          Authentication
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">API Key Authentication</h3>
            <p className="text-gray-300 mb-4">
              All API requests require authentication using Bearer tokens. Include your API key in the Authorization header:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-white">Authorization: Bearer YOUR_API_KEY</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Getting an API Key</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>1. Log in to your DuplicateBin account</div>
                  <div>2. Navigate to Settings → API Keys</div>
                  <div>3. Click "Generate New Key"</div>
                  <div>4. Copy and securely store your key</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Security Best Practices</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Store keys securely (environment variables)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Rotate keys regularly
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Use HTTPS for all requests
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Implement proper error handling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Base URL & Endpoints */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Globe className="h-6 w-6 mr-3 text-blue-400" />
          Base URL & Endpoints
        </h2>

        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-semibold text-white mb-4">Base URL</h3>
          <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
            <div className="text-white">https://api.duplicatebin.com/v1</div>
          </div>
          <p className="text-gray-300 text-sm">
            All API endpoints are relative to this base URL. The current API version is v1.
          </p>
        </div>

        {/* Core Endpoints */}
        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Core Endpoints</h3>
            
            <div className="space-y-4">
              {/* Scans Endpoint */}
              <div className="border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">Scans</h4>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Core</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono mr-3">POST</span>
                    <span className="text-gray-300">/scans</span>
                    <span className="text-gray-500 ml-auto">Create new scan</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-mono mr-3">GET</span>
                    <span className="text-gray-300">/scans</span>
                    <span className="text-gray-500 ml-auto">List all scans</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-mono mr-3">GET</span>
                    <span className="text-gray-300">/scans/&#123;id&#125;</span>
                    <span className="text-gray-500 ml-auto">Get scan details</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs font-mono mr-3">DELETE</span>
                    <span className="text-gray-300">/scans/&#123;id&#125;</span>
                    <span className="text-gray-500 ml-auto">Delete scan</span>
                  </div>
                </div>
              </div>

              {/* Results Endpoint */}
              <div className="border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">Results</h4>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Data</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-mono mr-3">GET</span>
                    <span className="text-gray-300">/scans/&#123;id&#125;/results</span>
                    <span className="text-gray-500 ml-auto">Get duplicate results</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-mono mr-3">GET</span>
                    <span className="text-gray-300">/scans/&#123;id&#125;/export</span>
                    <span className="text-gray-500 ml-auto">Export results (CSV/JSON)</span>
                  </div>
                </div>
              </div>

              {/* Actions Endpoint */}
              <div className="border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">Actions</h4>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">Operations</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono mr-3">POST</span>
                    <span className="text-gray-300">/actions/archive</span>
                    <span className="text-gray-500 ml-auto">Archive duplicate files</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono mr-3">POST</span>
                    <span className="text-gray-300">/actions/restore</span>
                    <span className="text-gray-500 ml-auto">Restore archived files</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request/Response Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Database className="h-6 w-6 mr-3 text-purple-400" />
          Request & Response Examples
        </h2>

        <div className="space-y-6">
          {/* Create Scan Example */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Create a New Scan</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Request</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">POST /v1/scans</div>
                  <div className="text-gray-400">Content-Type: application/json</div>
                  <div className="text-gray-400">Authorization: Bearer YOUR_API_KEY</div>
                  <br />
                  <div className="text-white">{`{
  "name": "Home Directory Scan",
  "path": "/home/user/Documents",
  "options": {
    "min_size": 1024,
    "max_size": null,
    "file_types": ["jpg", "png", "pdf", "mp4"],
    "exclude_paths": ["/home/user/Documents/temp"],
    "deep_scan": true
  }
}`}</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Response</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">201 Created</div>
                  <br />
                  <div className="text-white">{`{
  "id": "scan_123456789",
  "name": "Home Directory Scan",
  "status": "queued",
  "created_at": "2024-02-03T10:30:00Z",
  "path": "/home/user/Documents",
  "progress": {
    "files_scanned": 0,
    "total_files": null,
    "percentage": 0
  },
  "estimated_completion": null
}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Get Results Example */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Get Scan Results</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Request</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">GET /v1/scans/scan_123456789/results</div>
                  <div className="text-gray-400">Authorization: Bearer YOUR_API_KEY</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Response</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">200 OK</div>
                  <br />
                  <div className="text-white">{`{
  "scan_id": "scan_123456789",
  "total_duplicates": 156,
  "total_size_saved": 2147483648,
  "duplicate_groups": [
    {
      "id": "group_001",
      "hash": "sha256:abc123...",
      "size": 1048576,
      "count": 3,
      "files": [
        {
          "path": "/home/user/Documents/photo1.jpg",
          "size": 1048576,
          "modified": "2024-01-15T14:30:00Z",
          "is_original": true
        },
        {
          "path": "/home/user/Documents/backup/photo1.jpg",
          "size": 1048576,
          "modified": "2024-01-15T14:30:00Z",
          "is_original": false
        }
      ]
    }
  ]
}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Error Handling</h2>
        
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-400 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">HTTP Status Codes</h3>
              <p className="text-gray-300 mb-4">
                The API uses standard HTTP status codes to indicate success or failure:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Success Codes</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-400">200 OK</span>
                      <span className="text-gray-300">Request successful</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-400">201 Created</span>
                      <span className="text-gray-300">Resource created</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-400">204 No Content</span>
                      <span className="text-gray-300">Successful deletion</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Error Codes</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-red-400">400 Bad Request</span>
                      <span className="text-gray-300">Invalid request</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-400">401 Unauthorized</span>
                      <span className="text-gray-300">Invalid API key</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-400">404 Not Found</span>
                      <span className="text-gray-300">Resource not found</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-400">429 Too Many Requests</span>
                      <span className="text-gray-300">Rate limit exceeded</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold text-white mb-2">Error Response Format</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-white">{`{
  "error": {
    "code": "INVALID_PATH",
    "message": "The specified path does not exist or is not accessible",
    "details": {
      "path": "/invalid/path",
      "suggestion": "Check path permissions and existence"
    }
  }
}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Rate Limits</h2>
        
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            API requests are rate-limited to ensure fair usage and system stability:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-900/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">1000</div>
              <div className="text-gray-300 text-sm">Requests per hour</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">10</div>
              <div className="text-gray-300 text-sm">Concurrent scans</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">100MB</div>
              <div className="text-gray-300 text-sm">Max request size</div>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Rate limit headers are included in all responses: <code className="bg-gray-800 px-2 py-1 rounded">X-RateLimit-Remaining</code>, 
            <code className="bg-gray-800 px-2 py-1 rounded ml-1">X-RateLimit-Reset</code>
          </p>
        </div>
      </section>

      {/* SDKs and Libraries */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">SDKs & Libraries</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Python SDK</h3>
            <p className="text-gray-400 text-sm mb-4">Official Python library for easy integration</p>
            <div className="bg-gray-900/50 rounded p-3 font-mono text-sm">
              <div className="text-white">pip install duplicatebin-sdk</div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Node.js SDK</h3>
            <p className="text-gray-400 text-sm mb-4">JavaScript/TypeScript library for Node.js</p>
            <div className="bg-gray-900/50 rounded p-3 font-mono text-sm">
              <div className="text-white">npm install @duplicatebin/sdk</div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Go SDK</h3>
            <p className="text-gray-400 text-sm mb-4">Go library for high-performance applications</p>
            <div className="bg-gray-900/50 rounded p-3 font-mono text-sm">
              <div className="text-white">go get github.com/duplicatebin/go-sdk</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Explore more integration options and advanced features:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="/docs/api/webhooks" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Webhooks
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
          <a 
            href="/docs/api/databases" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Database Backends
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}