//AJAX = a way for a webpage to get data from the server without refreshing the whole page.
//The page loads first, then some data comes later from the server.
//In testing, we check whether Playwright waits for that data to appear before interacting with it.

import {test, expect} from "@playwright/test";
test('Open website and verify AJAX data loads successfully', async ({ page }) => {
  await page.goto("http://www.uitestingplayground.com/");
  await expect(page.getByRole("link", {name: 'AJAX Data'})).toBeVisible();
  await page.getByRole("link", {name: 'AJAX Data'}).click();
  await expect(page.getByRole("button", {name: 'Button Triggering AJAX Request'})).toBeVisible();
  await page.getByRole("button", {name:'Button Triggering AJAX Request'}).click();
  await expect(page.getByText('Data loaded with AJAX get request.')).toBeVisible({ timeout: 20000 });

});