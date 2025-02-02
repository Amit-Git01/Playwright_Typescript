import {test} from '@playwright/test'

test("Keyboard Action", async({page}) => {

    await page.goto("https://www.ebay.com/");

    await page.locator("//input[@placeholder='Search for anything']").fill("iphone");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+X");
    
    await page.locator("//input[@placeholder='Search for anything']").press("Enter");

    await page.waitForTimeout(4000);
})