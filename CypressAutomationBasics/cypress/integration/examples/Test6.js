//cypress --> end to end applucation use case
describe('My First Test Suite', () => {
  it('My First Test Case', () => {
   // expect(true).to.equal(true)
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
   cy.get('.search-keyword').type('ca');
   cy.wait(2000);
    cy.get('.products').as('productLocator');  //alias
   cy.get('@productLocator').find('.product').each(($e1) => {
        const textVeg = $e1.find('h4.product-name').text();
        if(textVeg.includes('Cashews')) {
            cy.wrap($e1).find('button').click();
        }
   });

   cy.get('.cart-icon > img').click();
   cy.contains('PROCEED TO CHECKOUT').click();
   cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click();
  })
})

