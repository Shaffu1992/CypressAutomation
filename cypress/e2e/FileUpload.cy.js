import 'cypress-file-upload';
describe('File Uploads',()=>{
    it('Single File upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('shaffu pic.pdf');///can use attachfile method as we have type attribute having value as file  in dom----choose file
        cy.get("#file-submit").click();//click on upload button
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');///checking file is uploaded successfully
        
    })

    it(' File upload-Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'shaffu pic.pdf',fileName: 'myfile.pdf'})///can use attachfile method as we have type attribute in dom----choose file
        cy.get("#file-submit").click();//click on upload button
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');///checking file is uploaded successfully
        
    })

    it(' File upload-Drag and Drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("shaffu pic.pdf",{subjectType : 'drag-n-drop'});///can use attachfile method as we have type attribute in dom----choose file
        // cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('have.text','shaffu pic.pdf')//click on upload button
        //else
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('shaffu pic.pdf')
    })

    it(' File upload-multiple files',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["shaffu pic.pdf","shaffu pan.pdf","14.docx"]);///can use attachfile method as we have type attribute in dom----choose file
        cy.wait(4000)///use square brackets for multiple files
        cy.get(':nth-child(6) > strong').should('contains.text','Files You Selected')
        //else
        // cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('shaffu pic.pdf')
    })

    
    it.only(' File upload-Shadow Dom',()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("shaffu pic.pdf");///can use attachfile method as we have type attribute in dom----choose file
        cy.wait(4000)///use square brackets for multiple files
        // cy.get('.smart-item-name',{includeShadowDom:true}).contains('shaffu pic.pdf')
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('shaffu pic.pdf')
        //else
        // cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('shaffu pic.pdf')
    })
})