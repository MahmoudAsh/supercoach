# SuperCoach Next.js Migration

This project is a modern Next.js 14 migration of the SuperCoach website, featuring improved performance, SEO, and maintainability.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **Framer Motion** for smooth animations
- **Responsive Design** for all devices
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with Next.js Image component
- **Arabic Language Support** with RTL layout support

## 📁 Project Structure

```
supercoach-nextjs/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── workout/           # Workout page route
│   ├── pricing/           # Pricing page route
│   └── ...                # Other routes
├── components/             # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── DashboardSection.tsx
│   └── ...                # Other components
├── public/                 # Static assets
│   ├── images/            # Optimized images
│   ├── videos/            # Video files
│   └── fonts/             # Custom fonts
├── styles/                 # Additional styles
├── lib/                    # Utility functions
└── types/                  # TypeScript types
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GA_ID=G-5NBYPWHS4Q
NEXT_PUBLIC_INTERCOM_APP_ID=epc9u95z
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

### 5. Start Production Server

```bash
npm start
# or
yarn start
```

## 🔧 Configuration Files

### Next.js Config (`next.config.js`)
- App Router enabled
- Image optimization
- Video file handling
- Custom webpack configuration

### Tailwind Config (`tailwind.config.js`)
- Custom color palette matching SuperCoach brand
- Custom fonts (Alexandria, Sora, Inter, Cairo)
- Custom animations and utilities
- Responsive breakpoints

### TypeScript Config (`tsconfig.json`)
- Strict type checking
- Path aliases for clean imports
- Next.js specific configurations

## 🎨 Styling & Components

### CSS Architecture
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for consistent theming
- **Component-based** CSS organization
- **Responsive design** with mobile-first approach

### Component System
- **Reusable components** with TypeScript interfaces
- **Props validation** and default values
- **Accessibility** features built-in
- **Performance optimized** with React best practices

### Design Tokens
- **Colors**: SuperCoach brand colors with semantic naming
- **Typography**: Custom font stack with proper fallbacks
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth transitions and micro-interactions

## 🌐 Internationalization

### Language Support
- **English** (default)
- **Arabic** with RTL layout support
- **Font switching** based on language
- **Responsive text** alignment

### RTL Support
- **Right-to-left** text direction for Arabic
- **Mirrored layouts** and components
- **Custom CSS** for RTL specific styling

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

### Mobile-First Approach
- **Progressive enhancement** from mobile to desktop
- **Touch-friendly** interactions
- **Optimized performance** for mobile devices

## 🚀 Performance Optimizations

### Next.js Features
- **Image optimization** with automatic WebP/AVIF
- **Code splitting** and lazy loading
- **Static generation** where possible
- **Edge runtime** for dynamic content

### Asset Optimization
- **Compressed images** with multiple formats
- **Lazy loading** for below-the-fold content
- **CDN ready** static assets
- **Font optimization** with display swap

## 🔍 SEO & Analytics

### Meta Tags
- **Open Graph** for social sharing
- **Twitter Cards** for Twitter
- **Structured data** for search engines
- **Canonical URLs** and meta descriptions

### Analytics
- **Google Analytics 4** integration
- **Intercom** chat widget
- **Performance monitoring** with Core Web Vitals

## 📄 Page Migration Status

### ✅ Completed
- [x] Project setup and configuration
- [x] Root layout with metadata
- [x] Navigation component
- [x] Hero section
- [x] Basic component structure

### 🔄 In Progress
- [ ] Dashboard section
- [ ] Mobile tabs
- [ ] App features
- [ ] How it works
- [ ] Banner section

### ⏳ Pending
- [ ] Testimonials
- [ ] Blog section
- [ ] FAQ section
- [ ] Footer
- [ ] Workout page
- [ ] Pricing page
- [ ] Other static pages

## 🧪 Testing

### Development Testing
```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build testing
npm run build
```

### Testing Strategy
- **Component testing** with React Testing Library
- **E2E testing** with Playwright
- **Performance testing** with Lighthouse
- **Accessibility testing** with axe-core

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Configure build commands
- **AWS Amplify**: Use Next.js build settings
- **Custom server**: Build and serve static files

## 🔄 Migration Notes

### HTML to React Conversion
- **Semantic HTML** preserved in components
- **CSS classes** converted to Tailwind utilities
- **JavaScript functionality** converted to React hooks
- **Form handling** updated to React patterns

### Asset Migration
- **Images**: Moved to `/public/images/`
- **Videos**: Moved to `/public/videos/`
- **Fonts**: Configured with Next.js font optimization
- **CSS**: Converted to Tailwind and component styles

### Performance Improvements
- **Lazy loading** for images and components
- **Code splitting** for better caching
- **Optimized fonts** with display swap
- **Compressed assets** for faster loading

## 🤝 Contributing

### Development Workflow
1. Create a feature branch
2. Make changes with proper TypeScript types
3. Test thoroughly
4. Submit a pull request

### Code Standards
- **TypeScript** for all components
- **ESLint** configuration enforced
- **Prettier** for code formatting
- **Component documentation** required

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Tools
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image)

## 🆘 Support

### Common Issues
- **Build errors**: Check TypeScript types
- **Styling issues**: Verify Tailwind classes
- **Performance**: Use Next.js built-in optimizations

### Getting Help
- Check existing issues
- Review component documentation
- Test with minimal reproduction

---

**SuperCoach Next.js Migration** - Built with modern web technologies for optimal performance and user experience.
