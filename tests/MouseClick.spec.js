//mouse click
import { test, expect } from '@playwright/test';

test('Physical mouse click', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/click');

  const button = page.locator('#badButton');

  //boundingBox() gives the button/element's size and position, NOT the whole screen size.
  const box = await button.boundingBox();

  if (box) {
    await page.mouse.click(
      box.x + box.width / 2,
      box.y + box.height / 2
    );
  }
});