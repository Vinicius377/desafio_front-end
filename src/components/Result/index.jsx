import React from "react"
import style from "./style.module.css"
import propType from "prop-types"
import Graph from "./Graph"

function Result({ data }) {
  return (
    <section className={style.section} data-testid="result">
      {data && (
        <>
          <h1>Resultado da Simulação</h1>
          <div className={style.informations__container}>
            <div className={style.informations__item}>
              <h3>Valor Final Bruto</h3>
              <span>R$ {data.valorFinalBruto}</span>
            </div>
            <div className={style.informations__item}>
              <h3>Aliquota do IR</h3>
              <span>{data.aliquotaIR}%</span>
            </div>
            <div className={style.informations__item}>
              <h3>Valor Pago em IR</h3>
              <span>R$ {data.valorPagoIR}</span>
            </div>
            <div className={style.informations__item}>
              <h3>Valor Final liquido</h3>
              <span className={style["informations__font--green"]}>
                R$ {data.valorFinalLiquido}
              </span>
            </div>
            <div className={style.informations__item}>
              <h3>Valor Total investido</h3>
              <span>R$ {data.valorTotalInvestido}</span>
            </div>
            <div className={style.informations__item}>
              <h3>Ganho Liquido</h3>
              <span className={style["informations__font--green"]}>
                R$ {data.ganhoLiquido}
              </span>
            </div>
          </div>
          <div className={style.graph}>
            <h2>Projeção de valores</h2>
            <Graph valuesGraph={data.graficoValores} />
          </div>
        </>
      )}
    </section>
  )
}

Result.propType = {
  /*
    Os valores do grafico e das caixas de informações
   */
  data: propType.objectOf(propType.number).isRequired,
}
export default Result
