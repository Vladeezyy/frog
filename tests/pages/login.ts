import BasePage from '@pages/base'
import { Locator, Page, expect } from '@playwright/test'
import { configuration } from 'env/config'

export default class LoginPage extends BasePage {
    //basic buttons
    readonly createAnAccountBtn: Locator
    readonly continueWithFacebook: Locator
    readonly continueWithGoogle: Locator
    readonly continueWithApple: Locator
    readonly continueWithEmail: Locator
    //google interactions UI buttons
    readonly googleEmail: Locator
    readonly googlePassword: Locator
    readonly googleNextBtn: Locator
    readonly googleTryAgainBtn: Locator
    //validation elements
    readonly welcomeToFaithbaseLabel: Locator
    //simple email login elems
    readonly emailField: Locator
    readonly passwordField: Locator
    readonly continueBtn: Locator

    constructor(page: Page) {
        super(page)
        this.createAnAccountBtn = this.page.locator("//span[contains(text(),'Create An Account / Login')]")
        this.continueWithFacebook = this.page.locator(
            "(//span[contains(concat(normalize-space(text()[1]), ' ', normalize-space(text()[2])), 'Continue with')])[1]"
        )
        this.continueWithGoogle = this.page.locator(
            "(//span[contains(concat(normalize-space(text()[1]), ' ', normalize-space(text()[2])), 'Continue with')])[2]"
        )
        this.continueWithApple = this.page.locator(
            "(//span[contains(concat(normalize-space(text()[1]), ' ', normalize-space(text()[2])), 'Continue with')])[3]"
        )
        this.continueWithEmail = this.page.locator(
            "(//span[contains(concat(normalize-space(text()[1]), ' ', normalize-space(text()[2])), 'Continue with')])[4]"
        )
        this.googleEmail = this.page.locator("//input[@id='identifierId']")
        this.googleNextBtn = this.page.locator("//span[contains(text(),'Next')]")
        this.googlePassword = this.page.locator("//input[@type='password']")
        this.welcomeToFaithbaseLabel = this.page.locator("//h2[text()='Welcome to Faithbase']")
        this.googleTryAgainBtn = this.page.locator("//div/span[text()='Try again']")
        this.emailField = this.page.locator("//input[@id='email']")
        this.passwordField = this.page.locator("//input[@id='password']")
        this.continueBtn = this.page.locator("//button[@type='submit']//div[@class='flex items-center justify-center']")
    }

    async logInWithGoogle() {
        await this.createAnAccountBtn.click()
        await this.continueWithGoogle.click()
        await this.googleEmail.fill(configuration.GOOGLE_USER_EMAIL)
        await this.googleNextBtn.click()
        // await this.page.waitForTimeout(3000)
        // if (await this.page.getByRole('link', { name: 'Try again' })) {
        //     await this.page.getByRole('link', { name: 'Try again' }).click()
        //     await this.googleEmail.fill(configuration.GOOGLE_USER_EMAIL)
        //     await this.googleNextBtn.click()
        await this.googlePassword.fill(configuration.GOOGLE_USER_PASS)
        await this.googleNextBtn.click()
        await expect(this.welcomeToFaithbaseLabel).toBeVisible()
    }

    async logInWithEmail() {
        await this.createAnAccountBtn.click()
        await this.continueWithEmail.click()
        await this.emailField.fill(configuration.CREATOR_EMAIL)
        await this.passwordField.waitFor() //wait for element because this field appears after entering the email
        await this.passwordField.fill(configuration.CREATOR_PASS)
        await this.continueBtn.click()
        await this.page.waitForURL('https://dev.myfaithbase.com/321')
    }

    async goto(path = ''): Promise<void> {
        await super.goto(path)
    }
}
