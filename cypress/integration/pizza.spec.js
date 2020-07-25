describe("Testing Lambda Eats", () => {
    it('Renders Pizza', () => {
        cy.visit('http://localhost:3000/')
      })
    
    it("adds text to box", () => {
      cy.visit('http://localhost:3000/pizza') 
      cy.get("#special").type("Nothing").should("have.value", "Nothing")
    })
    

    it("selects more than one topping", () => {
      cy.visit('http://localhost:3000/pizza') 
      cy.get("#pep").click().should('have.checked', true)
      cy.get("#on").click().should('have.checked', true)
    })
    

    it("can order a pizza", () => {
      cy.visit('http://localhost:3000/pizza')
      cy.get("#open").type("Andrew")
      cy.get("#selector").select("medium")
      cy.get("#pep").click()
      cy.get("#special").type("Nothing")
      cy.get("#order").click()
      cy.url().should("include", "/complete")
    })
})