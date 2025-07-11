//cypress code - sopec file
// <reference types="Cypress"/>
describe('My First Test Suite', () => {
  it('My First Test Case', () => {
   // expect(true).to.equal(true)
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
   cy.get('.search-keyword').type('ca');
   cy.wait(2000);
   cy.get('.products').find('.product').should('have.length', 4);
   cy.get('.products').find('.product').each(($e1) => {
        const textVeg = $e1.find('h4.product-name').text();
        if(textVeg.includes('Cashews')) {
            cy.wrap($e1).find('button').click();
        }
   });
  })
})

