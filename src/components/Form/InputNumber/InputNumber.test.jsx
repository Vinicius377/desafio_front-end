import InputNumber from "."
import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
//Deve iniciar com os campos vazios
test("Deve iniciar com os campos vazios", () => {
  render(<InputNumber isDone={() => {}} />)
  const elementInput = screen.getByTestId("input_number").querySelector("input")
  expect(elementInput).toHaveValue("")
})

describe("Deve apresentar os valores corretos", () => {
  test("Se format for real", () => {
    render(<InputNumber format="real" isDone={() => {}} />)
    const elementInput = screen
      .getByTestId("input_number")
      .querySelector("input")
    /**
     ** Se for so numeros irá apresentá-los
     */
    userEvent.type(elementInput, "123")
    expect(elementInput).toHaveValue("R$ 1,23")
    userEvent.clear(elementInput)
    /**
     ** Se for escrito só um número
     */
    userEvent.type(elementInput, "1")
    expect(elementInput).toHaveValue("R$ 0,01")
    userEvent.clear(elementInput)
    /**
     ** Se for escrito dois numeros
     */
    userEvent.type(elementInput, "12")
    expect(elementInput).toHaveValue("R$ 0,12")
    userEvent.clear(elementInput)
    /**
     ** Se tiver letras mas terminar com um numero deve apagar as letras
     */
    userEvent.type(elementInput, "123ddd4")
    expect(elementInput).toHaveValue("R$ 12,34")
    userEvent.clear(elementInput)
    /**
     ** Se o ultimo caractere for uma letra deve ser apresentado exatamente como está
     */
    userEvent.type(elementInput, "123456aaa")
    expect(elementInput).toHaveValue("R$ 1 234,56aaa")
  })

  test("Se format for percentage", () => {
    render(<InputNumber format="percentage" isDone={() => {}} />)
    const elementInput = screen
      .getByTestId("input_number")
      .querySelector("input")
    /**
     ** Se for so numeros irá apresentá-los
     */
    userEvent.type(elementInput, "123")
    expect(elementInput).toHaveValue("123%")
    userEvent.clear(elementInput)
    /**
     ** Se tiver letras mas terminar com um numero deve apagar as letras
     */
    userEvent.type(elementInput, "123ddd4")
    expect(elementInput).toHaveValue("1234%")
    userEvent.clear(elementInput)
    /**
     ** Se o ultimo caractere for uma letra deve ser apresentado exatamente como está
     */
    userEvent.type(elementInput, "123456aaa")
    expect(elementInput).toHaveValue("123456%aaa")
  })

  test("Se format não for passado", () => {
    render(<InputNumber isDone={() => {}} />)
    const elementInput = screen
      .getByTestId("input_number")
      .querySelector("input")
    /**
     ** Se for so numeros irá apresentá-los
     */
    userEvent.type(elementInput, "123")
    expect(elementInput).toHaveValue("123")
    userEvent.clear(elementInput)
    /**
     ** Se tiver letras mas terminar com um numero deve apagar as letras
     */
    userEvent.type(elementInput, "123ddd4")
    expect(elementInput).toHaveValue("1234")
    userEvent.clear(elementInput)
    /**
     ** Se o ultimo caractere for uma letra deve ser apresentado exatamente como está
     */
    userEvent.type(elementInput, "123456aaa")
    expect(elementInput).toHaveValue("123456aaa")
  })
})

//Se houver um erro deve mostrar um span de erro
test("Se houver um erro deve ser mostrado um span de erro", () => {
  render(<InputNumber isDone={() => {}} />)
  const elementSpan = screen.getByTestId("input_number").querySelector("span")
  const elementInput = screen.getByTestId("input_number").querySelector("input")
  userEvent.type(elementInput, "lorem ipsolum")
  expect(elementSpan).toHaveStyle("visibility: visible;")
})
