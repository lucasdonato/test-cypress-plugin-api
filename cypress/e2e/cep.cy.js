describe('cypress-plugin-api@2.5.0', () => {
  it('test', () => {
    cy.visit('https://google.com/')
    cy.api('https://viacep.com.br/ws/30350577/json/')
  })
})