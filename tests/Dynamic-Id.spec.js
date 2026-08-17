
import { test, expect } from '@playwright/test';

test('Open website and open Dynamic ID page', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');

  await expect(page).toHaveTitle("UI Test Automation Playground");
  await page.getByRole('link', { name: 'Dynamic ID' }).click();
await expect(page.getByRole('heading', { name: 'Dynamic ID' })).toBeVisible();
  await page.locator('.btn.btn-primary').click();
});
