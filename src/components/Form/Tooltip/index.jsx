import React from "react"
import style from "./style.module.css"
import propType from "prop-types"

import info from "../../../assets/error_outline_black_24dp.svg"

function Tooltip({ children }) {
  return (
    <>
      <img
        src={info}
        alt="info"
        className={style.info}
        data-testid="tooltip_img"
      />
      <div className={style.container} data-testid="tooltip">
        {children}
      </div>
    </>
  )
}

Tooltip.propType = {
  /**
   * O texto que será apresentado no corpo do Tooltip
   */
  children: propType.string,
}
export default Tooltip
