import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import InputRadio from "."

//Deve ter pelo menos 1 botao
test("Deve ter pelo menos 1 botao", () => {
  render(
    <InputRadio
      buttons={["Valor1", "Valor2", "Valor3"]}
      name="teste_unit"
      onSetValue={() => {}}
    />
  )
  expect(screen.getByRole("group").querySelector("label")).not.toBeUndefined()
})
//Deve ter um input selecionado por padrão
test("Deve ter um input selecionado por padrão", () => {
  render(
    <InputRadio
      buttons={["Valor1", "Valor2", "Valor3"]}
      name="teste_unit"
      onSetValue={() => {}}
    />
  )
  let isChecked = false
  screen
    .getByRole("group")
    .querySelectorAll("input")
    .forEach(input => {
      if (input.checked) {
        isChecked = true
      }
    })
  expect(isChecked).toBe(true)
})
//Se o span esta selecionando o input radio
test("Span deve esta selecionando o input radio", () => {
  render(
    <InputRadio
      buttons={["Valor1", "Valor2", "Valor3"]}
      name="teste_unit"
      onSetValue={() => {}}
    />
  )
  screen.getAllByRole("radio").forEach(element => {
    userEvent.click(element.nextSibling)
    expect(element.checked).toBe(true)
  })
})
