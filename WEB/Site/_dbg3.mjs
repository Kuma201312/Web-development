export default async function run(page, ui) {
  await page.locator("#welcome-screen").click();
  await page.waitForTimeout(500);
  await page.locator('[data-menu-tab="coffee"]').click();
  await page.waitForTimeout(2000);

  const dbg = await page.evaluate(() => {
    const section = document.querySelector("#coffee-section");
    const wrap = section.querySelector(".tavern-search-wrap");
    const input = wrap?.querySelector(".tavern-search");
    const list = wrap?.querySelector(".tavern-suggest");
    const cards = Array.from(section.querySelectorAll(".coffee-item, .pizza-item"));
    return {
      hasSection: !!section,
      hasWrap: !!wrap,
      hasInput: !!input,
      hasList: !!list,
      cardCount: cards.length,
      firstCards: cards.slice(0, 3).map((c) => c.querySelector(".pizza-name")?.textContent),
      inputId: input?.id,
    };
  });

  // Type and report
  await page.locator("#coffee-search").fill("lat");
  await page.waitForTimeout(500);
  const after = await page.evaluate(() => {
    const list = document.querySelector("#coffee-suggest");
    return {
      hidden: list.hidden,
      html: list.innerHTML.slice(0, 300),
      inputValue: document.querySelector("#coffee-search").value,
    };
  });
  return { dbg, after };
}
