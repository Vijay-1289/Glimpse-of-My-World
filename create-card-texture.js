const sharp = require('sharp');
const path = require('path');

const TEXTURE_SIZE = 1678;
const USER_PHOTO = path.resolve('C:/Users/svija/.gemini/antigravity/brain/011e5280-0492-4c43-9298-be83aa6face5/media__1777092937659.png');
const IIIT_LOGO = path.resolve('C:/Users/svija/.gemini/antigravity/brain/39f64a19-cc4c-4f60-8923-b33875c103ab/media__1779791925748.png');
const OUTPUT = path.resolve('src/assets/lanyard/card-texture.jpg');
const OUTPUT_PUBLIC = path.resolve('public/card-texture.jpg');

async function createCardFace(width, height) {
  const photoSize = Math.floor(width * 0.50);
  const photoTop = Math.floor(height * 0.08);

  // 1. Create gradient background
  const gradientSvg = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#d4f7d4;stop-opacity:1" />
          <stop offset="30%" style="stop-color:#c8e6f0;stop-opacity:1" />
          <stop offset="60%" style="stop-color:#b8d4f0;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#c8d8f0;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)" />
    </svg>
  `;
  const background = await sharp(Buffer.from(gradientSvg)).png().toBuffer();

  // 2. Extract user's photo — crop just the person area from the original card
  // Original is 376x535; the circular photo with the person is roughly in top portion
  const origMeta = await sharp(USER_PHOTO).metadata();
  const cropTop = Math.floor(origMeta.height * 0.04);
  const cropHeight = Math.floor(origMeta.height * 0.48);
  const cropWidth = origMeta.width;

  // Get the photo area and resize to a square for circular crop
  const squareSize = photoSize;
  const photoCrop = await sharp(USER_PHOTO)
    .extract({ left: 0, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(squareSize, squareSize, { fit: 'cover', position: 'centre' })
    .toBuffer();

  // 3. Apply circular mask
  const circleMask = Buffer.from(`
    <svg width="${squareSize}" height="${squareSize}">
      <circle cx="${squareSize / 2}" cy="${squareSize / 2}" r="${squareSize / 2}" fill="white"/>
    </svg>
  `);

  const maskedPhoto = await sharp(photoCrop)
    .composite([{
      input: await sharp(circleMask).resize(squareSize, squareSize).png().toBuffer(),
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  // 4. Create a circle border ring
  const borderSize = squareSize + 16;
  const borderSvg = Buffer.from(`
    <svg width="${borderSize}" height="${borderSize}">
      <circle cx="${borderSize / 2}" cy="${borderSize / 2}" r="${borderSize / 2 - 2}"
        fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.6)" stroke-width="3"/>
    </svg>
  `);
  const borderBuf = await sharp(borderSvg).resize(borderSize, borderSize).png().toBuffer();

  // 5. Prepare IIIT logo — trim whitespace and make background transparent-ish
  const trimmedLogo = await sharp(IIIT_LOGO)
    .trim({ threshold: 30 })
    .toBuffer();

  const logoTargetW = Math.floor(width * 0.65);
  const logoTargetH = Math.floor(height * 0.15);
  const resizedLogo = await sharp(trimmedLogo)
    .resize(logoTargetW, logoTargetH, { fit: 'inside', withoutEnlargement: false })
    .toBuffer();
  const logoMeta = await sharp(resizedLogo).metadata();

  // 6. Create text overlay — Name + Role
  const nameSize = Math.floor(width * 0.10);
  const roleSize = Math.floor(width * 0.05);
  const textY = photoTop + photoSize + Math.floor(height * 0.07);

  const textSvg = Buffer.from(`
    <svg width="${width}" height="${height}">
      <text x="${width / 2}" y="${textY}"
        font-family="'Segoe UI', Arial, sans-serif" font-size="${nameSize}" font-weight="700"
        fill="#1a1a2e" text-anchor="middle" letter-spacing="3">
        VIJAY
      </text>
      <line x1="${width * 0.22}" y1="${textY + nameSize * 0.45}" x2="${width * 0.78}" y2="${textY + nameSize * 0.45}"
        stroke="#1b3a5c" stroke-width="2" stroke-opacity="0.35"/>
      <text x="${width / 2}" y="${textY + nameSize * 1.05}"
        font-family="'Segoe UI', Arial, sans-serif" font-size="${roleSize}" font-weight="600"
        fill="#1b3a5c" text-anchor="middle" letter-spacing="1.5">
        Intern at IIIT Hyderabad
      </text>
    </svg>
  `);

  // 7. Composite everything
  const photoLeft = Math.floor((width - squareSize) / 2);
  const borderLeft = Math.floor((width - borderSize) / 2);
  const borderTop = photoTop - 8;
  const logoLeft = Math.floor((width - logoMeta.width) / 2);
  const logoTop = Math.floor(height * 0.78);

  const result = await sharp(background)
    .composite([
      { input: borderBuf, left: borderLeft, top: borderTop },
      { input: maskedPhoto, left: photoLeft, top: photoTop },
      { input: await sharp(textSvg).png().toBuffer(), left: 0, top: 0 },
      { input: resizedLogo, left: logoLeft, top: logoTop },
    ])
    .png()
    .toBuffer();

  return result;
}

async function main() {
  const halfWidth = Math.floor(TEXTURE_SIZE / 2);
  const usedHeight = Math.floor(TEXTURE_SIZE * 0.757);

  console.log('Creating card face:', halfWidth, 'x', usedHeight);

  const cardFace = await createCardFace(halfWidth, usedHeight);

  const frontFace = await sharp(cardFace)
    .resize(halfWidth, usedHeight, { fit: 'cover', position: 'centre' })
    .toBuffer();

  const backFace = await sharp(cardFace)
    .resize(halfWidth, usedHeight, { fit: 'cover', position: 'centre' })
    .toBuffer();

  await sharp({
    create: {
      width: TEXTURE_SIZE,
      height: TEXTURE_SIZE,
      channels: 4,
      background: { r: 240, g: 240, b: 240, alpha: 1 }
    }
  })
    .composite([
      { input: frontFace, left: 0, top: 0 },
      { input: backFace, left: halfWidth, top: 0 },
    ])
    .jpeg({ quality: 95 })
    .toFile(OUTPUT);

  console.log('Card texture created:', OUTPUT);

  await sharp(OUTPUT).toFile(OUTPUT_PUBLIC);
  console.log('Copied to public:', OUTPUT_PUBLIC);

  const meta = await sharp(OUTPUT).metadata();
  console.log('Size:', meta.width, 'x', meta.height);
}

main().catch(console.error);
