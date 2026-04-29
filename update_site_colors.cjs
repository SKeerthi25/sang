const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath) => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace teal with violet (primary color)
  content = content.replace(/teal-/g, 'violet-');
  // Replace emerald with fuchsia (accent color)
  content = content.replace(/emerald-/g, 'fuchsia-');
  // Specifically for the text gradient in Home.jsx, make it purple to blue/fuchsia
  // If it was "from-violet-600 to-fuchsia-600", that looks nice. Let's see.

  fs.writeFileSync(filePath, content);
};

const dirs = ['src/pages', 'src/components'];

dirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      replaceInFile(path.join(dirPath, file));
    }
  });
});

console.log('Colors updated to Violet and Fuchsia (ClickUp theme)');
