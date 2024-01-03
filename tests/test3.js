import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://customersuccess-uat.oracle.com/genesis-ui/');
  await page.getByLabel('user email text').click();
  await page.getByLabel('user email text').fill('smp-test-dev_ww@oracle.com');
  await page.getByLabel('Log In').click();
  await page.getByLabel('Continue').click();
  await page.goto('https://idcs-login-stage.identity.oraclecloud.com/ui/v1/signin');
  await page.getByPlaceholder('User name or email').click();
  await page.getByPlaceholder('User name or email').fill('smp-test-dev_ww@oracle.com');
  await page.getByLabel('Sign In').click();
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').fill('Smptestdev@123');
  await page.getByLabel('Verify').click();
});
