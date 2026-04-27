import test,{chromium,firefox,webkit} from "@playwright/test";
test('launch chromium', async()=>{
    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(3000)
    console.log(await page.title())
    console.log(page.url())
}
)