describe('Custom commands',()=>{

    it.only("Login Command",()=>{
        // cy.visit("https://www.myntra.com/")
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(5000)
        cy.loginapp("Admin","admin123")////loginapp is custom command
              
        // cy.get("input[placeholder='Username']").type(userdata.username);
        // cy.get("input[placeholder='Password']").type(userdata.password);
        // cy.get("button[type='submit']").click();
        // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
    })
})