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

// Code Block Component
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

  return (
    <div className="my-6 sm:my-8">
      {title && (
        <div className="bg-gray-800/50 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-300 font-medium border-b border-gray-700/50 rounded-t-xl sm:rounded-t-2xl flex items-center justify-between">
          <span className="truncate mr-2">{title}</span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-white transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-gray-700/50 flex-shrink-0"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs hidden sm:inline">Copied!</span>
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
      <div className="relative">
        <pre className={`bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 overflow-x-auto text-sm sm:text-base leading-relaxed ${title ? 'rounded-b-xl sm:rounded-b-2xl' : 'rounded-xl sm:rounded-2xl'} border border-gray-800/50`}>
          <code className={`language-${language} text-gray-100 font-mono`}>
            {children}
          </code>
        </pre>
        {!title && (
          <button
            onClick={handleCopy}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-white transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-gray-800/50 backdrop-blur-sm"
          >
            {copied ? (
              <Check className="h-3 w-3 sm:h-4 sm:w-4" />
            ) : (
              <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
            )}
          </button>
        )}
      </div>
    </div>
  )
}