
it.only('acessa a página da política de privacidade removendo o target e então clicando no link', function () {
    cy.visit('./src/privacy.html')

    cy.contains('Talking About Tsting').should('be.visible')

})