const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname);

function replaceInDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && file !== '.git' && file !== 'node_modules' && file !== 'images') {
      replaceInDir(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      const newContent = content
        .replace(/919818549572/g, '919818549572')
        .replace(/9818549572/g, '9818549572')
        .replace(/98185 49572/g, '98185 49572')
        .replace(/98185-49572/g, '98185-49572');
      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
      }
    }
  }
}
replaceInDir(dir);
console.log('WhatsApp number updated across all files!');
