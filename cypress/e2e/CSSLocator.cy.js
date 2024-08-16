describe('CSSLocators', () => {
it("csslocators",() => {
    cy.visit("http://www.automationpractice.pl/index.php")
    cy.get("#search_query_top").type("T-Shirts")    ///id passing as cypress by default supports css selector tag is optional
    cy.get("[name='submit_search']").click()
  
    cy.get(".lighter").contains("T-Shirts11") //Assertions

 })

})