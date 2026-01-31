# Duplicate Bin Documentation Website

A comprehensive, modern documentation website for Duplicate Bin, built with React, TypeScript, and Tailwind CSS. Modeled after the structure and user experience of kiro.dev/docs.

## Features

### 🎨 Design & Layout
- **Dark theme by default** with clean, modern aesthetics
- **Three-column layout** on desktop (sidebar, content, table of contents)
- **Fully responsive** design that works on all devices
- **Sticky navigation** with smooth scrolling
- **Professional typography** optimized for reading

### 🧭 Navigation
- **Persistent sidebar** with collapsible sections
- **Active item highlighting** with visual indicators
- **Auto-generated table of contents** with scroll tracking
- **Breadcrumb navigation** and clear hierarchy
- **Mobile-friendly** hamburger menu

### 📝 Content Features
- **Rich markdown-style content** with proper styling
- **Code blocks** with syntax highlighting
- **Callout components** (info, warning, error, success)
- **Responsive images** and media
- **Search functionality** (⌘K / Ctrl+K)

### 🔧 Technical Implementation
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Accessible** keyboard and screen reader support
- **SEO optimized** with proper meta tags

## Documentation Structure

```
/docs
├── /                          # Introduction & Quick Start
├── /installation              # Installation Guide
├── /authentication           # Authentication Setup
├── /first-scan               # Your First Scan Tutorial
├── /scanning-engine          # Scanning Engine Details
├── /duplicate-detection      # Duplicate Detection Algorithms
├── /archive-workflow         # Archive-First Workflow
├── /filters-rules            # Filters & Rules Configuration
├── /cli/
│   ├── /installation         # CLI Installation
│   ├── /commands             # Complete CLI Reference
│   └── /automation           # Automation Examples
├── /advanced/
│   ├── /performance          # Performance Tuning
│   ├── /large-systems        # Large File Systems
│   └── /network-scanning     # Network Scanning
├── /api/
│   ├── /rest                 # REST API Documentation
│   ├── /webhooks             # Webhooks Integration
│   └── /databases            # Database Backends
├── /security/
│   ├── /protection           # System Protection
│   ├── /recovery             # Rollback & Recovery
│   └── /permissions          # Permissions Model
└── /guides/
    ├── /workflows            # Common Workflows
    ├── /best-practices       # Best Practices
    ├── /troubleshooting      # Troubleshooting Guide
    └── /privacy              # Privacy & Data Handling
```

## Key Components

### DocsLayout
Main layout component providing the three-column structure with responsive behavior.

### DocsNavbar
Top navigation bar with logo, main navigation links, search, and CTA buttons.

### DocsSidebar
Left sidebar with hierarchical navigation, collapsible sections, and active state tracking.

### DocsTableOfContents
Right sidebar with auto-generated table of contents and scroll-based active section highlighting.

### DocsContent
Content wrapper with proper typography, spacing, and support for rich content elements.

### Callout Components
Reusable callout components for info, warning, error, and success messages.

### CodeBlock Components
Syntax-highlighted code blocks with copy functionality and language support.

## Usage

### Adding New Documentation Pages

1. Create a new page component in `src/pages/docs/`
2. Add the route to `src/app/router.tsx`
3. Update the navigation in `src/pages/docs/components/docs-sidebar.tsx`

Example:
```tsx
// src/pages/docs/new-feature.tsx
import { DocsContent, Callout, CodeBlock } from './components/docs-content'

export function DocsNewFeaturePage() {
  return (
    <DocsContent
      title="New Feature"
      description="Learn about this new feature"
    >
      <p>Content goes here...</p>
      
      <Callout type="info" title="Note">
        Important information about the feature.
      </Callout>
      
      <CodeBlock language="bash">
        {`duplicate-bin new-feature --help`}
      </CodeBlock>
    </DocsContent>
  )
}
```

### Styling Guidelines

- Use semantic HTML elements
- Follow the established typography hierarchy
- Use Tailwind CSS classes consistently
- Ensure proper contrast ratios
- Test on multiple screen sizes

### Content Guidelines

- Write clear, concise documentation
- Use code examples liberally
- Include callouts for important information
- Structure content with proper headings
- Add table of contents anchors to headings

## Accessibility

- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels and roles
- Focus management
- High contrast ratios
- Semantic HTML structure

## Performance

- Optimized bundle size
- Lazy loading for routes
- Efficient re-renders
- Smooth scrolling animations
- Fast navigation between pages

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check
```

## Deployment

The documentation is built as a static site and can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any CDN or web server

## Future Enhancements

- [ ] Full-text search implementation
- [ ] Dark/light theme toggle
- [ ] PDF export functionality
- [ ] Multi-language support
- [ ] Interactive code examples
- [ ] API playground
- [ ] Feedback collection
- [ ] Analytics integration

This documentation website provides a solid foundation for comprehensive product documentation with room for future enhancements and customization.