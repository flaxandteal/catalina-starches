import 'cypress-axe';

// Custom command: check accessibility for a selector and fail on serious violations
Cypress.Commands.add('checkA11yRegion', (selector = null) => {
  cy.injectAxe();
  cy.checkA11y(selector, {
    runOnly: {
      type: 'tag',
      values: ['wcag2a', 'wcag2aa']
    }
  });
});
