// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="Cypress" />

/// <reference types="cypress-xpath" />


///creatingc custom command getIframe for i frame  and passing paramer iframe as  a 
//parameter in which i have to pass locator of iframe whenever i chhose this command

//this way we cn reuse this multiple times
Cypress.Commands.add('getIframe',(iframe)=>{
         cy.get("iframe")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

})

Cypress.Commands.add("loginapp",(email,password)=>{
        cy.get("input[placeholder='Username']").type(email);
        cy.get("input[placeholder='Password']").type(password);
        cy.get("button[type='submit']").click();
        

        
})
//over write contains

// Cypress.Commands.overwrite('contains',(originalFn, subject,filter, text, options ={})=>{
//         if(typeof text === 'objectt'){
//                 options = text
//                 text = filter
//                 filter = undefined
//         }
//         options.matchCase = false
//         return originalFn(subject,filter, text, options)
// })

