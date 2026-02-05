# DuplicateBin - Safe Duplicate File Management

A modern SaaS website for DuplicateBin, a safe duplicate file management tool with archive-first protection. Built with React 18, TypeScript, and modern web technologies.

## 🌟 Features

- **Modern Landing Page**: Beautiful, responsive design with dark theme
- **Cross-Platform Support**: Native applications for Linux and Windows
- **Complete Documentation**: Comprehensive docs with responsive design including Windows-specific guide
- **Archive-First Safety**: Emphasizes safe duplicate cleanup approach with enterprise-grade features
- **Premium UI/UX**: Professional SaaS design with smooth animations
- **Testimonials**: Social proof with animated marquee
- **FAQ Section**: Comprehensive answers to common questions
- **Multi-Platform Downloads**: Direct GitHub release integration for Linux (.deb) and Windows (.exe)
- **Success Page**: Celebration page with confetti and installation guide for both platforms

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Components**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: Zustand
- **Animations**: Custom CSS animations and transitions

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/MustafaPinjari/duplicate-bin-website.git
   cd duplicate-bin-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5174`

## 📁 Project Structure

```
├── 📁 public
│   └── 📁 images
├── 📁 src
│   ├── 📁 app
│   ├── 📁 assets
│   ├── 📁 components
│   │   ├── 📁 common
│   │   ├── 📁 layout
│   │   └── 📁 ui
│   ├── 📁 hooks
│   ├── 📁 pages
│   │   ├── 📁 auth
│   │   ├── 📁 dashboard
│   │   ├── 📁 docs        # 📚 Complete documentation system
│   │   └── 📁 landing
│   ├── 📁 services
│   ├── 📁 store
│   ├── 📁 styles
│   └── 📁 utils
├── 📄 DEPLOYMENT_GUIDE.md  # 🚀 Domain & hosting setup guide
└── 📄 LICENSE
```

## 🎨 Website Sections

### Landing Page
1. **Hero Section** - Main value proposition with dashboard preview
2. **Value Proposition** - Trust-building messaging
3. **CLI Installation** - Terminal commands for installation
4. **Features Timeline** - 4-step process with animations
5. **Testimonials** - Animated marquee with user feedback
6. **Get Started** - Guides and resources
7. **FAQ** - Common questions and answers
8. **Download CTA** - Primary conversion section

### Documentation
- **Responsive Design** - Works perfectly on all devices
- **Three-Column Layout** - Navigation, content, and table of contents
- **Dark Theme** - Consistent with landing page design
- **Interactive Elements** - Copy-to-clipboard code blocks, smooth scrolling
- **Comprehensive Content** - Installation, usage, API docs, and more

## 🌐 Deployment & Domain Setup

### 🚀 Quick Deploy
The project is ready for deployment to any static hosting service:

```bash
npm run build  # Build for production
npm run preview  # Preview production build locally
```

### 🔗 Custom Domain Setup
For detailed instructions on connecting your Hostinger domain to Netlify, see:

**📖 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

This guide covers:
- Netlify deployment setup
- Hostinger DNS configuration
- SSL certificate setup
- Troubleshooting common issues
- Complete step-by-step instructions

## 🔗 GitHub Integration

The download buttons automatically fetch releases from:
- **Linux**: `https://github.com/MustafaPinjari/duplicate-bin/releases/download/v1.0.0/duplicate-bin.deb`
- **Windows**: `https://fanciful-shortbread-d39145.netlify.app/public/DuplicateBin.exe`

## 🎯 Key Features

- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Dark Theme**: Professional dark mode throughout
- **Custom Scrollbars**: Hidden scrollbars for clean UI
- **Smooth Animations**: Custom CSS animations and transitions
- **SEO Ready**: Proper meta tags and structure
- **Accessibility**: WCAG compliant with proper focus states
- **Performance**: Optimized with Vite and modern React patterns
- **Documentation System**: Complete docs with search and navigation

## 🔧 Customization

### Update Branding
- Replace logo: `public/images/logo.png`
- Update colors: `src/styles/globals.css`
- Modify content: `src/pages/landing/` components

### Documentation Content
- Add new docs: `src/pages/docs/`
- Update navigation: `src/pages/docs/components/docs-sidebar.tsx`
- Customize styling: `src/styles/globals.css` (docs-content section)

### GitHub Release Integration
Update the download URLs in:
- `src/pages/landing/download-cta-section.tsx` (both Linux and Windows)
- `src/pages/download-success.tsx` (multi-platform support)
- `src/pages/landing/cli-installation-section.tsx` (platform selector)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Small**: 640px - 768px
- **Medium**: 768px - 1024px
- **Large**: 1024px - 1280px
- **XL**: 1280px - 1536px
- **2XL**: > 1536px

## 🎨 Design System

- **Colors**: Black, grays, blue accents
- **Typography**: Inter font family with responsive scaling
- **Spacing**: Consistent 4px/8px grid system
- **Animations**: 200-300ms smooth transitions
- **Borders**: Rounded corners throughout
- **Scrollbars**: Custom styled or hidden for clean UI

## 🚀 Performance Features

- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Proper sizing and formats
- **Minimal Bundle**: Tree-shaking and dead code elimination
- **Fast Builds**: Vite for lightning-fast development

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@duplicatebin.dev or join our Discord community.

## 🔄 Recent Updates

- ✅ Added Windows download support with native .exe executable
- ✅ Enhanced documentation with comprehensive Windows installation guide
- ✅ Improved cross-platform CLI installation section with platform selector
- ✅ Updated download CTA section with dual-platform support
- ✅ Added advanced features documentation from desktop application
- ✅ Enhanced main documentation with enterprise-grade feature descriptions
- ✅ Complete documentation system with responsive design
- ✅ Fixed scrollbar issues with custom styling
- ✅ Enhanced mobile navigation and responsiveness
- ✅ Added comprehensive deployment guide
- ✅ Improved accessibility and performance

---

**Built with ❤️ for safe duplicate file management**