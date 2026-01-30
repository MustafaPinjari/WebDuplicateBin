# DuplicateBin - Safe Duplicate File Management

A modern SaaS landing page for DuplicateBin, a safe duplicate file management tool with archive-first protection. Built with React 18, TypeScript, and modern web technologies.

## 🌟 Features

- **Modern Landing Page**: Beautiful, responsive design with dark theme
- **Archive-First Safety**: Emphasizes safe duplicate cleanup approach
- **Premium UI/UX**: Professional SaaS design with smooth animations
- **Testimonials**: Social proof with animated marquee
- **FAQ Section**: Comprehensive answers to common questions
- **Download Integration**: Direct GitHub release integration
- **Success Page**: Celebration page with confetti and installation guide

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
   Navigate to `http://localhost:5173`

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
│   │   └── 📁 landing
│   ├── 📁 services
│   ├── 📁 store
│   ├── 📁 styles
│   └── 📁 utils
└── 📄 LICENSE
```

## 🎨 Landing Page Sections

1. **Hero Section** - Main value proposition with dashboard preview
2. **Value Proposition** - Trust-building messaging
3. **CLI Installation** - Terminal commands for installation
4. **Features Timeline** - 4-step process with animations
5. **Testimonials** - Animated marquee with user feedback
6. **Get Started** - Guides and resources
7. **FAQ** - Common questions and answers
8. **Download CTA** - Primary conversion section

## 🔗 GitHub Integration

The download button automatically fetches the latest release from:
```
https://github.com/MustafaPinjari/duplicate-bin/releases/latest/download/duplicate-bin.deb
```

## 🎯 Key Features

- **Responsive Design**: Works on all devices
- **Dark Theme**: Professional dark mode throughout
- **Smooth Animations**: Custom CSS animations and transitions
- **SEO Ready**: Proper meta tags and structure
- **Accessibility**: WCAG compliant with proper focus states
- **Performance**: Optimized with Vite and modern React patterns

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel/Netlify
The project is ready for deployment to any static hosting service.

## 🔧 Customization

### Update Branding
- Replace logo: `public/images/logo.png`
- Update colors: `src/styles/globals.css`
- Modify content: `src/pages/landing/` components

### GitHub Release Integration
Update the download URL in:
- `src/pages/landing/download-cta-section.tsx`
- `src/pages/download-success.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1280px

## 🎨 Design System

- **Colors**: Black, grays, purple accents
- **Typography**: Inter font family
- **Spacing**: Consistent 8px grid system
- **Animations**: 200-300ms transitions
- **Borders**: Rounded corners throughout

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

---

**Built with ❤️ for safe duplicate file management**