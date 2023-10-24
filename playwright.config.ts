import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
    testDir: './tests/specs/account/',
    outputDir: 'reports/test-results/',
    fullyParallel: false,
    // forbidOnly: !!process.env.CI,
    // retries: process.env.CI ? 2 : 0,
    // workers: process.env.CI ? 1 : undefined,

    reporter: [
        [
            'allure-playwright',
            {
                detail: true,
                outputFolder: 'allure-results',
                suiteTitle: false,
            },
        ],
    ],

    use: {
        baseURL: 'https://dev.myfaithbase.com/',
        viewport: { width: 1920, height: 1080 },
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                //viewport: { width: 1920, height: 1080 },
                launchOptions: {
                    slowMo: 2000,
                    args: ['--disable-blink-features=AutomationControlled', '--disable-gpu', '--start-maximized'],
                },
            },
        },
    ],
})
