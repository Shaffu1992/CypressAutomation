describe('My First Test', () => {
    it('test 1 -verify title_positive', () => {

        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
      
    })

    it('test 2-verify negative test', () => {

        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
      
    })
    
  })

  
