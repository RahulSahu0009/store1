/* ============================================================
   Claré Optics — script.js
   Full boutique functionality: Shortlist Drawer, Frame Quick-View Modal,
   Appointment Booking, Face Shape Guide, FAQ Accordion, Real-time Search,
   and WhatsApp Integration.
   ============================================================ */

/* ────────────────────────────────────────────────────────────
   1. STORE CONFIGURATION
──────────────────────────────────────────────────────────── */
const STORE_CONFIG = {
  storeName:           "Claré Optics",
  whatsappNumber:      "919820154321",
  phoneNumber:         "+91 98201 54321",
  phoneTel:            "tel:+919820154321",
  storeAddress:        "18 Heritage Arcade, Colaba Causeway, Fort, Mumbai, Maharashtra 400001",
  mapsEmbedUrl:        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.225112108006!2d72.8291079!3d18.9225744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e89e000001%3A0x8849fb75630324be!2sColaba%20Causeway%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000",
  mapsDirectionsUrl:   "https://maps.google.com/?q=Colaba+Causeway+Mumbai",
  hoursWeekday:        "Mon – Sat: 10:00 am – 8:30 pm",
  hoursSunday:         "Sunday: 11:00 am – 7:00 pm",
  defaultWhatsAppMessage: "Hello Claré Optics! I'd like to enquire about your eyewear collection.",
};

/* ────────────────────────────────────────────────────────────
   2. PRODUCT SPECIFICATIONS CATALOG
──────────────────────────────────────────────────────────── */
const PRODUCTS_DATA = [
  {
    id: "frame-aldric",
    name: "The Aldric",
    category: "optical",
    price: "₹8,500",
    badge: "Optical",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80&auto=format&fit=crop",
    desc: "Slim rectangular frame crafted from hand-polished Italian bio-acetate. Sculpted bevelling creates crisp definition while remaining featherweight.",
    specs: {
      lensWidth: "52 mm",
      bridge: "18 mm",
      temple: "145 mm",
      material: "Italian Mazzucchelli M49 Bio-Acetate",
      weight: "21 g",
      fit: "Medium Standard Fit"
    },
    colors: [
      { name: "Matte Black", hex: "#1c1c1c" },
      { name: "Amber Tortoise", hex: "#6e4020" },
      { name: "Smoked Olive", hex: "#4a5340" }
    ],
    faceShapes: ["oval", "heart", "round"]
  },
  {
    id: "frame-marlowe",
    name: "The Marlowe",
    category: "optical",
    price: "₹9,200",
    badge: "Optical",
    image: "https://images.unsplash.com/photo-1488310371179-2efa381746d2?w=800&q=80&auto=format&fit=crop",
    desc: "Rounded oval silhouette with balanced brow curves. The warm tortoiseshell patterning catches ambient light, exuding vintage academic sophistication.",
    specs: {
      lensWidth: "49 mm",
      bridge: "20 mm",
      temple: "142 mm",
      material: "Custom Celluloid Acetate & German Wire Core",
      weight: "23 g",
      fit: "Universal Flattering Fit"
    },
    colors: [
      { name: "Warm Havana", hex: "#7a4623" },
      { name: "Midnight Onyx", hex: "#141414" },
      { name: "Honey Crystal", hex: "#c99a5e" }
    ],
    faceShapes: ["square", "oval", "heart"]
  },
  {
    id: "frame-caspian",
    name: "The Caspian",
    category: "sunglass",
    price: "₹11,500",
    badge: "Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
    desc: "Oversized square silhouette engineered with category 3 UV400 polarised lenses. Bold architectural profile that offers total glare defense against coastal sun.",
    specs: {
      lensWidth: "54 mm",
      bridge: "19 mm",
      temple: "148 mm",
      material: "High-Density Acetate with 7-Barrel Hinges",
      weight: "32 g",
      fit: "Wide Statement Fit"
    },
    colors: [
      { name: "Piano Black", hex: "#0a0a0a" },
      { name: "Deep Amber", hex: "#874b20" },
      { name: "Tortoise Polar", hex: "#422817" }
    ],
    faceShapes: ["oval", "round"]
  },
  {
    id: "frame-riviera",
    name: "The Riviera",
    category: "sunglass",
    price: "₹13,800",
    badge: "Sunglasses",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
    desc: "Timeless round lenses suspended on a filigreed gold bridge. Milled from Japanese beta-titanium to ensure zero ear pressure during prolonged warm days.",
    specs: {
      lensWidth: "50 mm",
      bridge: "21 mm",
      temple: "145 mm",
      material: "Japanese Beta-Titanium & Mineral Glass",
      weight: "16 g",
      fit: "Narrow to Medium Fit"
    },
    colors: [
      { name: "Polished Gold", hex: "#d4af37" },
      { name: "Rose Bronze", hex: "#b76e5a" },
      { name: "Brushed Ruthenium", hex: "#4d4d4d" }
    ],
    faceShapes: ["square", "oval"]
  },
  {
    id: "frame-pembroke",
    name: "The Pembroke",
    category: "classic",
    price: "₹8,900",
    badge: "Classic",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80&auto=format&fit=crop",
    desc: "Full-rim rectangular classic crafted from dark Havana acetate. Precision 5-barrel German hinges offer satisfying resistance and lifelong durability.",
    specs: {
      lensWidth: "53 mm",
      bridge: "17 mm",
      temple: "145 mm",
      material: "Cellulose Acetate with Internal Core Wire",
      weight: "26 g",
      fit: "Medium Professional Fit"
    },
    colors: [
      { name: "Dark Havana", hex: "#3b2314" },
      { name: "Charcoal Slate", hex: "#2b2b2b" },
      { name: "Espresso Horn", hex: "#523624" }
    ],
    faceShapes: ["round", "oval"]
  },
  {
    id: "frame-harwick",
    name: "The Harwick",
    category: "classic",
    price: "₹9,800",
    badge: "Classic",
    image: "https://images.unsplash.com/photo-1567333126229-db29200c25f1?w=800&q=80&auto=format&fit=crop",
    desc: "Iconic semi-rimless browline frame. Milled monel alloy rim with adjustable hypo-allergenic silicone nose pads for tailored bridge fit.",
    specs: {
      lensWidth: "51 mm",
      bridge: "19 mm",
      temple: "140 mm",
      material: "Monel Alloy & Polished Black Acetate",
      weight: "24 g",
      fit: "Adjustable Bridge Fit"
    },
    colors: [
      { name: "Gunmetal / Black", hex: "#262626" },
      { name: "Silver / Tortoise", hex: "#634731" },
      { name: "Gold / Mahogany", hex: "#47281d" }
    ],
    faceShapes: ["heart", "oval"]
  },
  {
    id: "frame-solen",
    name: "The Solen",
    category: "modern",
    price: "₹10,500",
    badge: "Modern",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80&auto=format&fit=crop&crop=faces",
    desc: "Geometric hexagonal silhouette rendered in translucent crystal sage acetate. Contemporary styling for design-conscious individuals.",
    specs: {
      lensWidth: "51 mm",
      bridge: "20 mm",
      temple: "145 mm",
      material: "Translucent Bio-Acetate Sheet Milled",
      weight: "25 g",
      fit: "Medium Contemporary Fit"
    },
    colors: [
      { name: "Crystal Sage", hex: "#8a9a86" },
      { name: "Smoked Quartz", hex: "#5a534e" },
      { name: "Champagne Clear", hex: "#e4dbce" }
    ],
    faceShapes: ["oval", "round"]
  },
  {
    id: "frame-norde",
    name: "The Norde",
    category: "modern",
    price: "₹14,200",
    badge: "Modern",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80&auto=format&fit=crop",
    desc: "Ultra-thin rimless silhouette weighing just 14 grams. Precision-machined aerospace titanium with screwless flex hinges.",
    specs: {
      lensWidth: "53 mm",
      bridge: "18 mm",
      temple: "140 mm",
      material: "Aerospace Titanium Ti-6Al-4V",
      weight: "14 g",
      fit: "Featherlight Invisible Fit"
    },
    colors: [
      { name: "Brushed Silver", hex: "#b5b5b5" },
      { name: "Midnight Black", hex: "#1a1a1a" },
      { name: "Titanium Slate", hex: "#54595e" }
    ],
    faceShapes: ["square", "heart", "oval"]
  },
  {
    id: "frame-vesper",
    name: "The Vesper",
    category: "optical",
    price: "₹9,600",
    badge: "Optical",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80&auto=format&fit=crop",
    desc: "Sculpted subtle cat-eye silhouette in smoked champagne acetate. Gently lifts cheekbones on heart and oval faces.",
    specs: {
      lensWidth: "51 mm",
      bridge: "17 mm",
      temple: "142 mm",
      material: "Dual-Layer Laminate Acetate",
      weight: "22 g",
      fit: "Lifting Feminine Contour"
    },
    colors: [
      { name: "Smoked Champagne", hex: "#d8cbb8" },
      { name: "Onyx Black", hex: "#111111" },
      { name: "Deep Bordeaux", hex: "#4a192c" }
    ],
    faceShapes: ["heart", "oval"]
  },
  {
    id: "frame-mirabeau",
    name: "The Mirabeau",
    category: "sunglass",
    price: "₹12,400",
    badge: "Sunglasses",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80&auto=format&fit=crop",
    desc: "Double-bridge navigator with custom hand-carved acetate browline and anti-reflective mineral glass green lenses.",
    specs: {
      lensWidth: "55 mm",
      bridge: "17 mm",
      temple: "145 mm",
      material: "Stainless Steel & Hand-Carved Acetate",
      weight: "28 g",
      fit: "Classic Aviator Fit"
    },
    colors: [
      { name: "Polished Havana", hex: "#5e381e" },
      { name: "Matte Gunmetal", hex: "#383838" },
      { name: "Gold Vintage", hex: "#c49a45" }
    ],
    faceShapes: ["oval", "round"]
  },
  {
    id: "frame-kensington",
    name: "The Kensington",
    category: "classic",
    price: "₹8,800",
    badge: "Classic",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495f9?w=800&q=80&auto=format&fit=crop",
    desc: "Traditional 1950s panto shape with an anatomical keyhole bridge that relieves nasal pressure. Hand-polished amber crystal.",
    specs: {
      lensWidth: "48 mm",
      bridge: "21 mm",
      temple: "145 mm",
      material: "Cured Italian Crystal Acetate",
      weight: "22 g",
      fit: "Comfort Keyhole Fit"
    },
    colors: [
      { name: "Amber Crystal", hex: "#d1a36a" },
      { name: "Classic Tortoise", hex: "#633c1d" },
      { name: "Smoky Grey", hex: "#525252" }
    ],
    faceShapes: ["square", "oval"]
  },
  {
    id: "frame-zephyr",
    name: "The Zephyr",
    category: "modern",
    price: "₹13,500",
    badge: "Modern",
    image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=800&q=80&auto=format&fit=crop",
    desc: "Architectural octagonal profile milled from solid Japanese beta-titanium block. Matte midnight finish with laser micro-grooving.",
    specs: {
      lensWidth: "50 mm",
      bridge: "20 mm",
      temple: "145 mm",
      material: "Block Beta-Titanium CNC Milled",
      weight: "17 g",
      fit: "Structured Precision Fit"
    },
    colors: [
      { name: "Matte Midnight", hex: "#1f242b" },
      { name: "Brushed Graphite", hex: "#454545" },
      { name: "Champagne Titanium", hex: "#c7b79d" }
    ],
    faceShapes: ["round", "oval"]
  }
];

/* ────────────────────────────────────────────────────────────
   3. FACE SHAPE ADVISORY DATA
──────────────────────────────────────────────────────────── */
const FACE_SHAPES_DATA = {
  oval: {
    badge: "Oval Face Shape",
    title: "Naturally Harmonious Proportions",
    desc: "An oval face features gentle curves with cheekbones slightly wider than the forehead and jawline. Because your facial proportions are naturally balanced, you can wear almost any frame geometry with confidence.",
    recs: [
      "Rectangular and geometric silhouettes to add crisp subtle structure",
      "Walnut, matte black, and rich tortoise acetate frames that span your cheekbone width",
      "Bold navigator sunglasses with strong upper brow bars"
    ],
    avoid: "Avoid frames that are excessively wider than your cheekbones or sit too low, which can disrupt your face's natural symmetry.",
    targetFilter: "optical",
    picks: [
      { name: "The Aldric", desc: "Slim rectangular acetate · Balanced temple width" },
      { name: "The Caspian", desc: "Oversized square polarized · Statement brow" },
      { name: "The Zephyr", desc: "Octagonal titanium · Architectural refinement" }
    ]
  },
  round: {
    badge: "Round Face Shape",
    title: "Soft Curves & Balanced Width",
    desc: "Round faces feature soft jawlines and curved contours where face length and width are relatively equal. The ideal frame introduces clean lines and angular geometry to lengthen and sculpt the face.",
    recs: [
      "Bold rectangular and square silhouettes to create horizontal definition",
      "Angular geometric frames (like hexagonal or octagonal profiles)",
      "High temple attachments that draw the visual eye upward"
    ],
    avoid: "Avoid perfectly round or small circular frames, which accentuate circularity rather than providing definition.",
    targetFilter: "classic",
    picks: [
      { name: "The Pembroke", desc: "Structured rectangular classic in dark Havana" },
      { name: "The Zephyr", desc: "Octagonal block titanium with crisp angles" },
      { name: "The Caspian", desc: "Architectural square UV400 polarized" }
    ]
  },
  square: {
    badge: "Square Face Shape",
    title: "Chiseled Jaw & Broad Brow",
    desc: "A square face is defined by a strong horizontal jawline, wide cheekbones, and an equally broad forehead. Curved and rounded frames provide a flattering counterpoint by softening sharp facial angles.",
    recs: [
      "Panto, oval, and rounded wire frames that sit high on the bridge",
      "Ultra-thin rimless titanium frames to maintain facial lightness",
      "Curved teardrop and round sunglasses with subtle gold filigree"
    ],
    avoid: "Avoid stark boxy frames or thick square silhouettes that reinforce boxy facial angles.",
    targetFilter: "sunglass",
    picks: [
      { name: "The Marlowe", desc: "Warm rounded oval silhouette in tortoiseshell" },
      { name: "The Riviera", desc: "Featherlight titanium round sunglasses" },
      { name: "The Kensington", desc: "Traditional 1950s panto with keyhole bridge" }
    ]
  },
  heart: {
    badge: "Heart Face Shape",
    title: "Broad Brow & Gracefully Tapered Chin",
    desc: "Heart-shaped faces feature a broader forehead tapering to high cheekbones and a delicate, pointed chin. Frames with lighter lower rims or upward-sweeping brows harmonize facial balance.",
    recs: [
      "Subtle cat-eye and upward-lifting sculpted acetates",
      "Semi-rimless browline styles that frame the eyes without heavy lower bulk",
      "Thin rimless or crystal translucent frames that do not overpower the chin"
    ],
    avoid: "Avoid bottom-heavy designs or oversized tear-drop frames that pull attention downward.",
    targetFilter: "optical",
    picks: [
      { name: "The Vesper", desc: "Sculpted champagne cat-eye lifting the brow" },
      { name: "The Harwick", desc: "Semi-rimless browline in gunmetal alloy" },
      { name: "The Norde", desc: "Minimalist rimless aerospace titanium" }
    ]
  }
};

/* ────────────────────────────────────────────────────────────
   4. UTILITIES
──────────────────────────────────────────────────────────── */
function buildWhatsAppUrl(message) {
  const num = STORE_CONFIG.whatsappNumber.replace(/\D/g, "");
  const encoded = encodeURIComponent(message || STORE_CONFIG.defaultWhatsAppMessage);
  return `https://wa.me/${num}?text=${encoded}`;
}

function showToast(message, icon = "✓") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-fadeout");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ────────────────────────────────────────────────────────────
   5. SHORTLIST / WISHLIST STATE MANAGER
──────────────────────────────────────────────────────────── */
const ShortlistManager = {
  STORAGE_KEY: "clare_optics_shortlist",

  getAll() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  has(id) {
    return this.getAll().includes(id);
  },

  toggle(id) {
    let list = this.getAll();
    const exists = list.includes(id);
    if (exists) {
      list = list.filter(item => item !== id);
    } else {
      list.push(id);
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    this.syncUI();
    return !exists;
  },

  remove(id) {
    let list = this.getAll().filter(item => item !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    this.syncUI();
  },

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.syncUI();
  },

  syncUI() {
    const list = this.getAll();
    const count = list.length;

    // Update header badges
    const badge = document.getElementById("shortlist-count-badge");
    if (badge) badge.textContent = count;

    const drawerCount = document.getElementById("drawer-items-count");
    if (drawerCount) drawerCount.textContent = `(${count} frame${count === 1 ? '' : 's'})`;

    const totalCount = document.getElementById("drawer-total-count");
    if (totalCount) totalCount.textContent = count;

    // Update all card toggle buttons
    document.querySelectorAll(".wishlist-toggle-btn").forEach(btn => {
      const id = btn.dataset.id;
      btn.classList.toggle("is-active", list.includes(id));
      btn.setAttribute("aria-pressed", list.includes(id) ? "true" : "false");
    });

    // Render drawer list
    this.renderDrawer(list);
  },

  renderDrawer(list) {
    const emptyState = document.getElementById("shortlist-empty-state");
    const itemsList  = document.getElementById("shortlist-items-list");
    const footer     = document.getElementById("shortlist-drawer-footer");

    if (!itemsList) return;

    if (list.length === 0) {
      if (emptyState) emptyState.hidden = false;
      itemsList.innerHTML = "";
      if (footer) footer.hidden = true;
      return;
    }

    if (emptyState) emptyState.hidden = true;
    if (footer) footer.hidden = false;

    const matchedProducts = list.map(id => PRODUCTS_DATA.find(p => p.id === id)).filter(Boolean);

    itemsList.innerHTML = matchedProducts.map(product => `
      <div class="shortlist-card" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" class="shortlist-card-img" />
        <div class="shortlist-card-details">
          <h4>${product.name}</h4>
          <p class="shortlist-card-meta">${product.badge} · ${product.specs.material.split(" ")[0]}</p>
          <span class="shortlist-card-price">${product.price}</span>
        </div>
        <button type="button" class="shortlist-card-remove" data-id="${product.id}" aria-label="Remove ${product.name} from shortlist" title="Remove">&times;</button>
      </div>
    `).join("");

    // Attach remove handlers
    itemsList.querySelectorAll(".shortlist-card-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const prod = PRODUCTS_DATA.find(p => p.id === id);
        this.remove(id);
        if (prod) showToast(`Removed ${prod.name} from shortlist`, "✕");
      });
    });
  }
};

/* ────────────────────────────────────────────────────────────
   6. SHORTLIST DRAWER CONTROLLER
──────────────────────────────────────────────────────────── */
function initShortlistDrawer() {
  const drawer   = document.getElementById("shortlist-drawer");
  const overlay  = document.getElementById("drawer-overlay");
  const openBtn  = document.getElementById("open-shortlist-btn");
  const closeBtn = document.getElementById("close-shortlist-btn");
  const clearBtn = document.getElementById("shortlist-clear-btn");
  const enquireAllBtn = document.getElementById("shortlist-enquire-all-btn");
  const browseBtn = document.getElementById("drawer-browse-btn");

  if (!drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.classList.add("is-visible");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.classList.remove("is-visible");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);
  if (browseBtn) browseBtn.addEventListener("click", closeDrawer);

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      ShortlistManager.clear();
      showToast("Shortlist cleared");
    });
  }

  if (enquireAllBtn) {
    enquireAllBtn.addEventListener("click", () => {
      const list = ShortlistManager.getAll();
      const matched = list.map(id => PRODUCTS_DATA.find(p => p.id === id)).filter(Boolean);
      if (matched.length === 0) return;

      const itemsText = matched.map((p, idx) => `${idx + 1}. *${p.name}* (${p.badge}, ${p.price})`).join("\n");
      const message = `Hello Claré Optics! I would like to check availability and schedule a fitting for my shortlisted frames:\n\n${itemsText}\n\nCould you please confirm if these are in stock at your Colaba studio?`;
      window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    });
  }

  // Card wishlist toggle listeners
  document.querySelectorAll(".wishlist-toggle-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const added = ShortlistManager.toggle(id);
      const prod = PRODUCTS_DATA.find(p => p.id === id);
      const name = prod ? prod.name : "Frame";
      if (added) {
        showToast(`Saved ${name} to shortlist`, "♥");
      } else {
        showToast(`Removed ${name} from shortlist`, "✕");
      }
    });
  });
}

/* ────────────────────────────────────────────────────────────
   7. QUICK-VIEW MODAL CONTROLLER
──────────────────────────────────────────────────────────── */
function initQuickViewModal() {
  const modal    = document.getElementById("quick-view-modal");
  const overlay  = document.getElementById("quick-view-overlay");
  const closeBtn = document.getElementById("close-quickview-btn");
  const content  = document.getElementById("quick-view-content");

  if (!modal || !overlay || !content) return;

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    overlay.classList.remove("is-visible");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function openModal(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const isSaved = ShortlistManager.has(product.id);
    let selectedColor = product.colors[0].name;

    content.innerHTML = `
      <div class="qv-grid">
        <div class="qv-media">
          <img src="${product.image}" alt="${product.name}" class="qv-image" id="qv-main-image" />
          <span class="qv-badge">${product.badge}</span>
        </div>
        <div class="qv-info">
          <div class="qv-title-row">
            <h2 class="qv-title" id="qv-frame-name">${product.name}</h2>
            <span class="qv-price">${product.price}</span>
          </div>
          <p class="qv-desc">${product.desc}</p>

          <table class="qv-specs-table" aria-label="Frame technical specifications">
            <tbody>
              <tr><td class="qv-spec-label">Lens Width</td><td class="qv-spec-value">${product.specs.lensWidth}</td></tr>
              <tr><td class="qv-spec-label">Bridge Width</td><td class="qv-spec-value">${product.specs.bridge}</td></tr>
              <tr><td class="qv-spec-label">Temple Length</td><td class="qv-spec-value">${product.specs.temple}</td></tr>
              <tr><td class="qv-spec-label">Material</td><td class="qv-spec-value">${product.specs.material}</td></tr>
              <tr><td class="qv-spec-label">Total Weight</td><td class="qv-spec-value">${product.specs.weight}</td></tr>
              <tr><td class="qv-spec-label">Fit Geometry</td><td class="qv-spec-value">${product.specs.fit}</td></tr>
            </tbody>
          </table>

          <div class="qv-colorways">
            <span class="qv-colorway-label">Available Finishes:</span>
            <div class="qv-color-swatches" role="radiogroup" aria-label="Select frame finish">
              ${product.colors.map((c, i) => `
                <button
                  type="button"
                  class="qv-swatch ${i === 0 ? 'active' : ''}"
                  style="background-color: ${c.hex};"
                  data-color-name="${c.name}"
                  title="${c.name}"
                  aria-label="${c.name}"
                ></button>
              `).join('')}
            </div>
            <strong id="qv-selected-color-name" style="font-size: 0.8rem; margin-left: 6px;">${selectedColor}</strong>
          </div>

          <div class="qv-actions">
            <button type="button" class="btn btn--whatsapp" id="qv-wa-enquire-btn">
              Enquire This Frame on WhatsApp
            </button>
            <button type="button" class="btn btn--outline" id="qv-shortlist-btn">
              ${isSaved ? '♥ Saved in Shortlist' : '♡ Add to Shortlist'}
            </button>
          </div>
        </div>
      </div>
    `;

    // Swatch selection
    content.querySelectorAll(".qv-swatch").forEach(swatch => {
      swatch.addEventListener("click", () => {
        content.querySelectorAll(".qv-swatch").forEach(s => s.classList.remove("active"));
        swatch.classList.add("active");
        selectedColor = swatch.dataset.colorName;
        const nameLabel = document.getElementById("qv-selected-color-name");
        if (nameLabel) nameLabel.textContent = selectedColor;
      });
    });

    // WhatsApp Enquire
    const waBtn = document.getElementById("qv-wa-enquire-btn");
    if (waBtn) {
      waBtn.addEventListener("click", () => {
        const msg = `Hello Claré Optics! I'm interested in *${product.name}* (${product.badge}) in the *${selectedColor}* finish (${product.price}). Could you please share in-store availability and lens options?`;
        window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
      });
    }

    // Toggle Shortlist from modal
    const slBtn = document.getElementById("qv-shortlist-btn");
    if (slBtn) {
      slBtn.addEventListener("click", () => {
        const added = ShortlistManager.toggle(product.id);
        slBtn.textContent = added ? '♥ Saved in Shortlist' : '♡ Add to Shortlist';
        showToast(added ? `Saved ${product.name} to shortlist` : `Removed ${product.name} from shortlist`);
      });
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    overlay.classList.add("is-visible");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  // Trigger handlers
  document.querySelectorAll(".card-qv-btn, .card-quickview-overlay-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      if (id) openModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", closeModal);
}

/* ────────────────────────────────────────────────────────────
   8. APPOINTMENT BOOKING MODAL CONTROLLER
──────────────────────────────────────────────────────────── */
function initBookingModal() {
  const modal    = document.getElementById("booking-modal");
  const overlay  = document.getElementById("booking-overlay");
  const closeBtn = document.getElementById("close-booking-btn");
  const form     = document.getElementById("appointment-booking-form");
  const card     = document.getElementById("booking-confirmation-card");
  const cardDone = document.getElementById("confirm-close-btn");
  const dateInput = document.getElementById("book-date");

  if (!modal || !overlay) return;

  // Set min date to today
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  function openBookingModal(preselectedService) {
    if (card) card.hidden = true;
    if (form) {
      form.hidden = false;
      if (preselectedService) {
        const select = document.getElementById("book-service");
        if (select) select.value = preselectedService;
      }
    }
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    overlay.classList.add("is-visible");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeBookingModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    overlay.classList.remove("is-visible");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Triggers across the site
  const triggerIds = [
    "header-book-btn",
    "hero-book-btn",
    "about-book-btn",
    "face-book-btn",
    "contact-book-btn",
    "footer-book-btn"
  ];
  triggerIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openBookingModal();
      });
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeBookingModal);
  if (overlay) overlay.addEventListener("click", closeBookingModal);
  if (cardDone) cardDone.addEventListener("click", closeBookingModal);

  // Form submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const service = document.getElementById("book-service")?.value || "Eye Examination";
      const date    = document.getElementById("book-date")?.value || "Upcoming";
      const time    = document.getElementById("book-time")?.value || "Morning";
      const name    = document.getElementById("book-name")?.value.trim() || "Guest";
      const phone   = document.getElementById("book-phone")?.value.trim() || "";
      const email   = document.getElementById("book-email")?.value.trim() || "Not provided";
      const notes   = document.getElementById("book-notes")?.value.trim() || "None";

      if (!phone) {
        alert("Please provide a valid phone or WhatsApp number.");
        return;
      }

      // Save to localStorage
      try {
        const bookings = JSON.parse(localStorage.getItem("clare_optics_bookings") || "[]");
        bookings.push({ service, date, time, name, phone, email, notes, bookedAt: new Date().toISOString() });
        localStorage.setItem("clare_optics_bookings", JSON.stringify(bookings));
      } catch (err) {
        console.warn("Could not save to localStorage", err);
      }

      // Populate confirmation card
      document.getElementById("confirm-client-name").textContent = name;
      document.getElementById("confirm-client-date").textContent = date;
      document.getElementById("confirm-client-time").textContent = time;

      const waSummary = `Hello Claré Optics! I'd like to confirm my consultation booking:\n\n*Name:* ${name}\n*Service:* ${service}\n*Date:* ${date}\n*Time Window:* ${time}\n*Phone:* ${phone}\n*Notes:* ${notes}\n\nPlease confirm my slot. Thank you!`;
      const waBtn = document.getElementById("confirm-whatsapp-btn");
      if (waBtn) waBtn.setAttribute("href", buildWhatsAppUrl(waSummary));

      form.hidden = true;
      if (card) card.hidden = false;
      showToast("Appointment provisional request saved!", "✓");
    });
  }
}

/* ────────────────────────────────────────────────────────────
   9. FACE SHAPE ADVISORY CONTROLLER
──────────────────────────────────────────────────────────── */
function initFaceShapeGuide() {
  const tabs       = document.querySelectorAll(".face-tab");
  const badgeEl    = document.getElementById("face-shape-badge");
  const titleEl    = document.getElementById("face-card-title");
  const descEl     = document.getElementById("face-card-desc");
  const recListEl  = document.getElementById("face-rec-list");
  const avoidEl    = document.getElementById("face-avoid-text");
  const picksList  = document.getElementById("curated-picks-list");
  const filterBtn  = document.getElementById("face-filter-btn");

  if (!tabs.length || !titleEl) return;

  function renderShape(shapeKey) {
    const data = FACE_SHAPES_DATA[shapeKey];
    if (!data) return;

    if (badgeEl)   badgeEl.textContent   = data.badge;
    if (titleEl)   titleEl.textContent   = data.title;
    if (descEl)    descEl.textContent    = data.desc;
    if (avoidEl)   avoidEl.textContent   = data.avoid;

    if (recListEl) {
      recListEl.innerHTML = data.recs.map(item => `<li>${item}</li>`).join("");
    }

    if (picksList) {
      picksList.innerHTML = data.picks.map(pick => `
        <div class="pick-item">
          <span class="pick-bullet">✦</span>
          <div>
            <strong>${pick.name}</strong>
            <p>${pick.desc}</p>
          </div>
        </div>
      `).join("");
    }

    if (filterBtn) {
      filterBtn.dataset.targetFilter = data.targetFilter;
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderShape(tab.dataset.shape);
    });
  });

  if (filterBtn) {
    filterBtn.addEventListener("click", () => {
      const target = filterBtn.dataset.targetFilter || "all";
      const targetTab = document.querySelector(`.filter-btn[data-filter="${target}"]`);
      if (targetTab) targetTab.click();

      const gallerySection = document.getElementById("eyewear");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

/* ────────────────────────────────────────────────────────────
   10. FAQ ACCORDION CONTROLLER
──────────────────────────────────────────────────────────── */
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer   = item.querySelector(".faq-answer");

    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const expanded = question.getAttribute("aria-expanded") === "true";

      // Close all others
      items.forEach(otherItem => {
        const otherQ = otherItem.querySelector(".faq-question");
        const otherA = otherItem.querySelector(".faq-answer");
        if (otherQ && otherA && otherItem !== item) {
          otherQ.setAttribute("aria-expanded", "false");
          otherA.hidden = true;
        }
      });

      // Toggle clicked
      question.setAttribute("aria-expanded", String(!expanded));
      answer.hidden = expanded;
    });
  });
}

/* ────────────────────────────────────────────────────────────
   11. CONTACT ENQUIRY FORM CONTROLLER
──────────────────────────────────────────────────────────── */
function initContactEnquiryForm() {
  const form = document.getElementById("contact-enquiry-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name    = document.getElementById("contact-name")?.value.trim();
    const phone   = document.getElementById("contact-phone")?.value.trim();
    const subject = document.getElementById("contact-subject")?.value;
    const message = document.getElementById("contact-message")?.value.trim();

    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const waText = `Hello Claré Optics Studio!\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Interest:* ${subject}\n*Message:* ${message || "I'd like to consult with an optician."}`;
    window.open(buildWhatsAppUrl(waText), "_blank", "noopener,noreferrer");
    showToast("Message prepared! Opening WhatsApp...", "✓");
    form.reset();
  });
}

/* ────────────────────────────────────────────────────────────
   12. GALLERY CATEGORY FILTER & REAL-TIME SEARCH
──────────────────────────────────────────────────────────── */
function initGalleryControls() {
  const filterBtns  = document.querySelectorAll(".filter-btn");
  const cards       = document.querySelectorAll(".product-grid .product-card");
  const searchInput = document.getElementById("frame-search-input");
  const noResultMsg = document.getElementById("no-products-msg");

  let activeFilter = "all";
  let searchQuery  = "";

  function applyFilterAndSearch() {
    let visibleCount = 0;

    cards.forEach(card => {
      const category = card.dataset.category || "";
      const text     = (card.textContent || "").toLowerCase();

      const matchesFilter = activeFilter === "all" || category === activeFilter;
      const matchesSearch = !searchQuery || text.includes(searchQuery);

      if (matchesFilter && matchesSearch) {
        card.hidden = false;
        visibleCount++;
      } else {
        card.hidden = true;
      }
    });

    if (noResultMsg) {
      noResultMsg.hidden = visibleCount > 0;
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      activeFilter = btn.dataset.filter || "all";
      applyFilterAndSearch();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilterAndSearch();
    });
  }
}

/* ────────────────────────────────────────────────────────────
   13. STORE CONFIG DOM BINDING
──────────────────────────────────────────────────────────── */
function applyConfig() {
  // Direct phone links
  const callBtn       = document.getElementById("call-btn");
  const phoneLinkEl   = document.getElementById("phone-link");
  const footerPhoneEl = document.getElementById("footer-phone-link");

  [callBtn, phoneLinkEl, footerPhoneEl].forEach(el => {
    if (el) el.setAttribute("href", STORE_CONFIG.phoneTel);
  });

  if (phoneLinkEl)   phoneLinkEl.textContent   = STORE_CONFIG.phoneNumber;
  if (footerPhoneEl) footerPhoneEl.textContent = STORE_CONFIG.phoneNumber;

  // WhatsApp general buttons
  const waUrl = buildWhatsAppUrl(STORE_CONFIG.defaultWhatsAppMessage);
  ["whatsapp-general-btn", "whatsapp-contact-btn", "footer-wa-btn"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", waUrl);
  });

  // Product cards enquire WhatsApp buttons
  document.querySelectorAll(".enquire-btn").forEach(btn => {
    const product = btn.dataset.product || "your eyewear";
    const msg = `Hello Claré Optics! I'm interested in *${product}*. Could you please share stock availability, lens options, and pricing?`;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    });
  });

  // Store address
  const addrEl = document.getElementById("store-address");
  if (addrEl) {
    const link = addrEl.querySelector("a");
    if (link) {
      link.textContent = STORE_CONFIG.storeAddress;
      link.setAttribute("href", STORE_CONFIG.mapsDirectionsUrl);
    }
  }

  // Hours
  const hoursWeekdayEl = document.getElementById("store-hours-weekday");
  const hoursSundayEl  = document.getElementById("store-hours-sunday");
  if (hoursWeekdayEl) hoursWeekdayEl.textContent = STORE_CONFIG.hoursWeekday;
  if (hoursSundayEl)  hoursSundayEl.textContent  = STORE_CONFIG.hoursSunday;

  // Directions
  ["map-link", "directions-link"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", STORE_CONFIG.mapsDirectionsUrl);
  });

  // Google Maps embed
  const mapIframe = document.getElementById("map-iframe");
  if (mapIframe && STORE_CONFIG.mapsEmbedUrl) {
    mapIframe.setAttribute("src", STORE_CONFIG.mapsEmbedUrl);
  }

  // Copyright year
  const yearEl = document.getElementById("copyright-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ────────────────────────────────────────────────────────────
   14. HEADER & MOBILE NAVIGATION
──────────────────────────────────────────────────────────── */
function initHeaderAndNav() {
  const header  = document.getElementById("site-header");
  const toggle  = document.getElementById("nav-toggle");
  const nav     = document.getElementById("primary-nav");
  const overlay = document.getElementById("mobile-nav-overlay");

  // Sticky header scroll shadow
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (!toggle || !nav || !overlay) return;

  function openNav() {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    toggle.classList.add("is-open");
    nav.classList.add("is-open");
    overlay.classList.add("is-visible");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    toggle.classList.remove("is-open");
    nav.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeNav() : openNav();
  });

  nav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", closeNav);
  });

  overlay.addEventListener("click", closeNav);

  // Close modals or drawer on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeNav();
      document.getElementById("close-shortlist-btn")?.click();
      document.getElementById("close-quickview-btn")?.click();
      document.getElementById("close-booking-btn")?.click();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeNav();
  });
}

/* ────────────────────────────────────────────────────────────
   15. ACTIVE NAV LINK ON SCROLL
──────────────────────────────────────────────────────────── */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  const headerEl = document.getElementById("site-header");
  const headerH  = headerEl ? headerEl.offsetHeight : 76;

  function update() {
    let currentId = "home";
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= headerH + 100) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute("href")?.replace("#", "");
      link.classList.toggle("active", href === currentId);
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ────────────────────────────────────────────────────────────
   16. SCROLL REVEAL (Progressive enhancement)
──────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    document.querySelectorAll(".reveal, .reveal-stagger").forEach(el => el.classList.add("is-visible"));
    return;
  }

  const revealEls = document.querySelectorAll(".reveal");
  const staggerGroups = document.querySelectorAll(".reveal-stagger");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  revealEls.forEach(el => observer.observe(el));
  staggerGroups.forEach(el => observer.observe(el));
}

/* ────────────────────────────────────────────────────────────
   17. INITIALIZATION BOOTSTRAP
──────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initHeaderAndNav();
  initActiveNavHighlight();
  initGalleryControls();
  ShortlistManager.syncUI();
  initShortlistDrawer();
  initQuickViewModal();
  initBookingModal();
  initFaceShapeGuide();
  initFaqAccordion();
  initContactEnquiryForm();

  // Progressive reveal animations
  document.querySelectorAll(".section-header").forEach(el => el.classList.add("reveal"));
  document.querySelectorAll(".about-content, .about-image-wrap").forEach(el => el.classList.add("reveal"));
  document.querySelectorAll(".face-card").forEach(el => el.classList.add("reveal"));
  document.querySelectorAll(".testimonials-grid").forEach(el => el.classList.add("reveal"));
  document.querySelectorAll(".faq-list").forEach(el => el.classList.add("reveal"));
  document.querySelectorAll(".contact-info, .contact-map").forEach(el => el.classList.add("reveal"));
  document.getElementById("product-grid")?.classList.add("reveal-stagger");

  initScrollReveal();
});
