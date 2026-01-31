import { DocsContent, Callout, CodeBlock } from './components/docs-content'

export function DocsAuthenticationPage() {
  return (
    <DocsContent
      title="Authentication"
      description="Configure authentication and access control for Duplicate Bin in multi-user environments."
    >
      <div className="text-xl text-gray-300 leading-relaxed mb-8">
        Duplicate Bin supports multiple authentication methods for secure access in enterprise and multi-user environments.
      </div>

      <h2 id="authentication-methods">Authentication Methods</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Local Authentication</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Simple username/password authentication for single-user setups.
          </p>
          <CodeBlock language="bash">
{`# Enable local authentication
duplicate-bin auth setup --type local

# Create user account
duplicate-bin auth create-user admin`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">LDAP Integration</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Enterprise LDAP/Active Directory integration for centralized user management.
          </p>
          <CodeBlock language="bash">
{`# Configure LDAP
duplicate-bin auth setup --type ldap \\
  --server ldap://company.com \\
  --base-dn "dc=company,dc=com"`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="web-interface-auth">Web Interface Authentication</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Enable authentication for the web interface:
      </div>

      <CodeBlock language="bash" title="Enable web authentication">
{`# Start web interface with authentication
duplicate-bin web --auth --port 8080

# Configure session timeout (default: 24 hours)
duplicate-bin config set web.session_timeout 8h

# Enable HTTPS for secure authentication
duplicate-bin web --auth --ssl-cert cert.pem --ssl-key key.pem`}
      </CodeBlock>

      <Callout type="warning" title="Security Notice">
        Always use HTTPS when authentication is enabled to protect credentials in transit.
      </Callout>

      <h2 id="api-authentication">API Authentication</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Secure API access with token-based authentication:
      </div>

      <CodeBlock language="bash" title="Generate API tokens">
{`# Generate API token for user
duplicate-bin auth generate-token --user admin --expires 30d

# Use token in API requests
curl -H "Authorization: Bearer YOUR_TOKEN" \\
  http://localhost:8080/api/scans`}
      </CodeBlock>

      <h2 id="permissions">Permissions & Roles</h2>

      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        Configure user permissions and role-based access control:
      </div>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold text-white mb-6">Available Roles</h3>
        <div className="space-y-4">
          {[
            { role: "admin", desc: "Full system access, user management, configuration" },
            { role: "operator", desc: "Scan, archive, and restore operations" },
            { role: "viewer", desc: "Read-only access to scan results and archives" },
            { role: "auditor", desc: "Access to logs and audit trails only" }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium min-w-fit">
                {item.role}
              </div>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CodeBlock language="bash" title="Manage user roles">
{`# Assign role to user
duplicate-bin auth assign-role --user john --role operator

# List user permissions
duplicate-bin auth list-permissions --user john

# Create custom role
duplicate-bin auth create-role --name "backup-admin" \\
  --permissions "scan,archive,restore"`}
      </CodeBlock>

      <Callout type="info" title="Enterprise Features">
        Advanced authentication features like SSO, SAML, and custom roles are available in 
        <a href="/enterprise" className="text-blue-300 hover:text-blue-200 font-medium ml-1">Duplicate Bin Enterprise</a>.
      </Callout>
    </DocsContent>
  )
}