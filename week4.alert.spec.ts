import test,{expect} from "@playwright/test";

test("alert handling", async ({ page }) => {

page.on("dialog",alerttype=>{

    if(alerttype.type()==='alert'){

        alerttype.dismiss();
    }
    else if(alerttype.type()==='confirm'){

        alerttype.accept();
    }
})
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
await page.frameLocator("[id=iframeResult]").locator("//button[text()='Try it']").click();
  await page.waitForTimeout(4000);
  await expect(page.frameLocator("[id=iframeResult]").getByText("You pressed OK!")).toBeVisible();







})