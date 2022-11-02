/// <reference types="cypress" />

describe('login page tests', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php')

    })
  
    it('should successfully be on the page', () => {

        cy.url().should('contain', 'http://automationpractice.com/index.php')
    })
  
  })
