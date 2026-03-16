# ✦ Shringar — Bangles & Mehendi Website

A beautiful, mobile-friendly website for a traditional Indian bangles and mehendi home business.

## 📁 Folder Structure

```
shringar-website/
├── index.html       ← Home page
├── bangles.html     ← Bangles collection with WhatsApp ordering
├── mehendi.html     ← Mehendi gallery, services, booking & FAQ
├── style.css        ← All styles (theme, layout, responsive)
├── script.js        ← Navbar, animations, WhatsApp functions
├── images/          ← Add your own product images here
└── README.md
```

## 🚀 How to Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `shringar-website`)
2. Upload all files to the repository
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch → `/ (root)` → Save
5. Your site will be live at: `https://yourusername.github.io/shringar-website/`

## 🔧 Customization

### Update Phone Number
In `script.js`, replace `919876543210` with your actual WhatsApp number (country code + number, no `+` or spaces):
```js
const phone = '919876543210'; // e.g. 919812345678 for +91 98123 45678
```
Also update the phone links in `index.html` in the contact section.

### Update Business Name
Search for `Shringar` in all HTML files and replace with your business name.

### Update Instagram
Search for `shringar_boutique` and replace with your Instagram handle.

### Add Your Own Images
- Add images to the `images/` folder
- Replace Unsplash URLs in the HTML files with your own:
  ```html
  <img src="images/your-bangle.jpg" alt="Product Name" />
  ```

### Update Product Prices & Names
Edit the product cards in `bangles.html` — each card has:
- `data-category` for filtering (gold, glass, kundan, lac, bridal)
- Product name, price, and color displayed in the card
- The WhatsApp order button auto-uses the product name

### Change Colors
All colors are in `style.css` under `:root {}`:
```css
--maroon: #6B1A2A;
--gold: #C9962A;
--pink: #E8A0A8;
--cream: #FAF3E8;
```

## 📱 Features
- ✅ Fully responsive (mobile-first)
- ✅ WhatsApp order buttons with pre-filled messages
- ✅ Floating WhatsApp button on all pages
- ✅ Filter buttons for product categories
- ✅ Scroll-triggered fade-in animations
- ✅ Mobile hamburger menu
- ✅ Navbar changes on scroll
- ✅ FAQ accordion on Mehendi page
- ✅ Hover effects on all cards
- ✅ Masonry gallery layout
- ✅ No frameworks — pure HTML/CSS/JS

## 💡 Tips
- Use square images (1:1) for product cards for best appearance
- Recommended image size: 500×500px for products, 800×600px for gallery
- Compress images before upload (use squoosh.app)
- Update the `<meta name="description">` tags with your actual business details
