const puppeteer = require('puppeteer');

const {join} = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};

// (async () => {
// 	const browser = await puppeteer.launch({
//         headless: 'false', 
//         //  defaultViewport: null,
//         //  ignoreDefaultArgs: ['--disable-extensions'],
//         // args: ["--no-sandbox", '--disable-setuid-sandbox']
//     });
//     // console.log(await browser.version());
// 	// const page = await browser.newPage();   
//     // console.log(page);
// 	// let value = await page.goto('http://www.bigbasket.com/');
// 	// console.log(value);
// 	await browser.close();
// })();

const browserpromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    ignoreDefaultArgs: ['--disable-extensions'],
    args: ["--no-sandbox", '--disable-setuid-sandbox'],
    executablePath: '/usr/bin/chromium-browser'

});

browserpromise
.then((browser)=>{
   let page = browser.newPage();
   return page;
})
.then((page)=>{
    let site = page.goto("https://www.bigbasket.com");

})
.then(())




.catch((error)=>{
    console.log("error = ",error);
})
