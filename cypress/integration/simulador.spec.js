/// <reference types="cypress"/>

//Os inputs de ** e ** são automaticamente preenchidos
//Todos os outros inputs devem ser vazios
//O input radio deve ter um item selecionado por padrao
//Se os Inputs forem preenchidos e não tiver nenhum erro
//Se

beforeEach(() => {
  cy.visit("http://localhost:3006")
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
