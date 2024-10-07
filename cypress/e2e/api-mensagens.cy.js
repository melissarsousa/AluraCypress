describe('API Adopet', () => {

    const tempoEsperado = Math.random() * 1000

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/1e8cd979-7792-47f7-a7c2-1434bc6dd4f8',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})