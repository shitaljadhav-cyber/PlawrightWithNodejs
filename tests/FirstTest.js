const{chromium} = require('@playwright/test');

(async() =>{
//creating browser instance

const browser =await chromium.launch({headless:true});

// Browser Instance

const browserInstance = await browser.newContext();

// Pagef
const page= await browserInstance.newPage();

// Navigate to page
await page.goto("https://google.com");

//CSS SELECTOR
await page.locator("#APjFqb").click(); // Id = APjFqb

//XPath 
await page.click("//textarea[@id='APjFqb']");

//Has Text
await page.click("a:has-text('Gmail')");
await page.click("text=Gmail");

//find it by decendent locator
await page.localStorage('"text=Gmail", "text=mail"') // Either or, one will selected with is matching

await browser.close();

})();
