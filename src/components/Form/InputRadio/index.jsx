import React from "react";
import style from "./style.module.css";

function InputRadio({ children, name }) {
  return (
    <fieldset className={style.input__radio}>
      {children.map((input) => (
        <label key={input.props.children}>
          <button>{input.props.children}</button>
          <input type="radio" name={name} />
        </label>
      ))}
    </fieldset>
  );
}

export default InputRadio;
