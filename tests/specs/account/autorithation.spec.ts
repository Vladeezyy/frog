import { test } from '@fixtures/basePages'

test.describe('Sign In testing', () => {
    test.beforeEach(async ({ loginPage }) => {
        await test.step('Go to login page', async () => {
            await loginPage.goto()
        })
    })

    test('Sign in via Google', async ({ loginPage }) => {
        await test.step('Log in', async () => {
            await loginPage.logInWithGoogle()
        })
    })

    test.only('Sign in via Email', async ({ loginPage }) => {
        await test.step('Log in', async () => {
            await loginPage.logInWithEmail()
        })
    })

    //!FACEBOOK LOGIN IS NOT WORKING YET
    // test('Sign in via Facebook', async ({ loginPage }) => {
    //     await test.step('Log in', async () => {
    //         await loginPage.logInWithGoogle()
    //     })
    // })

    // test('Sign in via Apple', async ({ loginPage }) => {
    //     await test.step('Log in', async () => {
    //         await loginPage.logInWithGoogle()
    //     })
    // })
    // test.afterEach(async ({ page }, testInfo) => {
    //     if (testInfo.status !== testInfo.expectedStatus) {
    //         const screenshotPath = testInfo.outputPath(`failure.png`)
    //         testInfo.attachments.push({ name: 'screenshot', path: screenshotPath, contentType: 'image/png' })
    //         await page.screenshot({ path: screenshotPath, timeout: 5000 })
    //     }
    // })
})
