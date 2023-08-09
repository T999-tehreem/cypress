describe('Task 3', () => {
    it('should open the website', () => {
        // Use the cy.visit() command to open the URL
        cy.visit('https://demoqa.com');
    });
});

describe('Task 3 (API Call)', () => {
    it('GET Call', () => {
        cy.request('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574')
            .its('status')
            .should('equal', 200)
    });
});