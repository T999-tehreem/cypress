describe('Cowlar task  2', () => {
 

  it("Resize", () => {
      cy.contains("Interactions").click();
      cy.contains("Interactions").should("be.visible");
  
      cy.contains("Elements");
      cy.contains("Forms");
      cy.contains("Alerts, Frame & Windows");
      cy.contains("Widgets");
      cy.contains("Interactions");
      cy.contains("Book Store Application");
      cy.wait(4000);
      
      cy.contains("Interactions").click();
      cy.wait(4000);
      cy.contains("Resizable").click();
      
      cy.get(".react-resizable-handle").eq(0).should("exist");
  
      cy.get(".react-resizable-handle").eq(1).should("exist");
  
      cy.get("#resizableBoxWithRestriction").then(($box) => {
          // Get the height and width using .height() and .width() functions
          const initheight = $box.height();
          const initwidth = $box.width();
        expect(initheight).to.equal(198.222222);
        expect(initwidth).to.equal(198.222222);
      });
  
      cy.get("#resizableBoxWithRestriction")
        .trigger("mousedown", { button: 0 })
        .trigger("mousemove", { clientX: 500, clientY: 300 })
        .trigger("mouseup", { force: true });
  
      cy.get("#resizableBoxWithRestriction").then((box) => {
        const resizedHeight = box.height();
        const resizedWidth = box.width();
        expect(resizedHeight).to.be.within(150, 300);
        expect(resizedWidth).to.be.within(150, 500);
      });
  
      cy.get("#resizable").then((box) => {
        const initialHeight = box.height();
        const initialWidth = box.width();
        expect(initialHeight).to.equal(198.222222);
        expect(initialWidth).to.equal(198.222222);
      });
  
      cy.get("#resizable")
        .trigger("mousedown", { button: 0 })
        .trigger("mousemove", { clientX: 550, clientY: 350 })
        .trigger("mouseup", { force: true });
  
      cy.get("#resizable").then((box) => {
        const resizedHeight = box.height();
        const resizedWidth = box.width();
        expect(resizedHeight).to.be.within(150, 300);
        expect(resizedWidth).to.be.within(150, 500);
      });
    });
  


  })