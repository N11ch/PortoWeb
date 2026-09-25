# Product Requirements Document (PRD)

## Project Overview
- **Project Name:** Personal Portfolio Website (`PortoWeb`)
- **Version:** 1.2.0 (Neumorphic Brutalism Edition)
- **Status:** Planning & Design Architecture
- **Design Philosophy:** Neumorphic-Brutalist Hybrid (Tactile Soft UI combined with raw Neo-Brutalism: thick hard borders, offset crisp shadows, debossed/embossed surfaces, high-contrast typography, and vibrant pop accent colors).

---

## Core Objectives
1. **Unique Aesthetic Identity:** Merge Neumorphism (soft extruded shadows, inset tactile states) with Neo-Brutalism (thick 3px outlines, hard offset shadows, high-contrast bold typography).
2. **Interactive UI / UX Excellence:** Create pushable, tactile UI components with responsive press effects (shadow collapses and inset shifts), interactive background shaders, and modal deep-dives.
3. **Dual-Category Project Showcase:** Explicitly differentiate **Individual (Personal) Projects** from **Group (Team) Projects**, detailing specific contributions, multi-image screenshot carousels, and tech stacks.
4. **Speed & Accessibility:** React 19 + Vite performance, smooth 60fps animations, fully responsive across mobile, tablet, and desktop devices.

---

## Target Audience
- Technical Recruiters and Hiring Managers
- Engineering Leads and Founders
- Freelance Clients and Business Partners
- Tech Community and Fellow Developers

---

## Technology Stack
- **Core Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (v4) + Custom Neumorphic-Brutalist Utility Classes & CSS Variables
- **Interactive Visuals & 3D:** Three.js, Vanta.js
- **Icons & UI Components:** Lucide React Icons, Custom Tactile Glass/Neumorphic Cards & Modals
- **Animations:** CSS Keyframes, Tactile Button Press Transitions, Smooth Scroll

---

## Neumorphic-Brutalist Visual Design System

### 1. Color Palette & Surface Tokens
- **Base Background:** Dark Charcoal Slate (`#0f172a` / `#1e293b`) or Soft Raw Light Grey (`#e2e8f0` / `#f1f5f9`).
- **Surface Elevation (Neumorphic):** Dual light/dark soft shadows generating raised embossed or carved debossed cards.
  - Light Shadow: `rgba(255, 255, 255, 0.05)`
  - Dark Shadow: `rgba(0, 0, 0, 0.5)`
- **Brutalist Outline & Offset Shadows:**
  - Solid Outline: `2px` to `4px` solid border (`#000000` or `#f8fafc`).
  - Hard Offset Shadow: `4px 4px 0px #000000` (or accent color offset shadow).
- **Pop Accent Colors:**
  - Electric Lime (`#84cc16`)
  - Neon Cyan (`#06b6d4`)
  - Hot Violet (`#a855f7`)
  - Bright Amber (`#f59e0b`)

### 2. Micro-Interactions & Tactile Controls
- **Default Raised State:** Soft dual-shadow extrusion + 3px solid border + 4px offset shadow.
- **Hover State:** Card or button translates `-2px, -2px` with expanded hard offset shadow (`6px 6px 0px #000`).
- **Active / Pressed State:** Card or button depresses (`translate(2px, 2px)`), offset shadow collapses to `0px 0px`, and Neumorphic inner shadow (`inset 3px 3px 6px ...`) activates for a physical button press sensation.

---

## Key Features & Comprehensive Requirements

### 1. Header & Navigation Bar
- **Brutalist Neumorphic Navbar:**
  - Thick 3px solid border container with soft background extrusion.
  - Logo Mark: Embossed badge with high-contrast bold typography.
  - Active Link Pills: Inset debossed background highlight for the currently active section (`Home`, `About`, `Projects`, `Skills`, `Contact`).
  - Status Tag: High-contrast badge: `Available for New Opportunities`.
  - Action CTA: Tactile "Resume / Contact" button with hard shadow drop.

---

### 2. Hero Section
- **Interactive Background:** Vanta.js / Three.js interactive particle grid or geometric mesh responding to cursor moves.
- **Bold Brutalist Headline:** Large heavy-weight typography with optional text-stroke or highlight block backgrounds.
- **Tactile Metric Blocks:** Raised Neumorphic counters with thick brutalist borders displaying key stats (*Projects Delivered*, *Tech Stacks*, *Team Projects*).
- **Interactive CTA Buttons:** Primary button with vibrant Lime/Cyan fill, solid 3px outline, hard offset shadow, and click depression effect.

---

### 3. Profile / About Me Section
- **Personal Background:** Structured text in raw brutalist card containers.
- **Skill Matrix (Filterable):**
  - Skill pills designed as tactile Neumorphic buttons with hard outlines.
  - Interactive Filter: Clicking any skill pill highlights projects that use that technology.
- **Experience Timeline:**
  - Connected line with raised Neumorphic milestone nodes and brutalist date tags.

---

### 4. Projects Showcase (Core Feature Breakdown)

#### A. Dual-Category Filter System
Filter buttons styled as brutalist-neumorphic tab switches:
- **All Projects**
- **Individual / Personal Projects** (Solo creations, side projects, open-source work)
- **Group Projects** (Team collaborations, hackathons, client projects)

#### B. Distinct Project Characteristics

| Feature | Individual Projects | Group Projects |
| :--- | :--- | :--- |
| **Focus** | Personal vision, problem-solving, end-to-end architecture | Teamwork, collaboration tools, specific role contribution |
| **Role Highlight** | Full-Stack Architect / Solo Creator | Explicit role badge (e.g., *Lead Frontend Dev*, *Backend API Engineer*) |
| **Special Highlights** | "Why I Built This" & System Architecture | Team size badge, Contribution Breakdown %, Team members |

#### C. Project Card UI Design
- **Card Construction:**
  - Outer boundary: Soft Neumorphic dual shadow + 3px solid brutalist border + 4px hard offset shadow.
  - Image Thumbnail: High-contrast image container with thick divider border.
- **Badges:**
  - Category Badge (`Individual` vs. `Group`) in high-contrast solid color block.
  - Tech Stack Badges: High-contrast pill tags with thick borders.
- **Interactive Trigger:** "View Details" button with tactile press effect.

#### D. Project Detail Modal / Deep-Dive View (Interactive Popup)
- **Modal Framing:** Large Neumorphic container with 4px hard black outline and backdrop dimming.
- **Multi-Image Screenshot Gallery:**
  - Slide viewer with brutalist thumbnail frames.
  - Full-screen Lightbox view.
  - Device Frame Switcher (Desktop view vs. Mobile view).
- **Project Information Sections:**
  - Problem Statement & Solution Overview.
  - Key Features List.
  - My Specific Role & Contribution (for Group Projects).
  - Technical Stack & System Architecture.
  - Action Buttons: High-contrast buttons for `Live Demo` and `Source Code`.

---

### 5. Contact & Footer Section
- **Tactile Contact Form:**
  - Input fields styled as Neumorphic inset/debossed slots with 2px brutalist borders.
  - Instant copy-to-clipboard email button with pop-up success toast.
- **Social Links:** Hard-outlined icon buttons with hover lift and press drop.
- **Footer:** Minimalist copyright notice and brutalist "Back to Top" button.

---

## Data Structure (Schema Specification)

```typescript
export interface Project {
  id: string;
  title: string;
  category: 'individual' | 'group';
  tagline: string;
  overview: string;
  problemStatement?: string;
  roleDescription?: string; // Required for group projects
  teamSize?: number;        // Applicable for group projects
  contributionPercentage?: number; // e.g. 75%
  technologies: string[];
  coverImage: string;
  galleryImages: string[];  // Array of screenshot URLs
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  keyFeatures: string[];
  challengesLearnings?: string[];
}
```

---

## Non-Functional Requirements
- **Performance:** 95+ Lighthouse Score.
- **SEO & Meta Tags:** Dynamic page titles, meta descriptions, and OpenGraph social previews.
- **Accessibility:** High contrast ratio compliant with WCAG AA standards, full keyboard focus rings.

---

## Implementation Roadmap
1. [x] Draft initial PRD (`PRD.md`).
2. [x] Refine PRD for Neumorphic-Brutalist hybrid aesthetic (Soft UI + Hard Outlines/Shadows, no emojis).
3. [ ] Build mock project data file (`src/data/projects.js`).
4. [ ] Create Neumorphic-Brutalist CSS utilities in Tailwind.
5. [ ] Build components (Navbar, Hero with shader background, About, Projects Filter, Detail Modal, Contact).
6. [ ] Audit responsive design and tactile interaction states.
