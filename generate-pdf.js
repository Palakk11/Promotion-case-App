import puppeteer from "puppeteer";
import { exec } from "child_process";
import { setTimeout } from "timers/promises";

const PORT = 4173;

async function generatePDF() {
  console.log("Building the app...");
  await new Promise((resolve, reject) => {
    exec("npm run build", { cwd: process.cwd() }, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

  console.log("Starting preview server...");
  const server = exec(`npx vite preview --port ${PORT}`, { cwd: process.cwd() });
  await setTimeout(3000);

  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`http://localhost:${PORT}/Promotion-case-App/`, {
    waitUntil: "networkidle0",
    timeout: 30000,
  });

  // Wait for images to load
  await page.evaluate(async () => {
    const imgs = Array.from(document.querySelectorAll("img"));
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            })
      )
    );
  });

  // Expand all collapsed/animated elements
  await page.evaluate(() => {
    document.querySelectorAll("[style]").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  });

  await setTimeout(2000);

  console.log("Generating PDF...");
  await page.pdf({
    path: "Palakk_Shrivastava_Promotion_Case.pdf",
    format: "Letter",
    margin: { top: "0.4in", bottom: "0.4in", left: "0.5in", right: "0.5in" },
    printBackground: true,
    preferCSSPageSize: false,
  });

  console.log("PDF saved: Palakk_Shrivastava_Promotion_Case.pdf");

  await browser.close();
  server.kill();
  process.exit(0);
}

generatePDF().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
