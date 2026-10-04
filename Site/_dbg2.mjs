export default async function run(page, ui) {
  await page.locator("#welcome-screen").click();
  await page.waitForTimeout(500);
  await page.locator('[data-menu-tab="pizza"]').click();
  await page.waitForTimeout(2200);

  const s = await page.evaluate(() => {
    const q = (sel) => document.querySelector(sel);
    const info = (el) => {
      if (!el) return null;
      const cs = getComputedStyle(el);
      const b = el.getBoundingClientRect();
      return {
        x: Math.round(b.x), w: Math.round(b.width),
        margin: cs.margin, marginLeft: cs.marginLeft, marginRight: cs.marginRight,
        padding: cs.padding, paddingLeft: cs.paddingLeft, paddingRight: cs.paddingRight,
        width: cs.width, maxWidth: cs.maxWidth, boxSizing: cs.boxSizing,
      };
    };
    return {
      section: info(q("#pizza-section")),
      hero: info(q("#pizza-section .tavern-hero")),
      body: info(document.body),
      bodyPadding: getComputedStyle(document.body).padding,
    };
  });
  return s;
}
