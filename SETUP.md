# Setup Guide for Longevity Lab Landing Page

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Logo**
   - Place your `LongevityLab.png` file in `/public/assets/`
   - The logo should be optimized for web (PNG with transparency recommended)

3. **Configure Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Add your email service API keys
   - See "Email Service Setup" below

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## Email Service Setup

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
4. Uncomment Resend code in `app/api/leads/route.ts` and `app/api/email/route.ts`

### Option 2: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Add to `.env.local`:
   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```
4. Uncomment SendGrid code in API routes

### Option 3: SMTP (Nodemailer)
1. Get SMTP credentials from your email provider
2. Add to `.env.local`:
   ```env
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your_username
   SMTP_PASS=your_password
   ```
3. Install nodemailer: `npm install nodemailer @types/nodemailer`
4. Uncomment SMTP code in API routes

## Database Setup (Optional)

### Supabase
1. Create account at [supabase.com](https://supabase.com)
2. Create a new project
3. Create a `leads` table:
   ```sql
   CREATE TABLE leads (
     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
     first_name TEXT NOT NULL,
     last_name TEXT NOT NULL,
     email TEXT NOT NULL,
     age INTEGER,
     phone TEXT,
     goals TEXT,
     current_challenges TEXT,
     resource_type TEXT,
     lead_type TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```
4. Add to `.env.local`:
   ```env
   SUPABASE_URL=https://xxxxx.supabase.co
   SUPABASE_KEY=your_anon_key
   ```
5. Install: `npm install @supabase/supabase-js`
6. Uncomment database code in `app/api/leads/route.ts`

## Customization Checklist

- [ ] Replace logo in `/public/assets/LongevityLab.png`
- [ ] Update testimonials in `components/SocialProof.tsx` with real photos/quotes
- [ ] Update pricing in `components/CoachingPackages.tsx`
- [ ] Customize email templates in `app/api/email/route.ts`
- [ ] Add your Instagram link in `components/FinalCTA.tsx`
- [ ] Update meta tags in `app/layout.tsx`
- [ ] Configure email service
- [ ] Set up database (optional)
- [ ] Add analytics (Google Analytics, etc.)

## Deployment to Vercel

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The project is optimized for Vercel's edge network.

## Testing Lead Capture

1. Start dev server: `npm run dev`
2. Click any CTA button on the page
3. Fill out the form
4. Check browser console for logged lead data
5. Once email service is configured, check your email inbox

## Next Steps

1. **Add Real Content:**
   - Replace wireframe testimonials with actual client photos
   - Add real before/after images
   - Update copy to match your voice

2. **Set Up Email Sequences:**
   - Welcome email for new subscribers
   - Download links for lead magnets
   - Follow-up sequence for coaching applications

3. **Analytics:**
   - Add Google Analytics
   - Track conversion rates
   - Monitor form submissions

4. **A/B Testing:**
   - Test different headlines
   - Test CTA button colors/text
   - Test form lengths

## Support

For issues or questions:
- Check Next.js docs: https://nextjs.org/docs
- Check your email service provider's docs
- Review the README.md file

