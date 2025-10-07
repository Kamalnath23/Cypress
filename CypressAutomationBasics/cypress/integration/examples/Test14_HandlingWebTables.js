//Test14_HandlingWebTables.js
describe('Handling web tables', ()=>{
    it('Test web tables', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
        const text=$e1.text(); //locate the text in 2nd column
        //check if the text is equal to Python
        if(text.includes("Python")){
            //get the next sibling of the 2nd column which is 3rd column
            //assert if the price is 25
            // https://docs.cypress.io/api/commands/next
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                const priceText=price.text();
                cy.log("priceText: "+priceText);
                expect(priceText).to.equal('25');
            })
        }
    });
       
    });

})