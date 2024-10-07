describe('Página de Cadastro com dados inválidos', () => {
    it('Cadastro sem email ', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();
      //cy.get('[data-test="input-name"]').type('Bsinha Bsa');
      //cy.get('[data-test="input-email"]').type('bsabsa@email.com');
      //cy.get('[data-test="input-password"]').type('Bsabsinha7');
     // cy.get('[data-test="input-confirm-password"]').type('Bsabsinha7');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');

  
    })
  })