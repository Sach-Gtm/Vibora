import re

file_path = r'c:\Users\ASUS\Downloads\EYESONIC_AI-main\Vibora\js\products.js'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Generic high quality apparel/merch detail images from Unsplash
alt1 = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=800&fit=crop'
alt2 = 'https://images.unsplash.com/photo-1564859228273-274232fdb9f6?w=800&h=800&fit=crop'

def replacer(match):
    images_str = match.group(1)
    # Check if there are no commas (meaning only one image)
    if ',' not in images_str:
        return f"images: [{images_str}, '{alt1}', '{alt2}']"
    return match.group(0)

new_text = re.sub(r"images:\s*\[(.*?)\]", replacer, text)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Added alternative images successfully!")
