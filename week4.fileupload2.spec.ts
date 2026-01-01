import test,{expect} from "@playwright/test";

test.only
("fileupload practise",async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("username").fill('dilipkumar.rajendran@testleaf.com');
    await page.getByLabel("password").fill("TestLeaf@2025");
    await page.locator("#Login").click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveTitle(/Salesforce/);
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home");
    await page.locator(".slds-r9").click();

    await page.getByText("View All").nth(3).click();
     await page.getByPlaceholder("Search apps or items...").fill("Accounts");
     await expect(page.locator("//mark[text()='Accounts']")).toBeVisible({timeout:90000});
    await page.locator("//mark[text()='Accounts']").click();
    await page.locator("//div[text()='New']").click();
    await page.locator("[name='Name']").fill("Gowtham1");
    await page.locator("(//button[@role='combobox'])[1]").click();
    await page.locator("//span[text()='Prospect']").click();
    await page.locator("(//button[@role='combobox'])[2]").click();
    await page.locator("//span[text()='Banking']").click();
   
    await page.locator("[name='SaveEdit']").click();
     await page.waitForTimeout(5000);
const fileChoose=page.waitForEvent('filechooser');
     await page.locator("(//*[text()='Upload Files'])[2]").click();
        const fileupload=await fileChoose;
        await fileupload.setFiles("TestFiles/sample.txt");
        await page.waitForTimeout(5000);







})