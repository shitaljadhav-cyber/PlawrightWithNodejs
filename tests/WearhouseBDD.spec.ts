import test, {chromium, expect}  from '@playwright/test';

test.beforeEach(async ({page}) => {
await page.goto("https://www.thewarehouse.co.nz/", {waitUntil: 'domcontentloaded'});

});

test.describe.parallel("Automate a WebSite", async () => {
    test("Navigate to Furniture Page", async ({ page }) => {

        await test.step("Navigate to Website", async () => {

            //Expect library for assertion
            await expect(page).toHaveTitle("The Warehouse NZ | Everyday Low Prices - Kiwi Owned");
            await expect(page).toHaveURL("https://www.thewarehouse.co.nz/");

        });

        await test.step("Click on Funrniture", async () => {
            // Hover 
            await page.locator("data-test-id=category-root").hover();
            await expect(page.locator("data-test-id=category-root")).toBeVisible();

            //await  expect(page.locator("data-test-id=category-root")).not.toBeVisible(); // To test negative scenario

            await page.locator('.mega-menu-content-wrapper >> #category-homegarden');

            await page.locator("text=Furniture").click();

        });

    });

    test("Navigate to Kitchen Page",
        {
            tag: ['@smoke', '@release.1'],
            annotation: [
                {
                    type: 'info',
                    description: "Launchig Warehouse website"
                }]
        }, async ({ page, browserName }) => {
            test.skip(browserName == 'firefox', "Firefox not installed"); // skip brower execution

            await test.step("Navigate to Website", async () => {

                //Expect library for assertion
                await expect(page).toHaveTitle("The Warehouse NZ | Everyday Low Prices - Kiwi Owned");
                await expect(page).toHaveURL("https://www.thewarehouse.co.nz/");

            });

        await test.step("Click on Kitchen", async () => {
            // Hover 
            await page.locator("data-test-id=category-root").hover();
            await expect(page.locator("data-test-id=category-root")).toBeVisible();

            //await  expect(page.locator("data-test-id=category-root")).not.toBeVisible(); // To test negative scenario

            await page.locator('.mega-menu-content-wrapper >> #category-homegarden');

            await page.locator("text=Kitchen").click();

        });

    });

});

test.afterEach(async({page}, testInfo) => {
    await page.screenshot({path: 'Sceenshots/${testInfo.title.trim()}.png'});
    await page.close();

})