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
When it loads, you should see the home page.


## Running the Storybook editor

To launch the Storybook editor, run:

```
npm run storybook
```

This command starts the editor at `http://localhost:6006/`.
When it loads, you should see components on the left navbar,
and the main part of the page should be a component editor.


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

TBD


## Running the first round of visual tests

TBD


## Detecting visual changes in subsequent tests

TBD


## Learning more

TBD
