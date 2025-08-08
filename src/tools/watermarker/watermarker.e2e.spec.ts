import { test, expect } from '@playwright/test';

test.describe('Tool - Watermarker', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/watermarker');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Watermarker - IT Tools');
  });

  test('', async ({ page }) => {

  });
});