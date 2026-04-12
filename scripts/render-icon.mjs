import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "assets", "logo.svg"));

const bg = "#0b0f14";

for (const size of [128, 512]) {
  const out = join(root, "assets", size === 128 ? "icon.png" : "logo-512.png");
  await sharp(svg, { density: 300 })
    .resize(size, size, { fit: "fill" })
    .flatten({ background: bg })
    .png()
    .toFile(out);
  console.log("Wrote", out);
}
