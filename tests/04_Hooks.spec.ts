import { log } from "console";
import test from "playwright/test";

test.beforeAll("This is before all...", async () => {
  log("Before All hook...");
});

test.afterAll("This is after all...", async () => {
  log("After all hook...");
});

test.beforeEach("Before each...", async () => {
  log("Before each test..");
});

test.afterEach("After each...", async () => {
  log("After each test..");
});

test("Test 1", async ({ page }) => {
  log("Test-1");
  await page.goto("https://www.ebay.com/");
});

test("Test-2", async ({ page }) => {
  log("Test-2");
  await page.goto("https://www.ebay.com/");
});
