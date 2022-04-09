/// <reference types="cypress" />
it("page works", () => {
  cy.visit("/");
  cy.contains("¿Qué estás buscando hoy?").should("be.visible");
});

describe('Search Product', () => {
  beforeEach(()=> {
    cy.visit("/");
  })

  it("search iphone with enter", () => {
    cy.get("input").eq(0).type("iphone {enter}");
  });
  
  it("search mouse with click on icon", () => {
    cy.get("input").eq(0).type("mouse");
    cy.get('[data-testid="search-button"]').click();  
  });  
})

describe('Card Details', () => {
  it("Select Details Card", () => {
    cy.visit("/");
    cy.get("input").eq(0).type("mouse");
    cy.get('[data-testid="search-button"]').click();
    cy.contains('div', 'Ver detalles').click()
  });  
})

describe('Api', () => {
  it('get products status 200', () => {
    cy.request('/product/').as('product');
    cy.get('@product').then(response => {
        expect(response.status).to.eq(200)
    });
  })
})