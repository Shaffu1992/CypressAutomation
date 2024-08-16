describe("XpathLOcators", () =>{

    it('find no of products',()=>{
     cy.visit("http://www.automationpractice.pl/index.php")   
     cy.xpath("//ul[@class='block_content products-block']/li").should('have.length',6)////check pls

    })

})