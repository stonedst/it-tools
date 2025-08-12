import { test, expect } from '@playwright/test';

test.describe('Tool - Bmi calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/bmi-calculator');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Bmi calculator - IT Tools');
  });

  test('', async ({ page }) => {

  });
});