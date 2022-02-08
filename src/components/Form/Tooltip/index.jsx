import React from "react"
import style from "./style.module.css"
import propType from "prop-types"

function Tooltip({ children }) {
  return <div className={style.container}>{children}</div>
}

Tooltip.propType = {
  /**
   * O texto que será apresentado no corpo do Tooltip
   */
  children: propType.string,
}
export default Tooltip
