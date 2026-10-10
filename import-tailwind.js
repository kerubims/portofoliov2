const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');
if (!css.includes('@import "tailwindcss"')) {
  css = '@import "tailwindcss";\n' + css;
  fs.writeFileSync('src/app/globals.css', css);
  console.log('Tailwind imported');
}
