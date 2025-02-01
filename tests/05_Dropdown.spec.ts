import {test} from '@playwright/test'
import { log } from 'console';

test("Dropdown", async({page}) => {
    await page.goto("https://www.facebook.com/");

    await page.getByTestId("open-registration-form-button").click();

    // Select by value
    await page.getByLabel("Month").selectOption({
        value: "5"
    })
    // Select by visible text
    await page.getByLabel("Month").selectOption({
        label: "Apr"
    })

    let months =  await page.locator("#month > option").all();
    for(let month of months) {
        log(await month.textContent())
    }

    await page.waitForTimeout(4000);

})

