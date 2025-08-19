// generate-icons.mjs
import favicons from "favicons";
import { writeFileSync, mkdirSync, existsSync } from "fs";

const source = "public/logo.png"; // your base logo (at least 512x512 recommended)

const configuration = {
  path: "/icons/", // public URL prefix
  icons: {
    android: true,
    appleIcon: true,
    windows: true,
    favicons: true,
  },
};

const outputDir = "public/icons";

try {
  // Ensure icons directory exists
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const response = await favicons(source, configuration);

  // Save images
  response.images.forEach((image) => {
    writeFileSync(`${outputDir}/${image.name}`, image.contents);
  });

  // Save files (manifest, browserconfig, etc.)
  response.files.forEach((file) => {
    writeFileSync(`public/${file.name}`, file.contents);
  });

  console.log("✅ Icons and manifest generated successfully!");
} catch (err) {
  console.error("❌ Error generating icons:", err.message);
}
