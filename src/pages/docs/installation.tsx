import { DocsContent, Callout, CodeBlock } from './components/docs-content'

export function DocsInstallationPage() {
  return (
    <DocsContent
      title="Installation"
      description="Install Duplicate Bin on your system with our comprehensive installation guide for all supported platforms."
    >
      <p>
        Duplicate Bin supports multiple installation methods across different Linux distributions. 
        Choose the method that best fits your environment and requirements.
      </p>

      <h2 id="system-requirements">System Requirements</h2>

      <ul>
        <li><strong>Operating System:</strong> Linux (Ubuntu 20.04+, Debian 11+, CentOS 8+, Fedora 35+)</li>
        <li><strong>Architecture:</strong> x86_64 (amd64), ARM64</li>
        <li><strong>Memory:</strong> 512MB RAM minimum, 2GB recommended</li>
        <li><strong>Storage:</strong> 100MB for installation, additional space for archives</li>
        <li><strong>Permissions:</strong> Root access for system-wide installation</li>
      </ul>

      <Callout type="info" title="Supported Distributions">
        Duplicate Bin is tested on Ubuntu, Debian, CentOS, RHEL, Fedora, and Arch Linux. 
        Other distributions may work but are not officially supported.
      </Callout>

      <h2 id="debian-ubuntu">Debian/Ubuntu Installation</h2>

      <p>
        The recommended installation method for Debian-based systems using our official .deb package:
      </p>

      <h3 id="deb-package">Method 1: DEB Package (Recommended)</h3>

      <CodeBlock language="bash" title="Install via DEB package">
{`# Download the latest release
curl -L -o duplicate-bin.deb https://github.com/MustafaPinjari/duplicate-bin/releases/latest/download/duplicate-bin.deb

# Verify the package (optional but recommended)
dpkg --info duplicate-bin.deb

# Install the package
sudo dpkg -i duplicate-bin.deb

# Install any missing dependencies
sudo apt-get install -f

# Verify installation
duplicate-bin --version`}
      </CodeBlock>

      <h3 id="apt-repository">Method 2: APT Repository</h3>

      <CodeBlock language="bash" title="Add APT repository">
{`# Add our GPG key
curl -fsSL https://packages.duplicatebin.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/duplicatebin.gpg

# Add the repository
echo "deb [signed-by=/usr/share/keyrings/duplicatebin.gpg] https://packages.duplicatebin.com/apt stable main" | sudo tee /etc/apt/sources.list.d/duplicatebin.list

# Update package list
sudo apt update

# Install Duplicate Bin
sudo apt install duplicate-bin`}
      </CodeBlock>

      <Callout type="success" title="Automatic Updates">
        Using the APT repository ensures you'll receive automatic updates when new versions are released.
      </Callout>

      <h2 id="rhel-centos-fedora">RHEL/CentOS/Fedora Installation</h2>

      <h3 id="rpm-package">Method 1: RPM Package</h3>

      <CodeBlock language="bash" title="Install via RPM package">
{`# Download the latest release
curl -L -o duplicate-bin.rpm https://github.com/MustafaPinjari/duplicate-bin/releases/latest/download/duplicate-bin.rpm

# Install the package (CentOS/RHEL)
sudo yum install duplicate-bin.rpm

# Or for Fedora
sudo dnf install duplicate-bin.rpm

# Verify installation
duplicate-bin --version`}
      </CodeBlock>

      <h3 id="yum-repository">Method 2: YUM/DNF Repository</h3>

      <CodeBlock language="bash" title="Add YUM repository">
{`# Add the repository configuration
sudo tee /etc/yum.repos.d/duplicatebin.repo << EOF
[duplicatebin]
name=Duplicate Bin Repository
baseurl=https://packages.duplicatebin.com/rpm/stable
enabled=1
gpgcheck=1
gpgkey=https://packages.duplicatebin.com/gpg
EOF

# Install Duplicate Bin (CentOS/RHEL)
sudo yum install duplicate-bin

# Or for Fedora
sudo dnf install duplicate-bin`}
      </CodeBlock>

      <h2 id="arch-linux">Arch Linux Installation</h2>

      <CodeBlock language="bash" title="Install from AUR">
{`# Using yay (AUR helper)
yay -S duplicate-bin

# Or using paru
paru -S duplicate-bin

# Manual installation from AUR
git clone https://aur.archlinux.org/duplicate-bin.git
cd duplicate-bin
makepkg -si`}
      </CodeBlock>

      <h2 id="binary-installation">Binary Installation</h2>

      <p>
        For systems without package manager support or for portable installations:
      </p>

      <CodeBlock language="bash" title="Direct binary installation">
{`# Download the binary
curl -L -o duplicate-bin https://github.com/MustafaPinjari/duplicate-bin/releases/latest/download/duplicate-bin-linux-amd64

# Make it executable
chmod +x duplicate-bin

# Move to system PATH (optional)
sudo mv duplicate-bin /usr/local/bin/

# Verify installation
duplicate-bin --version`}
      </CodeBlock>

      <h2 id="docker-installation">Docker Installation</h2>

      <p>
        Run Duplicate Bin in a containerized environment:
      </p>

      <CodeBlock language="bash" title="Docker installation">
{`# Pull the official image
docker pull duplicatebin/duplicate-bin:latest

# Run with volume mounts
docker run -it --rm \\
  -v /path/to/scan:/data \\
  -v /path/to/archive:/archive \\
  duplicatebin/duplicate-bin:latest scan /data

# Create an alias for easier usage
echo 'alias duplicate-bin="docker run -it --rm -v \$(pwd):/data duplicatebin/duplicate-bin:latest"' >> ~/.bashrc`}
      </CodeBlock>

      <h2 id="configuration">Post-Installation Configuration</h2>

      <h3 id="initial-setup">Initial Setup</h3>

      <p>
        After installation, run the initial setup to configure Duplicate Bin for your system:
      </p>

      <CodeBlock language="bash" title="Initial configuration">
{`# Run initial setup
duplicate-bin setup

# This will:
# - Create configuration directory (~/.config/duplicate-bin)
# - Set up default exclusion patterns
# - Configure archive location
# - Test system permissions`}
      </CodeBlock>

      <h3 id="configuration-file">Configuration File</h3>

      <p>
        The main configuration file is located at <code>~/.config/duplicate-bin/config.yaml</code>:
      </p>

      <CodeBlock language="yaml" title="~/.config/duplicate-bin/config.yaml">
{`# Duplicate Bin Configuration
archive:
  location: ~/.local/share/duplicate-bin/archive
  retention_days: 30

scanning:
  hash_algorithm: sha256
  chunk_size: 1048576  # 1MB
  max_file_size: 10737418240  # 10GB
  
exclusions:
  system_directories: true
  hidden_files: false
  patterns:
    - "*.tmp"
    - "*.cache"
    - ".git/*"

logging:
  level: info
  file: ~/.local/share/duplicate-bin/logs/duplicate-bin.log`}
      </CodeBlock>

      <h3 id="systemd-service">Systemd Service (Optional)</h3>

      <p>
        For automated scanning, you can set up a systemd service:
      </p>

      <CodeBlock language="bash" title="Create systemd service">
{`# Create service file
sudo tee /etc/systemd/system/duplicate-bin.service << EOF
[Unit]
Description=Duplicate Bin Scanner
After=network.target

[Service]
Type=oneshot
User=duplicatebin
ExecStart=/usr/bin/duplicate-bin scan --config /etc/duplicate-bin/config.yaml
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

# Create timer for regular scans
sudo tee /etc/systemd/system/duplicate-bin.timer << EOF
[Unit]
Description=Run Duplicate Bin Scanner
Requires=duplicate-bin.service

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
EOF

# Enable and start the timer
sudo systemctl enable duplicate-bin.timer
sudo systemctl start duplicate-bin.timer`}
      </CodeBlock>

      <h2 id="verification">Installation Verification</h2>

      <p>
        Verify your installation is working correctly:
      </p>

      <CodeBlock language="bash" title="Verify installation">
{`# Check version
duplicate-bin --version

# Run system check
duplicate-bin doctor

# Test with a small directory
duplicate-bin scan ~/Documents --dry-run

# Check configuration
duplicate-bin config show`}
      </CodeBlock>

      <Callout type="success" title="Installation Complete">
        If all commands run without errors, Duplicate Bin is successfully installed and ready to use. 
        Continue to the <a href="/docs/first-scan" className="text-green-300 hover:text-green-200">First Scan guide</a> to get started.
      </Callout>

      <h2 id="troubleshooting">Installation Troubleshooting</h2>

      <h3 id="common-issues">Common Issues</h3>

      <div className="space-y-4">
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-2">Permission Denied</h4>
          <p className="text-gray-400 text-sm mb-2">
            If you get permission errors during installation:
          </p>
          <CodeBlock language="bash">
{`# Ensure you have sudo privileges
sudo -v

# Check file permissions
ls -la duplicate-bin*

# Make binary executable
chmod +x duplicate-bin`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-2">Missing Dependencies</h4>
          <p className="text-gray-400 text-sm mb-2">
            If dependencies are missing after package installation:
          </p>
          <CodeBlock language="bash">
{`# Ubuntu/Debian
sudo apt-get install -f

# CentOS/RHEL
sudo yum install missing-package

# Check what's missing
ldd /usr/bin/duplicate-bin`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-2">Command Not Found</h4>
          <p className="text-gray-400 text-sm mb-2">
            If the command is not found after installation:
          </p>
          <CodeBlock language="bash">
{`# Check if binary is in PATH
which duplicate-bin

# Add to PATH if needed
export PATH=$PATH:/usr/local/bin

# Reload shell configuration
source ~/.bashrc`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="uninstallation">Uninstallation</h2>

      <p>
        To completely remove Duplicate Bin from your system:
      </p>

      <CodeBlock language="bash" title="Complete uninstallation">
{`# Stop any running services
sudo systemctl stop duplicate-bin.timer
sudo systemctl disable duplicate-bin.timer

# Remove package (Debian/Ubuntu)
sudo apt remove duplicate-bin

# Remove package (RHEL/CentOS/Fedora)
sudo yum remove duplicate-bin  # or dnf remove

# Remove configuration and data
rm -rf ~/.config/duplicate-bin
rm -rf ~/.local/share/duplicate-bin

# Remove system files (if installed)
sudo rm -f /etc/systemd/system/duplicate-bin.*
sudo systemctl daemon-reload`}
      </CodeBlock>

      <Callout type="warning" title="Archive Data">
        Uninstalling will not automatically remove your archived files. 
        Make sure to restore any needed files before removing the archive directory.
      </Callout>
    </DocsContent>
  )
}