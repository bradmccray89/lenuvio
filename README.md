# ⚡ Lenuvio

<div align="center">

**Building Tomorrow's Digital Experiences**

_Where bold vision meets technical mastery_

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

[🚀 Live Site](https://lenuv.io) • [💼 Portfolio](#features) • [🤝 Connect](#contact)

</div>

---

## 🌟 What is Lenuvio?

Lenuvio isn't just another development agency - we're **creative catalysts** who transform ambitious ideas into inspiring digital products that deliver results. This repository powers our digital presence, showcasing our philosophy of continuous exploration and engineering excellence.

> _"Every great project starts with a conversation, and every bold idea deserves to become reality."_

## ✨ The Experience

### 🎯 **Core Philosophy**

- **Empowering Vision**: Taking your boldest ideas from concept to reality
- **Continuous Exploration**: Never-ending discovery of new technologies and creative solutions
- **Technical Excellence**: Cutting-edge development with clean, scalable architecture
- **Inspiring Results**: Digital experiences that captivate and deliver exceptional outcomes

### 🚀 **Service Portfolio**

- **Full-Stack Development** → React, Angular, Next.js, .NET, Node.js
- **Cloud Solutions & DevOps** → AWS, Azure, Vercel, Docker, CI/CD
- **UI/UX & Frontend Architecture** → Design systems, responsive interfaces, performance optimization
- **Digital Transformation** → Legacy modernization, process automation, strategic consulting

## 🛠️ Technical Architecture

Built with a modern, performance-first stack that embodies our commitment to innovation:

### **Core Technologies**

```typescript
const techStack = {
  framework: 'Next.js 15.3.4',
  language: 'TypeScript 5.0',
  styling: 'Tailwind CSS 4.0',
  animations: 'CSS Modules + Custom Keyframes',
  deployment: 'Vercel',
  analytics: 'Vercel Analytics & Speed Insights',
};
```

### **Key Features**

- ⚡ **Blazing Fast Performance** - Optimized for Core Web Vitals
- 🎨 **Immersive Animations** - Floating particles, dynamic gradients, smooth transitions
- 📱 **Responsive Design** - Flawless experience across all devices
- 🌙 **Glassmorphism UI** - Modern, depth-rich visual design
- 📧 **Smart Contact System** - Automated email workflows with Resend
- 🔔 **Toast Notifications** - Beautiful, liquid glass notification system
- 📊 **Real-time Analytics** - Performance monitoring and user insights

### **Advanced Capabilities**

- **Dynamic Service Routing** - Smart contact form pre-population
- **Cross-client Email Templates** - Outlook, Gmail, Apple Mail compatible
- **Progressive Enhancement** - Works without JavaScript, better with it
- **SEO Optimized** - Semantic HTML, meta tags, structured data
- **Accessibility First** - WCAG compliant, keyboard navigation, screen reader support

## 🚦 Quick Start

Get the Lenuvio experience running locally:

```bash
# Clone the vision
git clone https://github.com/bradmccray89/lenuvio.git
cd lenuvio

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Add your RESEND_API_KEY and other variables

# Launch development server
npm run dev

# Open http://localhost:3000
```

### **Environment Setup**

```env
# Email Configuration
RESEND_API_KEY=your_resend_api_key
RESEND_AUDIENCE_ID=your_audience_id
UNSUBSCRIBE_SECRET=your_secret_key

# Deployment
NEXT_PUBLIC_BASE_URL=https://lenuv.io
```

## 📁 Project Structure

```
lenuvio/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── hero/           # Landing section with animations
│   │   ├── about/          # Company story & tech stack
│   │   ├── services/       # Service offerings
│   │   ├── contact/        # Contact form & info
│   │   ├── navigation/     # Floating nav with glassmorphism
│   │   ├── footer/         # Newsletter & links
│   │   └── toast/          # Notification system
│   ├── lib/
│   │   └── email/          # Email template system
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript definitions
│   └── api/                # API routes for contact & newsletter
├── public/
│   ├── branding/           # Logo & brand assets
│   ├── icons/              # Custom icon components
│   └── images/             # Optimized images
└── styles/                 # Global CSS & modules
```

## 🎨 Design System

### **Color Philosophy**

```css
/* Gradient Mastery */
--primary-gradient: linear-gradient(
  135deg,
  #22d3ee 0%,
  #3b82f6 50%,
  #8b5cf6 100%
);
--glass-bg: rgba(30, 41, 59, 0.6);
--border-glow: rgba(71, 85, 105, 0.3);

/* Semantic Colors */
--success: #22d3ee;
--error: #ef4444;
--warning: #f59e0b;
--info: #3b82f6;
```

### **Animation Principles**

- **Floating Elements** - Subtle, organic movement
- **Glassmorphism** - Depth through blur and transparency
- **Progressive Disclosure** - Staggered animations with cubic-bezier easing
- **Micro-interactions** - Hover states that respond and delight

## 🔧 Development Workflow

### **Available Scripts**

```bash
npm run dev          # Development with Turbopack
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checks
```

### **Code Quality**

- **TypeScript** - Full type safety across the codebase
- **ESLint** - Next.js recommended + custom rules
- **Prettier** - Consistent code formatting
- **CSS Modules** - Scoped, maintainable styles

## 📧 Email System

Advanced email templates with cross-client compatibility:

```typescript
// Contact form auto-reply
const response = await fetch('/api/send', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Client Name',
    email: 'client@example.com',
    service: 'full-stack',
    message: 'Project details...',
  }),
});

// Newsletter subscription
const subscription = await fetch('/api/audience', {
  method: 'POST',
  body: JSON.stringify({ email: 'subscriber@example.com' }),
});
```

**Features:**

- 📱 Mobile-responsive templates
- 🎨 Dark theme optimized
- ✉️ Outlook/Gmail/Apple Mail compatible
- 🔗 One-click unsubscribe
- 📊 Delivery tracking

## 🚀 Deployment

Lenuvio is optimized for Vercel deployment:

1. **Connect Repository** - Link GitHub repo to Vercel
2. **Configure Environment** - Add environment variables
3. **Deploy** - Automatic deployments on push to main
4. **Analytics** - Built-in performance monitoring

```bash
# Manual deployment
npm run build
npx vercel --prod
```

## 🤝 Contributing

We believe in the power of collaboration and welcome contributions that align with our vision of creative excellence:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Contribution Guidelines**

- Follow existing code style and architecture
- Add TypeScript types for all new features
- Include responsive design considerations
- Test across multiple browsers and devices
- Maintain accessibility standards

## 📄 License

This project is proprietary and confidential. All rights reserved by Lenuvio.

For licensing inquiries or usage permissions, please contact us at hello@lenuv.io

## 🌐 Connect & Collaborate

Ready to transform your vision into reality?

<div align="center">

**Let's Build Something Amazing Together**

[![Website](https://img.shields.io/badge/Portfolio-lenuv.io-00D4FF?style=for-the-badge&logo=globe)](https://lenuv.io)
[![Email](https://img.shields.io/badge/Email-hello@lenuv.io-EA4335?style=for-the-badge&logo=gmail)](mailto:hello@lenuv.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-company/lenuvio-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/company/lenuvio)
[![GitHub](https://img.shields.io/badge/GitHub-bradmccray89-171515?style=for-the-badge&logo=github)](https://github.com/bradmccray89)

</div>

---

<div align="center">

_Crafted with passion and precision by the Lenuvio team_

**Building Tomorrow's Innovation, Today** ⚡

</div>
