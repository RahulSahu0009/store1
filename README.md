# Claré Optics — Luxury Eyewear & Bespoke Eye Care Boutique Website

A responsive, high-end optical boutique web application crafted with semantic HTML5, Vanilla CSS3, and Vanilla JavaScript — zero external dependencies, no bundlers, and no frameworks.

---

## Project Structure

```
eyewear-store/
├── index.html          # Main application page with all boutique sections & modals
├── css/
│   └── styles.css      # Design system, layout, responsive tokens & micro-animations
├── js/
│   └── script.js       # Store configuration, catalog data, shortlist manager, & modals
├── assets/
│   └── images/         # Local assets & imagery
└── README.md           # Project documentation & configuration guide
```

---

## Quick Start

1. Open `eyewear-store/` in your favorite editor or terminal.
2. Serve locally with Python:
   ```bash
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` in any modern web browser.

---

## Features Implemented

### 1. Curated Eyewear Collection & Real-Time Search
- **12 Luxury Handcrafted Frames** across Optical, Sunglasses, Classic, and Modern aesthetics.
- **Dynamic Category Filtering** (All, Optical, Sunglasses, Classic, Modern).
- **Real-Time Search Bar** filtering by frame name, aesthetic, or material.
- **Quick-View Details Button** on each card.
- **Direct WhatsApp Enquiry** with pre-filled frame details.

### 2. Interactive Shortlist / Wishlist Drawer ("My Curated Frames")
- **One-tap Heart Toggle** on all frame cards with animated feedback.
- **Live Counter Badge** in the sticky header (`Shortlist (N)`).
- **Slide-Out Drawer** listing all saved frames with thumbnails, prices, and individual remove actions.
- **"Enquire All via WhatsApp"** button: generates a formatted multi-item message with all saved frames for one-click consultation.
- **Persistent Storage** in `localStorage` across user sessions.

### 3. Technical Frame Quick-View Modal
- High-resolution product showcase with category badge.
- Full optical specifications table: **Lens Width**, **Bridge**, **Temple Length**, **Material**, **Weight**, and **Fit Profile**.
- **Interactive Color Swatches** allowing customers to preview finishes (e.g. Matte Black, Amber Tortoise, Smoked Olive).
- Direct WhatsApp enquiry linking chosen colorway and specifications.

### 4. Bespoke Eye Exam & Fitting Appointment Booking Modal
- Accessible via "Book Eye Test" and "Book Consultation" triggers across header, hero, about, and footer.
- **Service Selection**:
  - 14-Point Comprehensive Eye Examination
  - Bespoke Frame Styling & Face Geometry Fitting
  - Zeiss Progressive & Digital Lens Centering
  - Frame Realignment & Ultrasonic Rejuvenation
- **Date & Preferred Time Window** selection (Morning, Afternoon, Evening).
- Client contact details & vision notes.
- On-screen confirmation card with immediate option to send the booking details to the boutique's WhatsApp.

### 5. Face Shape Frame Advisory ("Find Frames For Your Face Shape")
- Interactive tabbed guide for **Oval**, **Round**, **Square**, and **Heart** face shapes.
- Specific optician recommendations and styles to avoid.
- Direct "View Recommended Frames" button that filters the collection and scrolls to matching frames.

### 6. Client Testimonials & Social Proof
- Verified local client reviews with star ratings (★★★★★).
- Google rating summary pill (4.9 / 5.0 based on 280+ reviews).

### 7. Frequently Asked Questions (FAQ) Accordion
- 6 keyboard-accessible accordion items covering prescriptions, examination procedures, Zeiss/Essilor lenses, sunglasses customisation, turnaround times, and lifetime warranties.

### 8. Interactive Studio Enquiry Form & Maps
- Contact form with name, phone, subject, and message.
- Full Google Maps interactive embed for Colaba Causeway, Mumbai.
- Direct click-to-call (`tel:+919820154321`) and direct WhatsApp Studio button.

---

## Store Configuration (`js/script.js`)

All contact details and store configuration live in the `STORE_CONFIG` object in `js/script.js`:

```javascript
const STORE_CONFIG = {
  storeName:           "Claré Optics",
  whatsappNumber:      "919820154321",
  phoneNumber:         "+91 98201 54321",
  phoneTel:            "tel:+919820154321",
  storeAddress:        "18 Heritage Arcade, Colaba Causeway, Fort, Mumbai, Maharashtra 400001",
  mapsEmbedUrl:        "https://www.google.com/maps/embed?...",
  mapsDirectionsUrl:   "https://maps.google.com/?q=Colaba+Causeway+Mumbai",
  hoursWeekday:        "Mon – Sat: 10:00 am – 8:30 pm",
  hoursSunday:         "Sunday: 11:00 am – 7:00 pm",
  defaultWhatsAppMessage: "Hello Claré Optics! I'd like to enquire about your eyewear collection.",
};
```

---

## Sections Overview

| Section | ID | Description |
|---------|-----|-------------|
| Header | `#site-header` | Sticky glassmorphic nav with Shortlist counter & Book CTA |
| Hero | `#home` | Cinematic full-height banner with collection & booking CTAs |
| Brand Strip | (no ID) | Service highlights and lens partner badges |
| About | `#about` | 4 pillars of care + trust metrics + booking trigger |
| Eyewear Collection | `#eyewear` | 12 luxury frames with category filters & search input |
| Face Shape Guide | `#face-guide` | Interactive tabs matching face contours to frame silhouettes |
| Testimonials | `#testimonials` | 3 client reviews with star ratings and Google rating badge |
| FAQ | `#faq` | Accessible accordion answering common optical questions |
| Contact & Map | `#contact` | Address, direct line, hours, enquiry form, & interactive map |
| Footer | `<footer>` | Brand information, full navigation, and auto copyright year |

---

## Browser Support & Accessibility

- **Semantic HTML5**: Native `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **ARIA Attributes**: `aria-expanded`, `aria-selected`, `aria-controls`, `aria-live`, `aria-hidden` properly toggled.
- **Keyboard Navigation**: Focus outlines, `Escape` key closes all drawers and modals, focus traps.
- **Motion Accessibility**: Smooth transitions respect `prefers-reduced-motion: reduce`.
- **Zero Build Step**: Runs directly in any modern browser.
