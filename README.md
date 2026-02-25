# Elevate Program Info Session Presentation

> **Info Session Version** - Focused on recruiting companies for Elevate Program 2026

This is an interactive presentation built with React, Vite, and Framer Motion, specifically designed for Elevate Program info sessions.

## 🎯 What's New in Info Session Version

This presentation has been transformed from the original "Impact & Future Horizons" event into a streamlined info session format:

- ✅ **17 focused slides** (down from 43)
- ✅ **New cover** with donor information (Dutch Government & Sida)
- ✅ **CARM first** - Moved after agenda with video
- ✅ **GSG Vision & Mission** slide
- ✅ **Three Elevate components** - CB, M&B, MA detailed slides
- ✅ **Updated CARM** contact information
- ✅ **Supported Companies** showcase
- ✅ **Elevate Partners** display
- ✅ **Application-focused** closing with QR code
- ✅ **Removed** all speaker-specific sections and testimonials

## 📚 Documentation

- **[QUICK-START-GUIDE.md](QUICK-START-GUIDE.md)** - Quick reference for running and navigating
- **[INFO-SESSION-CHANGES.md](INFO-SESSION-CHANGES.md)** - Detailed list of all changes
- **[PRESENTATION-SUMMARY.md](PRESENTATION-SUMMARY.md)** - Complete overview and structure
- **[CONTENT-CHECKLIST.md](CONTENT-CHECKLIST.md)** - Track what content needs to be added

## 🚀 Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the presentation:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser

4. Press **F11** or click the fullscreen button for presentation mode

## 🎮 Controls

### Keyboard
- **Next Slide**: `Right Arrow` or `Space`
- **Previous Slide**: `Left Arrow`
- **Fullscreen**: `F11`

### Navigation Bar (Bottom Left)
Quick jump to sections:
- **Intro** - Cover slide
- **CARM** - CARM section with video
- **GSG** - GSG overview
- **Elevate** - Elevate program overview & components
- **Portfolio** - Companies, partners & distribution
- **Journey** - Program phases & eligibility
- **Q&A** - Q&A session
- **Apply** - Application slide

## 📋 Presentation Structure (17 Slides)

1. **Cover** - Title with donor information
2. **Agenda** - Session schedule
3. **CARM** - Accountability channels
4. **CARM Video** - Video placeholder
5. **GSG Vision & Mission** - Who we are
6. **GSG Structure** - Talent pipeline
7. **Elevate Overview** - Three pillars
8. **Capacity Building** - CB component details
9. **Marketing & Branding** - M&B component details
10. **Market Access** - MA component details
11. **Geographical Distribution** - Coverage map
12. **Supported Companies** - Portfolio
13. **Elevate Partners** - Strategic partners
14. **Elevate Phases** - Program timeline (The Journey)
15. **Eligibility** - Application criteria
16. **Q&A Session** - Interactive Q&A
17. **Apply Now** - Application QR code

## ✅ Completed Tasks

- ✅ Updated cover with new title and donors
- ✅ Restructured agenda for info session
- ✅ Updated CARM contact information
- ✅ Created GSG Vision & Mission slide
- ✅ Created Supported Companies slide
- ✅ Created Elevate Partners slide
- ✅ Simplified navigation system
- ✅ Focused closing on application CTA
- ✅ Removed speaker-specific content

## 📝 Remaining Tasks

### High Priority
- [ ] Update agenda times (currently "TBD")
- [ ] Add CARM video
- [ ] Add company testimonial video
- [ ] Verify application QR code

### Medium Priority
- [ ] Add company logos to Supported Companies slide
- [ ] Verify GSG vision/mission text
- [ ] Update statistics if needed

See **[CONTENT-CHECKLIST.md](CONTENT-CHECKLIST.md)** for complete checklist.

## 🎨 Features

- **Smooth Animations**: Framer Motion transitions
- **Glass Morphism**: Modern UI effects
- **Gradient Accents**: Orange/teal color scheme
- **Particle Backgrounds**: Dynamic visual effects
- **Responsive Design**: Works on different screen sizes
- **Dark Theme**: Professional presentation look

## 🔄 Switching Versions

### Current: Info Session
Already active

### Restore Original Presentation
```bash
Copy-Item src/App-Original-Backup.jsx src/App.jsx -Force
```

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Netlify auto-detects settings from `netlify.toml`
4. Deploy!

## 📞 CARM Contact Information

- **Email**: Ps-carm@mercycorps.org
- **Feedback**: Ps-fcarm@mercycorps.org
- **Hotline**: 1800130131
- **Face to Face**: All GSG Staff Members

## 🤝 Elevate Partners

1. Kasim Legal - Legal Services
2. Anderson - Consulting
3. Digify - Digital Solutions
4. Dragon - Technology
5. Kurdi and Co - Professional Services
6. Progimix - Software Development

## 💡 Presentation Tips

1. **Practice Navigation**: Use quick nav bar before presenting
2. **Test Equipment**: Run on actual presentation setup
3. **Check QR Code**: Verify it works on mobile devices
4. **Prepare for Q&A**: Review common questions
5. **Time Management**: ~2-3 minutes per slide (30-45 min total)

## 🔧 Technical Stack

- **React** - UI framework
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **CSS Variables** - Theming

## 📁 Project Structure

```
src/
├── slides/
│   ├── Intro.jsx                    # Cover slide
│   ├── Agenda.jsx                   # Agenda
│   ├── GSGVisionMission.jsx         # NEW: Vision & Mission
│   ├── GSGStructure.jsx             # Talent pipeline
│   ├── CARM.jsx                     # CARM info
│   ├── ElevateOverview.jsx          # Program overview
│   ├── ElevatePhases.jsx            # Program phases
│   ├── Eligibility.jsx              # Eligibility criteria
│   ├── GeographicalDistribution.jsx # Coverage map
│   ├── SupportedCompanies.jsx       # NEW: Companies portfolio
│   ├── ElevatePartners.jsx          # NEW: Partners list
│   ├── QASession.jsx                # Q&A slide
│   └── ClosingCTA.jsx               # Application CTA
├── components/                       # Reusable components
├── App.jsx                          # Main presentation logic
└── index.css                        # Global styles
```

## 🆘 Troubleshooting

### Slides not showing?
- Check browser console (F12)
- Verify all imports in `src/App.jsx`

### Navigation not working?
- Click on slide area first
- Ensure not in input field

### Build errors?
- Run `npm install` again
- Clear `node_modules` and reinstall

## 📄 License

This presentation is for Gaza Sky Geeks internal use.

---

**Version**: Info Session 1.0  
**Last Updated**: February 2026  
**Status**: Ready for content updates
