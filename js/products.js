// Vibora Product Database
const PRODUCTS = [
  // T-Shirts (Regular)
  {
    id: 'tshirt-roundneck',
    name: 'Classic Round Neck Tee',
    category: 'tshirts',
    subcategory: 'regular',
    price: 199,
    competitorPrice: 220,
    discount: 10,
    sizes: ['XS','S','M','L','XL','XXL'],
    colors: ['Black','White','Navy','Maroon','Grey'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop'
    ],
    description: 'Premium 100% combed cotton round neck t-shirt. Perfect for custom prints and embroidery. Bio-washed for extra softness.',
    material: '100% Combed Cotton, 180 GSM',
    printType: 'DTG / Screen Print / Embroidery',
    washCare: 'Machine wash cold. Do not bleach. Tumble dry low. Iron inside out.',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 'tshirt-oversized',
    name: 'Premium Oversized Tee',
    category: 'tshirts',
    subcategory: 'regular',
    price: 249,
    competitorPrice: 280,
    discount: 11,
    sizes: ['S','M','L','XL','XXL'],
    colors: ['Black','White','Sage Green','Lavender','Cream'],
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&h=800&fit=crop'
    ],
    description: 'Trendy drop-shoulder oversized t-shirt. Streetwear-inspired loose fit with premium fabric. Ideal for bold prints.',
    material: '100% Cotton, 220 GSM Heavy',
    printType: 'DTG / Screen Print / Puff Print',
    washCare: 'Machine wash cold. Do not bleach. Hang dry recommended.',
    badge: 'Trending',
    inStock: true
  },
  {
    id: 'tshirt-polo',
    name: 'Polo T-Shirt',
    category: 'tshirts',
    subcategory: 'regular',
    price: 289,
    competitorPrice: 330,
    discount: 12,
    sizes: ['S','M','L','XL','XXL'],
    colors: ['Black','White','Navy','Royal Blue','Red'],
    images: [
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1625910513413-5fc42a80d7a3?w=800&h=800&fit=crop'
    ],
    description: 'Classic polo t-shirt with ribbed collar and button placket. Perfect for corporate branding and team uniforms.',
    material: 'Cotton-Polyester Blend, 200 GSM',
    printType: 'Embroidery / Screen Print',
    washCare: 'Machine wash cold. Do not bleach. Iron on low.',
    badge: null,
    inStock: true
  },
  {
    id: 'tshirt-fullsleeve',
    name: 'Full Sleeve Tee',
    category: 'tshirts',
    subcategory: 'regular',
    price: 229,
    competitorPrice: 260,
    discount: 12,
    sizes: ['S','M','L','XL','XXL'],
    colors: ['Black','White','Grey','Olive','Burgundy'],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=800&fit=crop'
    ],
    description: 'Comfortable full sleeve t-shirt. Great for layering and custom prints on sleeves and chest.',
    material: '100% Cotton, 190 GSM',
    printType: 'DTG / Screen Print / Embroidery',
    washCare: 'Machine wash cold. Hang dry. Iron inside out.',
    badge: null,
    inStock: true
  },
  // Sports / Gym / Dry-fit
  {
    id: 'sports-dryfit',
    name: 'Dry-Fit Sports Tee',
    category: 'sports',
    subcategory: 'dryfit',
    price: 219,
    competitorPrice: 250,
    discount: 12,
    sizes: ['S','M','L','XL','XXL'],
    colors: ['Black','White','Neon Green','Royal Blue','Red'],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=800&fit=crop'
    ],
    description: 'Moisture-wicking dry-fit sports tee. Lightweight and breathable for intense workouts. Sublimation print compatible.',
    material: '100% Polyester Dry-Fit, 140 GSM',
    printType: 'Sublimation / Heat Transfer',
    washCare: 'Machine wash cold. Do not use fabric softener. Hang dry.',
    badge: 'Popular',
    inStock: true
  },
  {
    id: 'sports-stringer',
    name: 'Gym Stringer Tee',
    category: 'sports',
    subcategory: 'gym',
    price: 199,
    competitorPrice: 230,
    discount: 13,
    sizes: ['S','M','L','XL','XXL'],
    colors: ['Black','White','Red','Grey'],
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=800&fit=crop'
    ],
    description: 'Gym stringer vest with deep armholes for maximum mobility. Perfect for gym branding and fitness events.',
    material: 'Cotton-Spandex Blend, 160 GSM',
    printType: 'Screen Print / DTG',
    washCare: 'Machine wash cold. Do not bleach. Hang dry.',
    badge: null,
    inStock: true
  },
  {
    id: 'sports-jersey',
    name: 'Sports Jersey (Sublimation)',
    category: 'sports',
    subcategory: 'jersey',
    price: 299,
    competitorPrice: 350,
    discount: 15,
    sizes: ['S','M','L','XL','XXL'],
    colors: ['Custom Design'],
    images: [
      'https://images.unsplash.com/photo-1580089595767-98745d7025c5?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1624280157150-4d1ed8632989?w=800&h=800&fit=crop'
    ],
    description: 'Full sublimation sports jersey. Edge-to-edge custom printing with vibrant colors. Perfect for teams and tournaments.',
    material: '100% Polyester Mesh, 150 GSM',
    printType: 'Full Sublimation',
    washCare: 'Machine wash cold. Do not iron on print. Hang dry.',
    badge: 'Sale',
    inStock: true
  },
  // Lab Coats
  {
    id: 'labcoat-standard',
    name: 'Standard White Lab Coat',
    category: 'labcoats',
    subcategory: 'standard',
    price: 449,
    competitorPrice: 520,
    discount: 14,
    sizes: ['S','M','L','XL','XXL'],
    colors: ['White'],
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&h=800&fit=crop'
    ],
    description: 'Professional white lab coat with chest and side pockets. Ideal for medical, dental, and laboratory use with custom name embroidery.',
    material: 'Poly-Cotton Twill, 200 GSM',
    printType: 'Embroidery / Screen Print',
    washCare: 'Machine wash warm. Bleach safe. Tumble dry. Iron on medium.',
    badge: null,
    inStock: true
  },
  {
    id: 'labcoat-embroidered',
    name: 'Embroidered Lab Coat',
    category: 'labcoats',
    subcategory: 'premium',
    price: 549,
    competitorPrice: 650,
    discount: 16,
    sizes: ['S','M','L','XL','XXL'],
    colors: ['White','Light Blue'],
    images: [
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop'
    ],
    description: 'Premium lab coat with included custom embroidery (name + designation). High-quality fabric with snap buttons and reinforced pockets.',
    material: 'Premium Poly-Cotton, 220 GSM',
    printType: 'Custom Embroidery Included',
    washCare: 'Machine wash warm. Bleach safe. Tumble dry. Iron on medium.',
    badge: 'Premium',
    inStock: true
  },
  // Accessories & Gifts
  {
    id: 'mug-ceramic',
    name: 'Custom Ceramic Mug (330ml)',
    category: 'accessories',
    subcategory: 'mugs',
    price: 149,
    competitorPrice: 180,
    discount: 17,
    sizes: null,
    colors: ['White','Black','Red Inside','Blue Inside'],
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=800&fit=crop'
    ],
    description: 'Premium ceramic coffee mug with vibrant sublimation print. Dishwasher safe. Perfect for corporate gifts and personal use.',
    material: 'Grade A Ceramic, 330ml',
    printType: 'Sublimation Print',
    washCare: 'Dishwasher safe. Microwave safe.',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 'bottle-sipper',
    name: 'Custom Sipper Bottle (500ml)',
    category: 'accessories',
    subcategory: 'bottles',
    price: 249,
    competitorPrice: 299,
    discount: 17,
    sizes: null,
    colors: ['Black','White','Silver','Blue'],
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=800&fit=crop'
    ],
    description: 'Stainless steel sipper bottle with custom UV printing. Keeps beverages hot 12hrs / cold 24hrs. Corporate favorite.',
    material: 'Stainless Steel 304, Double Wall, 500ml',
    printType: 'UV Print / Laser Engraving',
    washCare: 'Hand wash recommended. Do not microwave.',
    badge: null,
    inStock: true
  },
  {
    id: 'mousepad-large',
    name: 'Custom Mouse Pad (Large)',
    category: 'accessories',
    subcategory: 'mousepads',
    price: 179,
    competitorPrice: 220,
    discount: 19,
    sizes: null,
    colors: ['Custom Design'],
    images: [
      'https://images.unsplash.com/photo-1563297007-0686b7003af7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1616353071855-2c045c4458ae?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&h=800&fit=crop'
    ],
    description: 'Extra-large custom mouse pad with full-surface sublimation print. Anti-slip rubber base. Perfect desk branding.',
    material: 'Neoprene + Polyester Top, 3mm thick, 30x80cm',
    printType: 'Full Sublimation',
    washCare: 'Wipe clean with damp cloth.',
    badge: null,
    inStock: true
  },
  {
    id: 'keychain-custom',
    name: 'Custom Key Chain',
    category: 'accessories',
    subcategory: 'keychains',
    price: 89,
    competitorPrice: 110,
    discount: 19,
    sizes: null,
    colors: ['Silver','Gold','Black'],
    images: [
      'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1585634917202-6f93bce3b3e0?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1575891568199-bfda40835e08?w=800&h=800&fit=crop'
    ],
    description: 'Custom metal keychain with logo engraving or UV print. Premium weight with a glossy finish. Great as event giveaways.',
    material: 'Zinc Alloy / Acrylic',
    printType: 'UV Print / Laser Engraving',
    washCare: 'Wipe clean with soft cloth.',
    badge: null,
    inStock: true
  },
  {
    id: 'giftbox-corporate',
    name: 'Corporate Gift Box (Set of 5)',
    category: 'accessories',
    subcategory: 'corporate',
    price: 999,
    competitorPrice: 1200,
    discount: 17,
    sizes: null,
    colors: ['Custom Branding'],
    images: [
      'https://www.adornscustomgifts.com/wp-content/uploads/2024/09/Personalized-Corporate-Diary-Combo-Adorns-16-600x600.jpg',
      'https://www.adornscustomgifts.com/wp-content/uploads/2024/09/Personalized-Corporate-Diary-Combo-Adorns-6-455x455.jpg',
      'https://deq64r0ss2hgl.cloudfront.net/images/product/listing_grid/169045540790436.jpg'
    ],
    description: 'Premium corporate gift box containing customized premium essentials like Diaries, Pens, Tumblers, and more — all with your company branding.',
    material: 'Assorted premium materials',
    printType: 'Mixed: UV, Engraving',
    washCare: 'See individual item care instructions.',
    badge: 'Premium Box',
    inStock: true
  },
  {
    id: 'custom-acrylic-award',
    name: 'Custom Acrylic Award / Trophy',
    category: 'awards',
    subcategory: 'corporate',
    price: 499,
    competitorPrice: 699,
    discount: 28,
    sizes: ['Standard', 'Large'],
    colors: ['Clear'],
    images: [
      'https://images.unsplash.com/photo-1579541814924-49fef1ac1ebb?w=800&h=800&fit=crop',
      'https://plus.unsplash.com/premium_photo-1663100237732-c1f96bbfd15c?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1533227260815-48fa1bc16441?w=800&h=800&fit=crop'
    ],
    description: 'High-quality clear acrylic award. Fully customizable laser engraving or UV print for your corporate logos, text, and employee names. Comes with an elegant premium gift box.',
    material: '8mm Clear Acrylic',
    printType: 'Laser Engraved / UV Printed',
    washCare: 'Wipe with microfiber cloth.',
    badge: 'NEW',
    inStock: true
  }
];

// Category definitions
const CATEGORIES = [
  { id: 'tshirts', name: 'T-Shirts', icon: '👕', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop' },
  { id: 'sports', name: 'Sports Tees', icon: '🏃', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop' },
  { id: 'labcoats', name: 'Lab Coats', icon: '🥼', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop' },
  { id: 'accessories', name: 'Accessories', icon: '🎁', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=400&fit=crop' },
  { id: 'awards', name: 'Custom Awards', icon: '🏆', image: 'https://images.unsplash.com/photo-1579541814924-49fef1ac1ebb?w=600&h=400&fit=crop' }
];

// WhatsApp number
const WHATSAPP_NUMBER = '919818549572';

function getWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
  return PRODUCTS.filter(p => p.category === category);
}

function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}
