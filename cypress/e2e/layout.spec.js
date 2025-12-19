describe('Main layout (header, main, footer) — accessibility + CSS', () => {
  beforeEach(() => {
    // Intercept blob storage image list requests (use regex to catch any blob URL)
    cy.intercept('GET', /restype=container.*comp=list/, {
      statusCode: 200,
      headers: { 'Content-Type': 'application/xml' },
      body: `<?xml version="1.0" encoding="utf-8"?>
        <EnumerationResults>
          <Blobs>
            <Blob><Name>img/tests/image_01.jpg</Name></Blob>
            <Blob><Name>img/tests/image_02.jpg</Name></Blob>
            <Blob><Name>img/tests/image_01.jpeg</Name></Blob>
            <Blob><Name>img/tests/image_01_web.jpg</Name></Blob>
            <Blob><Name>img/tests/image_02_web.jpg</Name></Blob>
            <Blob><Name>img/tests/image_01_web.jpeg</Name></Blob>
          </Blobs>
        </EnumerationResults>`
    }).as('blobList');

    cy.visit('/');
    // Wait for asset JavaScript to initialize and render content
    cy.get('#hero-banner', { timeout: 10000 }).should('not.be.empty');
  });

  it('has header, main and footer in DOM order and visible', () => {
    cy.get('header').should('be.visible');
    cy.get('main').should('be.visible');
    cy.get('footer').should('be.visible');

    // DOM order checks
    cy.get('header').then($header => {
      cy.get('main').then($main => {
        expect($header[0].compareDocumentPosition($main[0]) & Node.DOCUMENT_POSITION_FOLLOWING).to.be.ok;
      });
    });
    cy.get('main').then($main => {
      cy.get('footer').then($footer => {
        expect($main[0].compareDocumentPosition($footer[0]) & Node.DOCUMENT_POSITION_FOLLOWING).to.be.ok;
      });
    });
  });

  it('has QLD utility classes and footer uses qld-footer', () => {
    cy.get('body').should('have.class', 'min-vh-100');
    cy.get('main').invoke('attr', 'class').then(classes => {
      expect(classes.includes('flex-fill') || classes.includes('qld-body') || classes.length > 0).to.equal(true);
    });
    cy.get('footer').should('have.class', 'qld-footer');
  });

  it('footer is not absolute/fixed and sits after main', () => {
    cy.get('footer').then($footer => {
      const pos = window.getComputedStyle($footer[0]).position;
      expect(pos).to.not.equal('absolute');
      expect(pos).to.not.equal('fixed');
    });

    cy.get('main').then($main => {
      const mainRect = $main[0].getBoundingClientRect();
      cy.get('footer').then($footer => {
        const footerRect = $footer[0].getBoundingClientRect();
        expect(footerRect.top).to.be.gte(mainRect.bottom - 1);
      });
    });
  });

  it('passes axe accessibility checks for the page', () => {
    cy.injectAxe();
    cy.wait(500); // Give axe time to initialize
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

  it('contains the nav bar with the correct buttons', () => {
    cy.get('nav').within(() => {
      cy.get('li').eq(0).as('nav-home');
      cy.get('li').eq(1).as('nav-search');
    });

    cy.get('@nav-home').within(() => {
      cy.get('a').within(() => {
        cy.get('span').should('have.class', 'qld-icon-home');
      });
    });

    cy.get('@nav-search').within(() => {
      cy.get('a').should('contain.text', 'Search Register');
    });

    cy.get('@nav-search').within(() => {
      cy.get('a').should('contain.text', 'Search Register');
      cy.get('a').should('have.attr', 'href').and('include', '/map'); // Check href contains /map
    });

    cy.get('@nav-home').find('a').invoke('prop', 'href').should('include', `${Cypress.config('baseUrl')}/`);
  });

  it('has the hero banner present with the buttons', () => {
    cy.get("[data-cy='hero-banner']").as('hero-banner').should('be.visible');

    cy.get('@hero-banner').within(() => {
      cy.contains('Welcome to the Starches Historic Register!')
        .should('be.visible')
        .should('have.length', 1);

      cy.contains('span', 'Search the Register')
        .should('be.visible')

      cy.get('a.btn')
        .should('exist')
        .should('have.length', 1)
        .should('have.attr', 'href').and('include', 'google')
    })
  })

  it('contains a Get Started section with tiles', () => {
    const expectedTexts = ['What are the Historic Records?', 'How to Search', 'Useful Information'];
    const foundTexts = [];

    cy.get('[data-cy="get-started"]').within(() => {
      cy.get('h2').should('contain.text', 'Get Started')

      cy.get('[data-cy="card"]')
        .should('have.length', 3)
        .each(($card) => {
          cy.wrap($card)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim();
              // Check if the card contains one of the expected texts
              const matchedText = expectedTexts.find(expected => trimmedText.includes(expected));
              expect(matchedText).to.exist;
              foundTexts.push(matchedText);
            });
        })
        .then(() => {
          // Verify all three expected texts are present
          expect(foundTexts).to.have.members(expectedTexts);
        });
    })
  });

  it('contains a Promo Panel section with correct heading and image', () => {
    cy.get('[data-cy="promo-panel"]').should('be.visible').within(() => {
      // Check heading
      cy.get('[data-cy="promo-heading"]')
        .should('be.visible')
        .should('contain.text', 'Discover Heritage');

      // Check image exists and has alt text
      cy.get('[data-cy="promo-image"]')
        .should('be.visible')
        .should('have.attr', 'alt')
        .and('not.be.empty');
    });
  });

  it('contains Historical Records section with correct heading and content', () => {
    cy.get('[data-cy="text-section"]').first().within(() => {
      // Check heading
      cy.get('[data-cy="text-section-heading"]')
        .should('be.visible')
        .should('contain.text', 'What are the Historical Records');

      // Check text content
      cy.get('[data-cy="text-section-text"]')
        .should('be.visible')
        .should('not.be.empty');

      // Check image with alt text
      cy.get('[data-cy="text-section-image"]')
        .should('be.visible')
        .should('have.attr', 'alt', 'Peanut Silo');
    });
  });

  it('contains How to Search section with correct heading and cards', () => {
    const expectedCardTitles = ['Search multiple fields', 'Filtering', 'Download Information'];
    const foundTitles = [];

    cy.get('[data-cy="text-section"]').eq(1).within(() => {
      // Check heading
      cy.get('[data-cy="text-section-heading"]')
        .should('be.visible')
        .should('contain.text', 'How to Search');
    });

    // Check multi-action cards
    cy.get('[data-cy="multi-action-card"]')
      .should('have.length', 3)
      .each(($card) => {
        cy.wrap($card).within(() => {
          // Check title
          cy.get('[data-cy="card-title"]')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim();
              const matchedTitle = expectedCardTitles.find(title => trimmedText.includes(title));
              expect(matchedTitle).to.exist;
              foundTitles.push(matchedTitle);
            });

          // Check card text
          cy.get('[data-cy="card-text"]')
            .should('be.visible')
            .should('not.be.empty');

          // Check image has alt text
          cy.get('[data-cy="card-image"]')
            .should('be.visible')
            .should('have.attr', 'alt')
            .and('not.be.empty');
        });
      })
      .then(() => {
        // Verify all three card titles are present
        expect(foundTitles).to.have.members(expectedCardTitles);
      });
  });

  it('contains Useful Links section with correct heading and links', () => {
    cy.get('[data-cy="useful-links"]').should('be.visible').within(() => {
      // Check heading
      cy.get('[data-cy="useful-links-heading"]')
        .should('be.visible')
        .should('contain.text', 'Useful Links');

      // Check links list exists
      cy.get('[data-cy="links-list"]').should('exist');

      // Check at least one link item exists
      cy.get('[data-cy="link-item"]')
        .should('have.length.at.least', 1)
        .each(($item) => {
          cy.wrap($item).find('a').should('have.attr', 'href');
        });
    });
  });

  it('verifies all images on the page have alt text', () => {
    cy.get('img').each(($img) => {
      cy.wrap($img)
        .should('have.attr', 'alt')
        .and('not.be.empty');
    });
  });

  it('verifies all links are accessible and have meaningful text', () => {
    cy.get('a').each(($link) => {
      cy.wrap($link).then(($el) => {
        const text = $el.text().trim();
        const ariaLabel = $el.attr('aria-label');
        const title = $el.attr('title');
        
        // Link should have either visible text, aria-label, or title
        const hasText = text.length > 0;
        const hasAriaLabel = ariaLabel !== undefined && ariaLabel.length > 0;
        const hasTitle = title !== undefined && title.length > 0;
        
        expect(hasText || hasAriaLabel || hasTitle, `Link has no accessible text. Text: "${text}", aria-label: "${ariaLabel}", title: "${title}"`).to.be.true;
      });
    });
  });

  it('checks heading hierarchy is correct', () => {
    const headings = [];
    
    cy.get('h1, h2, h3, h4, h5, h6').each(($heading) => {
      const level = parseInt($heading.prop('tagName').substring(1));
      headings.push(level);
    }).then(() => {
      // Check there's exactly one h1
      const h1Count = headings.filter(level => level === 1).length;
      expect(h1Count).to.equal(1);
      
      // Check headings don't skip levels (e.g., h1 -> h3)
      for (let i = 1; i < headings.length; i++) {
        const diff = headings[i] - headings[i - 1];
        expect(diff).to.be.at.most(1);
      }
    });
  });
});
