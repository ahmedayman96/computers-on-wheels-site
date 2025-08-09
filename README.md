# Computers on Wheels – Website

Next.js 14 + Tailwind site for a Victoria, BC IT company.

## Development
```bash
npm i
npm run dev
```

## Pages
- `/` Home
- `/about`
- `/business-it`
- `/residential`
- `/pricing`
- `/service-area`
- `/testimonials`
- `/blog`
- `/contact` (+ `/api/contact` handler)
- `/remote-support`

## Customize
- Update phone & email in `components/Footer.tsx` and `components/CTA.tsx`
- Replace logo at `public/logo.svg`
- Edit copy in each page
- Add analytics (Plausible) and SEO tweaks in `app/layout.tsx`
