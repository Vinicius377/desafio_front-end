import React from "react";
import alert from "../../assets/error_outline_black_24dp.svg";
import InputRadio from "./InputRadio";
import InputText from "./InputText";
import style from "./style.module.css";

function Form() {
  return (
    <section className={style.section}>
      <h1>Simulador</h1>
      <form className={style.form} onSubmit={(e) => e.preventDefault()}>
        <div className={style.form__container}>
          <div className={style.form__item}>
            <div className={style.title}>
              <span>Rendimento</span>
              <img src={alert} alt="alert" />
            </div>
            <InputRadio name="rendimento">
              <button>Bruto</button>
              <button>Liquido</button>
            </InputRadio>
            <InputText name="Aporte inicial" format="real" />
            <InputText name="Prazo (em meses)" />
            <InputText name="IPCA" format="porcentagem" />
          </div>
          <div className={style.form__item}>
            <div className={style.title}>
              <span>Tipos de indexação</span>
              <img src={alert} alt="alert" />
            </div>
            <InputRadio name="tipos_de_indexação">
              <button>PRÉ</button>
              <button>POS</button>
              <button>FIXADO</button>
            </InputRadio>
            <InputText name="Aparto inicial" format="real" />
            <InputText name="Rentabilidade" format="porcentagem" />
            <InputText name="CDI (ao ano )" format="porcentagem" />
          </div>
        </div>
        <div className={style.buttons}>
          <button className={style.buttons__limparCampos}>Limpar campos</button>
          <button className={style.buttons__simular}>Simular</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
