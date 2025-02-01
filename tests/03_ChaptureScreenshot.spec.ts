import { test, expect } from "playwright/test";

test("Simple interaction", async ({ page }) => {
  await page.goto("https://www.ebay.com/");

  // Element screenshot
  await page.locator("//div[@data-m-id='4523']").screenshot({path: "./Screenshots/ElementSS.png"});

  // page screenshot
  await page.screenshot({path: "./Screenshots/Page.png"});

  // Full page screenshot
  await page.screenshot({fullPage:true ,path: "./Screenshots/FullPage.png"});

});