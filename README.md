# [Cypress Issue #6482](https://www.github.com/cypress-io/cypress/issues/6482)

## Reproducing the issue locally

1. Clone this repo.
2. At the root (cypress-visit-issue), cd into Cypress-Tester.
3. `node install-all.js` - This will install all modules in each package.
4. `npm start` - This will do a React Build and start both Main-Server and Outside-Service
5. `npm run cypress-run` - This will run the Cypress test in the terminal. You can use `npx cypress open` to open the Cypress test runner and pick the `hello.spec.js` test to run as well.
