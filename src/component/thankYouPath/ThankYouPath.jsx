import React from "react";
import style from "./ThankYouPath.module.css";

const ThankYouPath = () => {
  return (
    <>
      <div className={style.titleWrapper}>
        <h1 className={style.txtTitle}>Ждем тебя!</h1>
      </div>
      <div className={style.leftAndRighttPath}>
        <div className={style.leftPath}>
          <div className={style.centerText}>
            <p className={style.topText}>
              В 2020 году самыми востребованными умениями и качествами на рынке
              труда станут:
            </p>
          </div>
          <div className={style.nextText}>
            <div className={style.line} />
            <p className={style.nextTxt}>
              Умение ставить цели, планировать свое время, инициативность,
              настойчивость, высокая мотивация, умение эффективно общаться,
              любознательность.
            </p>
          </div>
          <div className={style.bottomText}>
            <p className={style.bottomTxt}>
              А профессиональным навыкам можно научить любого человека.
            </p>
          </div>
        </div>
        <div className={style.rightPath}>
          <div className={style.titleRight}>
            <h2 className={style.title}>Остались вопросы?</h2>
          </div>
          <div className={style.btnPhone}>
            <button className={style.phone}>
              <h3 className={style.phoneTxt}>+7 (926) 433-14-16</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPath;
