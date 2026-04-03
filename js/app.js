// Vibora App — Global Utilities

// ——— Scroll Animations (Intersection Observer) ———
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Added .visible for CSS
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right').forEach(el => observer.observe(el));

  // Parallax Effect for Hero Images
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const leftImg = document.querySelector('.hero-image-left');
    const rightImg = document.querySelector('.hero-image-right');
    if (leftImg) leftImg.style.transform = `translateY(calc(-50% + ${scrolled * 0.15}px))`;
    if (rightImg) rightImg.style.transform = `translateY(calc(-50% - ${scrolled * 0.15}px))`;
  });
}

// ——— Lazy Load Images ———
function initLazyLoad() {
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        img.classList.add('loaded');
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });
  document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
}

// ——— Mobile Menu ———
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!hamburger || !drawer) return;
  hamburger.addEventListener('click', () => {
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  });
  if (overlay) overlay.addEventListener('click', () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  });
  document.querySelectorAll('#mobile-drawer a').forEach(a => a.addEventListener('click', () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

// ——— Search ———
function initSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  if (!searchBtn || !searchOverlay) return;
  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    setTimeout(() => searchInput && searchInput.focus(), 100);
  });
  if (searchClose) searchClose.addEventListener('click', () => searchOverlay.classList.remove('open'));
  searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) searchOverlay.classList.remove('open'); });
  if (searchInput) searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!searchResults) return;
    if (q.length < 2) { searchResults.innerHTML = '<p class="search-hint">Type at least 2 characters...</p>'; return; }
    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
    if (results.length === 0) {
      searchResults.innerHTML = '<p class="search-hint">No products found.</p>';
    } else {
      searchResults.innerHTML = results.map(p => `
        <a href="product.html?id=${p.id}" class="search-result-item">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
          <div>
            <h4>${p.name}</h4>
            <span class="price">${formatPrice(p.price)}</span>
          </div>
        </a>
      `).join('');
    }
  });
}

// ——— Sticky Header ———
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const curr = window.scrollY;
    if (curr > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = curr;
  });
}

// ——— Size Guide Modal ———
function openSizeGuide() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) { modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeSizeGuide() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
}

// ——— Product Card Renderer ———
function renderProductCard(product) {
  const isWished = Store.isInWishlist(product.id);
  
  // Consistent pseudo-random rating between 4.0 and 4.7
  const idSum = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const rating = (4.0 + (idSum % 8) / 10).toFixed(1);
  const reviewCount = 45 + (idSum % 213);
  
  const shortNames = {
    tshirts: 'TEE',
    sports: 'SPORT',
    labcoats: 'COAT',
    accessories: 'MERCH',
    awards: 'AWARD'
  };
  let shortCat = shortNames[product.category] || 'ITEM';
  
  // Specific overrides for subcategories
  if (product.id === 'giftbox-corporate' || product.subcategory === 'corporate' && product.category === 'accessories') {
    shortCat = 'GIFT KIT';
  } else if (product.subcategory === 'mugs') {
    shortCat = 'MUG';
  } else if (product.subcategory === 'bottles') {
    shortCat = 'BOTTLE';
  }

  return `
    <div class="product-card fade-up" data-product-id="${product.id}">
      <span style="position: absolute; top: 12px; left: 12px; z-index: 5; background: rgba(0,0,0,0.3); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); color: rgba(255,255,255,0.9); padding: 4px 10px; border-radius: 4px; font-size: 0.65rem; font-weight: 700; font-family: 'Montserrat', sans-serif; letter-spacing: 1.5px; pointer-events: none; border: 1px solid rgba(255,255,255,0.1);">${shortCat}</span>
      <div class="card-glow-bg"></div>
      <a href="product.html?id=${product.id}" class="card-click-area" aria-label="View Product"></a>
      
      <div class="product-img-wrapper">
        <img data-src="${product.images[0]}" alt="${product.name}" class="product-img" loading="lazy"
             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'%3E%3Crect fill='%231a1a1a' width='800' height='1000'/%3E%3C/svg%3E">
      </div>
      
      <button class="wishlist-btn ${isWished ? 'active' : ''}" onclick="event.preventDefault(); event.stopPropagation(); toggleWish('${product.id}', this)" aria-label="Add to wishlist">
        ${isWished ? '❤️' : '🤍'}
      </button>

      <div class="product-info-glass minimal-info">
        <h3 class="product-category" style="font-family:'Montserrat', sans-serif; font-size:0.85rem; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#fff; margin:0 0 8px 0; text-shadow:0 2px 4px rgba(0,0,0,0.5);">${product.name}</h3>
        <div class="product-rating">
          <svg viewBox="0 0 24 24" width="12" height="12"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ${rating} <span>(${reviewCount} reviews)</span>
        </div>
      </div>
    </div>
  `;
}

function toggleWish(productId, btn) {
  const active = Store.toggleWishlist(productId);
  if (btn) {
    btn.classList.toggle('active', active);
    btn.innerHTML = active ? '❤️' : '🤍';
  }
  // Update all matching buttons on the page
  document.querySelectorAll(`.wishlist-btn`).forEach(b => {
    const card = b.closest('[data-product-id]');
    if (card && card.dataset.productId === productId) {
      b.classList.toggle('active', active);
      b.innerHTML = active ? '❤️' : '🤍';
    }
  });
}

function quickAddToCart(productId) {
  const p = getProductById(productId);
  if (!p) return;
  const size = p.sizes ? p.sizes[Math.floor(p.sizes.length / 2)] : null; // default to medium
  const color = p.colors ? p.colors[0] : null;
  Store.addToCart(productId, size, color, 1);
}

// ——— Theme Toggle ———
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" style="vertical-align: middle;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const sunIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" style="vertical-align: middle;"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;

  const updateIcon = () => {
    toggleBtn.innerHTML = document.documentElement.classList.contains('light-mode') ? sunIcon : moonIcon;
  };
  
  // Initial set
  updateIcon();

  toggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light-mode');
    localStorage.setItem('vibora_theme', isLight ? 'light' : 'dark');
    updateIcon();
  });
}

// ——— Sliding Nav Indicator ———
function initNavSlider() {
  const nav = document.querySelector('.nav-links');
  if (!nav) return;
  const links = nav.querySelectorAll('a');
  const activeLink = nav.querySelector('a.active');
  if (!activeLink) return;

  // Create slider element
  const slider = document.createElement('div');
  slider.className = 'nav-slider';
  nav.appendChild(slider);

  // Get active link index
  const activeIndex = Array.from(links).indexOf(activeLink);
  const prevIndex = parseInt(sessionStorage.getItem('vibora_nav_index') || activeIndex);
  sessionStorage.setItem('vibora_nav_index', activeIndex);

  function positionSlider(link) {
    const rect = link.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    slider.style.left = (rect.left - navRect.left) + 'px';
    slider.style.width = rect.width + 'px';
  }

  // Cross-page slide animation
  if (prevIndex !== activeIndex && links[prevIndex]) {
    // 1. Hide slider, disable transitions, position at OLD tab
    slider.style.opacity = '0';
    slider.style.transition = 'none';
    positionSlider(links[prevIndex]);

    // 2. Wait for paint, then enable transitions and slide to NEW tab
    setTimeout(() => {
      slider.style.opacity = '1';
      slider.style.transition = 'left 0.45s cubic-bezier(0.4, 0, 0.2, 1), width 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          positionSlider(activeLink);
        });
      });
    }, 30);
  } else {
    positionSlider(activeLink);
  }

  // Hover: slide to hovered link
  links.forEach(link => {
    link.addEventListener('mouseenter', () => positionSlider(link));
  });
  nav.addEventListener('mouseleave', () => positionSlider(activeLink));

  // Save index on click for cross-page animation
  links.forEach((link, i) => {
    link.addEventListener('click', () => {
      sessionStorage.setItem('vibora_nav_index', i);
    });
  });
}

// ——— Init All ———
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initSearch();
  initScrollAnimations();
  initLazyLoad();
  initThemeToggle();
  initNavSlider();
});
