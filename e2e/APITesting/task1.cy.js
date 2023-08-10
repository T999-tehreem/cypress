describe('Automating Form Submission', () => {
  it('should fill out the form and verify modal data', () => {
    // Step 1: Visit the URL
    cy.visit('https://demoqa.com/');
    
    // Step 2: Click on Forms Button
    cy.contains('Forms').click();
    
    // Step 3: Click on Practice Form button
    cy.contains('Practice Form').click();
    
    // Step 4-5: Fill out the form
    cy.get('#firstName').type('Cowlar');
    cy.get('#lastName').type('Developer');
    cy.get('#userEmail').type('qaengineer@cowlar.com');
    cy.get('#label').check();
    cy.get('#userNumber').type('0123456789');
    cy.get('#dateOfBirthInput').type('2000-01-01');
    cy.get('.subjects-auto-complete__value-container').type('Computer Science').type('{enter}');
    cy.get('#hobbies-checkbox').check();
    cy.get('#currentAddress').type('Address 1');
    cy.get('#state').type('NCR').type('{enter}');
    cy.get('#city').type('Delhi').type('{enter}');
    
    // Step 6: Click on Submit button
    cy.contains('Submit').click();
    
    // Step 7: Verify modal data
    cy.contains('Cowlar');
    cy.contains('Developer');
    cy.contains('qaengineer@cowlar.com');
    cy.contains('Male');
    cy.contains('0123456789');
    cy.contains('2000-01-01');
    cy.contains('Computer Science');
    cy.contains('Music');
    cy.contains('Address 1');
    cy.contains('NCR');
    cy.contains('Delhi');
    
    // Step 8: Close the Modal
    cy.get('#closeLargeModal').click();
    });
  })