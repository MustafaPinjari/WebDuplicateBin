import { ArrowRight, Users, Lock, Key, Shield, CheckCircle, AlertTriangle, UserCheck, Settings } from 'lucide-react'

export function PermissionsModelPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Security & Safety</span>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-white">Permissions Model</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Permissions Model</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Comprehensive permissions and access control system for DuplicateBin. Learn about user roles, 
          file access controls, operation permissions, and security policies for multi-user environments.
        </p>
      </div>

      {/* Permissions Overview */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start">
          <Shield className="h-6 w-6 text-purple-400 mt-1 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Multi-Layer Access Control</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin implements a comprehensive permissions model with multiple security layers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-purple-400 font-semibold mb-1">User Roles</div>
                <div className="text-gray-300">Role-based access</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-blue-400 font-semibold mb-1">File ACLs</div>
                <div className="text-gray-300">File-level control</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-green-400 font-semibold mb-1">Operation Policies</div>
                <div className="text-gray-300">Action restrictions</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-semibold mb-1">Audit Logging</div>
                <div className="text-gray-300">Complete tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Roles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Users className="h-6 w-6 mr-3 text-blue-400" />
          User Roles & Permissions
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Built-in Roles</h3>
            <p className="text-gray-300 mb-6">
              DuplicateBin provides predefined roles with specific permission sets:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <UserCheck className="h-5 w-5 text-red-400 mr-2" />
                    <h4 className="font-semibold text-white">Administrator</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">Full system access and control</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      All scan operations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      System configuration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      User management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Archive management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Emergency recovery
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <UserCheck className="h-5 w-5 text-blue-400 mr-2" />
                    <h4 className="font-semibold text-white">Operator</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">Standard operational access</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Run scans on assigned paths
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Archive duplicate files
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Restore from archive
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="h-3 w-3 text-yellow-400 mr-2" />
                      Limited configuration access
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <UserCheck className="h-5 w-5 text-green-400 mr-2" />
                    <h4 className="font-semibold text-white">Analyst</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">Read-only analysis access</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      View scan results
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Generate reports
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Export data
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="h-3 w-3 text-red-400 mr-2" />
                      No modification rights
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <UserCheck className="h-5 w-5 text-yellow-400 mr-2" />
                    <h4 className="font-semibold text-white">Guest</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">Minimal read-only access</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      View basic statistics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                      Browse public reports
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="h-3 w-3 text-red-400 mr-2" />
                      No system access
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Custom Roles</h3>
            <p className="text-gray-300 mb-4">
              Create custom roles with specific permission combinations:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># Create custom role</div>
              <div className="text-white">duplicate-bin role create --name "backup-operator" \</div>
              <div className="text-white">  --permissions "scan:read,scan:create,archive:create,archive:restore" \</div>
              <div className="text-white">  --paths "/backup/*,/data/shared/*"</div>
              <br />
              <div className="text-green-400"># Assign role to user</div>
              <div className="text-white">duplicate-bin user assign-role --user john.doe --role backup-operator</div>
              <br />
              <div className="text-green-400"># List user permissions</div>
              <div className="text-white">duplicate-bin user permissions --user john.doe --detailed</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Available Permissions</h4>
                <div className="bg-gray-900/50 rounded-lg p-3 text-sm space-y-1">
                  <div className="text-blue-400">scan:create, scan:read, scan:delete</div>
                  <div className="text-green-400">archive:create, archive:restore, archive:delete</div>
                  <div className="text-purple-400">config:read, config:write</div>
                  <div className="text-yellow-400">user:read, user:write, user:delete</div>
                  <div className="text-red-400">system:admin, system:emergency</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Path Restrictions</h4>
                <div className="bg-gray-900/50 rounded-lg p-3 text-sm">
                  <div className="text-gray-300 mb-2">Limit access to specific paths:</div>
                  <div className="space-y-1 text-gray-400">
                    <div>• Wildcard patterns supported</div>
                    <div>• Inheritance from parent directories</div>
                    <div>• Explicit deny rules</div>
                    <div>• Time-based restrictions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* File Access Control */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Lock className="h-6 w-6 mr-3 text-green-400" />
          File Access Control
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Access Control Lists (ACLs)</h3>
            <p className="text-gray-300 mb-4">
              Fine-grained file and directory access control beyond standard Unix permissions:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Setting File ACLs</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Set ACL for specific user</div>
                  <div className="text-white">duplicate-bin acl set --path "/data/sensitive" \</div>
                  <div className="text-white">  --user john.doe --permissions "read,scan" \</div>
                  <div className="text-white">  --recursive</div>
                  <br />
                  <div className="text-green-400"># Set ACL for role</div>
                  <div className="text-white">duplicate-bin acl set --path "/backup" \</div>
                  <div className="text-white">  --role backup-operator --permissions "read,write,archive"</div>
                  <br />
                  <div className="text-green-400"># Deny access explicitly</div>
                  <div className="text-white">duplicate-bin acl deny --path "/system/critical" \</div>
                  <div className="text-white">  --user temp-user --all-operations</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Permission Types</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded p-2">
                      <div className="font-medium text-blue-400">read</div>
                      <div className="text-gray-300">View file metadata and scan results</div>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded p-2">
                      <div className="font-medium text-green-400">scan</div>
                      <div className="text-gray-300">Include in duplicate detection scans</div>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-2">
                      <div className="font-medium text-yellow-400">archive</div>
                      <div className="text-gray-300">Move files to archive</div>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/20 rounded p-2">
                      <div className="font-medium text-red-400">delete</div>
                      <div className="text-gray-300">Permanent file deletion</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">ACL Inheritance</h4>
                  <div className="bg-gray-900/50 rounded-lg p-3 text-sm">
                    <div className="text-gray-300 mb-2">ACL inheritance rules:</div>
                    <div className="space-y-1 text-gray-400">
                      <div>• Child directories inherit parent ACLs</div>
                      <div>• Explicit permissions override inherited</div>
                      <div>• Deny rules take precedence</div>
                      <div>• Role permissions combine with user ACLs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">System Integration</h3>
            <p className="text-gray-300 mb-4">
              DuplicateBin integrates with system-level access controls:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Unix Permissions</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Respect system permissions</div>
                  <div className="text-white">duplicate-bin config set respect_unix_permissions true</div>
                  <br />
                  <div className="text-green-400"># Check effective permissions</div>
                  <div className="text-white">duplicate-bin permissions check --path "/data" --user john.doe</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">SELinux Integration</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Enable SELinux support</div>
                  <div className="text-white">duplicate-bin config set selinux_enabled true</div>
                  <br />
                  <div className="text-green-400"># Check SELinux context</div>
                  <div className="text-white">duplicate-bin selinux check --path "/secure/data"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operation Policies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Settings className="h-6 w-6 mr-3 text-purple-400" />
          Operation Policies
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Policy Configuration</h3>
            <p className="text-gray-300 mb-4">
              Define policies that control how operations are performed and by whom:
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="text-green-400"># ~/.config/duplicate-bin/policies.conf</div>
              <div className="text-white">{`# Operation policies
[scan_policy]
require_approval = true
approval_roles = ["administrator", "operator"]
max_concurrent_scans = 3
scan_time_limits = "business_hours"

[archive_policy]
require_confirmation = true
confirmation_timeout = 300
archive_size_limit = "100GB"
retention_period = "1year"

[restore_policy]
require_dual_approval = true
approval_roles = ["administrator"]
restore_verification = true
audit_all_restores = true

[emergency_policy]
emergency_contacts = ["admin@company.com"]
auto_notification = true
emergency_override_enabled = true
override_requires_justification = true`}</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">Approval Workflows</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded p-2">
                    <div className="font-medium text-blue-400">Single Approval</div>
                    <div className="text-gray-300">One authorized user approval required</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded p-2">
                    <div className="font-medium text-green-400">Dual Approval</div>
                    <div className="text-gray-300">Two independent approvals required</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded p-2">
                    <div className="font-medium text-purple-400">Role-based</div>
                    <div className="text-gray-300">Approval from specific roles only</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Time Restrictions</h4>
                <div className="bg-gray-900/50 rounded-lg p-3 text-sm">
                  <div className="text-gray-300 mb-2">Operation time windows:</div>
                  <div className="space-y-1 text-gray-400">
                    <div>• Business hours only</div>
                    <div>• Maintenance windows</div>
                    <div>• Weekend restrictions</div>
                    <div>• Holiday blackouts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Policy Enforcement</h3>
                <p className="text-gray-300 mb-4">
                  Policies are enforced at multiple levels to ensure compliance:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">Enforcement Points</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Command-line interface
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Web dashboard
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        API endpoints
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        Scheduled operations
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">Violation Handling</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Operation blocking</li>
                      <li>• Audit log entries</li>
                      <li>• Administrator notifications</li>
                      <li>• Automatic incident reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication & Authorization */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Key className="h-6 w-6 mr-3 text-yellow-400" />
          Authentication & Authorization
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Authentication Methods</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Local Authentication</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Create local user</div>
                  <div className="text-white">duplicate-bin user create --username john.doe \</div>
                  <div className="text-white">  --password-prompt --role operator</div>
                  <br />
                  <div className="text-green-400"># Enable password policies</div>
                  <div className="text-white">duplicate-bin config set password_policy_enabled true</div>
                  <div className="text-white">duplicate-bin config set min_password_length 12</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-3">LDAP Integration</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400"># Configure LDAP</div>
                  <div className="text-white">duplicate-bin config set auth_method ldap</div>
                  <div className="text-white">duplicate-bin config set ldap_server "ldap://company.com"</div>
                  <div className="text-white">duplicate-bin config set ldap_base_dn "dc=company,dc=com"</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Multi-Factor Authentication</h3>
            <p className="text-gray-300 mb-4">
              Enhanced security with multi-factor authentication support:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h5 className="font-medium text-blue-400 mb-2">TOTP</h5>
                <p className="text-gray-300 text-sm">Time-based one-time passwords using authenticator apps</p>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h5 className="font-medium text-green-400 mb-2">Hardware Keys</h5>
                <p className="text-gray-300 text-sm">FIDO2/WebAuthn hardware security keys</p>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <h5 className="font-medium text-purple-400 mb-2">SMS/Email</h5>
                <p className="text-gray-300 text-sm">SMS or email-based verification codes</p>
              </div>
            </div>
            
            <div className="mt-4 bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400"># Enable MFA for user</div>
              <div className="text-white">duplicate-bin user enable-mfa --username john.doe --method totp</div>
              <br />
              <div className="text-green-400"># Require MFA for sensitive operations</div>
              <div className="text-white">duplicate-bin config set mfa_required_operations "archive,restore,emergency"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit & Compliance */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Audit & Compliance</h2>
        
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Comprehensive Audit Logging</h3>
          <p className="text-gray-300 mb-4">
            All security-related events are logged for compliance and forensic analysis:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Logged Events</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-3 text-sm">
                  <h5 className="font-medium text-white mb-2">Authentication Events</h5>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Login attempts (success/failure)</li>
                    <li>• Password changes</li>
                    <li>• MFA events</li>
                    <li>• Session management</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-3 text-sm">
                  <h5 className="font-medium text-white mb-2">Authorization Events</h5>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Permission checks</li>
                    <li>• Access denials</li>
                    <li>• Role assignments</li>
                    <li>• Policy violations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Audit Configuration</h4>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400"># Configure audit logging</div>
                <div className="text-white">duplicate-bin config set audit_enabled true</div>
                <div className="text-white">duplicate-bin config set audit_level detailed</div>
                <div className="text-white">duplicate-bin config set audit_retention_days 2555</div>
                <br />
                <div className="text-green-400"># Export audit logs</div>
                <div className="text-white">duplicate-bin audit export --format json --since "30 days ago"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-300 mb-4">
          Complete your security knowledge with these related topics:
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
            href="/docs/security/recovery" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Rollback & Recovery
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}