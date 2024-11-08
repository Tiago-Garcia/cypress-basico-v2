Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get('#firstName').type('Tiago') 
    cy.get('#lastName').type('Garcia') 
    cy.get('#email').type('tiago@mailinator.com')
    cy.get('#open-text-area').type('TESTE TESTE')
    cy.get('button[type="submit"]').click()


})