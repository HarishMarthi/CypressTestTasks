let data = require('../fixtures/data.json');
let user = Cypress.env("user") || "admin"
let pass = Cypress.env("pass") || "admin"
describe('My First Test', function() {
    it('Verify if basic auhentication works', function() {
        cy.visit(`https://${user}:${pass}@the-internet.herokuapp.com/basic_auth`);
        cy.get('div>p').should(($div) => {
            const text = $div.text()
            expect(text).to.contain('Congratulations');
          })
      })
      it('Verify if add/remove button works', function() {
      cy.visit('/add_remove_elements/');
      cy.get('div.example>button').click();
      cy.get('div#elements>button').should('be.visible');
      cy.get('div#elements>button').click();
      cy.get('div#elements>button').should('not.be.visible');
    })
  })

  