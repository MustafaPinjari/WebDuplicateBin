import type { ReactNode } from 'react'
import { AlertCircle, CheckCircle, Info, AlertTriangle, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface DocsContentProps {
  title: string
  description?: string
  children: ReactNode
  heroImage?: string
}

export function DocsContent({ title, description, children, heroImage }: DocsContentProps) {
  return (
    <article className="max-w-none">
      {/* Page Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-4xl">
            {description}
          </p>
        )}
      </div>

      {/* Hero Image */}
      {heroImage && (
        <div className="mb-8 sm:mb-12">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm shadow-2xl">
            <img 
              src={heroImage} 
              alt={title}
              className="w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="docs-content">
        {children}
      </div>
    </article>
  )
}

// Callout Components
interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success'
  title?: string
  children: ReactNode
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: {
      container: 'bg-blue-500/10 border-blue-500/30 text-blue-100',
      icon: <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />,
      titleColor: 'text-blue-300'
    },
    warning: {
      container: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-100',
      icon: <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />,
      titleColor: 'text-yellow-300'
    },
    error: {
      container: 'bg-red-500/10 border-red-500/30 text-red-100',
      icon: <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />,
      titleColor: 'text-red-300'
    },
    success: {
      container: 'bg-green-500/10 border-green-500/30 text-green-100',
      icon: <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />,
      titleColor: 'text-green-300'
    }
  }

  const style = styles[type]

  return (
    <div className={`rounded-xl sm:rounded-2xl border p-4 sm:p-6 my-6 sm:my-8 backdrop-blur-sm ${style.container}`}>
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
          {style.icon}
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-semibold mb-2 sm:mb-3 text-base sm:text-lg ${style.titleColor}`}>
              {title}
            </h4>
          )}
          <div className="text-sm sm:text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// Code Block Component with Dracula Theme
interface CodeBlockProps {
  language?: string
  title?: string
  children: string
}

export function CodeBlock({ language = 'bash', title, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  // Enhanced syntax highlighting for multiple languages with Dracula theme
  const highlightCode = (code: string, lang: string) => {
    // Bash/Shell highlighting
    if (lang === 'bash' || lang === 'shell' || lang === 'sh') {
      return code.split('\n').map((line, i) => {
        if (line.trim().startsWith('#')) {
          return <div key={i} className="text-[#6272a4]">{line}</div>
        }
        
        const parts = line.split(/(\s+|"[^"]*"|'[^']*'|--?\w+[-\w]*|&&|\||;|>|<|\$\w+|\$\{[^}]+\})/g)
        return (
          <div key={i}>
            {parts.map((part, j) => {
              if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'"))) {
                return <span key={j} className="text-[#f1fa8c]">{part}</span>
              }
              if (part.match(/^--?\w+[-\w]*/)) {
                return <span key={j} className="text-[#8be9fd]">{part}</span>
              }
              if (part.match(/^\$\w+/) || part.match(/^\$\{[^}]+\}/)) {
                return <span key={j} className="text-[#ff79c6]">{part}</span>
              }
              if (part.match(/^(&&|\||;|>|<)$/)) {
                return <span key={j} className="text-[#ff79c6]">{part}</span>
              }
              if (j === 0 && part.trim() && !part.match(/^\s+$/)) {
                return <span key={j} className="text-[#50fa7b]">{part}</span>
              }
              return <span key={j} className="text-[#f8f8f2]">{part}</span>
            })}
          </div>
        )
      })
    }
    
    // PowerShell highlighting
    if (lang === 'powershell' || lang === 'ps1') {
      return code.split('\n').map((line, i) => {
        if (line.trim().startsWith('#')) {
          return <div key={i} className="text-[#6272a4]">{line}</div>
        }
        
        const parts = line.split(/(\s+|"[^"]*"|'[^']*'|-\w+|&&|\||;|\$\w+)/g)
        return (
          <div key={i}>
            {parts.map((part, j) => {
              if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'"))) {
                return <span key={j} className="text-[#f1fa8c]">{part}</span>
              }
              if (part.match(/^-\w+/)) {
                return <span key={j} className="text-[#8be9fd]">{part}</span>
              }
              if (part.match(/^\$\w+/)) {
                return <span key={j} className="text-[#ff79c6]">{part}</span>
              }
              if (part.match(/^(Invoke-WebRequest|Get-|Set-|New-|Remove-)/)) {
                return <span key={j} className="text-[#50fa7b]">{part}</span>
              }
              return <span key={j} className="text-[#f8f8f2]">{part}</span>
            })}
          </div>
        )
      })
    }
    
    // CMD/Batch highlighting
    if (lang === 'cmd' || lang === 'batch' || lang === 'bat') {
      return code.split('\n').map((line, i) => {
        if (line.trim().startsWith('#') || line.trim().startsWith('REM')) {
          return <div key={i} className="text-[#6272a4]">{line}</div>
        }
        
        const parts = line.split(/(\s+|"[^"]*"|\/\w+|%\w+%)/g)
        return (
          <div key={i}>
            {parts.map((part, j) => {
              if (part.startsWith('"') && part.endsWith('"')) {
                return <span key={j} className="text-[#f1fa8c]">{part}</span>
              }
              if (part.match(/^\/\w+/)) {
                return <span key={j} className="text-[#8be9fd]">{part}</span>
              }
              if (part.match(/^%\w+%/)) {
                return <span key={j} className="text-[#ff79c6]">{part}</span>
              }
              if (j === 0 && part.trim() && !part.match(/^\s+$/)) {
                return <span key={j} className="text-[#50fa7b]">{part}</span>
              }
              return <span key={j} className="text-[#f8f8f2]">{part}</span>
            })}
          </div>
        )
      })
    }
    
    // YAML highlighting
    if (lang === 'yaml' || lang === 'yml') {
      return code.split('\n').map((line, i) => {
        if (line.trim().startsWith('#')) {
          return <div key={i} className="text-[#6272a4]">{line}</div>
        }
        
        const parts = line.split(/(:)|(".*?")|('.*?')|(\d+)|(\btrue\b|\bfalse\b|\bnull\b)/g).filter(Boolean)
        return (
          <div key={i}>
            {parts.map((part, j) => {
              if (part === ':') {
                return <span key={j} className="text-[#ff79c6]">:</span>
              }
              if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'"))) {
                return <span key={j} className="text-[#f1fa8c]">{part}</span>
              }
              if (part.match(/^\d+$/)) {
                return <span key={j} className="text-[#bd93f9]">{part}</span>
              }
              if (part.match(/^(true|false|null)$/)) {
                return <span key={j} className="text-[#bd93f9]">{part}</span>
              }
              if (part.match(/^\w+/) && !part.includes(' ')) {
                return <span key={j} className="text-[#8be9fd]">{part}</span>
              }
              return <span key={j} className="text-[#f8f8f2]">{part}</span>
            })}
          </div>
        )
      })
    }
    
    // JSON highlighting
    if (lang === 'json') {
      return code.split('\n').map((line, i) => {
        const parts = line.split(/(".*?":)|(".*?")|(\d+)|(\btrue\b|\bfalse\b|\bnull\b)|([{}[\],])/g).filter(Boolean)
        return (
          <div key={i}>
            {parts.map((part, j) => {
              if (part.includes('":')) {
                return <span key={j} className="text-[#8be9fd]">{part}</span>
              }
              if (part.startsWith('"') && part.endsWith('"')) {
                return <span key={j} className="text-[#f1fa8c]">{part}</span>
              }
              if (part.match(/^\d+$/)) {
                return <span key={j} className="text-[#bd93f9]">{part}</span>
              }
              if (part.match(/^(true|false|null)$/)) {
                return <span key={j} className="text-[#bd93f9]">{part}</span>
              }
              if (part.match(/^[{}[\],]$/)) {
                return <span key={j} className="text-[#ff79c6]">{part}</span>
              }
              return <span key={j} className="text-[#f8f8f2]">{part}</span>
            })}
          </div>
        )
      })
    }
    
    // Plain text (no highlighting, just Dracula foreground)
    return code.split('\n').map((line, i) => (
      <div key={i} className="text-[#f8f8f2]">{line}</div>
    ))
  }

  return (
    <div className="my-6 sm:my-8">
      {title && (
        <div className="bg-[#282a36] px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#f8f8f2] font-medium border-b border-[#44475a] rounded-t-xl sm:rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate mr-2">
            <span className="text-[#ff79c6]">❯</span>
            <span className="text-[#8be9fd]">{title}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 sm:space-x-2 text-[#6272a4] hover:text-[#f8f8f2] transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-[#44475a] flex-shrink-0"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#50fa7b]" />
                <span className="text-xs hidden sm:inline text-[#50fa7b]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <div className="relative group">
        <pre className={`bg-[#282a36] backdrop-blur-sm p-4 sm:p-6 overflow-x-auto text-sm sm:text-base leading-relaxed ${title ? 'rounded-b-xl sm:rounded-b-2xl' : 'rounded-xl sm:rounded-2xl'} border border-[#44475a] shadow-lg`}>
          <code className={`language-${language} font-mono block`}>
            {highlightCode(children, language)}
          </code>
        </pre>
        {!title && (
          <button
            onClick={handleCopy}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center space-x-1 sm:space-x-2 text-[#6272a4] hover:text-[#f8f8f2] transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-[#44475a] backdrop-blur-sm opacity-0 group-hover:opacity-100"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#50fa7b]" />
                <span className="text-xs hidden sm:inline text-[#50fa7b]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}