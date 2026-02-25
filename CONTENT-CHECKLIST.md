# Content Update Checklist

Use this checklist to track what content needs to be added or updated in the presentation.

## 🔴 High Priority (Required Before Presenting)

### Slide 2: Agenda
- [ ] Update time for "Welcome & Registration" (currently: TBD)
- [ ] Update time for "GSG Overview" (currently: TBD)
- [ ] Update time for "CARM Introduction" (currently: TBD)
- [ ] Update time for "Elevate Program Overview" (currently: TBD)
- [ ] Update time for "Supported Companies Showcase" (currently: TBD)
- [ ] Update time for "Partner Testimonials Video" (currently: TBD)
- [ ] Update time for "Q&A Session" (currently: TBD)
- [ ] Update time for "Application Process & Next Steps" (currently: TBD)

**File to edit**: `src/slides/Agenda.jsx` (line ~15)

### Slide 6: CARM Video
- [ ] Replace GazaVideoPlaceholder with actual CARM video
- [ ] Test video playback
- [ ] Verify video format compatibility

**File to edit**: `src/App.jsx` (line ~30) or create new video component

### Slide 13: Company Testimonials
- [ ] Add Ramallah event testimonial video
- [ ] Test video playback
- [ ] Verify video quality

**File to edit**: `src/App.jsx` (line ~48) or update TestimonialPlaceholder

### Slide 15: Application QR Code
- [ ] Verify QR code image exists at `/public/new-qr.png`
- [ ] Test QR code scans correctly on mobile
- [ ] Confirm QR code links to correct application form
- [ ] Test application form is accessible

**File to check**: `/public/new-qr.png`

## 🟡 Medium Priority (Recommended)

### Slide 3: GSG Vision & Mission
- [ ] Review vision statement for accuracy
- [ ] Review mission statement for accuracy
- [ ] Verify core values are correct
- [ ] Update if GSG has official wording

**File to edit**: `src/slides/GSGVisionMission.jsx` (lines ~40-60)

### Slide 11: Supported Companies
- [ ] Add actual company names (currently: "Company 1", "Company 2", etc.)
- [ ] Add company logos
- [ ] Update company sectors
- [ ] Verify statistics:
  - [ ] 60+ companies (correct?)
  - [ ] Gaza & WB locations (correct?)
  - [ ] 1000+ employees (correct?)
  - [ ] 45% growth (correct?)

**File to edit**: `src/slides/SupportedCompanies.jsx` (lines ~8-20 for companies, line ~50 for stats)

### Slide 12: Elevate Partners
- [ ] Verify partner names are correct:
  - [ ] Kasim Legal
  - [ ] Anderson
  - [ ] Digify
  - [ ] Dragon
  - [ ] Kurdi and Co
  - [ ] Progimix
- [ ] Verify partner categories
- [ ] Add partner logos (optional)

**File to edit**: `src/slides/ElevatePartners.jsx` (line ~8)

## 🟢 Low Priority (Optional Enhancements)

### Design Enhancements
- [ ] Add custom company logos to replace placeholder icons
- [ ] Add partner logos to replace Award icons
- [ ] Customize color scheme if needed
- [ ] Add additional animations

### Content Additions
- [ ] Add speaker notes for each slide
- [ ] Create printable handout version
- [ ] Add slide numbers
- [ ] Add GSG contact information slide

### Technical Improvements
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on different screen sizes
- [ ] Optimize images for faster loading
- [ ] Add offline mode support

## 📋 Pre-Presentation Checklist

### Day Before
- [ ] All high priority items completed
- [ ] Presentation tested on actual presentation equipment
- [ ] Videos play correctly
- [ ] QR code tested with multiple phones
- [ ] Backup presentation file created
- [ ] Internet connection tested (if needed for videos)

### Day Of
- [ ] Laptop fully charged
- [ ] Presentation file copied to USB backup
- [ ] Browser bookmarked to localhost:5173
- [ ] Fullscreen mode tested
- [ ] Navigation practiced
- [ ] Q&A responses prepared
- [ ] Application forms ready (if QR code fails)

## 🔧 Quick Fixes

### If QR Code Doesn't Work
- Have application form URL ready to share verbally
- Prepare printed application forms as backup
- Have short URL ready (e.g., bit.ly link)

### If Videos Don't Play
- Have video files ready to play separately
- Prepare to describe video content verbally
- Have backup slides with video screenshots

### If Navigation Fails
- Know slide numbers for key sections
- Practice using arrow keys only
- Have printed slide order reference

## 📞 Support Contacts

### Technical Issues
- Developer: [Add contact]
- IT Support: [Add contact]

### Content Questions
- Program Manager: [Add contact]
- Communications: [Add contact]

## ✅ Sign-Off

Once all high priority items are complete:

- [ ] Content reviewed by: _________________ Date: _______
- [ ] Technical testing by: _________________ Date: _______
- [ ] Final approval by: ___________________ Date: _______

---

**Notes Section**
Use this space for any additional notes or reminders:

_____________________________________________________________

_____________________________________________________________

_____________________________________________________________

_____________________________________________________________
