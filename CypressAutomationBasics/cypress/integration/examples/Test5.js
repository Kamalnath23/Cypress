//cypress code - sopec file
// <reference types="Cypress"/>
describe('My First Test Suite', () => {
  it('My First Test Case', () => {
   // expect(true).to.equal(true)
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
   cy.get('.search-keyword').type('ca');
   cy.wait(2000);
    cy.get('.products').as('productLocator');  //alias
   cy.get('@productLocator').find('.product').should('have.length', 4);
   cy.get('@productLocator').find('.product').each(($e1) => {
        const textVeg = $e1.find('h4.product-name').text();
        console.log(textVeg);
        cy.log(textVeg);
        if(textVeg.includes('Cashews')) {
            cy.wrap($e1).find('button').click();
        }
   });
   cy.get('.brand').then((LogoWebElement)=>{
        cy.log(LogoWebElement.text()); //will work as LogoWebElement is a jQuery object
        console.log(LogoWebElement.text()); //will work as LogoWebElement is a jQuery object
        //text is not a cypress command, so we cannot use cy.log() or cy.get() on it
        //we can use console.log() to print the text
   }
   );

   //Assert if logo text is added correctly
    cy.get('.brand').should('have.text', 'GREENKART');

   //this is to print the text in the logs
   cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text());
   })
  })
})

