import sharp from "sharp";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(
  new URL("../src/assets/brand/sael-monogram-official.png", import.meta.url),
);
const destination = fileURLToPath(
  new URL("../public/brand/sael-monogram-official-transparent.png", import.meta.url),
);

const { data, info } = await sharp(source)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const rgba = Buffer.alloc(info.width * info.height * 4);

for (let pixel = 0; pixel < info.width * info.height; pixel += 1) {
  const inputOffset = pixel * 3;
  const outputOffset = pixel * 4;
  const red = data[inputOffset];
  const green = data[inputOffset + 1];
  const blue = data[inputOffset + 2];
  const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
  const alpha = Math.round(Math.max(0, Math.min(1, (228 - luminance) / 25)) * 255);

  rgba[outputOffset] = red;
  rgba[outputOffset + 1] = green;
  rgba[outputOffset + 2] = blue;
  rgba[outputOffset + 3] = alpha;
}

await sharp(rgba, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .trim({
    background: { r: 0, g: 0, b: 0, alpha: 0 },
    threshold: 2,
  })
  .extend({
    top: 16,
    right: 16,
    bottom: 16,
    left: 16,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9 })
  .toFile(destination);

const metadata = await sharp(destination).metadata();
console.log(
  `Prepared ${metadata.width}x${metadata.height} transparent monogram from the approved source PNG.`,
);
