///<reference types='cypress'/>

describe('basic practice', () => {

    it("basics", () => {
        // navigate URL
        cy.visit("http://demo.automationtesting.in/Register.html");
        //check an checkbox
        cy.get('#checkbox1').should('not.be.checked');
        //get value of the checkbox
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket');
        //type value into the text field 
        cy.get("input[ng-model='FirstName']").clear().type('abc').should('have.value', 'abc');
        // validation value using the chai assertion
        cy.get("input[ng-model='FirstName']").invoke('val').then(val => {
            expect(val).to.be.equal('abc');
        });
        // handling single select dropdown
        cy.get('#countries').select('India').should('have.value', 'India');
        //how to get all the options of an dropdown
        cy.get('#msdd').click();
        cy.get('.ui-autocomplete >').click({ multiple: true })
        cy.get('.ui-icon').click({ multiple: true });
        cy.get('.ui-autocomplete >').last().click();
        cy.get('#msdd >').should('have.text', 'Vietnamese');
        //how you can verify the length of dropdown
        cy.get('.ui-autocomplete >').find('a').should('have.length', '41');
        //how you can print all the options of the dropdown
        cy.get('.ui-autocomplete >').invoke('text').then(data => {
            cy.log(data);
        })
    })
})