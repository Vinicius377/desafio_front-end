import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import Form from "."

//O botao de Simular deve ser iniciado desabilitado
test("O botao de Consultar deve ser iniciado disabilitado", () => {
  render(<Form getDatas={() => {}} />)
  expect(screen.getByTestId("button_simular")).toBeDisabled()
})

//O botao de Limpar Campos deve limpar todos os inputs texts
test("O botao de Limpar Campos deve limpar todos os inputs text", () => {
  render(<Form getDatas={() => {}} />)
  userEvent.click(screen.getByTestId("button_limpar"))
  screen.getAllByRole("textbox").forEach(input => {
    expect(input).toHaveValue("")
  })
})

//O botao Simular deve ser habilitado se todos os inputs forem preenchidos
test("O botao Simular deve ser habilitado se todos os inputs forem preenchidos", () => {
  render(<Form getDatas={() => {}} />)
  screen.getAllByRole("textbox").forEach(input => {
    userEvent.type(input, "123")
  })
  expect(screen.getByTestId("button_simular")).toBeEnabled()
})
