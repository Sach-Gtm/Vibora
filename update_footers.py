import re
import os

files = [
    'about.html', 'cart.html', 'contact.html', 'corporate.html', 
    'product.html', 'wishlist.html'
]
base_dir = r'c:\Users\ASUS\Downloads\EYESONIC_AI-main\Vibora'

mega_footer = """  <!-- Mega Footer -->
  <footer class="mega-footer">
    <div class="footer-island-wrapper">
      <div class="footer-island fade-up">
        <div class="island-brand">
          <div class="logo">VIBOR<span class="logo-accent">A</span></div>
          <p>India's boldest custom merch brand. Premium quality at unbeatable prices.</p>
        </div>
        <div class="island-links">
          <div class="link-group">
            <span class="group-title">SHOP</span>
            <a href="shop.html">All Products</a>
            <a href="corporate.html">Corporate Orders</a>
          </div>
          <div class="link-group">
            <span class="group-title">COMPANY</span>
            <a href="about.html">About Us</a>
            <a href="contact.html">Contact Us</a>
          </div>
          <div class="link-group">
            <span class="group-title">CONNECT</span>
            <a href="https://wa.me/919818549572" target="_blank">WhatsApp</a>
            <a href="https://instagram.com/viboraonline.in" target="_blank">Instagram</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mega-text-container">
      <svg class="mega-svg-text">
        <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" class="mega-text">
          VIBOR<tspan class="mega-accent">A</tspan>.
        </text>
      </svg>
    </div>
    <div class="footer-sub-bar">
      <span>Made with ❤️ in India · © 2026 Vibora. All rights reserved.</span>
    </div>
  </footer>

  <!-- WhatsApp Float -->
  <div class="whatsapp-float">
    <a href="https://wa.me/919818549572?text=Hi%20Vibora!%20I%20have%20a%20question" target="_blank" aria-label="WhatsApp Chat">
      <span class="wa-icon">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
      </span>
      <span class="wa-text">Chat with us</span>
    </a>
  </div>"""

for f_name in files:
    f_path = os.path.join(base_dir, f_name)
    with open(f_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to match the old footer and whatsapp float
    # We look for "<!-- Footer -->" up to the script tag
    pattern = r'  <!-- Footer -->\s*<footer class="site-footer">.*?</div>\s*</footer>\s*(<div class="whatsapp-float">.*?</div>\s*)?'
    # Or some files don't have <!-- Footer --> comment exactly like this, let's cover both:
    pattern2 = r'\s*<footer class="site-footer">.*?</footer>\s*(<div class="whatsapp-float">.*?</div>\s*)?'
    
    if re.search(pattern2, content, re.DOTALL):
        content = re.sub(pattern2, "\n" + mega_footer + "\n", content, flags=re.DOTALL)
        with open(f_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {f_name}")
    else:
        print(f"Skipped {f_name} - no match")
