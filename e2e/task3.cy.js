import data  from "../fixtures/task3Fixture.json"

describe('Cowlar task  3', () => {
  

  it("intercept Api call succesfully", () => {

    //verifying tool qa page
    cy.get('header > a > img').should('have.attr', 'src', '/images/Toolsqa.jpg')

    //clicking on book store application
    cy.get(".card-body").contains("Book Store Application").click()
//verifying the book store page
    cy.get(".main-header").contains("Book Store").should("be.visible")

    //clicking on the book store tab under book store application
  

  cy.get(':nth-child(6) > .element-list > .menu-list > #item-2 > .text').contains("Book Store").click()
   

  // verifying the book store title
  cy.get(".main-header").contains("Book Store").should("be.visible")

// intercepting the api call before clicking the book which make that api call what i have to intercept
cy.intercept(
  "GET",
  `${Cypress.env("apiurl")}`,
).as("apiCheck");

  // clicking on the understanding ecma script book 6 

  cy.contains('Understanding ECMA').click()

  // verifying the intercept call 
// resposne payload

  cy.wait("@apiCheck").then((interception) => {
   
    console.log(interception, "intercept response")
    expect(interception.response.body).to.deep.equal(data);
  });
 
  //verifyig the specific detail of book
  //verifing the title
  cy.get('#title-wrapper > .col-md-9').contains("Understanding ECMAScript 6").should("be.visible")

  //verifying the author
  cy.get('#author-wrapper > .col-md-9 > #userName-value').contains("Nicholas C. Zakas").should("be.visible")
   })

  })
