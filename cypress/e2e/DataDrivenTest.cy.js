describe("MyTestSuite",()=>{
    it('DataDrivenTest',()=>{
        cy.fixture('orangehrmeeee2.json').then((data)=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      
        data.forEach((userdata)=>{
            
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();
        

        if(userdata.username=='Admin' && userdata.paasword=='admin123')////valid credentials
        {
        cy.get("cy.get(':nth-child(1) > .oxd-main-menu-item')")
        .should('have.text',userdata.expected);
        cy.log("*****hghk******")
        cy.wait(50000)
        cy.get('.oxd-userdropdown-tab').click();//logout dropdown 
        cy.get("cy.get(':nth-child(4) > .oxd-userdropdown-link')").click();
    
        // cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)")
        // .click()///logout click
       
        cy.wait(50000)

        ///if you login with correct credentials then you have to logout also for negative scenarios also

        }
        else{

        cy.log("*****shaffffff******")
        cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected);    ///for invalid data
        }
        })
    })
    })
        
        

    })

    /////why cy.type can only accept a string or number error for other orangehrm json working fine actually not supporting data driven testing
