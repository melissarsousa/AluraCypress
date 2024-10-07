describe('Página de Login com sucesso', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Login com dados válidos ', () => {
        cy.login('bsabsa@email.com','Bsabsinha7');
    })
  })
