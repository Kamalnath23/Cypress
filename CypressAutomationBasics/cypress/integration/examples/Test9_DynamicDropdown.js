    describe('My First Test Suite', () => {
        it('My First Test Case', () => {
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
            cy.get('#autocomplete').type('ind');

            cy.get('.ui-menu-item div').each(($e1, index, $list) => {
             if($e1.text()==="India"){
                cy.wrap($e1).click()
            }
         })  
        });
    });