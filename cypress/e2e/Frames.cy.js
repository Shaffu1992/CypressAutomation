
describe("handling frames",()=>{

    it.skip("approach 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/tinymce");
        //first get i frame.. you have i frame inside dom in that document is there where you can find the element inside body of document

        const iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("welcome{ctrl+a}");    ///this will not work as its not editable for me

        cy.get("button[aria-label='Bold']").click(); ///this will not work 

        //basically get the the id of frame and check document is vsible into it and then wrap it 
        //and get the iframe clear the text which is already there and enter welcome text and make it bold

        })

        it.skip("approach 2 create custom command in support under this command js folder",()=>{
            cy.visit("https://the-internet.herokuapp.com/tinymce");
            cy.getIframe("#mce_0_ifr")
            // .clear.type("welcome{ctrl+a}"); ///passing i frame locator as a parameter to custom command getIframe which is in command.js folder
            // cy.get("button[aria-label='Bold']").click();

        })

        it.only("approach3 - by using cypress -iframe plugin",()=>{
            cy.visit("https://the-internet.herokuapp.com/tinymce");
            cy.frameLoaded("#mce_0_ifr")///load the frame frameloaded is the command which will load the frame
            cy.iframe("#mce_0_ifr").clear().type("welcome{ctrl+a}"); 


        })
    
    })

