## Demo guide

This is a guide for demo steps.


### Preparation

1. Open project in Visual Studio Code
2. Delete extra test runs from Applitools dashboard
3. Run React app
   * Run `npm start`
   * Load main page at http://localhost:3000/
4. Run Storybook viewer
   * Run `npm run storybook`
   * Load main page at http://localhost:6006/


### I. React app: Why visually test components?

1. Let's learn!
2. Components
3. What if a component changes?
4. What if it's a huge change?
5. We need visual testing
6. Storybook + Applitools


### II. Storybook viewer: Our components

1. Let's look at Storybook components to visually test
2. Show components
   * Buttons
   * Header
   * ScrollButton
   * TextInput


### III. Applitools setup

1. Let's see how to test those components with Applitools Eyes
2. https://auth.applitools.com/users/register
   * You must sign up for an Applitools account
   * You can sign up for free
   * You must add your `APPLITOOLS_API_KEY` to your environment
     * I added it to my bash profile
     * You can also add it to the front of your test command
3. https://eyes.applitools.com/
   * The Applitools dashboard initially looks empty
4. Local project
   * You must `npm install --save-dev @applitools/eyes-storybook`
     * Show `@applitools/eyes-storybook` in `package.json`
   * You can configure setting in `applitools.config.js`
     * Point out the batch name

### IV. Running visual component tests

1. Let's run tests with Applitools Eyes to set a baseline
   * Add `ignoreBaseline: true` to `applitools.config.js` to wipe out previous baselines
   * Run `npx eyes-storybook`
   * All components should run and report "New"
   * Show the batch in the Applitools dashboard
   * Open one and show that it is the baseline
2. Run tests again for comparisons
   * Remove `ignoreBaseline: true` from `applitools.config.js`
   * Rerun
   * All components now show "Passed"
   * Show the batch in the Applitools dashboard
   * Open one and show that it is the same as the baseline
3. Make a visual change
   * Change button color in `src/stories/button.css`
   * Rerun
   * Show failures in the Applitools dashboard
   * Compare current to baseline
   * Preview different match levels
   * Thumbs-up the changes and rerun the tests
4. Make another visual change
   * Change the header title in `src/stories/Header.jsx`
   * Remove `justify-content: space-between;` from `src/stories/header.css`
   * Rerun
   * Show failures in the Applitools dashboard
   * Compare current to baseline
   * Preview different match levels
   * Thumbs-down the changes
   * Revert the code and rerun tests
5. Run multiple browsers
   * Add to `applitools.config.js`:
     ```
     browser: [
       { width: 1024, height: 768, name: "chrome" },
       { width: 1024, height: 768, name: "firefox" }
     ]
     ```
   * Rerun tests
   * Show new results in Applitools dashboard
