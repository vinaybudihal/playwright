import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://example.com/');
  await expect(page.getByRole('heading')).toContainText('Example Domain');
  await expect(page.getByRole('link', { name: 'More information...' })).toBeVisible();
  await page.goto('https://www.iana.org/help/example-domains');
  await expect(page.getByRole('link', { name: 'Domains', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'IANA-managed Reserved Domains' })).toBeVisible();
  await page.getByRole('link', { name: 'IANA-managed Reserved Domains' }).click();
});
