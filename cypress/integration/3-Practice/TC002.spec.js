///<reference types='cypress'/>

describe('how to do conditional testing', () => {


    it("open youtunbe", () => {
        cy.visit("https://www.youtube.com/");
    })

    it("Search songs", () => {
        cy.get('#search-input > #search').clear().type("baby baby");
        cy.get('#search-icon-legacy').click();
    })

    it("play first result", () => {
        cy.get('.style-scope ytd-video-renderer').first().click();
        cy.wait(15000);
        //cy.get('.ytp-ad-skip-button').click();
        //  cy.get('')
        cy.get('body').then((body) => {
            cy.log(body.find('.yt-tooltip-renderer > .yt-simple-endpoint > #button > #text'));
            if (body.find('.yt-tooltip-renderer > .yt-simple-endpoint > #button > #text')) {
                cy.get('.yt-tooltip-renderer > .yt-simple-endpoint > #button > #text').click();
                cy.log('click;)')
            }
            else if (body.find('.ytp-ad-skip-button')) {
                cy.get('.ytp-ad-skip-button').click();
            }
            else {
                cy.log('noting found');
            }

            cy.get('.video-stream').realHover().click();
            cy.xpath("//button[@title='Full screen (f)']").realHover().click();
            cy.get('.video-stream').realHover().click();
        })

    })
})