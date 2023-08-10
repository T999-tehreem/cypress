describe('Verify Box Resizing', () => {
  it('Visits DemoQA, navigates to Resizable tab and verifies box resizing', () => {
    // Visit the URL
    cy.visit('https://demoqa.com/');

    // Verify that Interaction Page is displayed and Sidebar contains the correct tabs
    cy.contains('Interactions').click();
    cy.contains('Elements');
    cy.contains('Forms');
    cy.contains('Alerts, Frame & Windows');
    cy.contains('Widgets');
    cy.contains('Interactions');
    cy.contains('Book Store Application');

    // Click on Resizable Tab
    cy.contains('Resizable').click();

    // Verify that Resizable page is displayed
    cy.contains('Resizable');

    // Verify the current height and width of Box 1
    cy.get('.ui-resizable-handle.ui-resizable-se.ui-icon.ui-icon-gripsmall-diagonal-se')
      .should('have.attr', 'style', 'bottom: 1px; right: 1px;');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'height', '200px');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'width', '200px');

    // Resize Box 1 and verify dimensions
    cy.get('.ui-resizable-handle.ui-resizable-se.ui-icon.ui-icon-gripsmall-diagonal-se')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 250, clientY: 350 })
      .trigger('mouseup', { force: true });
    cy.get('#resizableBoxWithRestriction').should('have.css', 'height', '300px');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'width', '400px');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'min-height', '150px');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'min-width', '150px');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'max-height', '300px');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'max-width', '500px');

    // Verify Box 2 is resizable
    cy.get('#resizable').trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 300, clientY: 450 })
      .trigger('mouseup', { force: true });
    cy.get('#resizable').should('have.css', 'height', '250px');
    cy.get('#resizable').should('have.css', 'width', '400px');
  });
})