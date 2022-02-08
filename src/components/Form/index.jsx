import alert from "../../assets/error_outline_black_24dp.svg"
import style from "./style.module.css"

import React, { useState } from "react"

import InputRadio from "./InputRadio"
import InputNumber from "./InputNumber"
import Tooltip from "./Tooltip"

function Form({ getDatas }) {
  const [clearFields, setClearFields] = useState(false)
  const [simulacoesIn, setSimulacoesIn] = useState({
    tipoIndexacao: "",
    tipoRendimento: "",
  })
  const [fieldsFilled, setFieldsFilled] = useState([])
  const isAllDone = fieldsFilled.every(field => field)

  console.log(fieldsFilled)
  const onSetRendimento = tipo =>
    setSimulacoesIn({ ...simulacoesIn, tipoRendimento: tipo })
  const onSetIndexacao = tipo =>
    setSimulacoesIn({ ...simulacoesIn, tipoIndexacao: tipo })

  const triggerClearFields = () => {
    setClearFields(!clearFields)
  }

  const setInputIsDone = done => {
    setFieldsFilled(inputIsDone => {
      if (done) {
        const isFalse = inputIsDone.indexOf(false)

        return [...inputIsDone, (inputIsDone[isFalse] = done)]
      }
      const isTrue = inputIsDone.indexOf(true)
      return [...inputIsDone, (inputIsDone[isTrue] = done)]
    })
  }

  const onGetDatas = () => {
    getDatas(simulacoesIn.tipoIndexacao, simulacoesIn.tipoRendimento)
    console.log(simulacoesIn)
  }
  return (
    <section className={style.section}>
      <h1>Simulador</h1>
      <form className={style.form} onSubmit={e => e.preventDefault()}>
        <div className={style.form__container}>
          <div className={style.form__item}>
            <div className={style.title}>
              <span>Rendimento</span>
              <img src={alert} alt="alert" />
              <Tooltip>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                labore nobis sequi, debitis vel magni ipsa eos nesciunt sunt
                quae et impedit recusandae voluptatibus modi ullam autem
                incidunt eius deleniti.
              </Tooltip>
            </div>
            <InputRadio
              name="rendimento"
              buttons={["Bruto", "Liquido"]}
              onSetValue={onSetRendimento}
            />

            <InputNumber
              name="Aporte inicial"
              format="real"
              clearField={clearFields}
              isDone={setInputIsDone}
            />
            <InputNumber
              name="Prazo (em meses)"
              clearField={clearFields}
              isDone={setInputIsDone}
            />
            <InputNumber
              name="IPCA"
              format="porcentagem"
              clearField={clearFields}
              autoComplete="ipca"
              isDone={setInputIsDone}
            />
          </div>
          <div className={style.form__item}>
            <div className={style.title}>
              <span>Tipos de indexação</span>
              <img src={alert} alt="alert" />
              <Tooltip>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                labore nobis sequi, debitis vel magni ipsa eos nesciunt sunt
                quae et impedit recusandae voluptatibus modi ullam autem
                incidunt eius deleniti.
              </Tooltip>
            </div>
            <InputRadio
              name="tipos_de_indexação"
              buttons={["PRÉ", "POS", "FIXADO"]}
              onSetValue={onSetIndexacao}
            />

            <InputNumber
              name="Aporte mensal"
              format="real"
              clearField={clearFields}
              isDone={setInputIsDone}
            />
            <InputNumber
              name="Rentabilidade"
              format="porcentagem"
              clearField={clearFields}
              isDone={setInputIsDone}
            />
            <InputNumber
              name="CDI (ao ano )"
              format="porcentagem"
              clearField={clearFields}
              autoComplete="cdi"
              isDone={setInputIsDone}
            />
          </div>
        </div>
        <div className={style.buttons}>
          <button
            className={style.buttons__limparCampos}
            onClick={triggerClearFields}
          >
            Limpar campos
          </button>
          <button
            className={`${style.buttons__simular} ${
              isAllDone && style["buttons__simular--done"]
            }`}
            onClick={onGetDatas}
            disabled={!isAllDone}
          >
            Simular
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
