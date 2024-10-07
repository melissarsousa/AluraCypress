describe('Página de Login com falha', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST','https://adopet-api-i8qu.onrender.com/adotante/login',{statusCode: 400, }).as('stubPost') 
    })

    it('Login com dados inválidos ', () => {
      cy.login(' ',' ')
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })

    it('Login com falha POST', () => {
      cy.login('bsabsa@email.com','Bsabsinha7');
      cy.wait('@stubPost');
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })

  })
