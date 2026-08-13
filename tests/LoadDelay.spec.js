import { test, expect } from '@playwright/test';

test('Open website and open Dynamic ID page', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');
  await expect(page.getByRole('link', {name:'Load Delay'})).toBeVisible();
  await page.getByRole('link', {name:'Load Delay'}).click();
  await expect(page.getByRole('button',{name:'Button Appearing After Delay'})).toBeVisible();
  await page.getByRole('button',{name:'Button Appearing After Delay'}).click();
});

// Imagine you click Load Delays, but the server takes 5 seconds to send the page. ⏳
// The page does not load immediately because the server response is slow.
// Your test should wait patiently instead of immediately trying to click the button.
// Playwright normally does a lot of this waiting automatically.
// Scenario: Go to Home → click Load Delays → click the button on that page.
// The challenge checks whether your test waits until the page is ready.
// Main lesson: Websites can be slow, so automation must wait for the page to become ready before interacting.