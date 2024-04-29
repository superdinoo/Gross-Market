import React from "react";
import style from "./RightPath.module.css";

const RightPath = () => {
  return (
    <div className={style.rightContainer}>
      <div className={style.rightWrapper}>
        <div className={style.rightContainerTitle}>
          <h2 className={style.rightTitleContainerTxt}>Наша суперцель</h2>
        </div>
        <div className={style.descriptionWrapper}>
          <div className={style.descriptionTxt}>
            <p className={style.oneTxt}>
              — стать любимым магазином для каждой российской семьи.{" "}
            </p>
            <p className={style.twoTxt}>
              Сотни тысяч наших сотрудников ежедневно работают над её
              достижением.
            </p>
            <p className={style.threeTxt}>
              Мы уверены, что в ближайшие годы достигнем этого и будет
              здорово,если вместе с тобой.
            </p>
          </div>
        </div>
        <div className={style.btnPhone}>
          <button className={style.phone}>
            <h3 className={style.phoneTxt}>+7 (926) 433-14-16</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPath;
