// Vibora Store — Cart, Wishlist, Recently Viewed (localStorage)

const Store = {
  // ——— Cart ———
  getCart() {
    return JSON.parse(localStorage.getItem('vibora_cart') || '[]');
  },
  saveCart(cart) {
    localStorage.setItem('vibora_cart', JSON.stringify(cart));
    this.updateBadges();
  },
  addToCart(productId, size, color, qty = 1, customText = '') {
    const cart = this.getCart();
    const existing = cart.find(i => i.productId === productId && i.size === size && i.color === color && i.customText === customText);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ productId, size, color, qty, customText });
    }
    this.saveCart(cart);
    Toast.show('Added to cart! 🛒');
  },
  removeFromCart(index) {
    const cart = this.getCart();
    cart.splice(index, 1);
    this.saveCart(cart);
  },
  updateCartQty(index, qty) {
    const cart = this.getCart();
    if (qty <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].qty = qty;
    }
    this.saveCart(cart);
  },
  getCartTotal() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => {
      const product = getProductById(item.productId);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  },
  getCartCount() {
    return this.getCart().reduce((sum, item) => sum + item.qty, 0);
  },
  clearCart() {
    localStorage.removeItem('vibora_cart');
    this.updateBadges();
  },
  composeCartWhatsApp() {
    const cart = this.getCart();
    if (cart.length === 0) return '';
    let msg = 'Hi Vibora! I want to order:\n';
    cart.forEach((item, i) => {
      const p = getProductById(item.productId);
      if (!p) return;
      const line = `${i + 1}. ${p.name} x${item.qty}`;
      const details = [];
      if (item.size) details.push(`Size: ${item.size}`);
      if (item.color) details.push(`Color: ${item.color}`);
      if (item.customText) details.push(`Custom: "${item.customText}"`);
      msg += line + (details.length ? ` (${details.join(', ')})` : '') + ` — ${formatPrice(p.price * item.qty)}\n`;
    });
    msg += `\nTotal: ${formatPrice(this.getCartTotal())}\nPlease confirm availability and payment details.`;
    return msg;
  },

  // ——— Wishlist ———
  getWishlist() {
    return JSON.parse(localStorage.getItem('vibora_wishlist') || '[]');
  },
  saveWishlist(wl) {
    localStorage.setItem('vibora_wishlist', JSON.stringify(wl));
    this.updateBadges();
  },
  toggleWishlist(productId) {
    const wl = this.getWishlist();
    const idx = wl.indexOf(productId);
    if (idx > -1) {
      wl.splice(idx, 1);
      Toast.show('Removed from wishlist');
    } else {
      wl.push(productId);
      Toast.show('Added to wishlist! ♡');
    }
    this.saveWishlist(wl);
    return wl.includes(productId);
  },
  isInWishlist(productId) {
    return this.getWishlist().includes(productId);
  },
  getWishlistCount() {
    return this.getWishlist().length;
  },

  // ——— Recently Viewed ———
  getRecentlyViewed() {
    return JSON.parse(localStorage.getItem('vibora_recent') || '[]');
  },
  addRecentlyViewed(productId) {
    let recent = this.getRecentlyViewed();
    recent = recent.filter(id => id !== productId);
    recent.unshift(productId);
    if (recent.length > 8) recent = recent.slice(0, 8);
    localStorage.setItem('vibora_recent', JSON.stringify(recent));
  },

  // ——— Ratings ———
  getRatings() {
    return JSON.parse(localStorage.getItem('vibora_ratings') || '[]');
  },
  addRating(name, stars, comment) {
    const ratings = this.getRatings();
    ratings.push({ name, stars, comment, date: new Date().toISOString() });
    localStorage.setItem('vibora_ratings', JSON.stringify(ratings));
    return ratings;
  },

  // ——— Badge Updates ———
  updateBadges() {
    const cartBadge = document.getElementById('cart-badge');
    const wishBadge = document.getElementById('wishlist-badge');
    const cartCount = this.getCartCount();
    const wishCount = this.getWishlistCount();
    if (cartBadge) {
      cartBadge.textContent = cartCount;
      cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
    }
    if (wishBadge) {
      wishBadge.textContent = wishCount;
      wishBadge.style.display = wishCount > 0 ? 'flex' : 'none';
    }
  }
};

// ——— Toast Notification System ———
const Toast = {
  show(message, duration = 2500) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

// Init badges on page load
document.addEventListener('DOMContentLoaded', () => Store.updateBadges());
