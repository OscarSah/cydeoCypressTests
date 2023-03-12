/// <reference types="Cypress" />

describe('Upload: Upload actions', () => {
  before('Navigate to upload page', () => {
    cy.visit('/upload');
  });
  // We can upload a file in Cypress. To perform the file upload task in Cypress, we have to first install a plugin with the command
  // npm install –dev cypress-file-upload
/*
Once the installation is done, we have to add the statement import 'cypress-fileupload' in the command.js file which resides inside the support folder within our Cypress project. 
Also, we shall add the file that we want to upload within the fixtures folder(Picture.png file).
*/
  it('Check upload action', () => {
    // Upload file
    cy.get('input#file-upload').attachFile('pic.png');
    // click on upload button
    cy.get('input#file-submit').click();
    // Assert that path message is displayed
    cy.get('div#uploaded-files').then(() => {
        cy.contains(`pic.png`).should('be.visible');
    }); 
  });
});

