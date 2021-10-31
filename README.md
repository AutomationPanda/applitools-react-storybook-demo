# Visually Testing Storybook Components in React with Applitools Eyes

This repository contains a demo project for visually testing
[Storybook](https://storybook.js.org/) components
in a [React](https://reactjs.org/) front-end app
with [Applitools Eyes](https://applitools.com/products-eyes/).

What does all that mean?

* [React](https://reactjs.org/) is a JavaScript library for building websites.
* [Storybook](https://storybook.js.org/) is a tool for creating components to build UIs for websites.
* [Visual testing](https://applitools.com/visual-testing/) detects visual changes in UIs,
  like improper formatting or missing elements.
* [Applitools Eyes](https://applitools.com/products-eyes/) automates visual testing to help folks
  quickly identify real problems while skipping acceptable changes.

The best part is that Applitools Eyes will perform visual testing on Storybook components
*without* needing to write any extra test code yourself!

This README walks through the demo.
The React app's home page also explains visual testing.
Please clone the project and follow along!


## Why test components visually?

Web apps are full of small, reusable pieces called *components*.
Things like buttons, headers, and even bigger things like calendars can be components.
Components enable developers to create uniform UIs with maximal reusability.
Storybook is a framework for building components.

Components must work correctly - functionally *and* visually.
If a component has a problem, it could affect many views within an app and ruin user experience.
Testing components individually is a great way to mitigate risk by isolating problems at their source.
Visual testing can quickly detect if one component changed in a problematic way.

Ordinarily, visual testing might sound painful:
you need to capture baseline screenshots for all components,
capture screenshots again when code changes,
and compare baselines to updates to find any dubious differences.
That seems like a lot of work!
However, Applitools makes visual testing a breeze.
Applitools Eyes integrates with Storybook and frameworks like React
to automatically take screenshots and perform comparisons.
All it needs is a little configuration,
and it doesn't need you to write any tests yourself.


## Setting up this project

Make sure you have recent versions of
[Git](https://git-scm.com/),
[Node.js](https://nodejs.org/),
and [npm](https://www.npmjs.com/) installed.

Clone the repository:

```
git clone https://github.com/AutomationPanda/applitools-react-storybook-demo.git
```

Then, install the dependencies:

```
cd applitools-react-storybook-demo
npm install
```

Make sure everything installs successfully.
(Note: This project was initially created using
[Create React App](https://github.com/facebook/create-react-app).)


## Running the React app

To launch the React app, run:

```
npm start
```

This command starts the app at `http://localhost:3000/`.
When it loads, you should see the home page,
which concisely explains the need for visual component testing.


## Running the Storybook viewer

To launch the Storybook viewer, run:

```
npm run storybook
```

This command starts the viewer at `http://localhost:6006/`.
When it loads, you should see components on the left navbar,
and the main part of the page should be a component viewer.


## Setting up Applitools testing

There are a few setup steps required for visual testing with Applitools.


### Applitools account

First, you need to create an Applitools account.
You can sign up for free [here](https://auth.applitools.com/users/register).
Once you have an account, you can log into your
[Applitools testing dashboard](https://eyes.applitools.com/).


### Applitools npm package for Storybook

Second, you need to install the
[eyes-storybook](https://www.npmjs.com/package/@applitools/eyes-storybook) package.
This package should have been installed when you ran `npm install` earlier.
However, if you want to install it in other projects, use the following command:

```
npm install --save-dev @applitools/eyes-storybook
```


### Applitools API key

Third, you need to set your Applitools API key in your environment.
Applitools should have sent you an email with your API key when you created your account.
You can also access your API key through the Applitools dashboard.

On Windows:

```
set APPLITOOLS_API_KEY=<your-api-key>
```

On Linux or macOS (using bash):

```
export APPLITOOLS_API_KEY=<your-api-key>
```


### Applitools configuration

Fourth, you should configure Applitools configurations in the `applitools.config.js` file.
For example, you might want to set `batchName` to a descriptive name for your test suite,
since this name will appear in the Applitools dashboard.
The [npm package page](https://www.npmjs.com/package/@applitools/eyes-storybook)
provides documentation on `applitools.config.js` settings under the
[Advanced configuration](https://www.npmjs.com/package/@applitools/eyes-storybook#advanced-configuration)
section.


## Creating a baseline for Storybook components

The first step in visual component testing is creating a set of *baseline* screenshots for each component.
The baseline images represent the "good" or "proper" visual state for the components.
When visual component tests run in the future,
they will compare the baselines to new screenshots to detect any changes.

Capture baselines by running the visual tests with this command:

```
npx eyes-storybook
```

In the console output, you should see the tests discover all Storybook stories
and capture "New" results for each.
When you log into the [Applitools dashboard](https://eyes.applitools.com/),
You should see a new test batch with screenshots for all components.
The status of each test should say "New" here, too.


## Running the first round of visual tests

Once baselines are captured, you can run comparison tests for each component.
Rerun the visual tests again without making any changes.
Use the same command to launch tests:

```
npx eyes-storybook
```

Now, the console output and the new batch in the dashboard should say "Passed" instead of "New" for each story.
Each test result in the dashboard can also be manually inspected next to the baseline.


## Detecting visual changes in subsequent tests

Let's make a change to one of the components.
In `src/stories/button.css`, change this:

```css
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
```

To this:

```css
.storybook-button--primary {
  color: white;
  background-color: #f80606;
}
```

Save the file, and rerun the visual tests.
This time, Applitools Eyes detects that a few components are different!
These tests are marked as "Unresolved" because someone needs to decide if they are okay or not okay.
You can log into the dashboard to see the changes firsthand: blue buttons became red.
You can then decide if they are okay ("thumbs-up") or not okay ("thumbs-down").
You can also change the preview match level when comparing images.

Mark the "Unresolved" tests as "Failed" by clicking the thumbs-down icon.
Then, undo the button change in `src/stories/button.css` and rerun the tests.
They should pass again.


## Testing multiple browsers

Visual tests can run against multiple browser types.
Add the following setting to `applitools.config.js` to test both Chrome and Firefox:

```javascript
module.exports = {
  // ...
  browser: [
    { width: 1024, height: 768, name: "chrome" },
    { width: 1024, height: 768, name: "firefox" }
  ]
}
```

Rerun the tests.
There should be "New" results for the new browser types!
Applitools Eyes treats each browser as a unique test with a unique result
because visuals may be different between browser types.


## Learning more

This demo only scratches the surface of what Applitools enables with visual testing.
Check out the [Applitools website](https://applitools.com/) to learn more.
