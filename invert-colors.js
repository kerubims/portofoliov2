const fs = require('fs');
let tsx = fs.readFileSync('src/app/projects/[slug]/page.tsx', 'utf8');

// Global changes to text, borders, and subtle backgrounds to make them light
tsx = tsx.replace(/text-ink/g, 'text-white');
tsx = tsx.replace(/border-ink/g, 'border-white');
tsx = tsx.replace(/bg-ink\/5/g, 'bg-white/5');
tsx = tsx.replace(/bg-ink\/30/g, 'bg-white/30');
tsx = tsx.replace(/bg-ink\/20/g, 'bg-white/20');
tsx = tsx.replace(/divide-ink\/10/g, 'divide-white/10');

// Fix the VISIT LIVE SITE button (bg-white but needs dark text)
tsx = tsx.replace(/bg-ink/g, 'bg-white text-black');
tsx = tsx.replace(/style=\{\{ color: '#f1efec' \}\}/g, '');

// Remove data-nav="light" because the background is now dark!
tsx = tsx.replace(/ data-nav="light"/g, '');

fs.writeFileSync('src/app/projects/[slug]/page.tsx', tsx);
console.log('Fixed text colors for dark premium theme');
