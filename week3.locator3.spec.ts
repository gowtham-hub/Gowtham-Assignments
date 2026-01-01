import test,{expect} from "@playwright/test";

test
("Locator practise3",async({page})=>{

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("username").fill('dilipkumar.rajendran@testleaf.com');
    await page.getByLabel("password").fill("TestLeaf@2025");
    await page.locator("#Login").click();
    await page.waitForTimeout(5000);

    await expect(page).toHaveTitle(/Salesforce/);
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home");
    await page.locator(".slds-r9").click();

    await page.getByText("View All").nth(3).click();
    await page.getByPlaceholder("Search apps or items...").fill("Service");

    await page.locator("(//mark[text()='Service'])[1]").click();
    await page.locator("a[class='slds-context-bar__label-action dndItem']").nth(4).click(); 
    await page.getByRole("button",{name:'New'}).click();
    await page.locator("input[name='Name']").fill("gowth");
    await page.locator("button[name='SaveEdit']").click();

    await page.locator("span[class='toastMessage slds-text-heading--small forceActionsText']").isVisible();
})