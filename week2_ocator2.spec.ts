
import test,{expect} from "@playwright/test";

//assignment 1
test("Locator practise2",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator("#username").fill("Demosalesmanager");
await page.locator("[name='PASSWORD']").fill("crmsfa");
await page.locator(".decorativeSubmit").click();
 

await page.locator("#label").click();  
await page.waitForTimeout(3000);

await page.locator("text='Leads'").click(); 
await page.locator("text='Find Leads'").nth(1).click();
await page.locator("[name='firstName']").nth(2).fill("Gowtham");
await page.locator(".x-btn-text").nth(6).click();//find leads button

await page.locator(".linktext").nth(3).click(); //click on first result
await page.locator(".subMenuButton").nth(2).click(); //click edit
await page.locator("[name='companyName']").nth(1).fill("Appple");
await page.locator("[name='annualRevenue']").fill("70LPA");
await page.locator("[name='departmentName']").fill("software technology");
await page.locator("[name='description']").fill("Working in software technology");
await page.locator("[name='submitButton']").nth(0).click();
//verify updates
await expect(page.locator('#viewLead_companyName_sp')).toContainText('Appple');
await expect(page.locator('#viewLead_annualRevenue_sp')).toContainText('70');
await expect(page.locator('#viewLead_departmentName_sp')).toHaveText('software technology');
//await expect(page.locator('#viewLead_companyName_sp')).toHaveText('Appple');

console.log(await page.title());

})