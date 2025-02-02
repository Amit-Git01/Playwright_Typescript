import {expect, test} from '@playwright/test'


test.describe("First Module", {tag: '@Smoke'},() => {

    test("Test-1",{tag: '@Regression'}, async({page}) => {

        await page.goto("https://www.ebay.com/");
    
        let searchBox = page.locator("//input[@placeholder='Search for anything']");
    
        // hard assertion
        await expect(searchBox).toBeEnabled();
        await expect(searchBox).toBeEditable();
       
    })
    
    test("Test-2", async({page}) => {
    
        await page.goto("https://www.ebay.com/");
    
        let searchBox = page.locator("//input[@placeholder='Search for anything']");
    
        // hard assertion
        await expect(searchBox).toBeEnabled();
        await expect(searchBox).toBeEditable();
       
    })
})

test.describe("Second Module", {tag: '@Regression'},()=> {

    test("Test-3", {tag: ['@Smoke', '@Regression']}, async({page}) => {

        await page.goto("https://www.ebay.com/");
    
        let searchBox = page.locator("//input[@placeholder='Search for anything']");
    
        // hard assertion
        await expect(searchBox).toBeEnabled();
        await expect(searchBox).toBeEditable();
       
    })
    
    test("Test-4", async({page}) => {
    
        await page.goto("https://www.ebay.com/");
    
        let searchBox = page.locator("//input[@placeholder='Search for anything']");
    
        // hard assertion
        await expect(searchBox).toBeEnabled();
        await expect(true).toBeFalsy();
       
    })
})