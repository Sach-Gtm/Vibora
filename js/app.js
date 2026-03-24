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
  return `
    <div class="product-card fade-up" data-product-id="${product.id}">
      ${product.badge ? `<span class="product-badge badge-${product.badge.toLowerCase().replace(/\s/g,'')}">${product.badge}</span>` : ''}
      <div class="product-image-wrap">
        <a href="product.html?id=${product.id}">
          <img data-src="${product.images[0]}" alt="${product.name}" class="product-img" loading="lazy"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Crect fill='%231a1a1a' width='800' height='800'/%3E%3C/svg%3E">
        </a>
        <button class="wishlist-btn ${isWished ? 'active' : ''}" onclick="toggleWish('${product.id}', this)" aria-label="Add to wishlist">
          ${isWished ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-info">
        <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
        <div class="product-pricing">
          <span class="price-current">${formatPrice(product.price)}</span>
          <span class="price-original">${formatPrice(product.competitorPrice)}</span>
          <span class="discount-badge">${product.discount}% OFF</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm" onclick="quickAddToCart('${product.id}')">Add to Cart</button>
          <a href="${getWhatsAppLink('Hi Vibora! I want to order ' + product.name + ' — ' + formatPrice(product.price))}" target="_blank" class="btn btn-whatsapp btn-sm">Buy Now</a>
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

// ——— Init All ———
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initSearch();
  initScrollAnimations();
  initLazyLoad();
  initThemeToggle();
});
