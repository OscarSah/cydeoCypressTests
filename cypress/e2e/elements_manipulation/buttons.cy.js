/// <reference types="Cypress" />

describe('Buttons: Button actions', () => {
    before('Navigate to buttons page', () => {
      cy.visit('/multiple_buttons');
    });
  
    it('Check different button actions', () => {
      // select a button with text
     // cy.get('button').should('contain', 'Button 2').click();
      cy.contains('Button 2').should('be.visible').click();
      cy.contains('Clicked on button two!').should('be.visible');
  
      // Click on button using class locators
      cy.get('[class="btn btn-primary"]').then((buttons) => {
        cy.wrap(buttons).eq(2).click();
        cy.contains('Clicked on button three!').should('be.visible');
      });

      // getting multiple elements and doing a loop
      // By tag name
      cy.get('button').each((item,index,list) => {
        // assert the length of the list 
        expect(list).to.have.length(6);
        expect(item).to.have.attr("onclick");
        //if(index == 2){
        //    cy.contains('Clicked on button three!').should('be.visible');
        //}
        if(item.text()=="Button 4"){
          cy.log(item.text());
          item.click();
          cy.contains('Clicked on button four!').should('be.visible');
        }
  });  // finds two elements
    });
  });
  