/// <reference types="Cypress" />

describe('Forms Tests', () => {
    beforeEach('Navigate to registration page', () => {
      cy.visit('/registration_form');
    });
  
    xit('Check different input fields', () => {
      // Fill the form details
      cy.get('input[name="firstname"]').type('Oscar');
      cy.get('input[name="lastname"]').type('Wild');
      cy.get('input[name="username"]').type('CrazyHeart');
      let email = `formtest${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
      /*
      ${Math.floor(100000 + Math.random() * 900000)}: 
      This is a JavaScript expression that generates a random number between 100000 and 999999. 
      The expression uses the Math.random() function to generate a random decimal number between 0 and 1, multiplies it by 900000, adds 100000 to the result, 
      and then rounds down to the nearest integer using the Math.floor() function. This random number is inserted into the email address to make it unique.
      */
      cy.get('input[name="email"]').type(email);
      let password = `Test${Math.floor(100000 + Math.random() * 900000)}!`;  
      cy.get('input[name="password"]').type(password); 
      let phone = `571-000-${Math.floor(1000 + Math.random() * 9000)}`;
      cy.get('input[name="phone"]').type(phone);
      cy.get('input[name="birthday"]').type('01/01/1977');
    });

    xit('Check different radio button actions', () => {
        cy.get('.radio')
          .find('[type="radio"]')
          .then((radio) => {
            /* Get all radio buttons, select first one and verify that it is 
             checked*/
            cy.wrap(radio).first().check({ force: true }).should('be.checked');
            
    
            /* Get all radio buttons, select second one and verify that it is 
             checked and that we got confirmation text */
            cy.wrap(radio).eq(1).check({ force: true }).should('be.checked');
             // Verify that first radio button is no longer checked
            cy.wrap(radio).eq(2).should('not.be.checked');
            // and that we got confirmation label
            cy.get('form#registrationForm div:nth-child(3) > i').should('be.visible');
          });
      });
      xit('Check different checkbox actions', () => {
          
        // Get all checkboxes, select JAVA and verify
        cy.get('[type="checkbox"]').then((checkbox) => {
          cy.wrap(checkbox).eq(1).check({ force: true }).should('be.checked');
       
          // Uncheck JAVA and verify
          cy.wrap(checkbox).eq(1).uncheck({ force: true }).should('not.be.checked');
       // verify third checkbox has a value javascript and then check verify
         cy.wrap(checkbox).eq(2)
         .should('have.value','javascript')
         .check({ force: true }).should('be.checked');         
        });
      });

      xit('Check selection of all list options - select method departments menu', () => {
        // Load departments fixure json file to assert if all departments are present
        cy.fixture('departments').then((departments) => {
          // Get all options in the menu, get each option and indexes
          cy.get('form#registrationForm div:nth-child(9) > div > select option').each((option, index) => {
            // Get option text
            const optionText = option.text();
            cy.log(optionText);
            cy.log(index);
            // Select each option and assert that it has correct option value and text
            cy.get('form#registrationForm div:nth-child(9) > div > select')
               .select(optionText)
               .should('have.value', option.val())
               .contains(departments[index]);
             });
        });
      });
    
      it('Check selection of single list option - click method - title menu', () => {
        // Click on dropdown
        cy.get('form#registrationForm div:nth-child(10) > div > select').select("SDET");
        // Select one option
       
        // Assert that dropdown has correct text after selection
        cy.get('form#registrationForm div:nth-child(10) > div > select').contains('SDET');
      });
  });
  