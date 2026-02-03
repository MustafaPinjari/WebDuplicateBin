import { ArrowRight, Workflow, Play, CheckCircle, Clock, Users, Folder, Zap } from 'lucide-react'

export function CommonWorkflowsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Guides</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Common Workflows</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Common Workflows</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Step-by-step workflows for common DuplicateBin use cases. From basic duplicate cleanup to advanced 
          enterprise scenarios, learn proven workflows that maximize efficiency and safety.
        </p>
      </div>

      {/* Workflow Categories */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Workflow className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Workflow Categories</h3>
            <p className="text-gray-300 mb-4">
              Choose the workflow that best matches your use case and environment:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-blue-400 font-semibold mb-1">Personal</div>
                <div className="text-gray-300">Home directories</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-green-400 font-semibold mb-1">Team</div>
                <div className="text-gray-300">Shared workspaces</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-purple-400 font-semibold mb-1">Enterprise</div>
                <div className="text-gray-300">Large-scale systems</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-semibold mb-1">Automated</div>
                <div className="text-gray-300">Scheduled operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Workflows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Users className="h-6 w-6 mr-3 text-blue-400" />
          Personal Use Workflows
        </h2>

        <div className="space-y-6">
          {/* Basic Home Cleanup */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Play className="h-5 w-5 mr-2 text-green-400" />
              Basic Home Directory Cleanup
            </h3>
            <p className="text-gray-300 mb-4">
              Clean up duplicate files in your home directory safely and efficiently:
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-2">1</div>
                </div>
                <div className="lg:col-span-11">
                  <h4 className="font-semibold text-white mb-2">Initial Scan</h4>
                  <p className="text-gray-300 text-sm mb-2">Start with a conservative scan of your home directory:</p>
                  <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                    <div className="text-white">duplicate-bin scan ~/Documents ~/Pictures ~/Downloads \</div>
                    <div className="text-white">  --safety-level conservative \</div>
                    <div className="text-white">  --min-size 1MB \</div>
                    <div className="text-white">  --exclude "*.tmp,*.cache"</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-2">2</div>
                </div>
                <div className="lg:col-span-11">
                  <h4 className="font-semibold text-white mb-2">Review Results</h4>
                  <p className="text-gray-300 text-sm mb-2">Examine the scan results and identify safe duplicates:</p>
                  <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                    <div className="text-white">duplicate-bin results --scan-id scan_123 --interactive</div>
                    <div className="text-white">duplicate-bin results --scan-id scan_123 --group-by-size --show-paths</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-2">3</div>
                </div>
                <div className="lg:col-span-11">
                  <h4 className="font-semibold text-white mb-2">Safe Archive</h4>
                  <p className="text-gray-300 text-sm mb-2">Archive duplicates to a safe location:</p>
                  <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                    <div className="text-white">duplicate-bin archive --scan-id scan_123 \</div>
                    <div className="text-white">  --archive-path ~/DuplicateBin/Archive \</div>
                    <div className="text-white">  --keep-newest \</div>
                    <div className="text-white">  --confirm-each</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-2">4</div>
                </div>
                <div className="lg:col-span-11">
                  <h4 className="font-semibold text-white mb-2">Verify & Clean</h4>
                  <p className="text-gray-300 text-sm mb-2">Test your system and optionally clean the archive:</p>
                  <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-sm">
                    <div className="text-white"># Wait 1-2 weeks, then optionally clean</div>
                    <div className="text-white">duplicate-bin clean --archive-path ~/DuplicateBin/Archive \</div>
                    <div className="text-white">  --older-than 14d --confirm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Organization */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Play className="h-5 w-5 mr-2 text-purple-400" />
              Photo & Media Organization
            </h3>
            <p className="text-gray-300 mb-4">
              Organize and deduplicate your photo and media collections:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Scan photos with metadata comparison</div>
              <div className="text-white">duplicate-bin scan ~/Pictures \</div>
              <div className="text-white">  --file-types "jpg,jpeg,png,raw,mp4,mov" \</div>
              <div className="text-white">  --compare-metadata \</div>
              <div className="text-white">  --ignore-minor-differences</div>
              <br />
              <div className="text-green-400"># Organize by keeping originals in main folders</div>
              <div className="text-white">duplicate-bin archive --scan-id scan_456 \</div>
              <div className="text-white">  --keep-in-path "~/Pictures/Originals" \</div>
              <div className="text-white">  --archive-path "~/Pictures/Duplicates"</div>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="font-medium text-blue-400 mb-2">Pro Tips for Photos</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Use metadata comparison for similar photos with different names</li>
                <li>• Keep originals in clearly marked directories</li>
                <li>• Consider date-based organization before deduplication</li>
                <li>• Always backup before major photo cleanup operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Workflows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Folder className="h-6 w-6 mr-3 text-green-400" />
          Team & Shared Workspace Workflows
        </h2>

        <div className="space-y-6">
          {/* Shared Project Cleanup */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Shared Project Directory Cleanup</h3>
            <p className="text-gray-300 mb-4">
              Coordinate team cleanup of shared project directories with proper permissions and approval workflows:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Setup Team Permissions</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Create team role with limited permissions</div>
                  <div className="text-white">duplicate-bin role create --name "project-team" \</div>
                  <div className="text-white">  --permissions "scan:create,scan:read,archive:create" \</div>
                  <div className="text-white">  --paths "/shared/projects/*"</div>
                  <br />
                  <div className="text-green-400"># Require approval for archive operations</div>
                  <div className="text-white">duplicate-bin config set require_approval_for_archive true</div>
                  <div className="text-white">duplicate-bin config set approval_roles "project-lead,admin"</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Coordinated Scan Process</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Team member initiates scan</div>
                  <div className="text-white">duplicate-bin scan /shared/projects/ProjectX \</div>
                  <div className="text-white">  --exclude "node_modules,*.git,build" \</div>
                  <div className="text-white">  --notify-team \</div>
                  <div className="text-white">  --require-approval</div>
                  <br />
                  <div className="text-green-400"># Project lead reviews and approves</div>
                  <div className="text-white">duplicate-bin approve --scan-id scan_789 --comment "Safe to proceed"</div>
                </div>
              </div>
            </div>
          </div>

          {/* Version Control Integration */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Version Control Integration</h3>
            <p className="text-gray-300 mb-4">
              Integrate duplicate cleanup with version control systems:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Pre-commit hook for duplicate detection</div>
              <div className="text-white">#!/bin/bash</div>
              <div className="text-white"># .git/hooks/pre-commit</div>
              <div className="text-white">duplicate-bin scan --staged-files \</div>
              <div className="text-white">  --fail-on-duplicates \</div>
              <div className="text-white">  --exclude-patterns ".gitignore"</div>
              <br />
              <div className="text-green-400"># Repository cleanup workflow</div>
              <div className="text-white">duplicate-bin scan . \</div>
              <div className="text-white">  --respect-gitignore \</div>
              <div className="text-white">  --exclude ".git,node_modules" \</div>
              <div className="text-white">  --create-git-branch "cleanup/duplicates"</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h5 className="font-medium text-green-400 mb-2">Git Integration Features</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Respect .gitignore patterns</li>
                  <li>• Create cleanup branches automatically</li>
                  <li>• Pre-commit duplicate detection</li>
                  <li>• Repository health reports</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h5 className="font-medium text-yellow-400 mb-2">Best Practices</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Always work in feature branches</li>
                  <li>• Get team approval before merging</li>
                  <li>• Test builds after cleanup</li>
                  <li>• Document cleanup decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Workflows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Zap className="h-6 w-6 mr-3 text-purple-400" />
          Enterprise Workflows
        </h2>

        <div className="space-y-6">
          {/* Large Scale Cleanup */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Large-Scale Storage Cleanup</h3>
            <p className="text-gray-300 mb-4">
              Enterprise workflow for cleaning up large storage systems with proper governance:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Phase 1: Assessment & Planning</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Analyze storage usage patterns</div>
                  <div className="text-white">duplicate-bin analyze /enterprise/storage \</div>
                  <div className="text-white">  --generate-report \</div>
                  <div className="text-white">  --estimate-savings \</div>
                  <div className="text-white">  --identify-hotspots</div>
                  <br />
                  <div className="text-green-400"># Create cleanup plan</div>
                  <div className="text-white">duplicate-bin plan create \</div>
                  <div className="text-white">  --target-savings "30%" \</div>
                  <div className="text-white">  --phases 3 \</div>
                  <div className="text-white">  --approval-workflow enterprise</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Phase 2: Staged Execution</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Execute in stages with monitoring</div>
                  <div className="text-white">duplicate-bin execute-plan --plan-id plan_001 \</div>
                  <div className="text-white">  --phase 1 \</div>
                  <div className="text-white">  --monitor-performance \</div>
                  <div className="text-white">  --auto-pause-on-issues</div>
                  <br />
                  <div className="text-green-400"># Verify each phase before continuing</div>
                  <div className="text-white">duplicate-bin verify-phase --plan-id plan_001 --phase 1</div>
                  <div className="text-white">duplicate-bin approve-next-phase --plan-id plan_001</div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Workflow */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Compliance & Audit Workflow</h3>
            <p className="text-gray-300 mb-4">
              Maintain compliance with regulatory requirements during cleanup operations:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Enable comprehensive audit logging</div>
              <div className="text-white">duplicate-bin config set audit_level comprehensive</div>
              <div className="text-white">duplicate-bin config set audit_retention_years 7</div>
              <div className="text-white">duplicate-bin config set compliance_mode gdpr</div>
              <br />
              <div className="text-green-400"># Generate compliance reports</div>
              <div className="text-white">duplicate-bin compliance-report \</div>
              <div className="text-white">  --standard "SOX,GDPR,HIPAA" \</div>
              <div className="text-white">  --period "2024-Q1" \</div>
              <div className="text-white">  --include-evidence</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-white mb-2">Compliance Features</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Complete audit trails
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Data retention policies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Access control logging
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                    Regulatory reporting
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-white mb-2">Supported Standards</h5>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>• SOX (Sarbanes-Oxley)</div>
                  <div>• GDPR (General Data Protection)</div>
                  <div>• HIPAA (Healthcare)</div>
                  <div>• PCI DSS (Payment Card)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Workflows */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Clock className="h-6 w-6 mr-3 text-yellow-400" />
          Automated Workflows
        </h2>

        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Scheduled Maintenance</h3>
          <p className="text-gray-300 mb-4">
            Set up automated workflows for regular maintenance and monitoring:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Daily Monitoring</h4>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400"># Daily duplicate detection (cron: 0 2 * * *)</div>
                <div className="text-white">duplicate-bin scan /data/active \</div>
                <div className="text-white">  --quick-scan \</div>
                <div className="text-white">  --report-only \</div>
                <div className="text-white">  --alert-threshold "1GB"</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Weekly Cleanup</h4>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400"># Weekly automated cleanup (cron: 0 3 * * 0)</div>
                <div className="text-white">duplicate-bin scan /data/temp /data/cache \</div>
                <div className="text-white">  --auto-archive \</div>
                <div className="text-white">  --safety-level balanced \</div>
                <div className="text-white">  --notify-admins</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Monthly Reports</h4>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400"># Monthly storage report (cron: 0 1 1 * *)</div>
                <div className="text-white">duplicate-bin report generate \</div>
                <div className="text-white">  --type "storage-efficiency" \</div>
                <div className="text-white">  --period "last-month" \</div>
                <div className="text-white">  --email-to "storage-team@company.com"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Enhance your DuplicateBin expertise with these related guides:
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