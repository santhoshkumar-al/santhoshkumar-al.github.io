
# Santhosh Kumar Portfolio — Black & Purple Theme (v2)

Updated portfolio with:
- Black & purple styling
- Photo support (\`assets/profile.jpg\` with placeholder)
- "Get in touch" form (mailto fallback)
- New **AI Innovation** section

## Project Structure
```
santhosh-portfolio-black-purple/
├─ index.html
├─ styles.css
├─ script.js
├─ assets/
│  ├─ favicon.svg
│  ├─ profile.jpg                 # replace with your photo (recommended 800×800)
│  └─ profile-placeholder.svg     # used if profile.jpg is missing
└─ .github/workflows/
   └─ pages.yml
```

## Local Preview
```bash
python -m http.server 8080
# open http://localhost:8080/santhosh-portfolio-black-purple/
```

## Deployment
**GitHub Pages** (preconfigured): push to \`main\` and GitHub Actions publishes automatically.
Alternatively use **Vercel** or **Netlify** (no build step, publish dir `/`).

## Replace your photo
Place your image at `assets/profile.jpg`. Ideal size: ~800×800, centered headshot. The UI shows a purple border and soft glow.

## Optional: Real form submissions
Static hosting can’t process forms natively. Use one of:
- **Formspree**: set `<form action="https://formspree.io/f/<form_id>" method="POST">` and add `<input type="hidden" name="_subject" value="Portfolio Inquiry">`.
- **Netlify Forms**: add `data-netlify="true" name="contact"` to `<form>` and deploy on Netlify.

## License
MIT
