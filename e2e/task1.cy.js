import data from "../fixtures/task1Fixture.json";
import { formVerify,formattedDate } from "../support/helper";

describe('Cowlar task  1', () => {


  it("Fill Practice Form", () => {
//setting viewport as this page is not responsive
cy.viewport(2048,1080)

   //clicking on the forms button as this element doesn't have testif so getting by class
   cy.get(".card-body").contains("Forms").click()

   //clicking on the practice form button
   cy.get(" .menu-list > #item-0").contains("Practice Form").click()

   //Entering the form inputs
   cy.get('#firstName').type("Cowlar")
   cy.get('#lastName').type("Developer")
   cy.get('#userEmail').type("qaengineer@cowlar.com")
  //  cy.get('#genterWrapper').contains("Male")Or
   cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
   cy.get('#userNumber').type("0123456789")
   cy.get('.subjects-auto-complete__value-container').type("Computer science ") 
   cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click()
   cy.get('#currentAddress').type("Address 1")
  //not able to select the option as this element is not selectable and ave issue while loading options
   cy.get('#state').type("NCR{enter}")
   cy.get('#city').type("Delhi{enter}")
  
cy.get("#submit").click({force:true})

//verifying the content of form

//below line is to insert the today date at required index of fixture
let newData = [...data.formdata];
newData.splice(4, 0, formattedDate);
cy.log(formattedDate,"checkSSSSS")
formVerify(newData)
//closing the modal
cy.get("#closeLargeModal").click({force:true})

  })
})

