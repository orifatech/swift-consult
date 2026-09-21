import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const images = [
  {
    src: '/Users/Elero/.gemini/antigravity/brain/1adefe67-967d-45a9-ba71-d61ee10daba9/hero_commercial_tower_1789977473853.png',
    name: 'commercial-tower'
  },
  {
    src: '/Users/Elero/.gemini/antigravity/brain/1adefe67-967d-45a9-ba71-d61ee10daba9/industrial_facility_plant_1789977526031.png',
    name: 'industrial-plant'
  },
  {
    src: '/Users/Elero/.gemini/antigravity/brain/1adefe67-967d-45a9-ba71-d61ee10daba9/residential_development_1789977575670.png',
    name: 'residential-development'
  },
  {
    src: '/Users/Elero/.gemini/antigravity/brain/1adefe67-967d-45a9-ba71-d61ee10daba9/structural_engineering_detail_1789977619919.png',
    name: 'structural-engineering'
  },
  {
    src: '/Users/Elero/.gemini/antigravity/brain/1adefe67-967d-45a9-ba71-d61ee10daba9/civil_site_development_1789977669395.png',
    name: 'civil-site'
  },
  {
    src: '/Users/Elero/.gemini/antigravity/brain/1adefe67-967d-45a9-ba71-d61ee10daba9/global_logistics_procurement_1789977741231.png',
    name: 'global-logistics'
  }
];

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Copy original logo
const logoSrc = '/Users/Elero/.gemini/antigravity/brain/1adefe67-967d-45a9-ba71-d61ee10daba9/.user_uploaded/media_1789975850885.webp';
if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, path.join(outDir, 'swift-consult-logo.webp'));
  console.log('Copied logo to public/images/swift-consult-logo.webp');
}

for (const img of images) {
  if (!fs.existsSync(img.src)) {
    console.error(`Source not found: ${img.src}`);
    continue;
  }
  
  // Desktop version: 1600px width, quality 82
  const desktopDest = path.join(outDir, `${img.name}.webp`);
  await sharp(img.src)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(desktopDest);
  console.log(`Created desktop webp: ${desktopDest}`);

  // Mobile version: 750px width, quality 80
  const mobileDest = path.join(outDir, `${img.name}-mobile.webp`);
  await sharp(img.src)
    .resize({ width: 750, withoutEnlargement: true })
    .webp({ quality: 80, effort: 4 })
    .toFile(mobileDest);
  console.log(`Created mobile webp: ${mobileDest}`);
}

console.log('Image processing complete!');
