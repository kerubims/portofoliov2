const fs = require('fs');
let html = fs.readFileSync('detail-example.html', 'utf8');

// Extract everything from <section class="border-b border-border-quiet bg-surface-container-lowest... to the end of <main>
const startIndex = html.indexOf('<section class="border-b border-border-quiet bg-surface-container-lowest');
const endIndex = html.lastIndexOf('</main>') + 7;
let bodyContent = html.substring(startIndex, endIndex);

// Convert HTML to JSX
bodyContent = bodyContent
  .replace(/class=/g, 'className=')
  .replace(/for=/g, 'htmlFor=')
  .replace(/onclick="(.*?)"/g, 'onClick={() => { /* $1 */ }}')
  .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
  .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
  .replace(/<br>/g, '<br />')
  .replace(/<hr>/g, '<hr />')
  .replace(/readonly=""/g, 'readOnly={true}')
  .replace(/disabled=""/g, 'disabled={true}');

// Quick fix for unescaped style attributes (if any exist)
// e.g. style="color: red;" to style={{color: 'red'}} (naive approach, but better just remove style if there are any that aren't dynamic)
// Actually we'll just check if there are styles
console.log('Styles count:', (bodyContent.match(/style="/g) || []).length);

const componentCode = `"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function BrutalistDetail({ project }: { project: any }) {
  const [viewport, setViewport] = useState('desktop');
  const [galleryIndex, setGalleryIndex] = useState(0);

  return (
    <div className="bg-canvas-pure text-on-surface antialiased font-body-md text-body-md dark selection:bg-primary selection:text-canvas-pure pt-24 pb-24">
      ${bodyContent}
    </div>
  );
}
`;

fs.writeFileSync('src/components/BrutalistDetail.tsx', componentCode);
console.log('Component written');
