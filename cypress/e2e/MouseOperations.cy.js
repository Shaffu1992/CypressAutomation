

describe("Mouse Operations",()=>{
    it.skip("MouseHover",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
       
        cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').should('be.visible')
    }
        )



        it.skip("Riht click ",()=>{
            cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

            //approach 1
        //     cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        //     cy.get('.context-menu-icon-copy > span').should('be.visible')

        //approach 2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')

        })

        
        it.skip("double click",()=>{
            cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
            cy.frameLoaded("#iframeResult") ///this will load the frame

            // //approach 1
            // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick');
            // cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!');

            // //approach 2
            cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
            cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!');

            
        })
        it.skip("Drag and drop using plugin",()=>{
            cy.visit("http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html")
            cy.wait(3000)
            cy.get("body > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6)").drag("#box101",{force:true})
            
        })
        it.only("Scrolling page not working now",()=>{
            cy.visit('https://freedomcare.com/')
            cy.get('.mktoButton').scrollIntoView({duration:5000});  
         
            
            
            
        })

})