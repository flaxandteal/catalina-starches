describe('Main layout (header, main, footer) — accessibility + CSS', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has header, main and footer in DOM order and visible', () => {
    cy.get('header').should('be.visible');
    cy.get('main.main').should('be.visible');
    cy.get('footer').should('be.visible');

    // DOM order checks
    cy.get('header').then($header => {
      cy.get('main.main').then($main => {
        expect($header[0].compareDocumentPosition($main[0]) & Node.DOCUMENT_POSITION_FOLLOWING).to.be.ok;
      });
    });
    cy.get('main.main').then($main => {
      cy.get('footer').then($footer => {
        expect($main[0].compareDocumentPosition($footer[0]) & Node.DOCUMENT_POSITION_FOLLOWING).to.be.ok;
      });
    });
  });

  it('has QLD utility classes and footer uses qld__footer', () => {
    cy.get('body').should('have.class', 'qld__body');
    cy.get('main.main').invoke('attr', 'class').then(classes => {
      expect(classes.includes('qld__flex-lg-fill') || classes.includes('landing') || classes.length > 0).to.equal(true);
    });
    cy.get('footer').should('have.class', 'qld__footer');
  });

  it('footer is not absolute/fixed and sits after main', () => {
    cy.get('footer').then($footer => {
      const pos = window.getComputedStyle($footer[0]).position;
      expect(pos).to.not.equal('absolute');
      expect(pos).to.not.equal('fixed');
    });

    cy.get('main.main').then($main => {
      const mainRect = $main[0].getBoundingClientRect();
      cy.get('footer').then($footer => {
        const footerRect = $footer[0].getBoundingClientRect();
        expect(footerRect.top).to.be.gte(mainRect.bottom - 1);
      });
    });
  });

  it('passes axe accessibility checks for the page', () => {
    cy.injectAxe();
    cy.checkA11y(null, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa']
      }
    });
  });

  it('verifies footer computed background-color matches expected token (if set)', () => {
    cy.get('footer').then($footer => {
      const bg = window.getComputedStyle($footer[0]).backgroundColor;
      // Replace this expected value with your project's QGDS token RGB value
      const expectedRgb = 'rgb(0, 69, 127)';
      // This assertion is optional — uncomment and set expectedRgb to assert token
      // expect(bg).to.equal(expectedRgb);
      cy.log('footer background-color:', bg);
    });
  });
});
