describe('Página de Cadastro com sucesso', () => {
  it('Cadastro com dados válidos ', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.cadastrar('Bsinha Bsa','bsabsa@email.com','Bsabsinha7')
  })
})