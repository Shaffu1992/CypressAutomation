describe("Assertions demo",()=>{
    // it("Implicit assertions",()=>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //     //should and are implicit assertions
    //     cy.url().should('include','orangehrmlive.com')
    //     cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.url().should('contain','orangehrmlive')

        // cy.url().should('include','orangehrmlive.com')
        // .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should('contain','orangehrmlive')


        // cy.url().should('include','orangehrmlive.com')
        // .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .and('contain','orangehrmlive')

//         cy.title().should('include','Orange')//validating title of the page
//         .and('eq','OrangeHRM')
//         .and('contains','HRM')

//         cy.get('.orangehrm-login-branding>img').should('be.visible')////logo is visible assertion
//         .and('exist')

//         cy.xpath('//a').should('have.length','5')///validating no of links on page
//         cy.get("input[placeholder='Username']").type("Admin")///provide  a value to username input box
//         cy.get("input[placeholder='Username']").should('have.value',"Admin") // validating the value
// })

// it("Explicit assertions",()=>{
it("Implicit assertions",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']").type("Admin")///provide  a value to username input box
    cy.get("input[placeholder='Password']").type("admin123")///provide  a value to username input box
    cy.get("button[type='submit']").click()

    let expName="Ghaidaa user";

    cy.get(".oxd-userdropdown-name").then( (x)=>{
        //whatever value I am getting from above line 40 that i am storing in variable x and that variable I am passing parameter in an javascript function

        let actName=x.text///capturing text value of that variable x

        //BDD Style
        expect(actName).to.equal(expName)
        // expect(actName).to.not.equal(expName)

//         //TDD Style
//         assert(actName).to.equal(expName)
//         assert(actName).to.equal(expName)
    }
    )


})
})

