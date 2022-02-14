/// <reference types="cypress"/>

beforeEach(() => {
  cy.visit("http://localhost:3001")
})

//Result
it("Apresentar um canvas ao clicar em Simular", () => {
  cy.get("[data-testid='input_number'] ")
    .each($el => {
      cy.wrap($el).type("123")
    })
    .then(() => {
      cy.get("[data-testid='button_simular']").click()
    })
  expect(cy.get("canvas")).to.not.empty
})

//Input number

it("Limpar os inputs text ao clicar em Limpar Campos", () => {
  cy.get("[data-testid='input_number'] ")
    .each($el => {
      cy.wrap($el).type("123")
    })
    .then(() => {
      cy.get("[data-testid='button_limpar']")
        .click()
        .then(() => {
          cy.get("[data-testid='input_number'] ").should("have.value", "")
        })
    })
})

it("Se todos os dados estiverem corretos o botao Simular deve ser habilitado", () => {
  cy.get("[data-testid='input_number'] ")
    .each($el => {
      cy.wrap($el).type("123")
    })
    .then(() => {
      cy.get("[data-testid='button_simular']").should("not.be.disabled")
    })
})
