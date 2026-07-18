import test, {chromium, expect}  from '@playwright/test';

test.beforeEach(async ({page}) => {
await page.goto("https://www.thewarehouse.co.nz/", {waitUntil: 'domcontentloaded'});

});

test("Navigate to WebSite", async({page}) =>{
// //creating browser instance

// const browser =await chromium.launch({headless:false});

// // Browser Instance

// const browserInstance = await browser.newContext(
//     {
//         recordVideo: { 
//             dir: 'video/'}
//     }
// );

// // Page
// const page= await browserInstance.newPage();

// Navigate to page
// await page.goto("https://www.thewarehouse.co.nz/", {waitUntil: 'domcontentloaded'});
//await expect.soft(page).toHaveTitle("theWearhouse"); //Soft Assertions

//Expect library for assertion
await expect(page).toHaveTitle("The Warehouse NZ | Everyday Low Prices - Kiwi Owned");
await expect(page).toHaveURL("https://www.thewarehouse.co.nz/");

// Hover 
await page.locator("data-test-id=category-root").hover();
await  expect(page.locator("data-test-id=category-root")).toBeVisible();

//await  expect(page.locator("data-test-id=category-root")).not.toBeVisible(); // To test negative scenario

await page.locator('.mega-menu-content-wrapper >> #category-homegarden');

await page.locator("text=Furniture").click();


});

test.afterEach(async({page}) => {
    await page.screenshot({path: 'Sceenshots/Wearhouse.png'})
    await page.close();

})