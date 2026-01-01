import test,{expect} from '@playwright/test';

test("file upload", async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/upload");

await page.locator("#file-upload").setInputFiles("TestFiles/sample.txt");

const fileChooser = page.waitForEvent("filechooser");
await page.locator("[id=drag-drop-upload]").click();
const reult=await fileChooser;
reult.setFiles("TestFiles/image1.jpg");
await page.waitForTimeout(5000);
});

test("file download", async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/download");


const fileChooser = page.waitForEvent("download");
await page.getByText("file.json").click();
const downn=await fileChooser;
await downn.saveAs("Testfiles/"+downn.suggestedFilename());
await page.waitForTimeout(3000);


});

