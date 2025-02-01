import { test, expect } from "playwright/test";

test("Codegen Demo", async ({ page }) => {
  await page.goto("https://www.ebay.com/");
  await page.getByRole("link", { name: "Electronics", exact: true }).click();
  await page.getByRole("link", { name: "Apple" }).nth(1).click();
  await page
    .getByRole("link", { name: "Apple iPhone 14 Pro Max", exact: true })
    .click();
  await expect(
    page.getByRole("link", {
      name: "Apple iPhone 14 Pro Max 128GB Network Unlocked Very Good Condition",
      exact: true,
    })
  ).toBeVisible();
  await expect(
    page.locator(
      "li:nth-child(6) > .brwrvr__item-card__body > .brwrvr__item-card__wrapper > .brwrvr__item-card__signals > .brwrvr__item-card__signals__body > div:nth-child(5) > .bsig__generic-icon-and-text"
    )
  ).toBeVisible();
});
