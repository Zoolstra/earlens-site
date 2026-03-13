/**
 * Generates wireframe PDFs for each page.
 * All text content is replaced with labeled placeholders; images become gray boxes.
 *
 * Usage:
 *   1. Start the dev server:  npm run dev
 *   2. In another terminal:   node scripts/generate-wireframe-pdfs.js
 *
 * Output: wireframe-pdfs/ directory
 */

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const BASE_URL = "http://localhost:3000";

const PAGES = [
  { path: "/",                              name: "01-patient-home" },
  { path: "/benefits",                      name: "02-patient-benefits" },
  { path: "/testimonials",                  name: "03-patient-testimonials" },
  { path: "/patient-faq",                   name: "04-patient-faq" },
  { path: "/schedule-virtual-consultation", name: "05-schedule-consultation" },
  { path: "/support",                       name: "06-support" },
  { path: "/about",                         name: "07-about" },
  { path: "/contact-us",                    name: "08-contact-us" },
  { path: "/provider",                      name: "09-provider-home" },
  { path: "/provider/patient-outcomes",     name: "10-provider-patient-outcomes" },
  { path: "/provider/practice-growth",      name: "11-provider-practice-growth" },
  { path: "/provider/unique-technology",    name: "12-provider-unique-technology" },
  { path: "/provider/research",             name: "13-provider-research" },
  { path: "/become-a-provider",             name: "14-become-a-provider" },
];

// Injected into each page to swap real content for labeled placeholders
const PLACEHOLDER_SCRIPT = () => {
  function isDark(el) {
    // Walk up to find if this element sits on a dark/colored background
    let node = el;
    for (let i = 0; i < 6; i++) {
      if (!node || !node.style) break;
      const bg = node.style.background || node.style.backgroundColor || "";
      if (bg && !bg.includes("rgba(0,0,0,0)") && !bg.includes("transparent")) {
        // Rough check: if background contains a dark blue/teal it's dark
        if (
          bg.includes("linear-gradient") ||
          bg.includes("#204") ||
          bg.includes("#001") ||
          bg.includes("#009") ||
          bg.includes("rgb(0,") ||
          bg.includes("rgb(1,")
        ) return true;
      }
      node = node.parentElement;
    }
    return false;
  }

  const PLACEHOLDER_COLOR_LIGHT = "rgba(100,100,100,0.45)";
  const PLACEHOLDER_COLOR_DARK  = "rgba(255,255,255,0.45)";
  const BG_LIGHT = "rgba(180,180,180,0.12)";
  const BG_DARK  = "rgba(255,255,255,0.08)";

  function mark(el, text) {
    el.textContent = text;
    const dark = isDark(el);
    el.style.color   = dark ? PLACEHOLDER_COLOR_DARK : PLACEHOLDER_COLOR_LIGHT;
    el.style.background   = dark ? BG_DARK : BG_LIGHT;
    el.style.borderRadius = "3px";
    el.style.padding      = "1px 6px";
    el.style.fontStyle    = "italic";
    el.style.fontWeight   = "400";
    el.style.letterSpacing = "0";
    el.style.textTransform = "none";
  }

  // ── Headings ──────────────────────────────────────────────────────────────
  document.querySelectorAll("h1").forEach(el => {
    if (el.innerText.trim()) mark(el, "[ Page Headline ]");
  });
  document.querySelectorAll("h2").forEach(el => {
    if (el.innerText.trim()) mark(el, "[ Section Headline ]");
  });
  document.querySelectorAll("h3").forEach(el => {
    if (el.innerText.trim()) mark(el, "[ Card / Sub-section Title ]");
  });
  document.querySelectorAll("h4, h5, h6").forEach(el => {
    if (el.innerText.trim()) mark(el, "[ Label ]");
  });

  // ── Body copy ─────────────────────────────────────────────────────────────
  document.querySelectorAll("p").forEach(el => {
    const txt = el.innerText.trim();
    if (!txt) return;
    const label = txt.length > 120
      ? "[ Body Copy — long-form supporting text or claim ]"
      : txt.length > 40
      ? "[ Short description or claim ]"
      : "[ Micro-copy / label ]";
    mark(el, label);
  });

  // ── Spans (stat numbers, badges, etc.) ───────────────────────────────────
  document.querySelectorAll("span").forEach(el => {
    if (el.children.length > 0) return;
    const txt = el.innerText.trim();
    if (!txt || txt.length < 2) return;
    // Likely a stat if it starts with a digit
    const label = /^\d/.test(txt) ? "[ Stat / Number ]" : "[ Text / Badge ]";
    mark(el, label);
  });

  // ── Buttons ───────────────────────────────────────────────────────────────
  document.querySelectorAll("button").forEach(el => {
    const txt = el.innerText.trim();
    if (txt && !el.querySelector("svg")) mark(el, "[ Button ]");
  });

  // ── Links / CTAs ──────────────────────────────────────────────────────────
  document.querySelectorAll("a").forEach(el => {
    const txt = el.innerText.trim();
    if (!txt || el.querySelector("img") || txt.length > 80) return;
    mark(el, "[ CTA / Link ]");
  });

  // ── Labels (form) ─────────────────────────────────────────────────────────
  document.querySelectorAll("label").forEach(el => {
    if (el.innerText.trim()) mark(el, "[ Form Label ]");
  });

  // ── Input placeholders ────────────────────────────────────────────────────
  document.querySelectorAll("input, textarea").forEach(el => {
    el.placeholder = "[ Input field ]";
    el.value = "";
  });

  // ── Images → gray placeholder box ────────────────────────────────────────
  document.querySelectorAll("img").forEach(img => {
    const w = img.offsetWidth  || parseInt(img.getAttribute("width"))  || 240;
    const h = img.offsetHeight || parseInt(img.getAttribute("height")) || 160;
    const div = document.createElement("div");
    div.style.cssText = [
      `width:${w}px`,
      `height:${Math.max(h, 80)}px`,
      "background:#dde0e6",
      "border:2px dashed #bbb",
      "border-radius:8px",
      "display:inline-flex",
      "align-items:center",
      "justify-content:center",
      "color:#999",
      "font-size:12px",
      "font-weight:700",
      "font-style:italic",
      "font-family:sans-serif",
      "letter-spacing:0.5px",
    ].join(";");
    div.textContent = "[ Image ]";
    img.replaceWith(div);
  });

  // ── SVG icons → tiny gray pill ────────────────────────────────────────────
  document.querySelectorAll("svg").forEach(svg => {
    const w = svg.getAttribute("width")  || 24;
    const h = svg.getAttribute("height") || 24;
    const span = document.createElement("span");
    span.style.cssText = `display:inline-block;width:${w}px;height:${h}px;background:#ccc;border-radius:4px;vertical-align:middle;flex-shrink:0;`;
    svg.replaceWith(span);
  });

  // ── Videos / iframes → gray box ──────────────────────────────────────────
  document.querySelectorAll("iframe, video").forEach(el => {
    const div = document.createElement("div");
    div.style.cssText = "width:100%;height:360px;background:#dde0e6;border:2px dashed #bbb;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#999;font-size:13px;font-weight:700;font-style:italic;font-family:sans-serif;";
    div.textContent = "[ Video / Embed ]";
    el.replaceWith(div);
  });
};

async function run() {
  const outDir = path.resolve(__dirname, "../wireframe-pdfs");
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let passed = 0;
  let failed = 0;

  for (const { path: urlPath, name } of PAGES) {
    const url = `${BASE_URL}${urlPath}`;
    process.stdout.write(`→ ${name} … `);

    const tab = await browser.newPage();
    await tab.setViewport({ width: 1440, height: 900 });

    try {
      await tab.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      // Let any CSS transitions settle
      await new Promise(r => setTimeout(r, 600));

      await tab.evaluate(PLACEHOLDER_SCRIPT);

      await tab.pdf({
        path: path.join(outDir, `${name}.pdf`),
        format: "A4",
        printBackground: true,
        margin: { top: "0", right: "0", bottom: "0", left: "0" },
      });

      console.log("✓");
      passed++;
    } catch (err) {
      console.log(`✗  ${err.message}`);
      failed++;
    }

    await tab.close();
  }

  await browser.close();

  console.log(`\n${passed} PDFs saved → ${outDir}`);
  if (failed) console.log(`${failed} page(s) failed — is the dev server running?`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
