# Pradeep Kumar S — Premium Futuristic Portfolio Website

> **Computer Science & Engineering Student | Aspiring Software Developer**  
> *Targeting Software Engineering Roles & Internships in India and Dubai, UAE.*

A high-performance, futuristic, interactive personal portfolio website engineered with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Three.js**. Designed with dark obsidian backgrounds, neon cyan/violet gradients, an interactive 3D holographic cyber-core, verified project architecture modals, an AI-powered conversational portfolio assistant, and a developer terminal easter egg.

---

## ⚡ Key Highlights & Engineering Features

- 🌌 **Interactive 3D Hologram**: Interactive Three.js cyber-core responding with damped inertia to mouse and touch interactions, with an accessible CSS holographic fallback and respect for reduced-motion accessibility preferences.
- 🎨 **Futuristic Cyberpunk Aesthetic**: Deep black (`#040711`) palette, glassmorphism cards, glowing borders, and smooth transitions.
- 🌓 **Dual-Theme Support**: Dark mode by default with seamless toggle to a high-contrast silver cyber aesthetic.
- 🤖 **Offline-First AI Portfolio Assistant**: Conversational assistant answering questions on background, candidate projects, verified skills, and Dubai relocation goals without requiring paid external APIs.
- 💼 **Verified Candidate Project Showcase**: Filterable portfolio gallery with detailed technical architecture modals and transparent academic candidate badges.
- 🧭 **Honest Skills Representation**: Categorized technology cards with experience levels (`Actively Building`, `Academic Projects`, `Core Knowledge`) instead of arbitrary, misleading percentage meters.
- 📄 **Resume Download Modal**: Direct PDF download handling with instructions for updating documents.
- 📬 **Interactive Contact Deck**: Validated contact form with anti-spam honeypot protection, direct email copy to clipboard with confetti celebration, and verified social links.
- 💻 **Developer Console Easter Egg**: Terminal emulator accessible via keyboard shortcut (`Ctrl + \`` or `~`) or navbar icon with commands like `help`, `skills`, `projects`, `dubai`, `matrix`.

---

## 📁 Clean Project Architecture

```
pradeep-portfolio/
├── public/
│   ├── documents/
│   │   ├── README.txt
│   │   └── Pradeep_Kumar_S_Resume.pdf      <-- Place your resume PDF here
│   ├── favicon.svg                         <-- Custom futuristic PK monogram
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AiAssistant.tsx                 <-- AI Chatbot modal with verified data
│   │   ├── BackgroundAtmosphere.tsx        <-- Subtle grid & atmospheric glow
│   │   ├── EasterEggTerminal.tsx           <-- Developer command console
│   │   ├── Footer.tsx                      <-- Footer with back-to-top & links
│   │   ├── Hero3DCanvas.tsx                <-- Interactive Three.js 3D Cyber Core
│   │   ├── Navbar.tsx                      <-- Sticky glass navbar & mobile drawer
│   │   ├── NotFoundPage.tsx                <-- Cyber 404 node error page
│   │   ├── ProjectCard.tsx                 <-- Glassmorphic project cards
│   │   ├── ProjectModal.tsx                <-- Detailed architecture modal
│   │   ├── ResumeModal.tsx                 <-- Resume download & upload instructions
│   │   ├── SocialIcons.tsx                 <-- Pixel-perfect SVG brand icons
│   │   └── ToastNotification.tsx           <-- Floating toast alert banner
│   ├── data/
│   │   ├── profile.ts                      <-- ⭐ CENTRAL CONFIG FOR ALL PERSONAL DETAILS
│   │   ├── projects.ts                     <-- ⭐ CENTRAL CONFIG FOR ALL PROJECTS
│   │   └── skills.ts                       <-- ⭐ CENTRAL CONFIG FOR ALL TECHNOLOGIES
│   ├── hooks/
│   │   ├── useReducedMotion.ts             <-- Respects visitor motion preferences
│   │   ├── useScrollSpy.ts                 <-- Tracks active section for navbar
│   │   └── useTheme.ts                     <-- Dark/Light theme state & storage
│   ├── sections/
│   │   ├── AboutSection.tsx                <-- Education, mindset, Dubai targets
│   │   ├── ContactSection.tsx              <-- Direct channels, form, email copy
│   │   ├── EducationSection.tsx            <-- Timeline, coursework, goals
│   │   ├── HeroSection.tsx                 <-- Primary hook, 3D core, action CTAs
│   │   ├── ProjectsSection.tsx             <-- Filterable showcase & search
│   │   └── SkillsSection.tsx               <-- Categorized skill cards
│   ├── types/
│   │   └── index.ts                        <-- Strongly-typed TypeScript interfaces
│   ├── utils/
│   │   └── aiHelper.ts                     <-- Intelligent response synthesis engine
│   ├── App.tsx                             <-- Main application controller
│   ├── index.css                           <-- Tailwind v4, glassmorphism, keyframes
│   └── main.tsx                            <-- React 19 entry root
├── tests/
│   └── e2e-verification.cjs                <-- Automated Puppeteer E2E test suite
├── .env.example                            <-- Environment variables template
├── package.json                            <-- Optimized dependencies & build scripts
├── tsconfig.json                           <-- Strict TypeScript configuration
└── vite.config.ts                          <-- Vite 8 with manual chunk splitting
```

---

## 🛠️ Commands to Run on Windows

### 1. Prerequisites
Ensure **Node.js (v18 or higher)** and **npm** are installed:
```powershell
node -v
npm -v
```

### 2. Install Dependencies
```powershell
npm install
```

### 3. Start Development Server
```powershell
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```powershell
npm run build
```
The optimized static bundle will be generated in `dist/`.

### 5. Preview Production Build
```powershell
npm run preview
```

### 6. Run Automated E2E Browser Tests
```powershell
node tests/e2e-verification.cjs
```

---

## 📝 How to Update Your Information

You **do not** need to edit multiple React components to update your portfolio. All personal data is centralized in three straightforward TypeScript files:

### 1. Update Personal Bio, Degree & Contact Details
Open [`src/data/profile.ts`](file:///c:/Users/prade/OneDrive/Desktop/Mine/src/data/profile.ts):
- Update `fullName`, `professionalHeadline`, `heroIntro`, `careerGoals`.
- Edit `education.institution` (e.g. replace `"[Your College / University Name]"` with your actual college).
- Edit `education.period` (e.g. `"2022 - 2026"`).
- Edit `contact.email`, `contact.githubUrl`, `contact.linkedinUrl`.

### 2. Update or Add Projects
Open [`src/data/projects.ts`](file:///c:/Users/prade/OneDrive/Desktop/Mine/src/data/projects.ts):
- Add your real repository URL to `githubUrl` and set `hasRepoConfigured: true`.
- Add a live demo link to `liveUrl` and set `hasLiveDemoConfigured: true`.
- Change `status` between `'Prototype'`, `'In Development'`, `'Academic Project'`, or `'Completed'`.
- Add new projects by appending an object following the `ProjectItem` interface.

### 3. Update Skills & Technologies
Open [`src/data/skills.ts`](file:///c:/Users/prade/OneDrive/Desktop/Mine/src/data/skills.ts):
- Add new technologies to their corresponding category.
- Adjust experience tags (`'Actively Building'`, `'Academic Projects'`, `'Core Knowledge'`, `'Exploring'`).

### 4. Upload Your Actual Resume
1. Name your resume PDF file `Pradeep_Kumar_S_Resume.pdf`.
2. Place it in `public/documents/Pradeep_Kumar_S_Resume.pdf`.
3. Visitors who click **Download Resume** will instantly download your PDF file.

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your site will be live in under 60 seconds with SSL and global CDN.

### Deploy to Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Set Build command: `npm run build`.
3. Set Publish directory: `dist`.
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, add `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Deploy the `dist` folder to your `gh-pages` branch.

---

## 🧪 Automated Testing & Verification Results

| Test Category | Scope / Viewport | Result |
| :--- | :--- | :--- |
| **TypeScript Typecheck** | Strict compilation with zero unused symbols | ✅ Passed (`exit code 0`) |
| **Production Build** | Code-splitting with Three.js & React vendor chunks | ✅ Passed (`built in 1.30s`) |
| **Desktop E2E** | Viewport 1440x900, 3D canvas inertia, scroll spy | ✅ Passed (0 console errors) |
| **Mobile E2E** | Viewport 390x844 (iPhone 14), glass drawer navigation | ✅ Passed (0 console errors) |
| **Tablet E2E** | Viewport 768x1024 (iPad), responsive grids | ✅ Passed (0 console errors) |
| **AI Assistant** | Natural response generation, suggestions, reset | ✅ Passed |
| **Project Modal** | Architecture specs modal & category filters | ✅ Passed |
| **Theme Switching** | Dynamic toggle between Dark Cyber & Light Silver | ✅ Passed |
| **Easter Egg** | Terminal console (`help`, `dubai`, `matrix`) & confetti | ✅ Passed |
| **Spam Protection** | Honeypot field and input validation | ✅ Passed |

---

## 📄 License
Created for **Pradeep Kumar S**. All rights reserved.
