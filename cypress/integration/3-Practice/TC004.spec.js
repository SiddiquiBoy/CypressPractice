///<reference types='cypress'/>

describe('Automation dummy web testcases', () => {

    it('navigate on site landing page', () => {
        cy.visit("http://demo.automationtesting.in/Register.html");

    })
    it("handling window tab", () => {
        cy.get(':nth-child(4) > .dropdown-toggle').realHover();
        cy.xpath("//a[@href='Windows.html']").should('be.visible').click();
        cy.xpath("//a[@href='http://www.selenium.dev']").invoke('removeAttr','target').click();
    })
})