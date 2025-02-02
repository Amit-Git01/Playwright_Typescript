import {expect, test} from '@playwright/test'


test("Playwright Assertions", async({page}) => {

    await page.goto("https://www.ebay.com/");

    let searchBox = page.locator("//input[@placeholder='Search for anything']");

    // hard assertion
    await expect(searchBox).toBeEnabled();
    await expect(searchBox).toBeEditable();
    await expect(searchBox).toBeEmpty();

    await searchBox.fill("Iphone");
    await searchBox.press("Enter");

    //soft assertion
    await expect.soft(page).toHaveTitle("iPhone for sale | eBays");

    const url = "https://www.ebay.com/sch/i.html?_nkw=Iphone&_sacat=0&_from=R40&_trksid=p4432023.m570.l1313";

    await expect(page).toHaveURL(url);
})