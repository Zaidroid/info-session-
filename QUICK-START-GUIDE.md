# Quick Start Guide - Elevate Info Session Presentation

## What Changed?
Your presentation has been transformed into an Info Session format focused on recruiting companies for Elevate Program 2026.

## Slide Order (15 slides total)

1. **Cover** - "Discover and Discuss Elevate Program 2026" with donor information
2. **Agenda** - Info session schedule (times need to be filled in)
3. **GSG Vision & Mission** - Who we are and what we stand for
4. **GSG Structure** - The talent pipeline visualization
5. **CARM** - Community accountability channels
6. **CARM Video** - Placeholder for CARM video
7. **Elevate Overview** - Three pillars of the program
8. **Elevate Phases** - Program timeline and phases
9. **Eligibility** - Who can apply
10. **Geographical Distribution** - Where we operate
11. **Supported Companies** - Companies we've helped (needs logos)
12. **Elevate Partners** - Strategic partners list
13. **Testimonials Video** - Placeholder for Ramallah event video
14. **Q&A Session** - Interactive Q&A slide
15. **Apply Now** - Application QR code

## Immediate Action Items

### High Priority
- [ ] Update agenda times (currently showing "TBD")
- [ ] Add CARM video to slide 6
- [ ] Add company testimonial video to slide 13
- [ ] Verify QR code `/new-qr.png` links to correct application form

### Medium Priority
- [ ] Add company logos to "Supported Companies" slide
- [ ] Verify GSG vision/mission text is accurate
- [ ] Update company statistics if needed (currently: 60+ companies, 1000+ employees, 45% growth)

### Optional
- [ ] Add partner logos to "Elevate Partners" slide
- [ ] Customize partner categories if needed

## How to Update Content

### Update Agenda Times
Edit `src/slides/Agenda.jsx`, line ~15:
```javascript
const agendaItems = [
    { time: "09:00", title: "Welcome & Registration" },  // Change "TBD" to actual time
    // ... etc
];
```

### Update CARM Channels
Edit `src/slides/CARM.jsx`, line ~7:
```javascript
const channels = [
    { icon: Mail, label: 'Email Support', value: 'Ps-carm@mercycorps.org', ... },
    // ... etc
];
```

### Add Company Logos
Edit `src/slides/SupportedCompanies.jsx`, line ~8:
```javascript
const companies = [
    { name: 'Actual Company Name', sector: 'ERP', logo: '/path/to/logo.png' },
    // Add real company data
];
```

### Update Statistics
Edit `src/slides/SupportedCompanies.jsx`, line ~50:
```javascript
{ icon: Building2, label: 'Companies', value: '60+' },  // Update numbers
{ icon: Users, label: 'Employees', value: '1000+' },
```

## Running the Presentation

### Development Mode
```bash
npm run dev
```
Then open http://localhost:5173

### Production Build
```bash
npm run build
npm run preview
```

## Navigation During Presentation

### Keyboard Shortcuts
- **→ (Right Arrow)** or **Space**: Next slide
- **← (Left Arrow)**: Previous slide
- **F11** or **Fullscreen button**: Toggle fullscreen

### Quick Navigation Bar (Bottom Left)
- **Intro**: Jump to cover slide
- **GSG**: Jump to GSG overview
- **CARM**: Jump to CARM section
- **Elevate**: Jump to Elevate overview
- **Companies**: Jump to companies showcase
- **Q&A**: Jump to Q&A session
- **Apply**: Jump to application slide

## Presentation Tips

1. **Start in Fullscreen**: Click the fullscreen button (bottom right) before presenting
2. **Use Quick Nav**: The bottom navigation bar helps you jump to sections during Q&A
3. **Pause on Videos**: Slides 6 and 13 are video placeholders - pause to play videos
4. **QR Code**: Final slide has large QR code - give audience time to scan

## Troubleshooting

### Slides not showing?
- Check browser console for errors (F12)
- Ensure all imports in `src/App.jsx` are correct

### Navigation not working?
- Make sure you're not in an input field
- Try clicking on the slide area first

### Animations laggy?
- Close other browser tabs
- Use Chrome or Edge for best performance
- Disable browser extensions temporarily

## Restoring Original Presentation

If you need the original "Impact & Future Horizons" presentation:
```bash
Copy-Item src/App-Original-Backup.jsx src/App.jsx -Force
```

## Support Files

- **INFO-SESSION-CHANGES.md**: Detailed list of all changes made
- **src/App-Original-Backup.jsx**: Backup of original presentation
- **src/App-InfoSession.jsx**: Clean copy of info session version

## Questions?

Check the following files for reference:
- Slide components: `src/slides/`
- Main app logic: `src/App.jsx`
- Styles: `src/App.css` and `src/index.css`
