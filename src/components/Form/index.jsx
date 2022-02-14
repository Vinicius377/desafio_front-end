import style from "./style.module.css"
import propTypes from "prop-types"
import React, { useState } from "react"
import Tooltip from "./Tooltip"
import InputRadio from "./InputRadio"
import InputNumber from "./InputNumber"
import useEnsureInput from "../../hooks/useEnsureInput"

function Form({ getDatas }) {
  const [clearFields, setClearFields] = useState(false)
  const [simulacoesIn, setSimulacoesIn] = useState({
    tipoIndexacao: "ipca",
    tipoRendimento: "liquido",
  })
  const [isAllDone, setIsAllDone] = useEnsureInput()

  const onSetRendimento = tipo =>
    setSimulacoesIn({ ...simulacoesIn, tipoRendimento: tipo })
  const onSetIndexacao = tipo =>
    setSimulacoesIn({ ...simulacoesIn, tipoIndexacao: tipo })

  const triggerClearFields = () => {
    setClearFields(!clearFields)
  }

  const onGetDatas = () => {
    getDatas(simulacoesIn.tipoIndexacao, simulacoesIn.tipoRendimento)
  }

  return (
    <section className={style.section}>
      <h1>Simulador</h1>
      <form className={style.form} onSubmit={e => e.preventDefault()}>
        <div className={style.form__container}>
          <div className={style.form__item}>
            <div className={style.title}>
              <span>Rendimento</span>
              <Tooltip>
                Escolha qual o tipo de Rendimento deve ser consultado
              </Tooltip>
            </div>
            <InputRadio
              name="rendimento"
              buttons={["Bruto", "Liquido"]}
              onSetValue={onSetRendimento}
              isDone={setIsAllDone}
            />

            <InputNumber
              name="Aporte inicial"
              format="real"
              clearField={clearFields}
              isDone={setIsAllDone}
            />
            <InputNumber
              name="Prazo (em meses)"
              clearField={clearFields}
              isDone={setIsAllDone}
            />
            <InputNumber
              name="IPCA"
              format="percentage"
              clearField={clearFields}
              autoComplete="ipca"
              isDone={setIsAllDone}
            />
          </div>
          <div className={style.form__item}>
            <div className={style.title}>
              <span>Tipos de indexação</span>
              <Tooltip>
                Escolha qual o tipo de Indexação deve ser consultado
              </Tooltip>
            </div>
            <InputRadio
              name="tipos_de_indexação"
              buttons={["PRÉ", "POS", "FIXADO"]}
              onSetValue={onSetIndexacao}
              isDone={setIsAllDone}
            />

            <InputNumber
              name="Aporte mensal"
              format="real"
              clearField={clearFields}
              isDone={setIsAllDone}
            />
            <InputNumber
              name="Rentabilidade"
              format="percentage"
              clearField={clearFields}
              isDone={setIsAllDone}
            />
            <InputNumber
              name="CDI (ao ano)"
              format="percentage"
              clearField={clearFields}
              autoComplete="cdi"
              isDone={setIsAllDone}
            />
          </div>
        </div>
        <div className={style.buttons__container}>
          <button
            className={style.buttons__limparCampos}
            onClick={triggerClearFields}
            data-testid="button_limpar"
          >
            Limpar campos
          </button>
          <button
            className={`${style.buttons__simular} ${
              isAllDone && style["buttons__simular--done"]
            }`}
            onClick={onGetDatas}
            disabled={!isAllDone}
            data-testid="button_simular"
          >
            Simular
          </button>
        </div>
      </form>
    </section>
  )
}

Form.propTypes = {
  /**
   * Recebe em seu primeiro argumento qual o Tipo de Indexação
   *  e em seu segundo argumento qual o Tipo de Rendimento
   */
  getDatas: propTypes.func,
}
export default Form
