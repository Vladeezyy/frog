import { test } from '@fixtures/basePages'

test.describe('Sign In testing', () => {
    test('Sign in via Google', async ({ loginPage }) => {
        await test.step('Go to login page', async () => {
            await loginPage.goto()
        })
        await test.step('Log in', async () => {
            await loginPage.logInWithGoogle()
        })
    })

    test('Sign in via Email', async ({ loginPage }) => {
        await test.step('Go to login page', async () => {
            await loginPage.goto()
        })
        await test.step('Log in', async () => {
            await loginPage.logInWithEmail()
        })
    })

    //!FACEBOOK LOGIN IS NOT WORKING YET
    // test('Sign in via Facebook', async ({ loginPage }) => {
    //     await test.step('Go to login page', async () => {
    //         await loginPage.goto()
    //     })
    //     await test.step('Log in', async () => {
    //         await loginPage.logInWithGoogle()
    //     })
    // })

    // test('Sign in via Apple', async ({ loginPage }) => {
    //     await test.step('Go to login page', async () => {
    //         await loginPage.goto()
    //     })
    //     await test.step('Log in', async () => {
    //         await loginPage.logInWithGoogle()
    //     })
    // })
})
