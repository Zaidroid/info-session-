# Elevate Program Info Session Presentation

## Overview
This presentation has been transformed from the original "Impact & Future Horizons" event presentation into an Info Session format for Elevate Program 2026.

## Key Changes Made

### 1. Cover Slide (Intro.jsx)
- **Updated Title**: "Discover and Discuss Elevate Program 2026"
- **Added Donors**: The Dutch Government & The Swedish International Development Cooperation Agency (Sida)
- Removed "Impact & Future Horizons" subtitle

### 2. Agenda (Agenda.jsx)
- Completely restructured for info session format
- New agenda items:
  - Welcome & Registration
  - GSG Overview (Vision, Mission & Structure)
  - CARM Introduction
  - Elevate Program Overview
  - Supported Companies Showcase
  - Partner Testimonials Video
  - Q&A Session
  - Application Process & Next Steps
- Times marked as "TBD" for team to fill in

### 3. CARM Slide (CARM.jsx)
- **Updated Contact Information**:
  - Email: Ps-carm@mercycorps.org
  - Feedback: Ps-fcarm@mercycorps.org
  - Hotline: 1800130131 (removed spaces)
  - Face to Face: All GSG Staff Members

### 4. New Slides Created

#### GSGVisionMission.jsx
- Displays GSG's vision and mission
- Two-column card layout with icons
- Core values section (Community First, Innovation Driven, Impact Focused)

#### SupportedCompanies.jsx
- Showcases companies supported by Elevate
- Stats bar with key metrics (60+ companies, Gaza & WB locations, 1000+ employees, 45% growth)
- Grid layout for company logos (placeholder structure ready)
- **Note**: Company logos need to be added

#### ElevatePartners.jsx
- Lists Elevate program partners:
  - Kasim Legal
  - Anderson
  - Digify
  - Dragon
  - Kurdi and Co
  - Progimix
- Animated cards with category labels
- **Note**: Partner logos can be added to replace placeholder icons

### 5. Closing CTA (ClosingCTA.jsx)
- Focused on application process
- Larger QR code (380x380px)
- Three-step application process visualization
- Clear call-to-action: "Scan to Apply Now"
- Removed multiple action buttons, focused on single goal

### 6. Presentation Structure (App.jsx)
- **Removed**: All speaker-specific sections (Alan, Rand, Hazem, Raouf, Zaid)
- **Removed**: Detailed program component slides (Capacity Building details, Marketing details, etc.)
- **Simplified Navigation**: 7 main sections instead of complex speaker navigation
- **New Flow**:
  1. Intro
  2. GSG (Vision/Mission + Structure)
  3. CARM (Info + Video)
  4. Elevate (Overview + Phases + Eligibility + Distribution)
  5. Companies (Supported Companies + Partners + Testimonial Video)
  6. Q&A
  7. Apply

## Files Modified
- `src/slides/Intro.jsx`
- `src/slides/Agenda.jsx`
- `src/slides/CARM.jsx`
- `src/slides/ClosingCTA.jsx`
- `src/App.jsx` (completely restructured)

## New Files Created
- `src/slides/GSGVisionMission.jsx`
- `src/slides/SupportedCompanies.jsx`
- `src/slides/ElevatePartners.jsx`
- `src/App-InfoSession.jsx` (clean version)
- `src/App-Original-Backup.jsx` (backup of original)

## Remaining Tasks

### Content Updates Needed:
1. **Agenda Times**: Update "TBD" with actual session times
2. **Company Logos**: Add actual company logos to SupportedCompanies.jsx
3. **Partner Logos**: Optionally add partner logos to ElevatePartners.jsx
4. **CARM Video**: Replace GazaVideoPlaceholder with actual CARM video
5. **Testimonial Video**: Replace TestimonialPlaceholder with actual Ramallah event video
6. **GSG Vision/Mission**: Verify the vision and mission text is accurate
7. **QR Code**: Ensure `/new-qr.png` points to the correct application form

### Optional Enhancements:
- Add company names and logos from the supported companies list
- Add partner logos if available
- Customize the SupportedCompanies stats if different numbers are needed
- Add more details to GSG Vision/Mission if needed

## How to Run
```bash
npm install
npm run dev
```

## Navigation
- **Arrow Keys**: Navigate between slides
- **Space**: Next slide
- **Bottom Left**: Quick navigation buttons
- **Bottom Right**: Previous/Next/Fullscreen controls

## Design Elements Preserved
- All animations and transitions from original
- Glass morphism effects
- Gradient accents
- Responsive layout
- Dark theme
- Particle backgrounds
- Smooth slide transitions

## Notes
- Original presentation backed up as `src/App-Original-Backup.jsx`
- All existing components and styles remain intact
- Can easily switch back to original by restoring backup
- Info session version is cleaner and more focused on recruitment
