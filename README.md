# Longevity Lab - High-Converting Landing Page

A Next.js landing page optimized for converting traffic into coaching applications, lead magnets, and email subscribers.

## Features

- **3-Tier Segmentation System:**
  - **Hot Leads:** Coaching application form (immediate follow-up)
  - **Warm Leads:** Lead magnet downloads (TRT Checklist, Macro Calculator)
  - **Cold Leads:** Email list signup (nurture sequence)

- **Mobile-First Design:** Optimized for mobile with responsive desktop layouts
- **Conversion-Focused:** Multiple CTAs strategically placed throughout the funnel
- **Wireframed Testimonials:** Placeholder testimonials ready for real content
- **Backend Templates:** API routes ready for email service integration

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod validation
- **Icons:** Material Icons
- **Deployment:** Vercel-ready

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file for email service integration:

```env
# Email Service (choose one)
SENDGRID_API_KEY=your_sendgrid_key
# OR
RESEND_API_KEY=your_resend_key
# OR
SMTP_HOST=your_smtp_host
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass

# Database (optional)
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

## Email Service Integration

The API routes are set up with templates for:

1. **SendGrid** - Popular transactional email service
2. **Resend** - Modern email API (recommended for Next.js)
3. **Nodemailer** - SMTP-based email sending

Uncomment and configure your preferred service in:
- `app/api/leads/route.ts` - Lead capture handler
- `app/api/email/route.ts` - Email sending handler

## Lead Segmentation

The system automatically segments leads based on their interaction:

1. **Coaching Application** → Hot lead
   - Immediate notification to team
   - Follow-up within 24 hours
   - High-priority nurture sequence

2. **Lead Magnet Download** → Warm lead
   - Download links sent via email
   - Educational nurture sequence
   - Upsell to coaching after engagement

3. **Email Signup** → Cold lead
   - Welcome email
   - General newsletter
   - Value-first content sequence

## Customization

### Update Logo
Replace `/public/assets/LongevityLab.png` with your logo file.

### Update Testimonials
Edit `components/SocialProof.tsx` to add real testimonials and images.

### Modify Packages
Edit `components/CoachingPackages.tsx` to update pricing and features.

### Update Content
All content is in component files - easily customizable for your messaging.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

The project is optimized for Vercel's edge network and serverless functions.

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── leads/        # Lead capture endpoint
│   │   └── email/         # Email sending endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main landing page
├── components/
│   ├── About.tsx          # About Dwayne section
│   ├── CoachingPackages.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Hero.tsx           # Hero section
│   ├── LeadCaptureModal.tsx
│   ├── LeadMagnets.tsx
│   ├── Navigation.tsx
│   ├── ProblemSolution.tsx
│   └── SocialProof.tsx    # Testimonials
└── public/
    └── assets/
        └── LongevityLab.png
```

## Next Steps

1. **Integrate Email Service:** Choose and configure your email provider
2. **Add Database:** Set up lead storage (Supabase, MongoDB, etc.)
3. **Add Real Testimonials:** Replace wireframes with actual client photos/quotes
4. **Set Up Analytics:** Add Google Analytics or similar
5. **A/B Testing:** Test different CTAs and messaging
6. **SEO Optimization:** Add meta tags, structured data, etc.

## Support

For questions or issues, refer to the Next.js documentation or your email service provider's docs.

---

Built with ❤️ for Longevity Lab

