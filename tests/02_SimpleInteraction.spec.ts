import { test, expect } from "playwright/test";

test("Simple interaction", async ({ page }) => {
  await page.goto("https://www.ebay.com/");

  await page.fill(
    "//input[@placeholder='Search for anything']",
    "samsung galaxy s24 ultra"
  );

  await page.press("//input[@placeholder='Search for anything']", 'Enter');

  await page.waitForTimeout(5000);
});
