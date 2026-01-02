# Pollocks School - Developer Guide

## 💎 Project Overview
**Pollocks School** is a premium, Apple-inspired website for a leading CBSE school in Visakhapatnam. Established in 1966, the school provides quality education from Pre-Nursery to 10th Standard. The site features a unique **Global Horizontal Scroll** experience, cinematic animations, and a high-end editorial aesthetic.

## 🛠 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** 
  - **GSAP ScrollTrigger:** Powers the global horizontal scroll.
  - **Framer Motion:** Used for micro-interactions, fades, and component reveals.
- **UI Primitives:** Radix UI (accessible primitives), Lucide React (icons).
- **Database:** MongoDB (for admission enquiries)
- **Fonts:** 
  - **Playfair Display:** Hero titles
  - **Cormorant Garamond:** Editorial Serif headings
  - **Plus Jakarta Sans:** Geometric Sans for body text

## 🚀 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env.local` file:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure
```
/app
  layout.js       # Global font config & metadata
  page.js         # Main entry point with GSAP horizontal scroll
  globals.css     # Tailwind directives & CSS variables
  /about          # About page
  /academics      # Academic programs page
  /admissions     # Admissions page
  /gallery        # Campus gallery page
  /contact        # Contact page
  /dashboard      # Admin dashboard for enquiries
  /api
    /leads        # Admission enquiry API
/components
  /ui             # Reusable primitives (Button, Card)
  Hero.jsx        # School hero with image carousel
  Navigation.jsx  # Collapsible glassmorphic navbar
  FounderShowcase.jsx # Academic Director section
  ServicesGrid.jsx    # Academic programs grid
  Portfolio.jsx       # Campus gallery
  ProcessTimeline.jsx # Admission process steps
  VideoShowcase.jsx   # Campus life video
  LeadForm.jsx        # Admission enquiry form
  Footer.jsx          # Full-height footer
  AboutTimeline.jsx   # School history timeline
  TeamSection.jsx     # Faculty section
  StatsSection.jsx    # School statistics
  Testimonials.jsx    # Parent testimonials
  BeforeAfterGallery.jsx # Co-curricular activities
  ContactHero.jsx     # Contact page hero
  ContactDetails.jsx  # Contact info & map
/hooks
  useHorizontalScroll.js # Legacy scroll logic
  useRevealMotion.js     # Reveal on scroll hook
/lib
  utils.js        # cn() utility for Tailwind class merging
  mongodb.js      # MongoDB connection
```

## 🎨 Design System

### Typography
- **Hero Titles (`font-serif-hero`):** Playfair Display
- **Headings (`font-serif`):** Cormorant Garamond
- **Body (`font-sans`):** Plus Jakarta Sans

### Brand Colors
- **Pollocks Blue:** `#6ec8f0` (Primary Brand Color)
- **Pollocks Blue Dark:** `#4ba8d0` (Hover states)
- **Pollocks Navy:** `#1a365d` (Dark sections)
- **Pollocks Sky:** `#e0f4fc` (Light backgrounds)
- **Pollocks Black:** `#121212` (Text)
- **Pollocks White:** `#FAFAFA` (Backgrounds)

### Key Interaction: Global Horizontal Scroll
The entire website behaves as a single horizontal strip.
- **Implementation:** Each page uses `GSAP ScrollTrigger` to pin the main container and translate it on the X-axis based on vertical scroll position.
- **Developer Note:** All top-level sections must have `w-screen` (or fixed width), `h-screen`, and `shrink-0`.

## 📝 Developer Notes & Troubleshooting

### GSAP ScrollTrigger + React
**Common Error:** `Runtime NotFoundError: The node to be removed is not a child of this node.`

**Cause:** Using `pin: true` on the direct root element of a React component.

**Solution:**
1. **Internal Wrapper:** NEVER pin the component's root element. Create an inner wrapper.
   ```jsx
   // ✅ CORRECT
   return (
     <main>
       <div ref={pinnedContainerRef}> {/* Pin this */}
          {content}
       </div>
     </main>
   )
   ```
2. **GSAP Context:** ALWAYS use `gsap.context()` and call `ctx.revert()` in cleanup.
3. **No smooth scroll:** Don't use `scroll-behavior: smooth` with ScrollTrigger.

### Adding New Sections
- Create the component
- Import it into the relevant page
- Wrap it in a `section` or `div` with `h-screen` and `shrink-0`

### Adding New Pages
- Create folder in `/app` with `page.js`
- Copy the GSAP horizontal scroll setup from existing pages
- Add navigation link in `Navigation.jsx`

## 📞 Contact Information
Based on [Pollocks School](https://www.pollocks.in/):
- **Phone:** +91 93914 01900
- **Email:** info@pollocks.in / admissions@pollocks.in
- **Location:** Visakhapatnam, Andhra Pradesh
- **Branches:** Madhurawada, Madhura Nagar, MVP, Marikavalasa, Railway New Colony, Dwaraka Nagar

## 🏫 School Information
- **Established:** 1966
- **Affiliation:** CBSE
- **Grades:** Pre-Nursery to 10th Standard
- **Teachers:** 80+
- **Students:** 1567+
- **Alumni:** 1000+
- **Years:** 58+ years of excellence
