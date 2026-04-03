import re

file_path = r'c:\Users\ASUS\Downloads\EYESONIC_AI-main\Vibora\js\products.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace category 'tshirts' with 'regular-tshirts'
content = re.sub(r"category:\s*'tshirts'", r"category: 'regular-tshirts'", content)

# Replace category 'sports' with 'gym-wear'
content = re.sub(r"category:\s*'sports'", r"category: 'gym-wear'", content)

# Mugs
content = re.sub(r"category:\s*'accessories',\s*subcategory:\s*'mugs'", r"category: 'mugs',\n    subcategory: 'mugs'", content)

# Bottles
content = re.sub(r"category:\s*'accessories',\s*subcategory:\s*'bottles'", r"category: 'bottles',\n    subcategory: 'bottles'", content)

# Corporate Box
content = re.sub(r"category:\s*'accessories',\s*subcategory:\s*'corporate'", r"category: 'corporate-boxes',\n    subcategory: 'corporate'", content)

# Others (mousepads, keychains inside accessories)
content = re.sub(r"category:\s*'accessories'", r"category: 'others'", content)
content = re.sub(r"category:\s*'awards'", r"category: 'others'", content)

# Replace CATEGORIES array
old_categories = r"""// Category definitions
const CATEGORIES = \[
  \{ id: 'tshirts'.*?\}
\];"""

new_categories = """// Category definitions
const CATEGORIES = [
  { id: 'regular-tshirts', name: 'Regular T-Shirts', icon: '👕', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop' },
  { id: 'gym-wear', name: 'Gym Wear Tees', icon: '🏋️', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop' },
  { id: 'labcoats', name: 'Lab Coats', icon: '🥼', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop' },
  { id: 'mugs', name: 'Custom Mugs', icon: '☕', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=400&fit=crop' },
  { id: 'bottles', name: 'Sipper Bottles', icon: '🧴', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=400&fit=crop' },
  { id: 'corporate-boxes', name: 'Corporate Boxes', icon: '🎁', image: 'https://images.unsplash.com/photo-1579541814924-49fef1ac1ebb?w=600&h=400&fit=crop' },
  { id: 'others', name: 'Other Accessories', icon: '✨', image: 'https://images.unsplash.com/photo-1563297007-0686b7003af7?w=600&h=400&fit=crop' }
];"""

content = re.sub(old_categories, new_categories, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated js/products.js successfully!")
