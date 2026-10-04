export default async function run(page, ui) {
  await page.locator("#welcome-screen").click();
  await page.waitForTimeout(5200);

  return await page.evaluate(() => {
    const q = (s) => document.querySelector(s);
    const dump = (sel) => {
      const el = q(sel); if (!el) return null;
      const b = el.getBoundingClientRect(); const cs = getComputedStyle(el);
      return {
        rect: { x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height) },
        width: cs.width, height: cs.height, border: cs.border, borderRadius: cs.borderRadius,
        padding: cs.padding, margin: cs.margin, bg: cs.backgroundColor, display: cs.display,
      };
    };
    return {
      header: dump(".header"),
      logo: dump(".logo"),
      menuBlock: dump("#menu-block"),
      menuContent: dump("#menu-content"),
      menuStatus: dump(".menu-status"),
      tabs: dump("#menu-tabs"),
      firstTab: dump(".menu-tab"),
      aboutButton: dump("#about-button"),
    };
  });
}
