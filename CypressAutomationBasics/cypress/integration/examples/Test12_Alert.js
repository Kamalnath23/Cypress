    describe('My First Test Suite', () => {
        it('My First Test Case', () => {
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
            var name = 'Sneha';
            cy.wait(2000);
            cy.get('#name').type(name);
            cy.get('#alertbtn').click();
            //window:alert
            // https://docs.cypress.io/api/cypress-api/catalog-of-events
            // https://docs.cypress.io/api/cypress-api/catalog-of-events#Window-Alert
            cy.on('window:alert', (str) => {
                //Mocha - BDD style
                expect(str).to.equal('Hello ' + name + ', share this practice page and share your knowledge');
            });

            cy.get('#name').type(name);
             cy.get('#confirmbtn').click();
            cy.on('window:confirm', (str) => {
                //Mocha - BDD style
                expect(str).to.equal('Hello ' + name + ', Are you sure you want to confirm?');
            });
        });
    });