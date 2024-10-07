describe('API Adopet Perfil', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZThjZDk3OS03NzkyLTQ3ZjctYTdjMi0xNDM0YmM2ZGQ0ZjgiLCJhZG9wdGVyTmFtZSI6IkJzaW5oYSBCc2EiLCJpYXQiOjE3MjY3NzcwMTcsImV4cCI6MTcyNzAzNjIxN30.X-w4xPoW7-2Q7a3lkYW45tCZv8T3gIFzR6ineuxHNx0`

    it('Nome no perfil', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/1e8cd979-7792-47f7-a7c2-1434bc6dd4f8',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Bsinha Bsa')

        })
    })
})