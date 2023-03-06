/// <reference types="Cypress" />

describe('Locators: Get elements by different locator strategies', () => {
    beforeEach('Navigate to test page', () => {
      cy.visit('/login');
    });
  
    it('Check different locators strategies', () => {
      // By CSS selector
      cy.get('input[name="username"]').type("oscar");
  
      // By attribute name and value
      cy.get('[type="text"]').clear();

      // By tag name
      cy.get('input').each((item,index,list) => {
        // assert the length of the list 
      //  expect(list).to.have.length(2);
        expect(item).to.have.attr("type");
      //  cy.log(index);
  });  // finds two elements
  
      // By attribute name
      cy.get('[type]');
  
      // By class name
      cy.get('.btn.btn-primary'); // instead of space put dot
 
      // By id 
      // cy.get('#wooden_spoon').click();

      // By text, no xpath at cypress, but still possible, actually we are using assertion to find the text element
       cy.get('button').should('contain', 'Login').click();     
      // By class value
    //  cy.get('[class="mr-sm-2 form-control"]');
  
      // By tag name and attribute with value
    //  cy.get('input[placeholder="First Name"]');
  
      // By different attributes
    //  cy.get('[placeholder="First Name"][id="firstName"]');
  
      // By tag name, attribute with value, ID and class name
    //  cy.get('input[placeholder="First Name"]#firstName.form-control');
  
      // // Recommended way - unique attribute + value
      // cy.get('[data-test="first_name"]');
    });
  
    xit('Check finding elements by travelling through DOM', () => {
      // Travel through DOM to find Submit button
      cy.get('input[name="username"]').parents('form').find('button').should('contain', 'Login').click();
    });
  
    xit('Check different types of assetions', () => {
        // Cypress itself bundles assertions provided by Chai, Sinon, and jQuery libraries.
      // Should assertion
      cy.get('#wooden_spoon')
      .should('contain', 'Login')
      .and('have.class', 'btn btn-primary');
  
      // Expect assertion
      cy.get('#wooden_spoon').then((element) => {
        expect(element).to.have.text('Login');
        expect(element).to.have.class('btn btn-primary');
      });
    });
  });
  