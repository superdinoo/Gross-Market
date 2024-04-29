import React from "react";
import style from "./ThankYou.module.css";
import { Footer, Header } from "../../index";
import ThankYouPath from "../../thankYouPath/ThankYouPath";

const ThankYou = () => {
  const currentPages = "form";
  return (
    <div className={style.container}>
      <Header currentPages={currentPages} />
      <ThankYouPath />
      <Footer />
    </div>
  );
};

export default ThankYou;
