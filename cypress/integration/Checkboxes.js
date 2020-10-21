describe('Checkboxes ', function() {
    it('Handling Checkboxes', function() {
        cy.visit(`https://the-internet.herokuapp.com/checkboxes`);

        cy.get('input[type="checkbox"]').first().check()
        cy.get('input[type="checkbox"]').first().should('be.checked')

        cy.get('input[type="checkbox"]').last().check()
        cy.get('input[type="checkbox"]').last().should('be.checked')

        cy.get('input[type="checkbox"]').first().uncheck()
        cy.get('input[type="checkbox"]').first().should('not.be.checked')

        cy.get('input[type="checkbox"]').last().uncheck()
        cy.get('input[type="checkbox"]').last().should('not.be.checked')               
         
      })
    
  })