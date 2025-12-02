# 🎯 Fortune Business Solutions

> **Your Trusted Partner for Staffing, Business Formation & Event Management**

A modern, responsive corporate website built with Next.js 14, TypeScript, and clean design principles. Fortune Business Solutions specializes in staffing solutions, company formation services (Fortune PRO), and comprehensive event management across Oman, Bahrain, and India.
fick
---

## 📺 Project Preview

The website features the iconic Fortune logo animation that plays on page load:

![Fortune Logo](publichttps://hebbkx1anhila5yf.public.blob.vercel-storage.com/fortune%20logo-vErfzRfbPavpWQMDBQbdr6VnD6agO8.mp4)

*The animated logo appears on the homepage hero, about page story section, and throughout key sections.*

---

## ✨ Features

### 🎨 Design & User Experience
- **Modern Design Aesthetic** - Clean typography, bold layouts, and professional color palette
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Page transitions, hover effects, and staggered content reveals
- **Hamburger Navigation** - Mobile-friendly animated menu with smooth transitions
- **Video Integration** - Branded video content that plays on page navigation

### 📄 Pages & Sections
- **Home** - Hero with video, services overview, products showcase, why choose us, industries served, client logos
- **About** - Company story with video, mission & vision cards, team showcase
- **Services** - 10 comprehensive services including staffing, company formation, events
- **Products** - 4 main product categories with subcategories, linking to contact
- **Contact** - Interactive form with email integration, Google Maps embed, FAQ section
- **Social** - Instagram-focused page with @fortune_oman integration

### 🔧 Technical Features
- **Contact Form** - Resend API integration for email delivery to ceo.fortune@outlook.com
- **Form Validation** - Client-side and server-side validation with error handling
- **Success Animations** - Beautiful full-screen success confirmation with auto-dismiss
- **Scroll Restoration** - Automatic scroll-to-top on page navigation
- **SEO Optimized** - Proper meta tags, semantic HTML, and accessibility features
- **Type Safety** - Full TypeScript implementation for robust development

---

## 🚀 Tech Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 19** - Latest React with improved features
- **TypeScript 5.9** - Type-safe development

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Headless UI primitives
- **Lucide Icons** - Beautiful, consistent icon set

### Forms & Validation
- **React Hook Form** - Performant form management
- **Zod** - TypeScript-first schema validation

### Email & Communication
- **Resend** - Modern email API for contact form submissions

### Deployment
- **Vercel** - Zero-configuration deployment with automatic HTTPS

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/your-username/fortune-business-solutions.git
cd fortune-business-solutions
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Environment Variables
Create a `.env.local` file in the root directory:

\`\`\`env
# Required for production email functionality
RESEND_API_KEY=re_your_resend_api_key_here

# Optional: If you want to test with a different email
# (Default is ceo.fortune@outlook.com)
\`\`\`

**Getting Your Resend API Key:**
1. Visit [resend.com](https://resend.com/)
2. Sign up for a free account (100 emails/day)
3. Go to API Keys section
4. Create a new API key
5. Copy and paste into `.env.local`

### 4. Run Development Server
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
\`\`\`bash
npm run build
npm start
# or
yarn build
yarn start
\`\`\`

---

## 📁 Project Structure

\`\`\`
fortune-business-solutions/
├── app/                          # Next.js App Router
│   ├── about/page.tsx           # About us page
│   ├── api/
│   │   └── send-email/route.ts  # Contact form API endpoint
│   ├── contact/page.tsx         # Contact page with form
│   ├── products/page.tsx        # Products catalog
│   ├── services/page.tsx        # Services overview
│   ├── social/page.tsx          # Instagram social page
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles & animations
├── components/
│   ├── navigation.tsx           # Hamburger navigation component
│   ├── scroll-to-top.tsx        # Auto scroll restoration
│   └── ui/                      # shadcn/ui components
├── public/
│   ├── fortune-logo.mp4         # Brand video animation
│   └── images/
│       └── clients-logos.png    # Client logos showcase
├── API-SETUP.txt                # Complete API configuration guide
├── package.json                 # Dependencies & scripts
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
\`\`\`

---

## 🎨 Design System

### Colors
- **Primary Blue**: `#2563eb` (Accent color for CTAs and highlights)
- **Black**: `#000000` (Primary text and emphasis)
- **White**: `#ffffff` (Backgrounds and light text)
- **Neutral Grays**: Various shades for backgrounds and borders

### Typography
- **Heading Font**: Geist Sans (Bold, 700-900 weights)
- **Body Font**: Geist Sans (Regular, 400-500 weights)
- **Tracking**: Tight tracking (`tracking-tighter`) for large headings

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Animation Philosophy
- Fade-in effects for page sections
- Slide-up animations for cards
- Staggered delays for grid items
- Hover transitions: 300ms ease
- Page transitions: Smooth scroll restoration

---

## 📧 Contact Form Setup

The contact form sends emails using the Resend API.

### How It Works
1. User fills out the contact form
2. Form validates required fields (name, email, service, message)
3. POST request sent to `/api/send-email`
4. Email formatted with HTML template
5. Sent via Resend to `ceo.fortune@outlook.com`
6. Success animation displayed to user

### Testing Without API Key
The form includes a simulation mode that works without `RESEND_API_KEY`:
- Shows success animation after 2 seconds
- Logs form data to console
- Perfect for development testing

### Production Setup
1. Add `RESEND_API_KEY` to Vercel environment variables
2. Set for all environments (Production, Preview, Development)
3. Verify sender domain in Resend dashboard
4. Test form submission on live site

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Deploy from GitHub
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `RESEND_API_KEY` = your_api_key
5. Deploy!

#### Option 2: Deploy with Vercel CLI
\`\`\`bash
npm install -g vercel
vercel login
vercel
\`\`\`

Follow the prompts and add environment variables when requested.

### Post-Deployment Checklist
- ✅ Test contact form submission
- ✅ Verify emails arrive at ceo.fortune@outlook.com
- ✅ Check all pages load correctly
- ✅ Test navigation on mobile devices
- ✅ Verify video playback across browsers
- ✅ Check Google Maps embed
- ✅ Test Instagram link (@fortune_oman)

---

## 🔧 Configuration Files

### Environment Variables
\`\`\`env
# Required
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Future Enhancements (Optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key
INSTAGRAM_ACCESS_TOKEN=your_instagram_token
\`\`\`

### Package Scripts
\`\`\`json
{
  "dev": "next dev",           # Start development server
  "build": "next build",       # Build for production
  "start": "next start",       # Start production server
  "lint": "eslint ."           # Run ESLint
}
\`\`\`

---

## 🌐 Key Pages Overview

### Homepage (`/`)
- Video hero with company tagline
- Quick stats (5000+ gifts delivered, 150+ clients, 25+ team members)
- Services grid (10 services)
- Products showcase (4 categories)
- Why Choose Us with video
- Industries served
- How We Work process
- Client logos showcase
- Testimonials
- CTA section

### About (`/about`)
- Company story with video
- Mission & Vision cards (hover effects)
- Core Values grid
- Team showcase with roles

### Services (`/services`)
- Hero with abstract geometric element
- 10 service cards with detailed descriptions
- Why Choose Us with video
- All cards link to contact page

### Products (`/products`)
- Hero section
- 4 main product categories
- Subcategory lists
- Quote request CTAs
- Why Choose Us with video

### Contact (`/contact`)
- Contact form with validation
- Email, phone, location, Instagram info
- Google Maps embed (Ruwi, Muscat, Oman)
- FAQ section
- Success animation on submission

### Social (`/social`)
- Instagram-focused design
- @fortune_oman handle
- Large Instagram card with gradient hover
- Instagram content types (Post, Reel, Story, Live)
- Community benefits
- Newsletter signup

---

## 📱 Responsive Design

### Mobile Optimizations
- Hamburger navigation with animated menu
- Reduced font sizes for headings
- Stacked layouts (flex-col)
- Touch-friendly button sizes (min-h-12)
- Optimized video sizing
- Responsive padding and spacing

### Tablet Breakpoints
- Two-column layouts where appropriate
- Intermediate font sizes
- Adjusted grid columns
- Balance between mobile and desktop

### Desktop Experience
- Full navigation bar
- Large typography for impact
- Multi-column grids
- Enhanced hover effects
- Optimized for wide screens

---

## 🔐 Security & Best Practices

- ✅ Environment variables for sensitive data
- ✅ Server-side form validation
- ✅ Client-side input sanitization
- ✅ Type-safe API routes
- ✅ HTTPS by default (Vercel)
- ✅ No exposed API keys in frontend
- ✅ Rate limiting ready (Vercel functions)
- ✅ CORS protection on API routes

---

## 🐛 Troubleshooting

### Contact Form Not Sending Emails
**Problem**: Form submits but no email received

**Solutions**:
1. Check `RESEND_API_KEY` is set correctly in Vercel
2. Verify API key has send permissions in Resend dashboard
3. Check spam/junk folder
4. Review Vercel function logs for errors
5. Test with simulation mode first

### Video Not Playing
**Problem**: Fortune logo video doesn't load

**Solutions**:
1. Verify `fortune-logo.mp4` exists in `/public` folder
2. Check video codec (should be H.264/MP4)
3. Test in different browsers
4. Check browser console for errors
5. Ensure video file size is reasonable (<5MB)

### Navigation Not Working
**Problem**: Page navigation broken or scroll issues

**Solutions**:
1. Clear browser cache
2. Verify ScrollToTop component is in layout
3. Check all Link components have correct href
4. Test in incognito mode
5. Review browser console for errors

### Mobile Layout Issues
**Problem**: Text overflow or broken responsive design

**Solutions**:
1. Clear browser cache
2. Check responsive classes (text-3xl sm:text-5xl md:text-7xl)
3. Verify container padding and max-widths
4. Test with Chrome DevTools device emulation
5. Check for hardcoded widths

---

## 📊 Performance Optimization

### Current Optimizations
- Next.js automatic code splitting
- Image optimization with Next/Image (where applicable)
- CSS minification and purging
- Font optimization with next/font
- Lazy loading for off-screen content
- Minimal JavaScript bundle size

### Recommended Enhancements
- Enable Vercel Analytics
- Add Vercel Speed Insights
- Implement image CDN for client logos
- Add loading states for form submission
- Consider lazy loading for video content

---

## 🤝 Contributing

This is a proprietary project for Fortune Business Solutions. For internal development:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly (mobile + desktop)
4. Commit: `git commit -m "Add your feature"`
5. Push: `git push origin feature/your-feature`
6. Create a pull request

---

## 📞 Support & Contact

### Business Inquiries
- **Email**: ceo.fortune@outlook.com
- **Phone**: +968 91724281
- **Location**: Ruwi, Muscat, Sultanate of Oman
- **Instagram**: [@fortune_oman](https://instagram.com/fortune_oman)

### Technical Support
- Review API-SETUP.txt for detailed configuration
- Check Vercel function logs for API issues
- Consult Next.js documentation for framework questions
- Review shadcn/ui docs for component usage

---

## 📝 License

© 2025 Fortune Business Solutions. All rights reserved.

This is proprietary software developed for Fortune Business Solutions. Unauthorized copying, distribution, or modification is prohibited.

---

## 🙏 Acknowledgments

- **Design Inspiration**: Modern minimalist design principles
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide Icons
- **Hosting**: Vercel Platform
- **Email Service**: Resend

---

## 📅 Changelog

### Version 1.0.0 (January 2025)
- ✅ Initial launch
- ✅ Complete responsive design
- ✅ Contact form with email integration
- ✅ All 6 pages fully functional
- ✅ Video integration
- ✅ Mobile hamburger navigation
- ✅ Smooth animations throughout
- ✅ Client logos showcase
- ✅ Google Maps integration
- ✅ Instagram social page

---

**Built with ❤️ for Fortune Business Solutions**

*Empowering businesses across Oman, Bahrain, and India with premium staffing, company formation, and event management solutions.*
