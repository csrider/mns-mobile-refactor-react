# About This Portfolio Project

This original proof-of-concept work is being made available as part of my professional portfolio.

*Note: This repo was created fresh, and files manually copied, so as to sanitize the commit history; so disregard that aspect of Git for this.*

## What Is This, Exactly?

This is the redacted and sanitized version of the MessageNet mobile-UI v3 candidate that I wrote in the React framework while employed there, as a proof-of-concept for the next major version (a complete refactoring) of the ***MessageNet Connections Mobile*** application.

*MessageNet Connections* is a successful and long-lived commercial/proprietary communication and messaging platform first deployed in the mid-1990s, and is now deployed at major institutions across the United States. "*MessageNet Connections Mobile*" is basically the unified and mobile-capable user-interface to that platform, that I built to modernize the product and lubricate the company's first venture into mobile devices.

*Connections Mobile* allows users to have easy access to messages they want to launch, and to be able to control the *Connections* platform in the palm of their hand (in addition to modernizing and unifying a single interface across all devices)... it's not constrained to just "mobile."

This project is what would have eventually become the refactored production version of the next major version of an established product (*Connections Mobile* currently exists in production as v2).

## Why Does This Repo Exist?

While the original purpose of this project was as an **actual** proof-of-concept for management, decision-makers, and customers to review, this particular repo's purpose is to demonstrate the work I have done in React, as part of my portfolio.

**This entire project is all my actual / original work for the original proof-of-concept purpose** (with only sensitive parts necessarily redacted in order to protect MessageNet's intellectual property, along with recent updates to some of the latest libraries --*because it was too tempting and fun... and yes, I'm a dork LOL*).

Having said that, a SIZABLE portion of functionality had to be stripped out and redacted. As time allows, I may continue migrating over some of that. In addition, I would really like to migrate a lot of things to better practices (e.g. converting functional-components to class-components, adopting more best-practices, and implementing more capabilities that React affords --but wasn't feasible to invest in doing for a mere PoC).

## Copyright & Intellectual Property

Even though a lot has been redacted, **this repo DOES contain proprietary code**, and is licenced ONLY to me, solely for the purpose of showcasing my work. It shall not be reproduced or used in any other works.

Additionally, this repo in its current state is not considered finished production code, and does not reveal or expose anything about MessageNet products or their inner-workings. It has been heavily redacted, sanitized, and made mostly into a stand-alone demonstrator application independent of the *Connections* platform and backend. But still, it is proprietary and must be treated as such.

Moreover, it was requested that I start this repo fresh, and distance it from the *MessageNet Connections* platform as much as possible; so to that end, I have refactored in the following manner:
- Spun up an entirely new (latest framework versions) React project.
- Refactored to be as standalone as possible.
- Original back-end connectivity has been stripped out and replaced with local file-based simulation data in the form of a Node-based JSON server applet (see that the json-mock-api's readme file for more details).
- I've also updated most dependencies and libraries (as this project was originally engineered over a year ago, and a lot has changed in frontend development since the original inception.

---

(SOME ORIGINAL MESSAGENET README CONTENTS BELOW)

---

# To-Do

Much of this was able to be migrated over from v2 (based off the "connections-mobile-v2-prod" branch in the main repo), albeit with tweaks in modules and various other things to work nicely with React. However, a LOT is complete refactoring and creating new stuff. For now, just focus on getting the proof-of-concept function for presentation and evaluation of the most basic functionality. React is nice because it handles presentation fluidly and smoothly... it's very efficient in that regard. It also doesn't have a steep learning curve, and it seems like the potential for tech-debt and maintenance headaches is fairly low. Hopefully this future proofs us for a long time. Additionally, we need to continue looking into using React-native for replacing the two native apps, to further reduce our workload and unify the codebase.

## Simple Migration from v2

- Remaining simple and relatively independent class files.
- All the less-independent class files.

## Complex Migration from v2

- Authn/Authz scheme will need to be refactored to leverage React?
- A lot of the previous state-management overhead can leverage React.
- A lot of the caching and optimizations I built may no longer be needed.
- Quite a few presentation/view libraries should be replaced with React ones.

## New Work

- New CI and automated testing (and Git workflows) will need adjusted
- Research any novel React libraries available to add new functionality?

---

(THE DEFAULT CREATE-REACT-APP BOILERPLATE FOLLOWS)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
