import { test, expect } from '@playwright/test';
test('Open website and open Dynamic ID page', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');

  await expect(page).toHaveTitle("UI Test Automation Playground");
  await page.getByRole('link', { name: 'Scrollbars' }).click();

await expect(page.getByRole('heading', { name: 'Scrollbars' })).toBeVisible();
const button = page.getByRole("button", { name: "Hiding Button" });
await button.scrollIntoViewIfNeeded();
await button.click();
});

// scrollIntoViewIfNeeded() -> If this button is not currently visible on the screen, scroll until it becomes visible.It can handle the required vertical and horizontal scrolling.