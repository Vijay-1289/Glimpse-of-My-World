const sharp = require('sharp');
const path = require('path');

const TEXTURE_SIZE = 1678; // Match original texture dimensions
const USER_IMAGE = path.resolve('C:/Users/svija/.gemini/antigravity/brain/011e5280-0492-4c43-9298-be83aa6face5/media__1777092937659.png');
const OUTPUT = path.resolve('C:/Users/svija/Downloads/Glimpse-of-My-World/src/assets/lanyard/card-texture.jpg');

async function main() {
  // The card UV layout:
  // - Full width, ~76% height used (V: 0 to 0.757)
  // - Left half (U: 0 to 0.5) = FRONT face of card
  // - Right half (U: 0.5 to 1) = BACK face of card
  // - GLB textures use top-left origin (V=0 at top)

  const halfWidth = Math.floor(TEXTURE_SIZE / 2); // ~839
  const usedHeight = Math.floor(TEXTURE_SIZE * 0.757); // ~1270

  // Resize user's design to fit each half
  const userFront = await sharp(USER_IMAGE)
    .resize(halfWidth, usedHeight, { fit: 'cover', position: 'centre' })
    .toBuffer();

  const userBack = await sharp(USER_IMAGE)
    .resize(halfWidth, usedHeight, { fit: 'cover', position: 'centre' })
    .toBuffer();

  // Create the full texture canvas (light background like original)
  await sharp({
    create: {
      width: TEXTURE_SIZE,
      height: TEXTURE_SIZE,
      channels: 4,
      background: { r: 240, g: 240, b: 240, alpha: 1 }
    }
  })
    .composite([
      { input: userFront, left: 0, top: 0 },      // Front face (left half)
      { input: userBack, left: halfWidth, top: 0 }, // Back face (right half)
    ])
    .jpeg({ quality: 95 })
    .toFile(OUTPUT);

  console.log('Card texture created:', OUTPUT);
  
  // Verify
  const meta = await sharp(OUTPUT).metadata();
  console.log('Size:', meta.width, 'x', meta.height);
}

main().catch(console.error);
