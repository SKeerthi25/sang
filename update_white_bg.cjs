const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath, search, replace) => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(new RegExp(search, 'g'), replace);
  fs.writeFileSync(filePath, content);
};

// 1. Update index.css body background
let cssPath = path.join(__dirname, 'src/index.css');
if (fs.existsSync(cssPath)) {
  let cssContent = fs.readFileSync(cssPath, 'utf8');
  cssContent = cssContent.replace('background-color: #f8fafc; /* slate-50 */', 'background-color: #ffffff; /* white */');
  fs.writeFileSync(cssPath, cssContent);
}

// 2. Replace bg-slate-50 with bg-white across all jsx files
const dirs = ['src/pages', 'src/components'];

dirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      replaceInFile(path.join(dirPath, file), 'bg-slate-50', 'bg-white');
      // If we have bg-white cards inside a bg-white background, it might blend too much unless it has a border.
      // We already use border-slate-100 or border-slate-200 everywhere, so it will look extremely clean.
    }
  });
});

console.log('Background changed to pure white');
