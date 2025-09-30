    describe('My First Test Suite', () => {
        it('My First Test Case', () => {
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
            cy.get('input[type="radio"]').as('radioButtons');
            cy.get('@radioButtons').first().check().should('be.checked').and('have.value', 'radio1');
            cy.get('@radioButtons').eq(1).check().should('be.checked').and('have.value', 'radio2');
            cy.get('@radioButtons').eq(2).check().should('be.checked').and('have.value', 'radio3');
            cy.get('@radioButtons').eq(0).should('not.be.checked');
            cy.get('@radioButtons').eq(1).should('not.be.checked');
        });
    });