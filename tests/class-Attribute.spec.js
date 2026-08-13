//check attribute + dialog box 
import {test, expect} from '@playwright/test';
test('Class attribute of an element should identify button when has multiple classes',
  async({page})=>{
await page.goto('http://www.uitestingplayground.com/');
await expect(page).toHaveTitle("UI Test Automation Playground");
await page.getByRole('link', {name : "Class Attribute"}).click();
await expect(page.getByRole('heading', { name: 'Class Attribute' })).toBeVisible();
 page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});
await page.locator('.btn-primary').click();

});
