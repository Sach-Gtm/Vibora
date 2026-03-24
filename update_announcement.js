const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const catchyText = "🔥 Premium Custom Merch, 10% Cheaper Guaranteed • Free Design Support • PAN-India Shipping 🚀";
const corporateText = "🏢 Premium Corporate Merch • Min 50 Units • Free Design & GST Invoices • Same-Day Quotes ⚡";

const regex = /<div class="announcement-bar">.*?<\/div>/g;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (file === 'corporate.html') {
    content = content.replace(regex, `<div class="announcement-bar">${corporateText}</div>`);
  } else {
    content = content.replace(regex, `<div class="announcement-bar">${catchyText}</div>`);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Announcement bars updated!');
