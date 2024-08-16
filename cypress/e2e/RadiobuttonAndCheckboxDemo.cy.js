describe("Radio Buttondemo",()=> {

    it("Radio button",()=>{
        


        cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html")
        // visibility of radio buttons
        cy.get("input[value='Male'][name='gender']").should('be.visible')
        cy.get("input[value='Male'][name='optradio']").should('be.visible')
        //selecting radio button
        cy.get("input[value='Male'][name='gender']").check().should('be.checked')
        cy.get("input[value='Female'][name='optradio']").check().should('be.checked')
        // not selecting radio button and check assertions
        cy.get("input[value='Male'][name='optradio']").should('not.be.checked')

    })

    
    it("Checkbox",()=>{
        


        cy.visit("https://seleniumbase.io/demo_page")
        // visibility of radio buttons
        cy.get("input[name='checkBoxName2']").should('be.visible')
        
        cy.get("input[name='checkBoxName2']").check().should('be.checked')
        cy.get("input[name='checkBoxName2']").uncheck().should('not.be.checked')
        cy.get("#radioButton2").should('be.visible')
        
        cy.get("#radioButton2").check().should('be.checked')



        cy.get("#myTextarea").should('be.visible')
        
        cy.get("#myTextarea").should('be.visible').type("Shaffffi")
    

    })




})