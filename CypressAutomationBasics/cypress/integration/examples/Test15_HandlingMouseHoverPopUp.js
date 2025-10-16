describe('Handling mouse hover popup', ()=>{
    it('Test mouse hover pop up', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.get('.mouse-hover-content').invoke('show')  //to show the hidden element
        cy.get('#mousehover').invoke('show');
        cy.contains('Top').click({force: true}); //force:true is used to click on hidden element
        cy.url().should('include', 'top');
        cy.go('back');
        cy.get('#mousehover').invoke('show');
        cy.contains('Reload').click({force: true});
        cy.url().should('include', 'AutomationPractice');
    });
})