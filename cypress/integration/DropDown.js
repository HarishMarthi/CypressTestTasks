describe('Dropdown ', function() {
    it('Handling dropdown', function() {
        cy.visit(`https://the-internet.herokuapp.com/dropdown`);

        cy.get('#dropdown').select('1').should('have.value','1')
        cy.wait(2000) 
        cy.get('#dropdown').select('2').should('have.value','2')
        cy.wait(2000) 
       
      })
      

    
  })