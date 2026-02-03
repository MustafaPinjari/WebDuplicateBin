import { ArrowRight, Webhook, Shield, Zap, Settings, CheckCircle, AlertTriangle, Clock } from 'lucide-react'

export function WebhooksPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>API & Integrations</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Webhooks</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Webhooks</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Receive real-time notifications about scan progress, completion, and system events. 
          Build reactive workflows and integrate DuplicateBin events into your existing systems seamlessly.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Webhook className="h-6 w-6 text-purple-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">How Webhooks Work</h3>
            <p className="text-gray-300 mb-4">
              Webhooks allow DuplicateBin to send HTTP POST requests to your specified endpoints when events occur. 
              This enables real-time integration with your applications, monitoring systems, and workflows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-purple-400 font-semibold mb-1">Event Occurs</div>
                <div className="text-gray-300">Scan completes, error happens</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-blue-400 font-semibold mb-1">HTTP POST</div>
                <div className="text-gray-300">Sent to your endpoint</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-green-400 font-semibold mb-1">Your Action</div>
                <div className="text-gray-300">Process the event data</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Events */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Zap className="h-6 w-6 mr-3 text-yellow-400" />
          Supported Events
        </h2>

        <div className="space-y-6">
          {/* Scan Events */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Scan Events</h3>
            
            <div className="space-y-4">
              <div className="border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">scan.started</h4>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Real-time</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">Triggered when a new scan begins processing</p>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-white">{`{
  "event": "scan.started",
  "scan_id": "scan_123456789",
  "timestamp": "2024-02-03T10:30:00Z",
  "data": {
    "name": "Home Directory Scan",
    "path": "/home/user/Documents",
    "estimated_files": 15420
  }
}`}</div>
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">scan.progress</h4>
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">Periodic</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">Sent periodically during scan execution (configurable interval)</p>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-white">{`{
  "event": "scan.progress",
  "scan_id": "scan_123456789",
  "timestamp": "2024-02-03T10:35:00Z",
  "data": {
    "files_scanned": 7500,
    "total_files": 15420,
    "percentage": 48.6,
    "duplicates_found": 156,
    "estimated_completion": "2024-02-03T10:45:00Z"
  }
}`}</div>
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">scan.completed</h4>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Final</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">Triggered when scan finishes successfully</p>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-white">{`{
  "event": "scan.completed",
  "scan_id": "scan_123456789",
  "timestamp": "2024-02-03T10:42:00Z",
  "data": {
    "duration": 720,
    "files_scanned": 15420,
    "duplicates_found": 342,
    "total_size_saved": 2147483648,
    "results_url": "/v1/scans/scan_123456789/results"
  }
}`}</div>
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">scan.failed</h4>
                  <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">Error</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">Sent when a scan encounters an error and cannot complete</p>
                <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                  <div className="text-white">{`{
  "event": "scan.failed",
  "scan_id": "scan_123456789",
  "timestamp": "2024-02-03T10:35:00Z",
  "data": {
    "error_code": "PERMISSION_DENIED",
    "error_message": "Access denied to /restricted/folder",
    "files_scanned": 7500,
    "partial_results_available": true
  }
}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* System Events */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">System Events</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">system.maintenance</h4>
                <p className="text-gray-300 text-sm">Scheduled maintenance notifications</p>
              </div>
              
              <div className="border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">system.quota_warning</h4>
                <p className="text-gray-300 text-sm">Storage or API quota warnings</p>
              </div>
              
              <div className="border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">archive.created</h4>
                <p className="text-gray-300 text-sm">Files archived successfully</p>
              </div>
              
              <div className="border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">archive.restored</h4>
                <p className="text-gray-300 text-sm">Files restored from archive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Settings className="h-6 w-6 mr-3 text-blue-400" />
          Webhook Configuration
        </h2>

        <div className="space-y-6">
          {/* Setup */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Setting Up Webhooks</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">1. Create Webhook Endpoint</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Create a webhook endpoint in your DuplicateBin dashboard or via API:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">POST /v1/webhooks</div>
                  <div className="text-white">{`{
  "url": "https://your-app.com/webhooks/duplicatebin",
  "events": ["scan.completed", "scan.failed"],
  "secret": "your-webhook-secret",
  "active": true
}`}</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">2. Implement Endpoint Handler</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Create an HTTP endpoint to receive webhook payloads:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Python Flask example</div>
                  <div className="text-white">{`@app.route('/webhooks/duplicatebin', methods=['POST'])
def handle_webhook():
    payload = request.get_json()
    signature = request.headers.get('X-DuplicateBin-Signature')
    
    # Verify signature
    if not verify_signature(payload, signature, webhook_secret):
        return 'Invalid signature', 401
    
    # Process event
    event_type = payload['event']
    if event_type == 'scan.completed':
        handle_scan_completed(payload['data'])
    
    return 'OK', 200`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Security & Verification</h3>
                <p className="text-gray-300 mb-4">
                  Always verify webhook authenticity using the signature header:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">Signature Verification</h4>
                    <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-400"># Python example</div>
                      <div className="text-white">{`import hmac
import hashlib

def verify_signature(payload, signature, secret):
    expected = hmac.new(
        secret.encode('utf-8'),
        json.dumps(payload).encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(f"sha256={expected}", signature)`}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">Security Best Practices</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Always verify the signature header
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Use HTTPS endpoints only
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Implement idempotency for duplicate events
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Store webhook secrets securely
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery & Retry */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Clock className="h-6 w-6 mr-3 text-green-400" />
          Delivery & Retry Logic
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Delivery Guarantees</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Retry Policy</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Initial attempt:</span>
                    <span className="text-white">Immediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retry 1:</span>
                    <span className="text-white">30 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retry 2:</span>
                    <span className="text-white">5 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retry 3:</span>
                    <span className="text-white">30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Final retry:</span>
                    <span className="text-white">2 hours</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">Success Criteria</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    HTTP 200-299 response code
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Response within 30 seconds
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Valid SSL certificate (HTTPS)
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-3 w-3 text-yellow-400 mr-2" />
                    Timeouts trigger retry
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Monitoring Webhook Delivery</h3>
            <p className="text-gray-300 mb-4">
              Track webhook delivery status and debug issues through the dashboard or API:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400">GET /v1/webhooks/&#123;webhook_id&#125;/deliveries</div>
              <br />
              <div className="text-white">{`{
  "deliveries": [
    {
      "id": "delivery_123",
      "event": "scan.completed",
      "status": "delivered",
      "attempts": 1,
      "response_code": 200,
      "delivered_at": "2024-02-03T10:42:05Z"
    },
    {
      "id": "delivery_124",
      "event": "scan.failed",
      "status": "failed",
      "attempts": 5,
      "last_error": "Connection timeout",
      "next_retry": null
    }
  ]
}`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Testing Webhooks</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Test Your Webhook Endpoint</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Send Test Event</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Use the API to send a test webhook to verify your endpoint:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">POST /v1/webhooks/&#123;webhook_id&#125;/test</div>
                  <div className="text-white">{`{
  "event_type": "scan.completed"
}`}</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Local Testing with ngrok</h4>
                <p className="text-gray-300 text-sm mb-3">
                  For local development, use ngrok to expose your local server:
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Install and run ngrok</div>
                  <div className="text-white">ngrok http 3000</div>
                  <br />
                  <div className="text-green-400"># Use the HTTPS URL in webhook configuration</div>
                  <div className="text-white">https://abc123.ngrok.io/webhooks/duplicatebin</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Example Implementation</h3>
            <p className="text-gray-300 mb-4">
              Complete Node.js Express example for handling webhooks:
            </p>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-white">{`const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

app.post('/webhooks/duplicatebin', (req, res) => {
  const signature = req.headers['x-duplicatebin-signature'];
  const payload = JSON.stringify(req.body);
  
  // Verify signature
  const expectedSignature = crypto
    .createHmac('sha256', process.env.WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
  
  if (signature !== \`sha256=\${expectedSignature}\`) {
    return res.status(401).send('Invalid signature');
  }
  
  // Handle different event types
  const { event, data } = req.body;
  
  switch (event) {
    case 'scan.completed':
      console.log(\`Scan \${data.scan_id} completed with \${data.duplicates_found} duplicates\`);
      // Send notification, update database, etc.
      break;
      
    case 'scan.failed':
      console.error(\`Scan \${data.scan_id} failed: \${data.error_message}\`);
      // Alert administrators, log error, etc.
      break;
  }
  
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Explore more integration options and API features:
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