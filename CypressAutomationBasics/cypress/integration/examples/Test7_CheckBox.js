    describe('My First Test Suite', () => {
        it('My First Test Case', () => {
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
            cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
            cy.get('#checkBoxOption2').should('not.be.checked');
            cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

            cy.get('input[type="checkbox"]').as('checkboxes');
            cy.get('@checkboxes').check(['option2', 'option3']);
            cy.get('@checkboxes').uncheck(['option3']);
        });
    });