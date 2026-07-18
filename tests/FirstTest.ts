import {chromium}  from '@playwright/test';

(async() =>{
//creating browser instance

const browser =await chromium.launch({headless:false});

// Browser Instance

const browserInstance = await browser.newContext();

// Page
const page= await browserInstance.newPage();

// Navigate to page
await page.goto("https://google.com");

await browser.close();

})();
