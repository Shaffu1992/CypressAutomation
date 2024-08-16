describe("mystestsuite",()=>{
    it("take screenshot",()=>{
        cy.visit("https://demo.opencart.com/")
        // cy.screenshot("homepage");
        cy.wait(5000)
        // cy.get("img[title='Your Store']").screenshot("Logo");


        ///Automatically capture screenshot& videos on failure --only when execute through cmd
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text','Tablets')///wants to fail assertion so that screenshot will get acptured automatically
        ////just in terminal npx cypres run --spec relative path of file

        
    })





})