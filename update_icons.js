const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" style="vertical-align: middle;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace text emoji icon with SVG moon icon (default)
  content = content.replace(/>🌓<\/button>/g, `>${moonIcon}</button>`);

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Icons updated successfully.');
