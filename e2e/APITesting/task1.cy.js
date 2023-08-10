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
    cy.get('.custom-control').first().click(); // Select Male
    cy.get('#userNumber').type('0123456789');
    // Date of Birth is left as default
    cy.get('#subjectsInput').type('Computer Science').type('{enter}');
    cy.get('#hobbiesWrapper').contains('Music').click();
    cy.get('#currentAddress').type('Address 1');
    cy.get('#state').click(); // Click the dropdown to open it
    cy.get('.react-select_3_input').type('NCR'); // Type the value you want to search for

    cy.contains('NCR').click(); // Click the option from the dropdown to select it
    cy.get('#city').click(); // Click the dropdown to open it
    cy.get('.react-select_4_input').type('Delhi'); // Type the value you want to search for

    cy.contains('Delhi').click(); // Click the option from the dropdown to select it
    
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
  });