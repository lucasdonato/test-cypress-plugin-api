
import 'cypress-plugin-api'

beforeEach(() => {
    cy.api('https://viacep.com.br/ws/30350577/json/')
})