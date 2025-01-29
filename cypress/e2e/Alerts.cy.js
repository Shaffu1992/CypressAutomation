describe('Alerst',()=>{
    //1.Javascript alert :it will have some text and ok button

    it.skip('Js alerts',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        //if we want to validate something then we have to use some event like this window:alert
        ////doing git practice
        

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        //alert window will automatically be closed by cypress

        cy.get("#result").should('have.text','You successfully clicked an alert')
    })

    
    it.skip('Js confirm alert with ok button',()=>{
        //2.a Javascript alert :it will have some text and ok and cancel button
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        //if we want to validate something then we have to use some event like this window:alert

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        

        //alert window will automatically be closed by cypress using ok button but if you want to close the alert by clicking on cancel button then use use code

        cy.get("#result").should('have.text','You clicked: Ok')
    })


    it.skip('Js confirm alert with cancel button',()=>{
        //2 b Javascript alert :it will have some text and ok and cancel button
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       

        //if we want to validate something then we have to use some event like this window:alert

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.get("button[onclick='jsConfirm()']").click();

        //alert window will automatically be closed by cypress using ok button but if you want to close the alert by clicking on cancel button then use use code
        cy.on('window:confirm',()=>false)

        cy.get("#result").should('have.text','You clicked: Cancel')
    })



    //3 Javascript prompt alert: It will have some text with a text box for user input along with okay and cancel button
    it.skip('Js prompt alert',()=>{
        //2 b Javascript alert :it will have some text and ok and cancel button
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //below event is triggered before openng the window to capture the window in a variable win .Its a prompt window so use stub method
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })


        cy.get("button[onclick='jsPrompt()']").click();

        //if we want to validate something then we have to use some event like this window:alert

        // 
       
        
        //cy.on('window:prompt',()=>false)---somehow its not working
        cy.get("#result").should('have.text','You entered: welcome')

        })

        //4 Authenticated alert
        it.only('Autheticated aler',()=>{
            //approach 1
            // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
            //     username:"admin",
            //     password:"admin"
            // }}

            // )
            //approach 2
            cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
            cy.get("div[class='example'] p").should('have.contains',"Congratulations")
            
        })

       
    })


    