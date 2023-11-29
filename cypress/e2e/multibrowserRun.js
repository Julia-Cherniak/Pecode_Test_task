const cypress = require('cypress');

const spec = 'cypress/e2e/*';

cypress.run({
    spec,
    browser: 'chrome'
});

cypress.run({
    spec,
    browser: 'firefox:dev'
});

cypress.run({
    spec,
    browser: 'electron'
});
