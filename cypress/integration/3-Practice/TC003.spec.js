///<reference types='cypress'/>

describe('window handling',() => {

    it ('how to handle an windiow',() => {

        cy.visit("http://demo.automationtesting.in/Register.html");
        cy.xpath("//a[text()='SwitchTo']").realHover();
        cy.xpath("//a[text()='Windows']").click();
        
        //tab handling
       
        cy.url().should('eq','https://www.selenium.dev/');
        cy.go(-1);
        
        cy.xpath("//a[@href='#Seperate']").click();
        cy.xpath("//button[text()='click']").invoke('removeAttr','onclick').click({focus:true});

    })
})