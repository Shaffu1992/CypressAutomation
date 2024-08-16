describe("MyTestSuite",()=>{
    //Direct access
    it.skip('FixturesDemoTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangehrm.json').then((data)=>{
        cy.get("input[placeholder='Username']").type(data.username);
        cy.get("input[placeholder='Password']").type(data.password);
        cy.get("button[type='submit']").click();
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").should('have.text',data.expected)
        cy.wait(6000)
        
        })
    })

    

    // //Access through Hook - for multiple it blocks
    let userdata;///global variable
    before(()=>{
        cy.fixture('orangehrm.json').then((data)=>{
            userdata=data;
        })
    })

    it ("FixtureDemoTest11",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
        .should('have.text',userdata.expected)


    })

    

        
    })
