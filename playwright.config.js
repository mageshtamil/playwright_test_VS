// @ts-check
import { chromium, defineConfig, devices, expect } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout:40000, //common timeouts
  expect:
  {
    timeout:5000 //only for expect assertions
  },
  //reporter :'html',
  reporter: [
    ['line'],
    ['allure-playwright'],
  ],
 
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    browserName:'chromium',
    headless:false,
    screenshot:'on',
    //trace: 'on', trace for alll items(pass or fail)
    trace: 'retain-on-failure',// trace for only failures
       grep: /@web/
  },

  
});

module.exports = config  

