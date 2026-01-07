# 📱 Logo & Social Media Setup Instructions

## ✅ What Was Updated

The `index.html` file has been updated to use custom branding and social media meta tags. The old Vite icon has been removed.

---

## 📋 Files You Need to Add

You need to add **2 image files** to this `public` folder:

### 1. **logo.png** - Website Favicon & App Icon
**Location:** `StitchApp/public/logo.png`

**Specifications:**
- **Size:** 512x512 pixels (minimum)
- **Format:** PNG with transparent background
- **Purpose:**
  - Browser tab icon (favicon)
  - Mobile home screen icon
  - PWA app icon

**Design Tips:**
- Should be a square icon that works well at small sizes
- Use your brand colors
- Keep it simple - complex designs don't work well at 16x16px
- Test at multiple sizes (16px, 32px, 64px, 512px)

---

### 2. **og-image.png** - Social Media Preview Image
**Location:** `StitchApp/public/og-image.png`

**Specifications:**
- **Size:** 1200x630 pixels (required for optimal display)
- **Format:** PNG or JPG
- **File size:** Keep under 1MB for fast loading
- **Purpose:** Preview image when sharing links on:
  - Facebook
  - Twitter/X
  - WhatsApp
  - LinkedIn
  - Telegram
  - Other social platforms

**Design Tips:**
- Include your logo/branding
- Add a headline or tagline
- Use high contrast colors
- Make sure text is readable at small sizes
- Keep important content in the center (safe zone)
- Test how it looks on mobile and desktop

**Recommended Content:**
```
┌─────────────────────────────────────┐
│                                     │
│         [LOGO]                      │
│                                     │
│    ASIFUNDE CHOMMIE                 │
│                                     │
│    Free Online Learning for         │
│    South African Students           │
│                                     │
│    Grades 8-12 • Video Lessons •    │
│    Study Guides • Past Papers       │
│                                     │
└─────────────────────────────────────┘
```

---

## 🎨 Creating the Images

### Option 1: Use a Design Tool
- **Canva** (free, easy) - canva.com
- **Figma** (professional) - figma.com
- **Adobe Photoshop** (advanced)
- **GIMP** (free alternative to Photoshop)

### Option 2: AI Image Generator
- **DALL-E** (OpenAI)
- **Midjourney**
- **Leonardo.ai**

### Option 3: Hire a Designer
- **Fiverr** (affordable)
- **99designs** (professional)
- **Upwork** (freelancers)

---

## 📍 How to Add the Files

1. **Save your images** as:
   - `logo.png` (512x512px minimum)
   - `og-image.png` (1200x630px exactly)

2. **Place them in this folder:**
   ```
   StitchApp/public/
   ```

3. **File structure should look like:**
   ```
   StitchApp/
   ├── public/
   │   ├── logo.png          ← Add this
   │   ├── og-image.png      ← Add this
   │   ├── about_us_hero.png
   │   ├── contact_us_hero.png
   │   └── ... (other images)
   └── index.html
   ```

4. **Restart your dev server** (if running):
   ```bash
   npm run dev
   ```

---

## 🧪 Testing Your Setup

### Test Favicon:
1. Open your website in a browser
2. Check the browser tab - you should see your logo
3. Try different browsers (Chrome, Firefox, Safari, Edge)

### Test Social Media Preview:

#### Facebook Debugger:
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your website URL
3. Click "Debug"
4. You should see your og-image.png and description

#### Twitter Card Validator:
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your website URL
3. Preview Card
4. You should see your og-image.png

#### LinkedIn Post Inspector:
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your website URL
3. Inspect
4. Check the preview

#### WhatsApp Preview:
1. Send your website URL to yourself on WhatsApp
2. The preview should show your og-image.png

---

## 📱 What the Meta Tags Do

The `index.html` now includes:

### SEO Meta Tags:
```html
<title>ASIFUNDE CHOMMIE - Free Online Learning for South African Students</title>
<meta name="description" content="Quality education for Grades 8-12..." />
<meta name="keywords" content="South African education, online learning..." />
```

### Open Graph (Facebook, WhatsApp, LinkedIn):
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://asifundechommie.co.za/og-image.png" />
```

### Twitter Cards:
```html
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="..." />
<meta property="twitter:image" content="..." />
```

---

## 🔄 Updating the Domain

**IMPORTANT:** The meta tags currently use `https://asifundechommie.co.za/` as the domain.

**If your actual domain is different**, update these lines in `index.html`:
- Line 21: `<meta property="og:url" content="YOUR_DOMAIN_HERE" />`
- Line 24: `<meta property="og:image" content="YOUR_DOMAIN_HERE/og-image.png" />`
- Line 30: `<meta property="twitter:url" content="YOUR_DOMAIN_HERE" />`
- Line 33: `<meta property="twitter:image" content="YOUR_DOMAIN_HERE/og-image.png" />`

---

## ✅ Checklist

- [ ] Created `logo.png` (512x512px)
- [ ] Created `og-image.png` (1200x630px)
- [ ] Placed both files in `StitchApp/public/` folder
- [ ] Restarted dev server
- [ ] Tested favicon in browser
- [ ] Tested social media preview with Facebook Debugger
- [ ] Tested social media preview with Twitter Card Validator
- [ ] Updated domain URLs in meta tags (if needed)
- [ ] Tested WhatsApp link preview

---

## 🎯 Current Status

- ✅ Vite icon removed
- ✅ Favicon updated to use `/logo.png`
- ✅ Open Graph meta tags added
- ✅ Twitter Card meta tags added
- ✅ SEO meta tags added
- ⏳ **WAITING:** logo.png file needs to be added
- ⏳ **WAITING:** og-image.png file needs to be added

---

## 📞 Need Help?

If you encounter issues:
1. Make sure file names are exactly: `logo.png` and `og-image.png` (lowercase)
2. Check file sizes match specifications
3. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
4. Test in incognito/private window
5. Check browser console for errors (F12)

---

**Last Updated:** 2026-01-07
