/// <reference types="Cypress" />

context("Issue #6482", () => {
  it("Visit the application login screen.", () => {
    cy.visit("http://localhost:5000/launch-application?code=123");
  });
});
