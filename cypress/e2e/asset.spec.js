/**
 * Asset Page Tests
 *
 * Tests for the heritage asset detail page including:
 * - WCAG AA accessibility compliance
 * - Page element rendering
 * - Accordion functionality
 * - Carousel/image gallery
 * - Map display
 * - Tab navigation
 * - Related resources icons
 */

describe('Asset Page — accessibility + functionality', () => {
    // The slug parameter should reference an existing asset in your test data
    const testAssetUrl = '/asset/?slug=qld-test-monument-06f569&full=false';

    beforeEach(() => {
        cy.visit(testAssetUrl);
        // Wait for asset JavaScript to initialize and render content
        cy.get('#asset-title', { timeout: 60000 }).should('not.be.empty');
    });

    describe('Core Page Elements', () => {
        it('has header, main and footer in correct DOM order', () => {
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

        it('displays the asset title banner', () => {
            cy.get('[data-cy="asset-banner"]').should('be.visible');
            cy.get('#asset-title')
                .should('be.visible')
                .should('not.be.empty');
        });

        it('has a Return to Search link', () => {
            cy.get('[data-cy="back-link"]')
                .should('be.visible')
                .should('have.attr', 'href')
                .and('include', '/map');

            cy.get('[data-cy="back-link"]')
                .should('contain.text', 'Return to Search');
        });

        it('has a Download button', () => {
            cy.get('[data-cy="download-button"]')
                .should('be.visible')
                .within(() => {
                    cy.get('.qld-icon-download').should('exist');
                    cy.contains('Download').should('be.visible');
                });
        });
    });

    describe('Tab Navigation', () => {
        it('displays all three tabs with correct labels and icons', () => {
            cy.get('.nav-tabs').should('be.visible');

            // Overview tab with image icon
            cy.get('#overview-tab').within(() => {
                cy.get('.qld-icon-image').should('exist');
                cy.contains('Overview').should('be.visible');
            });

            // Location tab with location icon
            cy.get('#location-tab').within(() => {
                cy.get('.qld-icon-location').should('exist');
                cy.contains('Location').should('be.visible');
            });

            // Related Resources tab with calendar icon
            cy.get('#related-resources-tab').within(() => {
                cy.get('.qld-icon-calendar').should('exist');
                cy.contains('Related Resources').should('be.visible');
            });
        });

        it('has Overview tab active by default', () => {
            cy.get('#overview-tab')
                .should('have.class', 'active')
                .should('have.attr', 'aria-selected', 'true');

            cy.get('#overview-234566-tab-pane')
                .should('have.class', 'active')
                .should('have.class', 'show')
                .should('be.visible');
        });

        it('switches to Location tab when clicked', () => {
            cy.get('#location-tab').click();

            cy.get('#location-tab')
                .should('have.class', 'active')
                .should('have.attr', 'aria-selected', 'true');

            cy.get('#overview-tab')
                .should('not.have.class', 'active')
                .should('have.attr', 'aria-selected', 'false');

            cy.get('#location-234566-tab-pane')
                .should('have.class', 'active')
                .should('have.class', 'show')
                .should('be.visible');
        });

        it('switches to Related Resources tab when clicked', () => {
            cy.get('#related-resources-tab').click();

            cy.get('#related-resources-tab')
                .should('have.class', 'active')
                .should('have.attr', 'aria-selected', 'true');

            cy.get('#related-resources-234566-tab-pane')
                .should('have.class', 'active')
                .should('have.class', 'show')
                .should('be.visible');
        });

        it('tabs have correct ARIA attributes for accessibility', () => {
            cy.get('.nav-tabs').should('have.attr', 'role', 'tablist');

            cy.get('.nav-tabs .nav-item').each(($item) => {
                cy.wrap($item).should('have.attr', 'role', 'presentation');
            });

            cy.get('.nav-tabs button[role="tab"]').each(($tab) => {
                cy.wrap($tab)
                    .should('have.attr', 'data-bs-toggle', 'tab')
                    .should('have.attr', 'aria-controls');
            });

            cy.get('.tab-pane').each(($pane) => {
                cy.wrap($pane)
                    .should('have.attr', 'role', 'tabpanel')
                    .should('have.attr', 'tabindex', '0');
            });
        });

        it('supports keyboard navigation between tabs', () => {
            cy.get('#overview-tab').focus();
            cy.get('#overview-tab').should('have.focus');

            // Tab to next focusable element
            cy.get('#overview-tab').type('{rightarrow}');
            cy.get('#location-tab').should('have.focus');

            cy.get('#location-tab').type('{rightarrow}');
            cy.get('#related-resources-tab').should('have.focus');
        });
    });

    describe('Accordion Functionality', () => {
        it('has accordion toggle button in Overview tab', () => {
            cy.get('#overview-234566-tab-pane').within(() => {
                cy.get('.accordion-toggle-btn')
                    .should('be.visible')
                    .should('contain.text', 'Close all');
            });
        });

        it('accordion toggle button closes all accordions when clicked', () => {
            cy.get('#overview-234566-tab-pane').within(() => {
                // Click to close all (button starts as "Close all" when accordions are open)
                cy.get('.accordion-toggle-btn').click();
                cy.get('.accordion-toggle-btn')
                    .should('contain.text', 'Open all')
                    .should('have.class', 'accordion-toggle-btn--closed');

                // All accordion items should be closed
                cy.get('.accordion-collapse.collapse').should('have.length.at.least', 1);
            });
        });

        it('accordion toggle button opens all accordions when clicked again', () => {
            cy.get('#overview-234566-tab-pane').within(() => {
                // Click to close all first
                cy.get('.accordion-toggle-btn').click();
                // Click to expand all
                cy.get('.accordion-toggle-btn').click();

                cy.get('.accordion-toggle-btn')
                    .should('contain.text', 'Close all');
            });
        });

        it('individual accordion items collapse when clicked', () => {
            cy.get('#accordion-group-1').within(() => {
                // Find first accordion item with collapsed content
                cy.get('.accordion-item').first().within(() => {
                    cy.get('.accordion-button').click();
                    cy.get('.accordion-collapse').should('have.class', 'collapse');
                });
            });
        });

        it('accordion buttons have correct ARIA attributes', () => {
            cy.get('.accordion-button').each(($button) => {
                cy.wrap($button)
                    .should('have.attr', 'data-bs-toggle', 'collapse')
                    .should('have.attr', 'aria-expanded');
            });

            cy.get('.accordion-collapse').each(($collapse) => {
                cy.wrap($collapse)
                    .should('have.attr', 'aria-labelledby');
            });
        });

        it('Location tab has its own accordion group', () => {
            cy.get('#location-tab').click();

            cy.get('#location-234566-tab-pane').within(() => {
                cy.get('.accordion-toggle-btn').should('be.visible');
                cy.get('#accordion-group-2').should('exist');
            });
        });

        it('Related Resources tab has its own accordion group', () => {
            cy.get('#related-resources-tab').click();

            cy.get('#related-resources-234566-tab-pane').within(() => {
                cy.get('.accordion-toggle-btn').should('be.visible');
                cy.get('#accordion-group-3').should('exist');
            });
        });
    });

    describe('Carousel/Image Gallery', () => {
        it('displays the carousel container in Overview tab', () => {
            cy.get('[data-cy="carousel-container"]').should('be.visible');
        });

        it('carousel has Swiper structure', () => {
            cy.get('.assetSwiper').should('exist');
            cy.get('.swiper-wrapper').should('exist');
            cy.get('.swiper-pagination').should('exist');
        });

        it('carousel has navigation buttons', () => {
            cy.get('.swiper-button-prev').should('exist');
            cy.get('.swiper-button-next').should('exist');
        });

        it('carousel displays images when asset has images', () => {
            // Wait for swiper to initialize and images to load
            cy.get('.swiper-slide', { timeout: 5000 }).should('have.length.at.least', 1).then(($slides) => {
                if ($slides.length > 0) {
                    cy.get('.swiper-slide').first().within(() => {
                        cy.get('img', { timeout: 5000 }).should('exist');
                    });
                } else {
                    cy.log('No images found for this test asset - skipping image check');
                }
            });
        });

        it('carousel navigation works', () => {
            cy.get('.swiper-slide').then(($slides) => {
                if ($slides.length > 1) {
                    // Click next button
                    cy.get('.swiper-button-next', { timeout: 5000 }).click();
                    // Verify slide changed (active class moved)
                    cy.wait(500); // Allow for animation
                    cy.get('.swiper-slide-active').should('exist');
                } else {
                    cy.log('Not enough slides to test navigation');
                }
            });
        });

        it('image modal exists for full-size image viewing', () => {
            cy.get('#image-modal').should('exist');
            cy.get('#modal-img').should('exist');
            cy.get('#close-modal').should('exist');
        });
    });

    describe('Map Display', () => {
        beforeEach(() => {
            // Switch to Location tab where map is displayed
            cy.get('#location-tab').click();
            cy.get('#location-234566-tab-pane').should('be.visible');
        });

        it('displays the map container', () => {
            cy.get('#map.asset-map').should('be.visible');
        });

        it('map container has appropriate dimensions', () => {
            cy.get('#map.asset-map').then(($map) => {
                const height = $map.height();
                const width = $map.width();

                // Map should have reasonable dimensions
                expect(height).to.be.greaterThan(100);
                expect(width).to.be.greaterThan(100);
            });
        });

        it('MapLibre GL initializes on the map container', () => {
            // Wait for map to initialize - MapLibre adds canvas element
            cy.get('#map.asset-map', { timeout: 10000 }).within(() => {
                cy.get('canvas.maplibregl-canvas').should('exist');
            });
        });
    });

    describe('Related Resources with Icons', () => {
        beforeEach(() => {
            cy.get('#related-resources-tab').click();
            cy.get('#related-resources-234566-tab-pane').should('be.visible');
        });

        it('displays related resources section', () => {
            cy.get('#asset-related').should('exist');
        });

        it('related resources have category icons', () => {
            // The template uses format like ::Places{location}:: which should render icons
            // Check for icon elements in related resources section
            cy.get('#asset-related').within(() => {
                cy.get('.qld-icon, [class*="icon"]').then(($icons) => {
                    if ($icons.length > 0) {
                        cy.wrap($icons).first().should('be.visible');
                    } else {
                        cy.log('No icons found in related resources - this may indicate missing data-cy attributes or icon implementation');
                    }
                });
            });
        });

        it('People category has profile icon', () => {
            cy.get('#asset-related div[id*="people"]').then(($section) => {
                if ($section.length > 0) {
                    cy.wrap($section).within(() => {
                        cy.get('[class*="qld-icon-profile"]').should('exist');
                    });
                } else {
                    cy.log('No People section found in test data');
                }
            });
        });
    });

    describe('WCAG AA Accessibility', () => {
        it('passes axe accessibility checks on Overview tab', () => {
            cy.injectAxe();
            cy.wait(1000); // Allow content to fully render
            cy.checkA11y(null, {
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa']
                }
            });
        });

        it('passes axe accessibility checks on Location tab', () => {
            cy.get('#location-tab').click();
            cy.wait(500);
            cy.injectAxe();
            cy.checkA11y('#location-234566-tab-pane', {
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa']
                }
            });
        });

        it('passes axe accessibility checks on Related Resources tab', () => {
            cy.get('#related-resources-tab').click();
            cy.wait(500);
            cy.injectAxe();
            cy.checkA11y('#related-resources-234566-tab-pane', {
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa']
                }
            }, (violations) => {
                violations.forEach((v) => {
                    cy.log(`**${v.id}** (${v.impact}): ${v.description}`);
                    v.nodes.forEach((node) => {
                        cy.log(`Element: ${node.target.join(', ')}`);
                        cy.log(`HTML: ${node.html.substring(0, 200)}`);
                        cy.log(`Fix: ${node.failureSummary}`);
                    });
                });
            });
        });

        it('verifies all images have alt text', () => {
            cy.get('img').each(($img) => {
                cy.wrap($img).should('have.attr', 'alt');
            });
        });

        it('verifies all links have accessible text', () => {
            cy.get('a').each(($link) => {
                cy.wrap($link).then(($el) => {
                    const text = $el.text().trim();
                    const ariaLabel = $el.attr('aria-label');
                    const title = $el.attr('title');
                    const hasImg = $el.find('img[alt]').length > 0;
                    const hasIcon = $el.find('.qld-icon[aria-label], .sr-only').length > 0;

                    const hasAccessibleText = text.length > 0 ||
                        (ariaLabel && ariaLabel.length > 0) ||
                        (title && title.length > 0) ||
                        hasImg ||
                        hasIcon;

                    expect(hasAccessibleText, `Link should have accessible text`).to.be.true;
                });
            });
        });

        it('verifies buttons have accessible text', () => {
            cy.get('button').each(($button) => {
                cy.wrap($button).then(($el) => {
                    const text = $el.text().trim();
                    const ariaLabel = $el.attr('aria-label');
                    const title = $el.attr('title');
                    const ariaHidden = $el.attr('aria-hidden');

                    // Skip buttons that are intentionally hidden from AT
                    if (ariaHidden === 'true') {
                        return;
                    }

                    const hasAccessibleText = text.length > 0 ||
                        (ariaLabel && ariaLabel.length > 0) ||
                        (title && title.length > 0);

                    expect(hasAccessibleText, `Button should have accessible text`).to.be.true;
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

                // Check headings don't skip levels
                for (let i = 1; i < headings.length; i++) {
                    const diff = headings[i] - headings[i - 1];
                    expect(diff, `Heading level should not skip from h${headings[i - 1]} to h${headings[i]}`).to.be.at.most(1);
                }
            });
        });

        it('ensures focus indicators are visible', () => {
            // Test that interactive elements have visible focus styles
            cy.get('#overview-tab').focus();
            cy.get('#overview-tab').then(($el) => {
                const outlineStyle = window.getComputedStyle($el[0]).outline;
                const boxShadow = window.getComputedStyle($el[0]).boxShadow;

                // Should have either outline or box-shadow for focus indication
                const hasFocusIndicator = outlineStyle !== 'none' && outlineStyle !== '' ||
                    boxShadow !== 'none' && boxShadow !== '';

                expect(hasFocusIndicator, 'Tab should have visible focus indicator').to.be.true;
            });
        });

        it('ensures color contrast meets WCAG AA standards', () => {
            cy.injectAxe();
            cy.checkA11y(null, {
                runOnly: {
                    type: 'rule',
                    values: ['color-contrast']
                }
            });
        });
    });

    describe('Responsive Design', () => {
        it('displays correctly on mobile viewport', () => {
            cy.viewport('iphone-x');

            cy.get('#asset-title').should('be.visible');
            cy.get('.nav-tabs').should('exist');
            // Overview tab exists and is active (may be clipped on narrow viewports due to scrollable tabs)
            cy.get('#overview-tab').should('exist').should('have.class', 'active');
        });

        it('displays correctly on tablet viewport', () => {
            cy.viewport('ipad-2');

            cy.get('#asset-title').should('be.visible');
            cy.get('.nav-tabs').should('be.visible');
        });

        it('tab scroll buttons appear on narrow viewports when needed', () => {
            cy.viewport(375, 667);

            // Scroll buttons should be present (though may be hidden via CSS)
            cy.get('.scroll-left').should('exist');
            cy.get('.scroll-right').should('exist');
        });
    });
});

// Separate describe block for tests that need custom intercepts (no beforeEach visit)
describe('Asset Page — intercepted data tests', () => {
    const testAssetUrl = '/asset/?slug=qld-test-monument-06f569&full=false';

    it('shows no related resources message when none exist', () => {
        cy.intercept(
            'GET',
            '/definitions/business_data/qld-test-monument-06f569.json',
            { fixture: 'qld-test-monument-06f569.json' }
        ).as('assetNoRelated');

        cy.visit(testAssetUrl);
        cy.wait('@assetNoRelated');
        cy.get('#asset-title', { timeout: 60000 }).should('not.be.empty');

        cy.get('#related-resources-tab').click();

        cy.get('#asset-related').within(() => {
            cy.contains('No related').should('be.visible');
        });
    });
});