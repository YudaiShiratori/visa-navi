// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
// ***********************************************************

import "./commands";

const HYDRATION_ERROR_REGEX = /hydrat/i;
const REACT_ERROR_418_REGEX = /Minified React error #418/;
const REACT_ERROR_423_REGEX = /Minified React error #423/;

Cypress.on("uncaught:exception", (err) => {
  if (
    HYDRATION_ERROR_REGEX.test(err.message) ||
    REACT_ERROR_418_REGEX.test(err.message) ||
    REACT_ERROR_423_REGEX.test(err.message)
  ) {
    return false;
  }
});
