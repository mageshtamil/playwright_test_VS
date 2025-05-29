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
  retries :1,  //number of time test reexecuted when failed
  worker :2, // Playwright defaultly parrlael execute the cases, if we not givne its consider 5 worker
  timeout:40000, //common timeouts
  expect:
  {
    timeout:5000 //only for expect assertions
  },
  reporter :'html',
projects :
[
  { name : "Safari",
    use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    browserName:'webkit',
    headless:false,
    screenshot:'on',
    video:'retain-on-failure', // video will save in report for failures
    //trace: 'on', trace for alll items(pass or fail)
    trace: 'retain-on-failure',// trace for only failures
    //...devices['iPhone 15 Pro Max'],  // running on mobile devices
    viewport:{width:720, height:720}, // browser size dimension to test web responsiveness
    ignoreHttpsErrors:true, // ignore ssl certficate error
    //permissions:['gelocation'] // to give permision for google
        },
 },

 { 
  name : "Chrome",
  use: {
  /* Base URL to use in actions like `await page.goto('/')`. */
  // baseURL: 'http://127.0.0.1:3000',

  /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  browserName:'chromium',
  headless:false,
  screenshot:'on',
  //trace: 'on', trace for alll items(pass or fail)
  trace: 'retain-on-failure'// trace for only failures
      },
}
  
]
});

module.exports = config  

