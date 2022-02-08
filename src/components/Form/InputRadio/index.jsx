import React from "react"
import style from "./style.module.css"
import propTypes from "prop-types"

function InputRadio({ buttons, name, onSetValue }) {
  const setRadioValue = ({ target }) => {
    const valueWithoutAccent = target.value
      .replace(/[ÀÁÂÃÄÅ]/g, "A")
      .replace(/[àáâãäå]/g, "a")
      .replace(/[ÈÉÊË]/g, "E")
      .toLowerCase()
    if (valueWithoutAccent === "fixado") {
      onSetValue("ipca")
      return
    }
    onSetValue(valueWithoutAccent)
  }
  return (
    <fieldset className={style.input__radio} onChange={setRadioValue}>
      {buttons.map((input, index) => (
        <>
          <label key={index}>
            <input type="radio" name={name} value={input} />
            <span>
              <span>{input}</span>
            </span>
          </label>
        </>
      ))}
    </fieldset>
  )
}

InputRadio.propTypes = {
  /**
   * Valor que será usado como identificador de um conjunto de input radio
   */
  name: propTypes.string.isRequired,
  /**
    O nome que cada botao irá ter
  */
  buttons: propTypes.arrayOf(propTypes.string).isRequired,
  /**
   *A função recebe em seu unico argumento o valor do input radio selecionado, assim passando o estado para o componente pai
   */
  onSetValue: propTypes.func.isRequired,
}

export default InputRadio
