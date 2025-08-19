// generate-icons.mjs
import favicons from "favicons";
import { writeFileSync, mkdirSync, existsSync } from "fs";

const source = "public/logo.png"; // at least 512x512

const configuration = {
  path: "/icons/",
  icons: {
    android: true,
    appleIcon: true,
    windows: true,
    favicons: false,
  },
};

const outputDir = "public/icons";

// Map favicons output -> your desired filenames
const renameMap = {
  "android-chrome-192x192.png": "android-chrome-192x192.png",
  "apple-touch-icon-152x152.png": "apple-icon-152x152.png",
  "mstile-310x310.png": "ms-icon-310x310.png",
};

try {
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const response = await favicons(source, configuration);

  response.images.forEach((image) => {
    if (renameMap[image.name]) {
      const targetName = renameMap[image.name];
      writeFileSync(`${outputDir}/${targetName}`, image.contents);
    }
  });

  console.log("✅ Exact icons generated successfully!");
} catch (err) {
  console.error("❌ Error generating icons:", err.message);
}
