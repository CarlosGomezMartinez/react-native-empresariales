/// <reference types="cypress" />

it('works', () => {
    cy.visit('/')
    cy.contains('¿Qué estás buscando hoy?')
      .should('be.visible')  
  })