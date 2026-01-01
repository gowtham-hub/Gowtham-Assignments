import test,{expect} from '@playwright/test';

test("frame handling", async ({ page }) => {
await page.goto("https://leafground.com/frame.xhtml");
let totalFrames=await page.frames();
console.log("Total frames are: "+ totalFrames.length);

 const frame1= totalFrames[1];
 await expect(frame1.locator("#click")).toHaveText("Click Me");
 await frame1.locator("#click").click();

 await expect(frame1.locator("#click")).toHaveText("Hurray! You Clicked Me.");

 
 const frame4= totalFrames[4];
    await expect(frame4.locator("#click")).toHaveText("Click Me");
    await frame4.locator("#click").click();
    await expect(frame4.locator("#click")).toHaveText("Hurray! You Clicked Me.");











});