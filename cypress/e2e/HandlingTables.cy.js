describe("Handling tables",()=>{
  it('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        // cy.get("#input-username").type("demo")
        // cy.get("#input-username").type("demo")
        cy.get("button[type='submit']").click();
    })
})
