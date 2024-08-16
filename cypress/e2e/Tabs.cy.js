describe("Handle tabs",(()=>{
    it("Handle tabs approach 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        //when you click here there is target attribute which will open the link in next tab if you want to open the tab in the current page then remove the target attribute using invoke then click on it
        cy.get(".example>a").invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        //operations
        cy.go('back')//going back to the parent tab
        cy.url().should('include',"https://the-internet.herokuapp.com/windows")

        //open the link in the same tab by removing target attribute from html 

    })

    //approach 2 getting the element and fetch attribute href and pass it to url as href attribute as its parameter but this will work only if parent and child tab have same domain
    it.only("approach 2",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows") 
        cy.get(".example>a").then((e)=>{  ///getting the element in variable e using javascript function
            let url=e.prop('href');   ///prop is property which you want to fetch like href which contains link of another tab and storing in url variable
            cy.visit(url);
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')//implict assertion
        cy.wait(5000)
        //operations
        cy.go('back')//going back to the parent tab
        cy.url().should('include',"https://the-internet.herokuapp.com/windows")

    })

}))