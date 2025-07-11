//cypress code - sopec file
// /<reference types="Cypress"/>
describe('My First Test Suite', () => {
  it('My First Test Case', () => {
   // expect(true).to.equal(true)
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

   //const logo = cy.get('.brand');
   // cy.log(logo.text()); //will not work as logo is a jQuery object

   cy.get('.brand').then((LogoWebElement)=>{
        cy.log(LogoWebElement.text()); //will work as LogoWebElement is a jQuery object
        console.log(LogoWebElement.text()); //will work as LogoWebElement is a jQuery object
        //text is not a cypress command, so we cannot use cy.log() or cy.get() on it
        //we can use console.log() to print the text
   }
   );

  })
})

