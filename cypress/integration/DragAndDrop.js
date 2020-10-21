import '@4tw/cypress-drag-drop'

describe('Drag and Drop', function() {
    it('Drag and Drop ', function() {
        cy.visit(`https://the-internet.herokuapp.com/drag_and_drop`);

        cy.get('#column-a').drag('#column-b')

        cy.get('#column-b').drag('#column-a')
        
      })
      
  })