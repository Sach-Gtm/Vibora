// Vibora Product Database
const PRODUCTS = [

  // ——— T-SHIRTS 1–10 (Show First) ———
  {
    id: 'tshirt-custom-1',
    name: 'The Eyes Graphic',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t1c1.png',
      'tshirts/t1c2.png',
      'tshirts/t1c3.png'
    ],
    description: 'Intense Chico aesthetic print. Premium fabric with high-quality custom typography and artwork.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 'tshirt-custom-2',
    name: 'Lacoste Tennis Classic',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t2c1.png'
    ],
    description: 'Vintage beige Lacoste Tennis Sport aesthetic. High-quality custom design.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: null,
    inStock: true
  },
  {
    id: 'tshirt-custom-3',
    name: 'Ferrari F1 Edition',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['White', 'Black'],
    images: [
      'tshirts/t3c1.png',
      'tshirts/t3c2.png',
      'tshirts/t3c3.png',
      'tshirts/t3c4.png'
    ],
    description: 'Bold red Ferrari Formula 1 graphic print. Smooth premium fabric for motorsport enthusiasts.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'Trending',
    inStock: true
  },
  {
    id: 'tshirt-custom-4',
    name: 'Supra MK4 Racing',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t4c1.png',
      'tshirts/t4c1.2.png',
      'tshirts/t4c1.3.png'
    ],
    description: 'Minimalist JDM racing aesthetics featuring Supra MK.4 and vintage patches.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'New',
    inStock: true
  },
  {
    id: 'tshirt-custom-5',
    name: 'The Shape of A Soul',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t5c1.png',
      'tshirts/t5c1.2.png',
      'tshirts/t5c1.3.png'
    ],
    description: 'Dark and philosophical aesthetic graphic on premium black fabric.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 'tshirt-custom-6',
    name: 'Om Chakra Vintage',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t6.png',
      'tshirts/t6c1.1.avif',
      'tshirts/t6c1.2.avif'
    ],
    description: 'Spiritual Om symbol with a detailed Sanskrit chakra radial design on a vintage acid wash.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: null,
    inStock: true
  },
  {
    id: 'tshirt-custom-7',
    name: 'Vintage Cherry Print',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t7c1.1.jpg',
      'tshirts/t7c1.2.jpg'
    ],
    description: 'Minimalist retro double cherry graphic on a cream base.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: null,
    inStock: true
  },
  {
    id: 'tshirt-custom-8',
    name: 'Eminem Retro Print',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t8c1.png',
      'tshirts/t8c2.png'
    ],
    description: 'Bold Eminem graphic with pop-art style airplane elements.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'Trending',
    inStock: true
  },
  {
    id: 'tshirt-custom-9',
    name: 'Medusa Collage',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t9c1.png'
    ],
    description: '"Look At Me" Medusa collage artwork printed on premium vintage wash fabric.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: null,
    inStock: true
  },
  {
    id: 'tshirt-custom-10',
    name: 'Skyline Drifter',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t10c1.1.jpg',
      'tshirts/t10c1.2.jpg'
    ],
    description: 'Detailed Skyline JDM car schematic and "Drifter" typography.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'Popular',
    inStock: true
  },

  // ——— NEW ARRIVALS (T-Shirts 11–15) ———
  {
    id: 'tshirt-gothic-spine',
    name: 'Gothic Skeleton Spine',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/tshirtThumbnail.webp'
    ],
    description: 'Dark gothic aesthetic with intricate spine and skull artwork wrapping around.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'New',
    inStock: true
  },
  {
    id: 'tshirt-custom-11',
    name: 'Tshirt 11 — Multi Variant',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Version 1','Version 2','Version 3','Version 4'],
    images: [
      'tshirts/t11v1.png',
      'tshirts/t11v1.2.png',
      'tshirts/t11v2.png',
      'tshirts/t11v2.2.png',
      'tshirts/t11v3.png',
      'tshirts/t11v3.2.png',
      'tshirts/t11v4.png',
      'tshirts/t11v4.2.png',
    ],
    description: 'Available in 4 unique versions. Premium fabric with high-quality custom print.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'New',
    inStock: true
  },
  {
    id: 'tshirt-custom-12',
    name: 'Tshirt 12',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t12v1.jpg',
      'tshirts/t12v2.jpg',
    ],
    description: 'Premium custom graphic tee. High-quality print on smooth, breathable fabric.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'New',
    inStock: true
  },
  {
    id: 'tshirt-custom-13',
    name: 'Tshirt 13',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t13.webp',
    ],
    description: 'Premium custom graphic tee. High-quality print on smooth, breathable fabric.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'New',
    inStock: true
  },
  {
    id: 'tshirt-custom-14',
    name: 'Tshirt 14',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t14.webp',
    ],
    description: 'Premium custom graphic tee. High-quality print on smooth, breathable fabric.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'New',
    inStock: true
  },
  {
    id: 'tshirt-custom-15',
    name: 'Tshirt 15',
    category: 'regular-tshirts',
    subcategory: 'regular',
    price: 449,
    competitorPrice: 599,
    discount: 25,
    sizes: ['S','M','L','XL'],
    colors: ['Black'],
    images: [
      'tshirts/t15.jpg',
    ],
    description: 'Premium custom graphic tee. High-quality print on smooth, breathable fabric.',
    material: '100% Premium Cotton',
    printType: 'DTG Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'New',
    inStock: true
  },

  // ——— SPORTS / GYM WEAR ———
  {
    id: 'sports-dryfit',
    name: 'Dry-Fit Sports Tee',
    category: 'gym-wear',
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
    category: 'gym-wear',
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
    category: 'gym-wear',
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

  // ——— LAB COATS ———
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
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1520113412536-ea36ce84534a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1434389673658-2936b8561dcd?w=800&h=800&fit=crop'
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

  // ——— MUGS ———
  {
    id: 'mug-custom-1',
    name: 'Custom Collection Mug 1',
    category: 'mugs',
    subcategory: 'mugs',
    price: 199,
    competitorPrice: 249,
    discount: 20,
    sizes: null,
    colors: ['White', 'Black'],
    images: ['mugs/m1.png', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1564859228273-274232fdb9f6?w=800&h=800&fit=crop'],
    description: 'Exclusive custom graphic mug. High-quality sublimation print. Perfect for daily use or gifting.',
    material: 'Premium Ceramic, 330ml',
    printType: 'Sublimation Print',
    washCare: 'Dishwasher & Microwave safe.',
    badge: null,
    inStock: true
  },
  {
    id: 'mug-custom-2',
    name: 'Custom Collection Mug 2',
    category: 'mugs',
    subcategory: 'mugs',
    price: 199,
    competitorPrice: 249,
    discount: 20,
    sizes: null,
    colors: ['White', 'Black'],
    images: ['mugs/m2.png', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1564859228273-274232fdb9f6?w=800&h=800&fit=crop'],
    description: 'Exclusive custom graphic mug. High-quality sublimation print. Perfect for daily use or gifting.',
    material: 'Premium Ceramic, 330ml',
    printType: 'Sublimation Print',
    washCare: 'Dishwasher & Microwave safe.',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 'mug-custom-3',
    name: 'Custom Collection Mug 3',
    category: 'mugs',
    subcategory: 'mugs',
    price: 199,
    competitorPrice: 249,
    discount: 20,
    sizes: null,
    colors: ['White', 'Black'],
    images: ['mugs/m3.png', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1564859228273-274232fdb9f6?w=800&h=800&fit=crop'],
    description: 'Exclusive custom graphic mug. High-quality sublimation print. Perfect for daily use or gifting.',
    material: 'Premium Ceramic, 330ml',
    printType: 'Sublimation Print',
    washCare: 'Dishwasher & Microwave safe.',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 'mug-custom-4',
    name: 'Custom Collection Mug 4',
    category: 'mugs',
    subcategory: 'mugs',
    price: 199,
    competitorPrice: 249,
    discount: 20,
    sizes: null,
    colors: ['White', 'Black'],
    images: ['mugs/m4.webp', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1564859228273-274232fdb9f6?w=800&h=800&fit=crop'],
    description: 'Exclusive custom graphic mug. High-quality sublimation print. Perfect for daily use or gifting.',
    material: 'Premium Ceramic, 330ml',
    printType: 'Sublimation Print',
    washCare: 'Dishwasher & Microwave safe.',
    badge: null,
    inStock: true
  },
  {
    id: 'mug-custom-5',
    name: 'Custom Collection Mug 5',
    category: 'mugs',
    subcategory: 'mugs',
    price: 199,
    competitorPrice: 249,
    discount: 20,
    sizes: null,
    colors: ['White', 'Black'],
    images: ['mugs/m5.webp', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1564859228273-274232fdb9f6?w=800&h=800&fit=crop'],
    description: 'Exclusive custom graphic mug. High-quality sublimation print. Perfect for daily use or gifting.',
    material: 'Premium Ceramic, 330ml',
    printType: 'Sublimation Print',
    washCare: 'Dishwasher & Microwave safe.',
    badge: null,
    inStock: true
  },
  {
    id: 'mug-custom-6',
    name: 'Custom Collection Mug 6',
    category: 'mugs',
    subcategory: 'mugs',
    price: 199,
    competitorPrice: 249,
    discount: 20,
    sizes: null,
    colors: ['White', 'Black'],
    images: ['mugs/m6.png', 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1564859228273-274232fdb9f6?w=800&h=800&fit=crop'],
    description: 'Exclusive custom graphic mug. High-quality sublimation print. Perfect for daily use or gifting.',
    material: 'Premium Ceramic, 330ml',
    printType: 'Sublimation Print',
    washCare: 'Dishwasher & Microwave safe.',
    badge: null,
    inStock: true
  },
  {
    id: 'mug-ceramic',
    name: 'Custom Ceramic Mug (330ml)',
    category: 'mugs',
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
    badge: null,
    inStock: true
  },

  // ——— BOTTLES ———
  {
    id: 'bottle-sipper',
    name: 'Custom Sipper Bottle (500ml)',
    category: 'bottles',
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

  // ——— OTHERS / ACCESSORIES ———
  {
    id: 'mousepad-large',
    name: 'Custom Mouse Pad (Large)',
    category: 'others',
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
    category: 'others',
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

  // ——— CORPORATE BOXES ———
  {
    id: 'corp-vibora-kit',
    name: 'Vibora Premium Corporate Kit',
    category: 'corporate-boxes',
    subcategory: 'corporate',
    price: 1499,
    competitorPrice: 1999,
    discount: 25,
    sizes: null,
    colors: ['Custom Branding'],
    images: [
      'cooperate/combo2.png'
    ],
    description: 'Vibora\'s flagship corporate kit — premium black gift box with branded T-shirt, mug, diary, pen, ID card & lanyard. Custom logo on every piece.',
    material: 'Assorted premium materials',
    printType: 'Mixed: DTG, Sublimation, Engraving',
    washCare: 'See individual item care instructions.',
    badge: 'Premium Box',
    inStock: true
  },
  {
    id: 'corp-branding-kit',
    name: 'Corporate Branding Kit (6-in-1)',
    category: 'corporate-boxes',
    subcategory: 'corporate',
    price: 1199,
    competitorPrice: 1599,
    discount: 25,
    sizes: null,
    colors: ['Custom Branding'],
    images: [
      'cooperate/combo1.png'
    ],
    description: 'Complete branded office kit: steel sipper bottle, cap, tote bag, spiral diary, USB drive & ID card lanyard — all printed with your company logo.',
    material: 'Assorted premium materials',
    printType: 'Mixed: UV Print, Sublimation',
    washCare: 'See individual item care instructions.',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 'corp-hamper-kit',
    name: 'Corporate Hamper Kit (5-in-1)',
    category: 'corporate-boxes',
    subcategory: 'corporate',
    price: 999,
    competitorPrice: 1299,
    discount: 23,
    sizes: null,
    colors: ['Custom Branding'],
    images: [
      'cooperate/combo3.webp'
    ],
    description: 'Premium corporate hamper: custom polo T-shirt, jute tote bag, branded diary, steel tea-coffee mug & temperature bottle — all with your logo.',
    material: 'Assorted premium materials',
    printType: 'Mixed: Screen Print, Sublimation, Engraving',
    washCare: 'See individual item care instructions.',
    badge: 'Popular',
    inStock: true
  },
  {
    id: 'corp-branded-tshirt',
    name: 'Corporate Branded T-Shirt',
    category: 'corporate-boxes',
    subcategory: 'corporate',
    price: 349,
    competitorPrice: 499,
    discount: 30,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy Blue', 'Black', 'White', 'Grey'],
    images: [
      'cooperate/singleCustomized.png'
    ],
    description: 'Premium branded corporate T-shirt with your company logo, name & designation. Bulk order friendly — minimum 50 units. Available in multiple colors.',
    material: '100% Premium Cotton, 200 GSM',
    printType: 'DTG Print / Screen Print',
    washCare: 'Machine wash cold. Do not iron on print.',
    badge: 'Bulk Ready',
    inStock: true
  },
  {
    id: 'corp-combo-avif',
    name: 'Custom Corporate Combo Pack',
    category: 'corporate-boxes',
    subcategory: 'corporate',
    price: 799,
    competitorPrice: 1099,
    discount: 27,
    sizes: null,
    colors: ['Custom Branding'],
    images: [
      'cooperate/combo 8.avif'
    ],
    description: 'Corporate combo pack with your brand identity printed across multiple merchandise items. Perfect for events, onboarding kits & client gifting.',
    material: 'Assorted premium materials',
    printType: 'Mixed: UV, Sublimation',
    washCare: 'See individual item care instructions.',
    badge: 'New',
    inStock: true
  },
  {
    id: 'custom-acrylic-award',
    name: 'Custom Acrylic Award / Trophy',
    category: 'others',
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
  { id: 'regular-tshirts', name: 'Regular T-Shirts', icon: '👕', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop' },
  { id: 'gym-wear', name: 'Gym Wear Tees', icon: '🏋️', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop' },
  { id: 'labcoats', name: 'Lab Coats', icon: '🥼', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop' },
  { id: 'mugs', name: 'Custom Mugs', icon: '☕', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=400&fit=crop' },
  { id: 'bottles', name: 'Sipper Bottles', icon: '🧴', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=400&fit=crop' },
  { id: 'corporate-boxes', name: 'Corporate Boxes', icon: '🎁', image: 'https://images.unsplash.com/photo-1579541814924-49fef1ac1ebb?w=600&h=400&fit=crop' },
  { id: 'others', name: 'Other Accessories', icon: '✨', image: 'https://images.unsplash.com/photo-1563297007-0686b7003af7?w=600&h=400&fit=crop' }
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
