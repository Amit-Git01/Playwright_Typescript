import {test} from '@playwright/test'

test("Mouse Action", async({page}) => {

    await page.goto("https://www.ebay.com/");

    await page.locator("//input[@placeholder='Search for anything']").click({button:'left'});
    await page.locator("//input[@placeholder='Search for anything']").fill("Iphone 14");
    
    await page.waitForTimeout(3000);
})