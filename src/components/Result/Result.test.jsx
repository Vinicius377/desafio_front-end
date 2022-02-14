import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import Result from "."

const data = {
  tipoIndexacao: "pos",
  tipoRendimento: "liquido",
  valorFinalBruto: 2004.24,
  aliquotaIR: 20,
  valorPagoIR: 200.85,
  valorTotalInvestido: 1000.0,
  valorFinalLiquido: 1803.39,
  ganhoLiquido: 803.39,
  graficoValores: {
    comAporte: {
      0: 1000,
      1: 1100.2919342696182,
      2: 1200.6131471917915,
      3: 1300.9636473140404,
      4: 1401.343443186277,
      5: 1501.7525433609044,
      6: 1602.190956392717,
      7: 1702.6586908394388,
      8: 1803.155755260795,
      9: 1903.6821582191965,
      10: 2004.2379082796901,
    },
    semAporte: {
      0: 1000,
      1: 1000.2919342696304,
      2: 1000.5839537648784,
      3: 1000.8760585106247,
      4: 1001.1682485317566,
      5: 1001.4605238531689,
      6: 1001.7528844997634,
      7: 1002.0453304964501,
      8: 1002.3378618681451,
      9: 1002.6304786397724,
      10: 1002.9231808362633,
    },
  },
}
//Caso não tenha dados, não deve ser renderizado
test("Caso não tenha dados, não deve ser renderizado", () => {
  render(<Result />)
  expect(screen.getByTestId("result")).toHaveTextContent("")
})
//Dever ser renderizado se existe algum dado de consulta
test("Dever ser renderizado se existe algum dado de consulta", () => {
  const { container } = render(<Result data={data} />)
  const hasSpan = container.querySelector("span")
  expect(hasSpan).not.toBeNull()
})
//Um canvas deve ser renderizado
test("Um canvas deve ser renderizado", () => {
  const { container } = render(<Result data={data} />)
  const hasCanvas = container.querySelector("canvas")
  expect(hasCanvas).not.toBeNull()
})
