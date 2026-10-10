const fs = require('fs');
let code = fs.readFileSync('src/components/BrutalistDetail.tsx', 'utf8');

// Fix Viewport switcher
code = code.replace(/onClick=\{\(\) => \{ \/\* setViewport\('desktop'\) \*\/ \}\}/g, 'onClick={() => setViewport("desktop")}');
code = code.replace(/onClick=\{\(\) => \{ \/\* setViewport\('mobile'\) \*\/ \}\}/g, 'onClick={() => setViewport("mobile")}');
code = code.replace(/onClick=\{\(\) => \{ \/\* setViewport\('arch'\) \*\/ \}\}/g, 'onClick={() => setViewport("arch")}');

// Fix classes for Viewport modes
code = code.replace(/<div className="([^"]*)" id="view-mode-desktop">/g, '<div className={`$1 ${viewport === "desktop" ? "block" : "hidden"}`}>');
code = code.replace(/<div className="hidden ([^"]*)" id="view-mode-mobile">/g, '<div className={`$1 ${viewport === "mobile" ? "block" : "hidden"}`}>');
code = code.replace(/<div className="hidden ([^"]*)" id="view-mode-arch">/g, '<div className={`$1 ${viewport === "arch" ? "grid" : "hidden"}`}>');

// Fix Gallery View switcher
code = code.replace(/onClick=\{\(\) => \{ \/\* selectGalleryView\(0\) \*\/ \}\}/g, 'onClick={() => setGalleryIndex(0)}');
code = code.replace(/onClick=\{\(\) => \{ \/\* selectGalleryView\(1\) \*\/ \}\}/g, 'onClick={() => setGalleryIndex(1)}');
code = code.replace(/onClick=\{\(\) => \{ \/\* selectGalleryView\(2\) \*\/ \}\}/g, 'onClick={() => setGalleryIndex(2)}');
code = code.replace(/onClick=\{\(\) => \{ \/\* selectGalleryView\(3\) \*\/ \}\}/g, 'onClick={() => setGalleryIndex(3)}');

fs.writeFileSync('src/components/BrutalistDetail.tsx', code);
console.log('Interactivity fixed');
