import{test,expect} from '@playwright/test';
test('Hidden element Layers', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/hiddenlayers');

  // First click → button becomes green
 await expect(page.locator('#greenButton')).toBeVisible();

 await page.locator('#greenButton').click();

 await expect(page.locator('#blueButton')).toBeVisible();

 // Second click → should fail as green is under the bluebutton so 
await page.locator('#greenButton').click();

});

// We are proving that an element can exist in the DOM but if it is not visible/clickable because another element is covering it, Playwright will fail when you try to click it.A thing can exist underneath another thing, but if it is covered, a real user cannot click it. Green button exists in HTML, but Blue button is covering it on the screen.

// So Playwright says: “I found the Green button, but I cannot physically click it because Blue is on top of it.”
// JavaScript DOM code can directly access an element even if it's hidden/covered.
// Playwright click() checks whether the element is actually visible, reachable, and clickable like a user.
// So Playwright may reject the click if another element is covering it.
//  JS can access it; Playwright checks whether a user can actually interact with it.