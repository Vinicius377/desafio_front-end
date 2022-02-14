import React, { useEffect, useState, useContext } from "react"
import validateNumber from "../../../utils/validateNumber"
import propTypes from "prop-types"
import api from "../../../services/api"

import style from "./style.module.css"

function InputNumber({
  name = "InputName",
  format,
  clearField,
  autoComplete,
  isDone,
}) {
  const [inputNumber, setInputNumber] = useState("")
  const [hasError, setHasError] = useState(false)
  const [firstName] = name.split(" ")

  const filterInput = ({ target }) => {
    const formattedString = validateNumber(target.value, format)
    if (formattedString) {
      setInputNumber(formattedString)
      setHasError(false)
    } else {
      setHasError(true)
      setInputNumber(target.value)
    }
  }
  console.log()
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
    isDone(!!(!hasError && inputNumber), name)
  }, [inputNumber])

  return (
    <label
      className={`${style.input__text} ${
        hasError ? style["input__text--error"] : ""
      }`}
      data-testid="input_number"
    >
      {name}
      <input type="text" onChange={filterInput} value={inputNumber} />
      <span>{firstName} deve ser um número</span>
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
  format: propTypes.oneOf(["real", "percentage", ""]),
  /**
   * Quando este valor for alterado deverá acionar um efeito colateral que limpará todos os inputs
   */
  clearField: propTypes.bool,
  /**
   *Um identificador que deve ser consultado na api para ser o valor inicial do input
   */
  autoComplete: propTypes.string,
  /**
   * Em seu primeiro argumento recebe o um valor boleano se o input está preenchido corretamente
   * e em seu segundo argumento recebe o nome do input
   */
  isDone: propTypes.func,
}

export default InputNumber
