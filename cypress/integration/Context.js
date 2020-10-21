import '@4tw/cypress-drag-drop'

describe('Drag and Drop', function() {
    it('Drag and Drop ', function() {
      cy.visit(`https://the-internet.herokuapp.com/add_remove_elements/`);

      cy.contains("Add Element").click()
      cy.wait(2000)

      cy.contains("Add Element").click()
      cy.wait(2000)

      cy.contains("Add Element").click()
      cy.wait(2000)
      
      cy.contains("Add Element").click()
      cy.wait(2000)

      cy.contains("Add Element").click()
      cy.wait(2000) 

      cy.get('[class="added-manually"]').eq(4).should('be.visible')
      cy.get('[class="added-manually"]').each(($el, index, $list) => {
       
        cy.wrap($el).click()
       
        cy.wait(2000) 

        //cy.log(cy.get('[class="added-manually"]').find('$el'))

        cy.log(cy.get('[class="added-manually"]').should('not.have.length', 0))

        //cy.get('[class="added-manually"]').should('not.have.length', 0);

        //cy.get('[class="added-manually"]').find('[class="added-manually"]').should('have.length', 4)

        //cy.get('[class="added-manually"]').
        //cy.log(cy.get('[class="added-manually"]').find('[class="added-manually"]'))
      })

        
      })
      
  })