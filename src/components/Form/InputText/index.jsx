import React, { useState } from "react";
import formatPercent from "../../../utils/formatPercent";
import formatReal from "../../../utils/formatReal";
import validateNumber from "../../../utils/validateNumber";

import style from "./style.module.css";
function InputText({ name, format }) {
  const [inputText, setInputText] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorName] = name.split(" ");

  const filterInput = ({ target }) => {
    if (format) {
      const inputIsValid = validateNumber(target.value);
      setIsError(inputIsValid);
      if (inputIsValid) {
        switch (format) {
          case "real":
            const stringReal = formatReal(target.value);
            setInputText(stringReal);
            return;
          case "porcentagem":
            const stringPercent = formatPercent(target.value);
            setInputText(stringPercent);
            return;
        }
      }
      setInputText(target.value);
    }
    setInputText(target.value);
    return;
  };
  console.log(inputText);
  return (
    <label
      className={`${style.input__text} ${
        isError ? style["input__text--error"] : ""
      }`}
    >
      {name}
      <input type="text" onChange={filterInput} value={inputText} />
      {isError && <span>{errorName} deve ser um numero</span>}
    </label>
  );
}

export default InputText;
