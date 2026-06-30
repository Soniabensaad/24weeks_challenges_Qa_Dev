import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/Week1/test.html');

  const locator =  page.getByRole('button', { name : 'Press me'});
  await locator.click();
});
