# Pecode_Test_task

This repository contains end-to-end (E2E) tests for Pecode_Test_task using Cypress.

## Prerequisites
You need to have Node.js and npm installed.
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation
### 1. Copy the project from github:
```
https://github.com/Julia-Cherniak/Pecode_Test_task.git
```
### 2. Navigate to the project directory in the terminal.

### 3. Install node packeges:
```
npm install
```

## Running Tests
### Interactive Mode
Run the following command to open Cypress in interactive mode:
```
npm test
```

Headless Mode with Chrome
To run tests in headless mode using Chrome, use the following command:
```
npm run test:run:chrome
```

For multibrowser run:
```
node cypress/e2e/multibrowserRun.js
```