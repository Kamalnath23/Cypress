//cypress code - sopec file
// <reference types="Cypress"/>
describe('My First Test Suite', () => {
  it('My First Test Case', () => {
   // expect(true).to.equal(true)
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
   cy.get('.search-keyword').type('ca');
   cy.wait(2000);
   cy.get('.products').find('.product').should('have.length', 4);
   cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
  })
})

