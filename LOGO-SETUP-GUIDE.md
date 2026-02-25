# Logo Setup Guide

## Required Logos

You need to add the following logo files to complete the presentation:

### 1. Donor Logos (For Cover Slide)

**Location**: `/public/` folder

**Files needed**:
- `sida-logo.png` - Swedish International Development Cooperation Agency (Sida) logo
- `dutch-gov-logo.png` - The Dutch Government logo

**Specifications**:
- Format: PNG with transparent background (preferred)
- Height: Approximately 60-80px (will be scaled to 60px in presentation)
- Width: Proportional to maintain aspect ratio
- Quality: High resolution for presentation display

**How to add**:
1. Download the official logos from:
   - Sida: https://www.sida.se/ (look for press/media resources)
   - Dutch Government: https://www.government.nl/ (look for logo downloads)
2. Save them as:
   - `/public/sida-logo.png`
   - `/public/dutch-gov-logo.png`
3. Restart the dev server if running

### 2. Company Logos (For Supported Companies Slide)

**Location**: `/public/companies/` folder (create this folder)

**Files needed**:
You'll need logos for all supported companies. The presentation currently shows placeholders for 12 companies.

**Specifications**:
- Format: PNG with transparent background (preferred) or JPG
- Size: Square or rectangular, approximately 200x200px minimum
- Quality: High resolution
- Naming: Use lowercase with hyphens, e.g., `company-name.png`

**How to add**:
1. Create folder: `/public/companies/`
2. Add company logo files with descriptive names
3. Update `src/slides/SupportedCompanies.jsx` (see instructions below)

## Updating Supported Companies Slide

Once you have company logos, update the slide:

**File**: `src/slides/SupportedCompanies.jsx`

**Find this section** (around line 8):
```javascript
const companies = [
    { name: 'Company 1', sector: 'ERP' },
    { name: 'Company 2', sector: 'Web Dev' },
    // ... etc
];
```

**Replace with your actual companies**:
```javascript
const companies = [
    { name: 'Radix', sector: 'ERP', logo: '/companies/radix.png' },
    { name: 'Jaffa', sector: 'Software', logo: '/companies/jaffa.png' },
    { name: 'Scope Systems', sector: 'Tech', logo: '/companies/scope-systems.png' },
    { name: 'Top Mena Talents', sector: 'Recruitment', logo: '/companies/top-mena.png' },
    { name: 'PITS', sector: 'IT Services', logo: '/companies/pits.png' },
    { name: 'Dotline', sector: 'Digital', logo: '/companies/dotline.png' },
    { name: 'Tech 360', sector: 'Technology', logo: '/companies/tech360.png' },
    // Add more companies as needed
];
```

**Then update the rendering** (around line 90):
```javascript
{/* Replace the placeholder div with actual logo */}
{company.logo ? (
    <img 
        src={company.logo} 
        alt={company.name}
        style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            padding: '0.5rem'
        }}
        onError={(e) => {
            // Fallback to placeholder if logo fails to load
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `
                <div style="
                    width: 60px;
                    height: 60px;
                    borderRadius: 12px;
                    background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
                    display: flex;
                    alignItems: center;
                    justifyContent: center;
                    fontSize: 1.5rem;
                    fontWeight: 800;
                    color: white;
                ">${company.name.charAt(0)}</div>
            `;
        }}
    />
) : (
    <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontWeight: 800,
        color: 'white'
    }}>
        {company.name.charAt(0)}
    </div>
)}
```

## Folder Structure

After adding all logos, your folder structure should look like:

```
public/
├── sida-logo.png                    ← Add this
├── dutch-gov-logo.png               ← Add this
├── companies/                       ← Create this folder
│   ├── radix.png                   ← Add company logos
│   ├── jaffa.png
│   ├── scope-systems.png
│   ├── top-mena.png
│   ├── pits.png
│   ├── dotline.png
│   ├── tech360.png
│   └── ... (more companies)
├── hazem-slides/
├── logo-full.png
├── new-qr.png
└── ... (other existing files)
```

## Testing

After adding logos:

1. **Start dev server**:
   ```bash
   npm run dev
   ```

2. **Check cover slide** (Slide 1):
   - Sida logo should appear on the left
   - Dutch Government logo should appear on the right
   - If logos don't load, text fallback will show

3. **Check Supported Companies slide** (Slide 9):
   - Company logos should appear in grid
   - If logos don't load, letter placeholders will show

4. **Build for production**:
   ```bash
   npm run build
   ```

## Troubleshooting

### Logos not showing?

1. **Check file paths**:
   - Files must be in `/public/` folder
   - Paths in code should start with `/` (e.g., `/sida-logo.png`)
   - File names are case-sensitive

2. **Check file formats**:
   - Use PNG or JPG
   - Avoid special characters in filenames
   - Use lowercase with hyphens

3. **Clear browser cache**:
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or open in incognito/private window

4. **Check console for errors**:
   - Press F12 to open developer tools
   - Look for 404 errors or image loading issues

### Logos too large/small?

Adjust the height in the code:

**For donor logos** (`src/slides/Intro.jsx`):
```javascript
style={{ height: '60px' }}  // Change this value
```

**For company logos** (`src/slides/SupportedCompanies.jsx`):
```javascript
style={{ width: '60px', height: '60px' }}  // Change these values
```

## Quick Checklist

- [ ] Downloaded Sida logo
- [ ] Downloaded Dutch Government logo
- [ ] Saved logos to `/public/` folder
- [ ] Created `/public/companies/` folder
- [ ] Added company logos to `/public/companies/`
- [ ] Updated company list in `SupportedCompanies.jsx`
- [ ] Tested in browser
- [ ] Verified all logos load correctly
- [ ] Built for production

## Need Help?

If you encounter issues:
1. Check the browser console (F12) for error messages
2. Verify file paths are correct
3. Ensure files are in the correct format (PNG/JPG)
4. Try with a single logo first to test the setup
5. Restart the dev server after adding files

---

**Note**: The presentation will work without logos (showing text fallbacks), but adding them will significantly improve the professional appearance.
