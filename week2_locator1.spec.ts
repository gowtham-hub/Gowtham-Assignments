
import test,{expect} from "@playwright/test";

//assignment 1
test("Locator practise",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator("#username").fill("Demosalesmanager");
await page.locator("[name='PASSWORD']").fill("crmsfa");
await page.locator(".decorativeSubmit").click();
 

await page.locator("#label").click();  
await page.waitForTimeout(3000);

await page.locator("text='Leads'").click();  
await page.locator("text='Create Lead'").nth(0).click(); 
await page.waitForTimeout(3000);

//fill the form
await page.locator("[name='companyName']").nth(1).fill("IBM");
await page.locator("[name='firstName']").nth(2).fill("Gowtham");
await page.locator("[name='lastName']").nth(2).fill("ganesh");
await page.locator("[name='personalTitle']").fill("Mr");
await page.locator("[name='generalProfTitle']").fill("Developer");
await page.locator("[name='annualRevenue']").fill("50LPA");
await page.locator("[name='departmentName']").fill("IT");
await page.locator("[name='primaryPhoneNumber']").nth(3).fill("789658990");
await page.locator("[name='submitButton']").click();
await page.waitForTimeout(5000);

await expect(page.locator('#viewLead_companyName_sp')).toContainText('IBM');
await expect(page.locator('#viewLead_firstName_sp')).toHaveText('Gowtham');
await expect(page.locator('#viewLead_lastName_sp')).toHaveText('ganesh');
await expect(page.locator('#viewLead_statusId_sp')).toHaveText('Assigned');
await expect(page).toHaveTitle(/View Lead|opentaps CRM/);













}
)