const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const svgLogo = `<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2C8 2 4 6 4 10c0 3 2 5 4 6s4 3 4 7c0-4 2-6 4-7s4-3 4-6c0-4-4-8-6-8z" fill="#E91E63" opacity="0.9"/><path d="M14 5c-3 0-5 3-5 5 0 2 1.5 3.5 3 4.5S14 17 14 20c0-3 .5-4.5 2-5.5s3-2.5 3-4.5c0-2-2-5-5-5z" fill="#FFB300" opacity="0.7"/></svg>VIBOR<span class="logo-accent">A</span>`;
const textFooterLogo = `<div class="logo">VIBOR<span class="logo-accent">A</span></div>`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Revert header logo
  content = content.replace(/<img src="images\/logo\.png" alt="Vibora Logo" class="site-logo">/g, svgLogo);
  content = content.replace(/<img src='images\/logo\.png' alt='Vibora Logo' class='site-logo'>/g, svgLogo);

  // Revert footer logo
  content = content.replace(/<img src="images\/logo\.png" alt="Vibora Logo" class="site-logo-footer">/g, textFooterLogo);
  content = content.replace(/<img src='images\/logo\.png' alt='Vibora Logo' class='site-logo-footer'>/g, textFooterLogo);

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Logos reverted successfully in all HTML files.');
