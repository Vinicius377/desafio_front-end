import React, { useEffect, useState } from "react"
import validateNumber from "../../../utils/validateNumber"
import propTypes from "prop-types"
import api from "../../../services/api"

import style from "./style.module.css"
function InputNumber({ name, format, clearField, autoComplete, isDone }) {
  const [inputNumber, setInputNumber] = useState("")
  const [hasError, setHasError] = useState(false)
  const [errorInputName] = name.split(" ")

  const filterInput = ({ target }) => {
    const formattedString = validateNumber(target.value, format)
    if (formattedString) {
      setInputNumber(formattedString)
      setHasError(false)
    } else {
      setHasError(true)
      setInputNumber(target.vlue)
    }
  }
  // Limpar campos
  useEffect(() => {
    setInputNumber("")
  }, [clearField])
  //
  useEffect(() => {
    if (autoComplete) {
      api
        .get(`indicadores/?nome=${autoComplete}`)
        .then(result => setInputNumber(`${result.data[0].valor}%`))
    }
  }, [autoComplete])
  //
  useEffect(() => {
    if (inputNumber && !hasError) {
      isDone(true)
    } else {
      isDone(false)
    }
  }, [inputNumber, hasError])

  return (
    <label
      className={`${style.input__text} ${
        hasError ? style["input__text--error"] : ""
      }`}
    >
      {name}
      <input type="text" onChange={filterInput} value={inputNumber} />
      <span>{errorInputName} deve ser um número</span>
    </label>
  )
}

InputNumber.propTypes = {
  /**
   * O nome que será apresentado em cima do input
   */
  name: propTypes.string,
  /**
   * Qual máscara deverá ser aplicada no input
   */
  format: propTypes.oneOf(["real", "porcentagem", ""]),
  /**
   * Quando este valor for alterado deverá acionar um efeito colateral que limpará todos os inputs
   */
  clearField: propTypes.bool,
  /**
   *Um identificador que deve ser consultado na api para ser o valor inicial do input
   */
  autoComplete: propTypes.string,
  /**
   *Retorna uma resposta para o Componente pai, se o input foi concluido ou não,
   ou seja se ele foi preenchido e não há nenhum erro
   */
  isDone: propTypes.func.isRequired,
}

export default InputNumber
