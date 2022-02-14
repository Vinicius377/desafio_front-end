import { useState } from "react"
import api from "./services/api"
import Form from "./components/Form"
import Result from "./components/Result"
import "./style/style.global.css"

function App() {
  const [data, setData] = useState()

  const getDatas = (tipoIndexacao, tipoRendimento) => {
    api
      .get(
        `/simulacoes/?tipoIndexacao=${tipoIndexacao}&tipoRendimento=${tipoRendimento}`
      )
      .then(result => setData(result.data[0]))
  }

  return (
    <div className="App">
      <header>
        <h1> Simulador de investimento</h1>
      </header>
      <main>
        <Form getDatas={getDatas} />

        <Result data={data} />
      </main>
    </div>
  )
}

export default App
