// Client Side Delay 
// Client-side delay = browser JavaScript takes time to process and show an element.
// The element appears after around 15 seconds.
// We should not use hard wait like waitForTimeout().
// Use expect(...).toBeVisible({ timeout: 20000 }).
// timeout = maximum time Playwright can wait.
// Playwright continues as soon as the element appears.

import {test, expect} from "@playwright/test";
test('Open website and verify client side data loads successfully', async ({ page }) => {
  await page.goto("http://www.uitestingplayground.com/");
  await expect(page.getByRole("link", {name: 'Client Side Delay'})).toBeVisible();
  await page.getByRole("link", {name: 'Client Side Delay'}).click();
  const button = page.getByRole('button', { name: 'Button Triggering Client Side Logic'});

  await expect(button).toBeVisible();
  await button.click();
   await expect(page.getByText('Data calculated on the client side.')).toBeVisible({timeout:20000});
});