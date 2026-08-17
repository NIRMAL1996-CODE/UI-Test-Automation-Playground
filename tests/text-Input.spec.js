import { test, expect } from '@playwright/test';

test('Open website and open Dynamic ID page', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');

  await expect(page).toHaveTitle("UI Test Automation Playground");
  await page.getByRole('link', { name: 'Text Input' }).click();

await expect(page.getByRole('heading', { name: 'Text Input' })).toBeVisible();
await expect(page.getByRole('textbox', { name: 'Set New Button Name' })).toBeVisible();
await page.getByRole('textbox', { name: 'Set New Button Name' }).click();

await page.getByRole('textbox', { name: 'Set New Button Name' }).fill("Click");


await expect(page.locator(".btn.btn-primary")).toBeVisible();
await page.locator(".btn.btn-primary").click();
await expect(page.locator(".btn.btn-primary")).toHaveText("Click");



});