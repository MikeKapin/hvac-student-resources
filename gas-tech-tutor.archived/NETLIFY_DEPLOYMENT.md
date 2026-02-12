# Gas Tech AI Tutor - Netlify Deployment Guide

This Next.js application needs to be deployed as a **separate Netlify site** because it uses server-side API routes for AI functionality.

## 🚀 Quick Setup

### 1. Create New Netlify Site

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your GitHub repository: `MikeKapin/hvac-student-resources`

### 2. Configure Build Settings

**Base directory:** `gas-tech-tutor`

**Build command:** `npm install && npm run build`

**Publish directory:** `.next`

**Install Plugins:**
- The `@netlify/plugin-nextjs` is configured in `netlify.toml` and will be automatically installed

### 3. Set Environment Variables

Go to **Site settings → Environment variables** and add:

```
ANTHROPIC_API_KEY=your_anthropic_api_key_here
NEXT_PUBLIC_AI_PROVIDER=anthropic
NEXT_PUBLIC_CLAUDE_MODEL=claude-sonnet-4-5-20250929
```

### 4. Deploy

Click **"Deploy site"**

Your Gas Tech AI Tutor will be live at: `https://[your-site-name].netlify.app`

### 5. Update Main Site Links

After deployment, update the links in:
- `app/g2/page.tsx` - Line with `href="/gas-tech-tutor/"`
- `app/g3/page.tsx` - Line with `href="/gas-tech-tutor/"`

Change from:
```typescript
href="/gas-tech-tutor/"
```

To:
```typescript
href="https://your-gas-tech-tutor-site.netlify.app"
```

## 🎨 Optional: Custom Domain

To use a custom subdomain like `tutor.yourdomain.com`:

1. Go to **Site settings → Domain management**
2. Add custom domain
3. Update DNS records as instructed by Netlify
4. Update the links in G2/G3 pages to use your custom domain

## 🔧 Features Enabled

- ✅ Server-side AI API routes
- ✅ Claude Sonnet 4.5 integration
- ✅ PWA with offline support
- ✅ CSA code content integration
- ✅ Module-specific tutoring
- ✅ Conversation history
- ✅ Next.js SSR/SSG optimizations

## 🆓 Free & Open

This is a completely free educational resource by Mike Kapin. No paywalls, no subscriptions!

## 📝 Notes

- The site will auto-deploy on git pushes to the `main` branch
- Build time: ~1-2 minutes
- Netlify will handle caching and CDN distribution
- The @netlify/plugin-nextjs automatically handles Next.js optimizations
