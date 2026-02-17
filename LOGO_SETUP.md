# Logo Setup Instructions

## Where to Place Your Logo

1. **Upload your logo file to the `public/` folder**
   - The file should be named: `logo.png` (or `logo.svg`, `logo.jpg`, `logo.webp`)

2. **Supported formats:**
   - PNG (recommended for photos/transparency)
   - SVG (recommended for scalable graphics)
   - JPG/JPEG
   - WebP

## Current Setup

The Logo component is configured to look for `/logo.png` in the public folder.

If your logo has a different name or format, you can update it in:
- File: `app/components/Logo.tsx`
- Line: Change `const logoSrc = '/logo.png'` to match your file name

## After Uploading

Once you upload your logo to the `public/` folder:
1. The dev server will automatically reload
2. Your logo will appear in:
   - The navigation header (small icon)
   - Anywhere else the Logo component is used

## GitHub Upload

If you're uploading to GitHub:
1. Add your logo file to the `public/` folder
2. Commit and push to your repository
3. The logo will be available at `https://your-domain.com/logo.png`

## Need Help?

If the logo doesn't appear:
- Check that the file is in the `public/` folder (not `public/images/` or elsewhere)
- Verify the filename matches exactly (case-sensitive on some systems)
- Make sure the file format is supported
- Check the browser console for any image loading errors
