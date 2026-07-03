/**
 * TINT LAB — Core Application Script (Enhanced Production Edition)
 * Architecture: Modular Vanilla Component Modules & Global State Store
 */

(function () {
  'use strict';

  // ==========================================
  // 1. DATA STORES & ENHANCED INVENTORY CATALOGS
  // ==========================================
  const SHADES = [
    { id: 'shade-f01', name: 'Porcelain', code: 'F01', hex: '#f3ddc6' },
    { id: 'shade-f03', name: 'Ivory', code: 'F03', hex: '#eecfa9' },
    { id: 'shade-f06', name: 'Warm Beige', code: 'F06', hex: '#e3ba8c' },
    { id: 'shade-f09', name: 'Honey', code: 'F09', hex: '#d7a672' },
    { id: 'shade-f12', name: 'Golden Tan', code: 'F12', hex: '#c88f5c' },
    { id: 'shade-f16', name: 'Caramel', code: 'F16', hex: '#b8794a' },
    { id: 'shade-f20', name: 'Amber', code: 'F20', hex: '#a2653c' },
    { id: 'shade-f24', name: 'Sienna', code: 'F24', hex: '#875036' },
    { id: 'shade-f28', name: 'Espresso', code: 'F28', hex: '#623a26' },
    { id: 'shade-f32', name: 'Deep Cocoa', code: 'F32', hex: '#402417' }
  ];

  const PRODUCT_INVENTORY = [
    // === FACE CATEGORY (9 Products) ===
    { id: 1, title: 'Fluid Foundation', cat: 'Face', price: 34.00, tag: 'Bestseller', img: 'images/foundation.jpg' },
    { id: 5, title: 'Second Skin Concealer', cat: 'Face', price: 24.00, tag: null, img: 'images/concealer.jpg' },
    { id: 7, title: 'Soft Focus Powder', cat: 'Face', price: 26.00, tag: 'Limited', img: 'images/powder.jpg' },
    { id: 13, title: 'Luminous Primer Base', cat: 'Face', price: 28.00, tag: 'New', img: 'images/primer.jpg' },
    { id: 14, title: 'Matte Lock Setting Spray', cat: 'Face', price: 22.00, tag: null, img: 'images/setting spray.jpg' },
    { id: 15, title: 'Blurring Skin Tint', cat: 'Face', price: 30.00, tag: 'Trending', img: 'images/skin tint.jpg' },
    { id: 16, title: 'Color Correcting Drops', cat: 'Face', price: 19.00, tag: null, img: 'images/color corrector.jpg' },
    { id: 17, title: 'Velvet Contour Cream', cat: 'Face', price: 27.00, tag: null, img: 'images/contour.jpg' },
    { id: 18, title: 'Hydrating Serum Glow', cat: 'Face', price: 36.00, tag: 'Organic', img: 'images/serum.jpg' },

    // === EYES CATEGORY (9 Products) ===
    { id: 4, title: 'Ember Eyeshadow Quad', cat: 'Eyes', price: 28.00, tag: 'New', img: 'images/eyeshadow quad.jpg' },
    { id: 9, title: 'Ink Wash Eyeliner', cat: 'Eyes', price: 18.00, tag: null, img: 'images/eye liner.jpg' },
    { id: 10, title: 'Whisper Brow Gel', cat: 'Eyes', price: 17.00, tag: 'New', img: 'images/brow gel.jpg' },
    { id: 19, title: 'Obsidian Lash Mascara', cat: 'Eyes', price: 24.00, tag: 'Bestseller', img: 'images/mascara.jpg' },
    { id: 20, title: 'Liquid Metal Foil Pigment', cat: 'Eyes', price: 16.00, tag: null, img: 'images/liquid eye shadow.jpg' },
    { id: 21, title: 'Precision Micro Brow Pencil', cat: 'Eyes', price: 15.00, tag: null, img: 'images/brow pencil.jpg' },
    { id: 22, title: 'Midnight Smudge Kohl', cat: 'Eyes', price: 14.00, tag: null, img: 'images/kohl pencil.jpg' },
    { id: 23, title: 'Stardust Chroma Pigment', cat: 'Eyes', price: 22.00, tag: 'Rare', img: 'images/chroma pigment.jpg' },
    { id: 24, title: 'Lock-In Eyeshadow Base', cat: 'Eyes', price: 19.00, tag: null, img: 'images/eye shadow primer.jpg' },

    // === LIPS CATEGORY (9 Products) ===
    { id: 3, title: 'Velvet Lip Tint', cat: 'Lips', price: 19.00, tag: null, img: 'images/lip tint.jpg' },
    { id: 6, title: 'Glass Gloss', cat: 'Lips', price: 16.00, tag: null, img: 'images/lip gloss.jpg' },
    { id: 11, title: 'Matte Lip Crayon', cat: 'Lips', price: 20.00, tag: null, img: 'images/lip crayon.jpg' },
    { id: 25, title: 'Satin Cream Lipstick', cat: 'Lips', price: 25.00, tag: 'Classic', img: 'images/lipstick.jpg' },
    { id: 26, title: 'Plumping Balm Treatment', cat: 'Lips', price: 22.00, tag: 'New', img: 'images/lip balm.jpg' },
    { id: 27, title: 'Precision Lip Definer', cat: 'Lips', price: 14.00, tag: null, img: 'images/lip liner.jpg' },
    { id: 28, title: 'Liquid Suede Lip Paint', cat: 'Lips', price: 21.00, tag: 'Hot', img: 'images/liquid lipstick.jpg' },
    { id: 29, title: 'Overnight Lip Mask', cat: 'Lips', price: 18.00, tag: null, img: 'images/lip mask.jpg' },
    { id: 30, title: 'Chroma Lip Topper', cat: 'Lips', price: 17.00, tag: null, img: 'images/lip topper.jpg' },

    // === CHEEK CATEGORY (9 Products) ===
    { id: 2, title: 'Cloud Blush', cat: 'Cheek', price: 22.00, tag: 'New', img: 'images/blush.jpg' },
    { id: 8, title: 'Bronze Hour Bronzer', cat: 'Cheek', price: 25.00, tag: null, img: 'images/bronzer.jpg' },
    { id: 31, title: 'Strobe Gel Highlighter', cat: 'Cheek', price: 24.00, tag: 'Viral', img: 'images/highlighter.jpg' },
    { id: 32, title: 'Dusk Serum Blush', cat: 'Cheek', price: 23.00, tag: null, img: 'images/liquid blush.jpg' },
    { id: 33, title: 'Sculpt & Define Palette', cat: 'Cheek', price: 38.00, tag: 'Luxury', img: 'images/contour palatte.jpg' },
    { id: 34, title: 'Dewy Finish Balm Stick', cat: 'Cheek', price: 20.00, tag: null, img: 'images/balm stick.jpg' },
    { id: 35, title: 'Ombré Powder Cheek Duo', cat: 'Cheek', price: 26.00, tag: null, img: 'images/blush duo.jpg' },
    { id: 36, title: 'Baked Radiance Illuminator', cat: 'Cheek', price: 29.00, tag: null, img: 'images/illuminator.jpg' },
    { id: 37, title: 'Matte Contouring Veil', cat: 'Cheek', price: 24.00, tag: null, img: 'images/contour powder.jpg' },

    // === BRUSHES CATEGORY (9 Products) ===
    { id: 12, title: 'Precision Blush Brush', cat: 'Brushes', price: 21.00, tag: 'Bestseller', img: 'images/blush brush.jpg' },
    { id: 38, title: 'Tapered Powder Veil', cat: 'Brushes', price: 24.00, tag: null, img: 'images/powder brush.jpg' },
    { id: 39, title: 'Dense Foundation Buffer', cat: 'Brushes', price: 22.00, tag: 'New', img: 'images/foundation brush.jpg' },
    { id: 40, title: 'Flat Concealer Detailer', cat: 'Brushes', price: 14.00, tag: null, img: 'images/concealer brush.jpg' },
    { id: 41, title: 'Angled Crease Blender', cat: 'Brushes', price: 15.00, tag: null, img: 'images/crease brush.jpg' },
    { id: 42, title: 'Precision Smudged Liner Tool', cat: 'Brushes', price: 12.00, tag: null, img: 'images/smudger brush.jpg' },
    { id: 43, title: 'Dual Brow Groomer', cat: 'Brushes', price: 13.00, tag: null, img: 'images/brow brush.jpg' },
    { id: 44, title: 'Elite Complete 5-Set Bag', cat: 'Brushes', price: 78.00, tag: 'Value Set', img: 'images/brush set.jpg' },
    { id: 45, title: 'Silicon Blender Sponge', cat: 'Brushes', price: 10.00, tag: null, img: 'images/beauty sponge.jpg' }
  ];

  const REVIEWS = [
    { quote: 'I dragged the slider twice and landed on Amber — closer than any in-store match I’ve had in ten years of buying foundation.', name: 'Devika R.', role: 'Verified buyer' },
    { quote: 'The lip tint wears through an entire shift at the restaurant. I reapply once, at most, and only because I want to.', name: 'Marisol P.', role: 'Verified buyer' },
    { quote: 'Shade Golden Tan disappears into my skin in a way I did not think was possible without custom mixing.', name: 'Amara K.', role: 'Verified buyer' }
  ];

  // ==========================================
  // 2. STATE STORES & CLIENT STATE ENGINE
  // ==========================================
  let cartState = [];
  let visibleProductCount = 8;
  let activeCategoryFilter = null;

  // ==========================================
  // 3. CACHED ELEMENT DOM SELECTORS
  // ==========================================
  const header = document.getElementById('site-header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobilePanel = document.getElementById('mobilePanel');
  const cartPill = document.getElementById('cartPill');
  const cartCount = document.getElementById('cartCount');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawerItems = document.getElementById('cartDrawerItems');
  const cartDrawerCount = document.getElementById('cartDrawerCount');
  const cartSubtotalAmount = document.getElementById('cartSubtotalAmount');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Containers
  const shadeSliderContainer = document.getElementById('shade-slider-container');
  const productGridContainer = document.getElementById('product-grid-container');
  const testimonialContainer = document.getElementById('testimonial-container');
  const contactContainer = document.getElementById('contact-container');

  // ==========================================
  // 4. GENERAL CLIENT LAYOUT EFFECT MODULES
  // ==========================================
  function initLayoutTransitions() {
    window.addEventListener('scroll', function () {
      header.classList.toggle('shrink', window.scrollY > 40);
    });

    hamburgerBtn.addEventListener('click', function () {
      mobilePanel.classList.toggle('open');
    });

    mobilePanel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobilePanel.classList.remove('open'));
    });

    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
    
    const intersectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          intersectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => intersectionObserver.observe(el));
  }

  // ==========================================
  // 5. INTERACTIVE APPS: THE SHADE SLIDER MODULE
  // ==========================================
  function renderShadeSliderApp() {
    if (!shadeSliderContainer) return;
    let currentShadeIndex = 4;

    function buildTemplate() {
      const shade = SHADES[currentShadeIndex];
      const stops = SHADES.map(s => s.hex).join(',');

      shadeSliderContainer.innerHTML = `
        <div class="shade-panel">
          <div>
            <div class="shade-swatch-preview" style="background: ${shade.hex};"></div>
            <div class="shade-info">
              <div class="shade-name">${shade.name}</div>
              <div class="shade-code">FLUID FOUNDATION · SHADE ${shade.code}</div>
              <div class="shade-match-cta">
                <button class="add-btn" id="addShadeBtn">Add this shade — $34.00</button>
              </div>
            </div>
          </div>
          <div>
            <div class="slider-label">Drag to match your undertone</div>
            <input type="range" class="shade-range" id="shadeRangeSlider" min="0" max="${SHADES.length - 1}" step="1" value="${currentShadeIndex}" style="background: linear-gradient(90deg, ${stops});">
            <div style="display: flex; justify-content: space-between; margin-top: 10px; font-family: var(--font-mono); font-size: 11px; color: var(--text-muted);">
              <span>Lighter</span>
              <span>Deeper</span>
            </div>
          </div>
        </div>
      `;

      bindEvents();
    }

    function bindEvents() {
      const slider = document.getElementById('shadeRangeSlider');
      const addBtn = document.getElementById('addShadeBtn');

      slider.addEventListener('input', function (e) {
        currentShadeIndex = parseInt(e.target.value, 10);
        buildTemplate();
      });

      addBtn.addEventListener('click', function () {
        const shade = SHADES[currentShadeIndex];
        addItemToCart({
          id: `shade-${shade.code.toLowerCase()}`,
          title: `Fluid Foundation (${shade.name})`,
          price: 34.00,
          meta: `Shade ${shade.code}`,
          img: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="${encodeURIComponent(shade.hex)}"/></svg>`
        });

        addBtn.classList.add('added');
        addBtn.textContent = 'Added to bag ✓';
        setTimeout(() => {
          addBtn.classList.remove('added');
          addBtn.textContent = `Add this shade — $34.00`;
        }, 1200);
      });
    }

    buildTemplate();
  }

  // ==========================================
  // 6. ECOMMERCE SYSTEM: PRODUCT GRID CONTROLLER
  // ==========================================
  function renderProductGridApp() {
    if (!productGridContainer) return;

    let filteredCatalog = PRODUCT_INVENTORY;
    if (activeCategoryFilter) {
      filteredCatalog = PRODUCT_INVENTORY.filter(p => p.cat.toLowerCase() === activeCategoryFilter.toLowerCase());
    }

    const visibleItems = filteredCatalog.slice(0, visibleProductCount);
    const hasMoreItems = filteredCatalog.length > visibleProductCount;

    let htmlGrid = '<div class="product-grid">';
    
    visibleItems.forEach(product => {
      htmlGrid += `
        <div class="product-card">
          <div class="product-image-container">
            ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
            <img class="product-img" src="${product.img}" alt="${product.title}" loading="lazy">
          </div>
          <div class="product-body">
            <h3>${product.title}</h3>
            <p class="cat">${product.cat}</p>
            <div class="product-foot">
              <span class="price">$${product.price.toFixed(2)}</span>
              <button class="add-btn" data-product-id="${product.id}">Add to bag</button>
            </div>
          </div>
        </div>
      `;
    });
    
    htmlGrid += '</div>';

    if (filteredCatalog.length === 0) {
      htmlGrid = `<p style="text-align:center; color:var(--text-muted); padding:40px 0;">No items found in this catalog collection.</p>`;
    } else {
      htmlGrid += `
        <div class="load-more-wrap">
          ${hasMoreItems ? 
            `<button class="load-more" id="loadMoreBtn">Load all items (${filteredCatalog.length})</button>` : 
            `<span style="font-family: var(--font-mono); font-size: 13px; color: var(--text-muted);">Showing all ${filteredCatalog.length} boutique options.</span>`
          }
        </div>
      `;
    }

    productGridContainer.innerHTML = htmlGrid;
    bindGridEvents();
  }

  // [Rest of your exact functions match perfectly without alteration]
  function bindGridEvents() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', function () {
        loadMoreBtn.disabled = true;
        loadMoreBtn.innerHTML = `<span class="spin-dot"></span> Syncing Catalog…`;
        
        setTimeout(() => {
          visibleProductCount = PRODUCT_INVENTORY.length;
          renderProductGridApp();
        }, 600);
      });
    }

    productGridContainer.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const pId = parseInt(this.getAttribute('data-product-id'), 10);
        const item = PRODUCT_INVENTORY.find(p => p.id === pId);
        
        if (item) {
          addItemToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            meta: item.cat,
            img: item.img
          });

          this.classList.add('added');
          this.textContent = 'Added ✓';
          setTimeout(() => {
            this.classList.remove('added');
            this.textContent = 'Add to bag';
          }, 1200);
        }
      });
    });
  }

  function setupCategoryFiltering() {
    document.querySelectorAll('.cat-card').forEach(card => {
      card.addEventListener('click', function () {
        const selectedCat = this.getAttribute('data-category');
        
        document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
        
        if (activeCategoryFilter === selectedCat) {
          activeCategoryFilter = null;
          visibleProductCount = 8; 
        } else {
          activeCategoryFilter = selectedCat;
          this.classList.add('active');
          visibleProductCount = 9; 
        }
        
        renderProductGridApp();
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function toggleCartDrawer(open) {
    if (open) {
      cartDrawer.classList.add('open');
      cartOverlay.classList.add('open');
      cartDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; 
    } else {
      cartDrawer.classList.remove('open');
      cartOverlay.classList.remove('open');
      cartDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; 
    }
  }

  function addItemToCart(productSpec) {
    const embeddedItem = cartState.find(i => i.id === productSpec.id);
    if (embeddedItem) {
      embeddedItem.qty += 1;
    } else {
      cartState.push({
        id: productSpec.id,
        title: productSpec.title,
        price: productSpec.price,
        meta: productSpec.meta,
        img: productSpec.img,
        qty: 1
      });
    }
    
    syncCartState();
    triggerPillBumpAnimation();
  }

  function updateQuantity(id, adjustment) {
    const targetItem = cartState.find(i => i.id === id);
    if (!targetItem) return;

    targetItem.qty += adjustment;
    if (targetItem.qty <= 0) {
      cartState = cartState.filter(i => i.id !== id);
    }
    
    syncCartState();
  }

  function removeCartItem(id) {
    cartState = cartState.filter(i => i.id !== id);
    syncCartState();
  }

  function triggerPillBumpAnimation() {
    cartPill.classList.add('bump');
    setTimeout(() => cartPill.classList.remove('bump'), 220);
  }

  function syncCartState() {
    const totalCount = cartState.reduce((acc, curr) => acc + curr.qty, 0);
    cartCount.textContent = totalCount;
    cartDrawerCount.textContent = totalCount;

    const subtotal = cartState.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    cartSubtotalAmount.textContent = `$${subtotal.toFixed(2)}`;

    if (cartState.length === 0) {
      cartDrawerItems.innerHTML = `<p class="empty-cart-text">Your shopping bag is completely empty.</p>`;
      checkoutBtn.disabled = true;
    } else {
      checkoutBtn.disabled = false;
      cartDrawerItems.innerHTML = cartState.map(item => `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.img}" alt="${item.title}">
          <div class="cart-item-details">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-meta">${item.meta}</div>
            <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
            <div class="cart-item-qty">
              <button class="qty-btn dec-qty" data-id="${item.id}">&minus;</button>
              <span style="font-family: var(--font-mono); font-size: 14px;">${item.qty}</span>
              <button class="qty-btn inc-qty" data-id="${item.id}">&plus;</button>
            </div>
          </div>
          <span class="cart-item-remove" data-id="${item.id}">Remove</span>
        </div>
      `).join('');
      
      bindCartItemActions();
    }
  }

  function bindCartItemActions() {
    cartDrawerItems.querySelectorAll('.dec-qty').forEach(b => {
      b.addEventListener('click', function() { updateQuantity(this.getAttribute('data-id'), -1); });
    });
    cartDrawerItems.querySelectorAll('.inc-qty').forEach(b => {
      b.addEventListener('click', function() { updateQuantity(this.getAttribute('data-id'), 1); });
    });
    cartDrawerItems.querySelectorAll('.cart-item-remove').forEach(b => {
      b.addEventListener('click', function() { removeCartItem(this.getAttribute('data-id')); });
    });
  }

  function setupCartEventListeners() {
    cartPill.addEventListener('click', () => toggleCartDrawer(true));
    closeCartBtn.addEventListener('click', () => toggleCartDrawer(false));
    cartOverlay.addEventListener('click', () => toggleCartDrawer(false));

    checkoutBtn.addEventListener('click', function () {
      toggleCartDrawer(false);
      checkoutModal.classList.add('open');
    });

    modalCloseBtn.addEventListener('click', function () {
      checkoutModal.classList.remove('open');
      cartState = [];
      syncCartState();
    });
  }

  function renderTestimonialApp() {
    if (!testimonialContainer) return;
    let index = 0;
    let switchInterval;

    function render() {
      const review = REVIEWS[index];
      testimonialContainer.innerHTML = `
        <div class="testi-wrap">
          <p class="testi-quote">“${review.quote}”</p>
          <p class="testi-name">${review.name}</p>
          <p class="testi-role">${review.role}</p>
          <div class="testi-dots">
            ${REVIEWS.map((_, i) => `<button class="dot ${i === index ? 'active' : ''}" data-idx="${i}" aria-label="Show review ${i + 1}"></button>`).join('')}
          </div>
        </div>
      `;

      testimonialContainer.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', function () {
          clearInterval(switchInterval);
          index = parseInt(this.getAttribute('data-idx'), 10);
          render();
          startTimer();
        });
      });
    }

    function startTimer() {
      switchInterval = setInterval(() => {
        index = (index + 1) % REVIEWS.length;
        render();
      }, 5500);
    }

    render();
    startTimer();
  }

  function renderContactApp() {
    if (!contactContainer) return;

    contactContainer.innerHTML = `
      <div class="contact-section">
        <div class="contact-left">
          <p class="eyebrow">We're here to help</p>
          <h2>Need help finding your perfect shade?</h2>
          <p class="contact-text">
            Whether you're looking for the right foundation,
            need help choosing a product, or have questions
            about your order, our beauty experts are ready
            to assist.
          </p>
          <div class="contact-info">
            <div class="info-card">
              <div class="icon">📧</div>
              <div>
                <h4>Email</h4>
                <span>support@tintlab.com</span>
              </div>
            </div>
            <div class="info-card">
              <div class="icon">📞</div>
              <div>
                <h4>Phone</h4>
                <span>+1 (800) 555-2417</span>
              </div>
            </div>
            <div class="info-card">
              <div class="icon">📍</div>
              <div>
                <h4>Address</h4>
                <span>Los Angeles, California</span>
              </div>
            </div>
            <div class="info-card">
              <div class="icon">🕒</div>
              <div>
                <h4>Business Hours</h4>
                <span>Mon – Fri • 9AM – 6PM</span>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-right">
          <form id="contactForm" class="contact-form">
            <div class="input-group">
              <label>Name</label>
              <input type="text" id="contactName" required placeholder="Your full name">
            </div>
            <div class="input-group">
              <label>Email</label>
              <input type="email" id="contactEmail" required placeholder="name@example.com">
            </div>
            <div class="input-group">
              <label>Subject</label>
              <input type="text" id="contactSubject" placeholder="Subject">
            </div>
            <div class="input-group">
              <label>Message</label>
              <textarea id="contactMessage" rows="6" required placeholder="Tell us about your question..."></textarea>
            </div>
            <button class="btn btn-primary" type="submit">
              Send Message →
            </button>
            <p class="contact-note">
              We'll reply within 24 hours.
            </p>
          </form>
        </div>
      </div>
    `;

    document.getElementById("contactForm").addEventListener("submit", function(e){
      e.preventDefault();
      alert("✅ Thank you! Your message has been sent.");
      this.reset();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLayoutTransitions();
    renderShadeSliderApp();
    renderProductGridApp();
    setupCategoryFiltering();
    setupCartEventListeners();
    renderTestimonialApp();
    renderContactApp();
    syncCartState(); 
  });

})();