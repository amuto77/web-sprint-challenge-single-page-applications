describe("Testing Lambda Eats", () => {
    it('Renders Pizza', () => {
        cy.visit('http://localhost:3000/')
      })
    
    it("adds text to box")
    cy.get("#special").type("Nothing").should("have.value", "Nothing")
})