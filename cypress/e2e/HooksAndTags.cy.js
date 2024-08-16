//before Hook
//after Hook
//beforeEach Hook
//afterEach Hook

///tags only ,skip 
describe("MyTestSuite()",()=>{

    before (()=>{
        cy.log("***** Lauch App ******");
    })

    after (()=>{
        cy.log("***** Closing App ******");
    })
 ////these hooks are coming from mocha framework
    beforeEach (()=>{
        cy.log("***** Login ******");
    })
    afterEach (()=>{
        cy.log("***** LogOut ******");
    })


    it("search",()=>
    {
        cy.log("****** Saerching ******");

    })

    it.skip("advanced search",()=>{
      cy.log("****** Saerching ******");  
        })

     it("Listing Products",()=>{
        cy.log("****** Listing ******")

        })
    

        
})