import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pan.utiitsl.com/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('heading', { name: 'PAN Card for Indian Citizen/' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: ' Click to Apply' }).first().click();
  const page1 = await page1Promise;
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Apply for New PAN Card (Form' }).click();
  const page2 = await page2Promise;
  await page2.locator('#status').selectOption('P');
  await page2.locator('#pancardMode').first().check();
  await page2.getByRole('menuitem', { name: 'Submit' }).click();
  await page2.locator('.ui-widget-overlay').click();
  await page2.getByRole('button', { name: 'Ok' }).click();
  await page2.locator('#nameTitle').selectOption('1');
  await page2.getByRole('textbox', { name: 'First Name' }).click();
  await page2.getByRole('textbox', { name: 'First Name' }).fill('Mageshkumar');
  await page2.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page2.getByRole('textbox', { name: 'Last Name/Surname' }).click();
  await page2.getByRole('textbox', { name: 'Last Name/Surname' }).fill('Subbiayan');
  await page2.getByRole('textbox', { name: 'Last Name/Surname' }).press('Tab');
  await page2.locator('#othNameFlag').selectOption('N');
  await page2.getByRole('textbox', { name: 'DD/MM/YYYY' }).click();
  await page2.getByRole('link', { name: '15' }).click();
  await page2.getByRole('textbox', { name: 'DD/MM/YYYY' }).click();
  await page2.getByLabel('Select year').selectOption('1987');
  await page2.getByRole('textbox', { name: 'DD/MM/YYYY' }).selectOption('1987');
  await page2.getByRole('link', { name: '15' }).click();
  await page2.locator('#addrFlag').selectOption('B');
  await page2.locator('#resState').selectOption('29');
  await page2.locator('#offState').selectOption('29');
  await page2.pause()
});