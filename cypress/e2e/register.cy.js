/// <reference types="cypress" />

describe('Register Page', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')

    })
  
    it('should successfully be on the page', () => {

        cy.url().should('contain', 'http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('h3').should('contain', 'Create an account')
    })

    
  
  })
