import { DocsContent, Callout, CodeBlock } from './components/docs-content'

export function DocsWindowsGuidePage() {
  return (
    <DocsContent
      title="Windows Installation & Usage Guide"
      description="Complete guide for installing and using Duplicate Bin on Windows 10 and Windows 11 systems."
    >
      <p>
        Duplicate Bin for Windows provides a native desktop application with both GUI and CLI interfaces. 
        The Windows version is completely standalone and doesn't require Python or any other dependencies.
      </p>

      <h2 id="system-requirements">System Requirements</h2>

      <ul>
        <li><strong>Operating System:</strong> Windows 10 (64-bit) or Windows 11</li>
        <li><strong>Architecture:</strong> x86_64 (amd64)</li>
        <li><strong>Memory:</strong> 2GB RAM minimum, 4GB recommended</li>
        <li><strong>Storage:</strong> 200MB for installation, additional space for archives</li>
        <li><strong>Permissions:</strong> Administrator access for installation (optional)</li>
      </ul>

      <Callout type="info" title="No Dependencies Required">
        The Windows executable is completely standalone and includes all necessary components. 
        No Python, .NET Framework, or other runtime dependencies are required.
      </Callout>

      <h2 id="download-installation">Download & Installation</h2>

      <h3 id="method-1-standalone">Method 1: Standalone Executable (Recommended)</h3>

      <p>
        The easiest way to get started with Duplicate Bin on Windows is to download the standalone executable:
      </p>

      <CodeBlock language="powershell" title="Download using PowerShell">
{`# Download the latest Windows release
Invoke-WebRequest -Uri "https://github.com/MustafaPinjari/duplicate-bin/releases/download/v0.1.1/DuplicateBin.exe" -OutFile "DuplicateBin.exe"

# Verify the download
Get-FileHash DuplicateBin.exe -Algorithm SHA256

# Run the executable
.\\DuplicateBin.exe`}
      </CodeBlock>

      <h3 id="method-2-manual">Method 2: Manual Download</h3>

      <ol>
        <li>Visit the <a href="https://github.com/MustafaPinjari/duplicate-bin/releases/download/v0.1.1/DuplicateBin.exe" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">direct download link</a></li>
        <li>Download <code>DuplicateBin.exe</code> from the v0.1.1 release</li>
        <li>Save it to a convenient location (e.g., <code>C:\\Tools\\DuplicateBin.exe</code>)</li>
        <li>Double-click to run or use from Command Prompt</li>
      </ol>

      <Callout type="success" title="Portable Application">
        DuplicateBin.exe is completely portable. You can run it from any location, 
        copy it to a USB drive, or place it in your PATH for system-wide access.
      </Callout>

      <h2 id="gui-application">GUI Application</h2>

      <h3 id="launching-gui">Launching the GUI</h3>

      <CodeBlock language="cmd" title="Launch GUI application">
{`# Launch GUI mode (default)
DuplicateBin.exe

# Or explicitly specify GUI mode
DuplicateBin.exe --gui

# Launch with debug information
DuplicateBin.exe --gui --debug`}
      </CodeBlock>

      <h3 id="gui-features">GUI Features</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-4">🎨 Modern Interface</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Native Windows look and feel</li>
            <li>• Dark theme with professional appearance</li>
            <li>• Responsive layout for all screen sizes</li>
            <li>• High-DPI display support</li>
          </ul>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-4">📁 File Management</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Drag & drop folder selection</li>
            <li>• File Explorer integration</li>
            <li>• Thumbnail previews for images</li>
            <li>• Proper Windows file type icons</li>
          </ul>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-4">⚡ Real-time Progress</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Visual progress indicators</li>
            <li>• Real-time file processing updates</li>
            <li>• ETA calculations</li>
            <li>• Detailed statistics display</li>
          </ul>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-4">🔧 Easy Configuration</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Settings panel with all options</li>
            <li>• Filter configuration interface</li>
            <li>• Archive location management</li>
            <li>• Algorithm selection</li>
          </ul>
        </div>
      </div>

      <h3 id="gui-workflow">GUI Workflow</h3>

      <div className="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-8 my-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: 1, title: "Select Folder", desc: "Drag & drop or browse to select scan directory" },
            { step: 2, title: "Configure", desc: "Set filters, algorithms, and scan options" },
            { step: 3, title: "Scan", desc: "Watch real-time progress as duplicates are detected" },
            { step: 4, title: "Review & Archive", desc: "Review results and safely archive duplicates" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                {item.step}
              </div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 id="command-line">Command Line Interface</h2>

      <h3 id="basic-cli-usage">Basic CLI Usage</h3>

      <CodeBlock language="cmd" title="Basic CLI commands">
{`# Scan a directory
DuplicateBin.exe scan "C:\\Users\\%USERNAME%\\Documents"

# Scan with verbose output
DuplicateBin.exe scan "C:\\Users\\%USERNAME%\\Pictures" --verbose

# Scan multiple directories
DuplicateBin.exe scan "C:\\Data" "D:\\Backup" --output results.json

# Show help
DuplicateBin.exe --help`}
      </CodeBlock>

      <h3 id="advanced-cli">Advanced CLI Options</h3>

      <CodeBlock language="cmd" title="Advanced scanning options">
{`# Scan with specific algorithms
DuplicateBin.exe scan "C:\\Photos" --algorithms sha256,md5 --content-analysis

# Apply filters
DuplicateBin.exe scan "C:\\Documents" --min-size 1MB --max-size 100MB --extensions pdf,docx,xlsx

# Generate detailed report
DuplicateBin.exe scan "C:\\Data" --report-format json --output "C:\\Reports\\duplicates.json"

# Dry run (no changes)
DuplicateBin.exe scan "C:\\Important" --dry-run --verbose`}
      </CodeBlock>

      <h3 id="batch-operations">Batch Operations</h3>

      <CodeBlock language="cmd" title="Batch processing">
{`# Process multiple directories in sequence
for /d %%i in (C:\\Users\\*) do DuplicateBin.exe scan "%%i\\Documents" --quiet

# Scheduled scan using Task Scheduler
schtasks /create /tn "DuplicateBin Daily" /tr "C:\\Tools\\DuplicateBin.exe scan C:\\Data --auto-archive" /sc daily /st 02:00`}
      </CodeBlock>

      <h2 id="configuration">Configuration</h2>

      <h3 id="config-file">Configuration File</h3>

      <p>
        Duplicate Bin stores its configuration in the Windows user profile:
      </p>

      <CodeBlock language="yaml" title="%APPDATA%\\DuplicateBin\\config.yaml">
{`# Duplicate Bin Windows Configuration
archive:
  location: "%USERPROFILE%\\Documents\\DuplicateBin\\Archive"
  retention_days: 30
  compression: true

scanning:
  hash_algorithm: sha256
  chunk_size: 1048576  # 1MB
  max_file_size: 10737418240  # 10GB
  threads: 4
  
exclusions:
  system_directories: true
  hidden_files: false
  patterns:
    - "*.tmp"
    - "*.cache"
    - "Thumbs.db"
    - "desktop.ini"
    - "$RECYCLE.BIN\\*"

windows:
  file_explorer_integration: true
  context_menu: true
  startup_with_windows: false

logging:
  level: info
  file: "%APPDATA%\\DuplicateBin\\Logs\\duplicate-bin.log"`}
      </CodeBlock>

      <h3 id="windows-specific">Windows-Specific Settings</h3>

      <CodeBlock language="cmd" title="Windows configuration commands">
{`# Show current configuration
DuplicateBin.exe config show

# Set archive location
DuplicateBin.exe config set archive.location "D:\\DuplicateArchive"

# Enable File Explorer integration
DuplicateBin.exe config set windows.file_explorer_integration true

# Configure exclusions for Windows
DuplicateBin.exe config add exclusions.patterns "*.lnk"
DuplicateBin.exe config add exclusions.patterns "System Volume Information\\*"`}
      </CodeBlock>

      <h2 id="windows-integration">Windows Integration</h2>

      <h3 id="file-explorer">File Explorer Integration</h3>

      <p>
        Enable right-click context menu integration for easy access:
      </p>

      <CodeBlock language="cmd" title="Enable File Explorer integration">
{`# Enable context menu (requires administrator privileges)
DuplicateBin.exe --install-context-menu

# Disable context menu
DuplicateBin.exe --uninstall-context-menu`}
      </CodeBlock>

      <h3 id="startup-integration">Startup Integration</h3>

      <CodeBlock language="cmd" title="Windows startup integration">
{`# Add to Windows startup (current user)
DuplicateBin.exe --add-to-startup

# Remove from startup
DuplicateBin.exe --remove-from-startup

# Add to system PATH
setx PATH "%PATH%;C:\\Tools" /M`}
      </CodeBlock>

      <h3 id="task-scheduler">Task Scheduler Integration</h3>

      <CodeBlock language="cmd" title="Automated scanning with Task Scheduler">
{`# Create daily scan task
schtasks /create /tn "DuplicateBin Daily Scan" /tr "C:\\Tools\\DuplicateBin.exe scan C:\\Users --auto-archive --quiet" /sc daily /st 03:00 /ru SYSTEM

# Create weekly deep scan
schtasks /create /tn "DuplicateBin Weekly Deep Scan" /tr "C:\\Tools\\DuplicateBin.exe scan C:\\ --deep-scan --report-format html --output C:\\Reports\\weekly.html" /sc weekly /d SUN /st 01:00

# List scheduled tasks
schtasks /query /tn "DuplicateBin*"`}
      </CodeBlock>

      <h2 id="performance-optimization">Performance Optimization</h2>

      <h3 id="windows-performance">Windows-Specific Optimizations</h3>

      <CodeBlock language="cmd" title="Performance tuning">
{`# Optimize for SSD storage
DuplicateBin.exe config set scanning.chunk_size 2097152  # 2MB chunks

# Increase thread count for multi-core systems
DuplicateBin.exe config set scanning.threads 8

# Enable memory optimization for large datasets
DuplicateBin.exe scan "C:\\LargeData" --memory-limit 4GB --low-memory-mode

# Use faster algorithms for quick scans
DuplicateBin.exe scan "C:\\Temp" --algorithms crc32 --quick-scan`}
      </CodeBlock>

      <h3 id="exclusions">Windows System Exclusions</h3>

      <p>
        Duplicate Bin automatically excludes Windows system directories and files:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {[
          { path: "C:\\Windows\\*", desc: "Windows system files" },
          { path: "C:\\Program Files\\*", desc: "Installed applications" },
          { path: "C:\\ProgramData\\*", desc: "Application data" },
          { path: "$RECYCLE.BIN\\*", desc: "Recycle bin contents" },
          { path: "System Volume Information\\*", desc: "System restore points" },
          { path: "pagefile.sys, hiberfil.sys", desc: "System virtual memory files" }
        ].map((item, index) => (
          <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-4">
            <code className="text-blue-400 font-mono text-sm">{item.path}</code>
            <span className="text-gray-400 ml-3 text-sm">- {item.desc}</span>
          </div>
        ))}
      </div>

      <h2 id="troubleshooting">Troubleshooting</h2>

      <h3 id="common-windows-issues">Common Windows Issues</h3>

      <div className="space-y-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <h4 className="font-semibold text-white mb-3">🛡️ Windows Defender / Antivirus Warnings</h4>
          <p className="text-gray-400 text-sm mb-3">
            Some antivirus software may flag the executable as suspicious:
          </p>
          <CodeBlock language="cmd">
{`# Add exclusion to Windows Defender
Add-MpPreference -ExclusionPath "C:\\Tools\\DuplicateBin.exe"

# Verify file integrity
certutil -hashfile DuplicateBin.exe SHA256`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <h4 className="font-semibold text-white mb-3">🔒 Permission Issues</h4>
          <p className="text-gray-400 text-sm mb-3">
            If you encounter permission errors:
          </p>
          <CodeBlock language="cmd">
{`# Run as administrator
runas /user:Administrator "DuplicateBin.exe"

# Check file permissions
icacls DuplicateBin.exe

# Grant full control to current user
icacls DuplicateBin.exe /grant %USERNAME%:F`}
          </CodeBlock>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <h4 className="font-semibold text-white mb-3">💾 Memory Issues</h4>
          <p className="text-gray-400 text-sm mb-3">
            For large datasets or limited memory systems:
          </p>
          <CodeBlock language="cmd">
{`# Enable low memory mode
DuplicateBin.exe scan "C:\\Data" --low-memory-mode --memory-limit 2GB

# Reduce thread count
DuplicateBin.exe config set scanning.threads 2

# Use streaming mode for very large files
DuplicateBin.exe scan "C:\\Videos" --streaming-mode`}
          </CodeBlock>
        </div>
      </div>

      <h2 id="uninstallation">Uninstallation</h2>

      <p>
        Since DuplicateBin.exe is a portable application, uninstallation is simple:
      </p>

      <CodeBlock language="cmd" title="Complete removal">
{`# Remove context menu integration (if installed)
DuplicateBin.exe --uninstall-context-menu

# Remove from startup (if added)
DuplicateBin.exe --remove-from-startup

# Remove scheduled tasks
schtasks /delete /tn "DuplicateBin*" /f

# Delete the executable
del "C:\\Tools\\DuplicateBin.exe"

# Remove configuration and data (optional)
rmdir /s "%APPDATA%\\DuplicateBin"
rmdir /s "%USERPROFILE%\\Documents\\DuplicateBin"`}
      </CodeBlock>

      <Callout type="warning" title="Archive Data">
        Before removing the application, make sure to restore any needed files from your archive directory.
        The default archive location is <code>%USERPROFILE%\\Documents\\DuplicateBin\\Archive</code>.
      </Callout>

      <h2 id="next-steps">Next Steps</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-3">📖 Learn More</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• <a href="/docs/first-scan" className="text-blue-400 hover:text-blue-300">Your First Scan Guide</a></li>
            <li>• <a href="/docs/archive-workflow" className="text-blue-400 hover:text-blue-300">Archive Workflow</a></li>
            <li>• <a href="/docs/filters-rules" className="text-blue-400 hover:text-blue-300">Filters & Rules</a></li>
            <li>• <a href="/docs/guides/best-practices" className="text-blue-400 hover:text-blue-300">Best Practices</a></li>
          </ul>
        </div>

        <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-3">🆘 Get Help</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• <a href="/docs/guides/troubleshooting" className="text-blue-400 hover:text-blue-300">Troubleshooting Guide</a></li>
            <li>• <a href="https://github.com/MustafaPinjari/duplicate-bin/issues" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Report Issues</a></li>
            <li>• <a href="https://github.com/MustafaPinjari/duplicate-bin/discussions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Community Discussions</a></li>
            <li>• <a href="/support" className="text-blue-400 hover:text-blue-300">Enterprise Support</a></li>
          </ul>
        </div>
      </div>
    </DocsContent>
  )
}