
describe('DigestAuthentication', function() {
    it('DigestAuthentication ', function() {
        var httpsBase = 'https://'
        var appURL = 'the-internet.herokuapp.com/digest_auth'
        var username ='admin'
        var password ='admin'

        var finalURL = httpsBase + username + ":" + password + "@" + appURL
        cy.log(finalURL)
        cy.visit(finalURL)

        cy.get('h3').contains('Digest Auth').should('be.visible')
        cy.get('h3').should('have.text', 'Digest Auth')

        cy.get('p').contains('Congratulations! You must have the proper credentials.').should('be.visible')
        cy.get('p').contains( 'Congratulations! You must have the proper credentials.')
        
      })
      
  })