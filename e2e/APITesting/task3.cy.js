describe('Verify Book Details API Response', () => {
  it('Intercepts GET request for book details and verifies the response', () => {
      // Visit DemoQA website and navigate to Book Store tab
      cy.visit('https://demoqa.com/');
      cy.contains('Book Store Application').click();
      cy.contains('Book Store').click();

      // Click on the book named Understanding ECMAScript 6
      cy.contains('Understanding ECMAScript 6').click();

      // Get the API request url for the book details page
      cy.intercept({
        method: 'GET',
        url: '**/BookStore/v1/Book?ISBN=9781593277574'
      }, (req) => {
        req.reply({
          statusCode: 200,
          body: {
              "isbn": "9781593277574",
            "title": "Understanding ECMAScript 6",
            "subTitle": "The Definitive Guide for JavaScript Developers",
            "author": "Nicholas C. Zakas",
            "publish_date": "2016-09-03T00:00:00.000Z",
            "publisher": "No Starch Press",
            "pages": 352,
            "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
            "website": "https://leanpub.com/understandinges6/read"
          }
        })
      }).as('postdata')
      cy.wait('@postdata').its('response.body')
  });
});