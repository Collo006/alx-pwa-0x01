import favicons, { FaviconOptions } from "favicons";
import { writeFileSync, mkdirSync } from "fs";

const source = "public/android-chrome-192x192.png"; // Path to your source logo (at least 512x512)
const outputPath = "./public/icons";

const configuration: FaviconOptions = {
  path: "/icons/", // Path used in <link> tags
  appName: "My App",
  appShortName: "App",
  appDescription: "My amazing Next.js app!",
  background: "#ffffff",
  theme_color: "#ffffff",
  display: "standalone",
  icons: {
      android: true,
      appleIcon: true,
      windows: true,
      favicons: true,
      appleStartup: false,
      yandex: false
  },
};

async function generate() {
  try {
    mkdirSync(outputPath, { recursive: true });

    const response = await favicons(source, configuration);

    response.images.forEach((image) => {
      writeFileSync(`${outputPath}/${image.name}`, image.contents);
    });

    console.log("✅ Icons generated in /public/icons/");
  } catch (err) {
    console.error("❌ Error generating icons:", (err as Error).message);
  }
}

generate();
