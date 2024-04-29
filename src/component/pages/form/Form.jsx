import React from "react";
import style from "./Form.module.css";
import { Footer, Header } from "../../index";
import UnityTwoPages from "../../inputSetting/unityTwoPages/UnityTwoPages";

const Form = () => {
  const currentPages = "form";

  return (
    <div className={style.container}>
      <Header currentPages={currentPages} />
      <div className={style.titleWrapper}>
        <h1 className={style.title}>Работа твоей мечты</h1>
      </div>
      <UnityTwoPages />
      <Footer />
    </div>
  );
};

export default Form;
