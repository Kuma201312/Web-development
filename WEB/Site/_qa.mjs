export default async function run(page, ui) {
  const R = {};
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });

  await page.locator("#welcome-screen").click();

  // Menu block should now appear ~1.4s (not 4s)
  await page.waitForTimeout(1500);
  R.menuReady = await page.evaluate(() => ({
    menuOpacity: getComputedStyle(document.querySelector("#menu-block")).opacity,
    pizzaTabHit: (() => {
      const b = document.querySelector('[data-menu-tab="pizza"]').getBoundingClientRect();
      const el = document.elementFromPoint(b.left + b.width / 2, b.top + b.height / 2);
      return el?.dataset?.menuTab === "pizza";
    })(),
  }));

  // Click each tab and confirm own section + top
  for (const tab of ["pizza", "coffee", "desserts", "alcohol"]) {
    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(200);
    await page.locator(`[data-menu-tab="${tab}"]`).click();
    await page.waitForTimeout(1200);
    R["tab_" + tab] = await page.evaluate((t) => {
      const map = { pizza: "#pizza-section", coffee: "#coffee-section", desserts: "#dessert-section", alcohol: "#alcohol-section" };
      const sec = document.querySelector(map[t]);
      return {
        scrollY: Math.round(window.scrollY),
        activeTab: document.querySelector(".header .menu-tab.is-active")?.dataset.menuTab,
        sectionVisible: sec && !sec.hidden && sec.classList.contains("category-visible"),
      };
    }, tab);
  }

  R.errors = errors;
  return R;
}
