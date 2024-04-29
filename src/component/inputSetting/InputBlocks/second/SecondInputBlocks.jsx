import React, { useState } from "react";
import InputSetting from "../InputSetting";
import style from "./Second.module.css";

const SecondInputBlocks = ({
  handleInputValue,
  birthdayValue,
  phoneValue,
  eMailValue,
}) => {
  const [valueGender, setValueGender] = useState({
    men: false,
    women: false,
  });

  const handleGender = (gender) => {
    if (gender === "men") {
      setValueGender({ ...valueGender, men: !valueGender.men, women: false });
    } else if (gender === "women") {
      setValueGender({ ...valueGender, women: !valueGender.women, men: false });
    }
  };

  return (
    <div className={style.secondInputBlocksContainer}>
      <div className={style.settingLeft}>
        <div className={style.miniInputWrapper}>
          <InputSetting
            title="Дата рождения *"
            placeholder="28.07.2002"
            value={birthdayValue}
            onChange={(value) => handleInputValue("birthday", value)}
            name="birthday"
            type="text"
            minLenght={10}
          />
        </div>

        <div className={style.miniInputWrapper}>
          <InputSetting
            title="Телефон *"
            placeholder="+7("
            value={phoneValue}
            onChange={(value) => handleInputValue("phone", value)}
            name="phone"
            type="number"
            minLenght={10}
          />
        </div>
      </div>

      <div className={style.settingRight}>
        {valueGender.men === true || valueGender.women === true ? (
          <div className={style.containerGreen}>
            <div className={style.grennSetting}>
              <img
                className={style.green}
                src="../../img/green.png"
                alt="green"
              />
            </div>
            <div className={style.wrapperTitle}>
              <h4 className={style.titleInput}>Пол</h4>
            </div>
          </div>
        ) : (
          <div className={style.wrapperTitle}>
            <h4 className={style.titleInput}>Пол</h4>
          </div>
        )}
        <div className={style.genderWrapper}>
          <div className={style.pointGender}>
            <div className={style.menWrapper}>
              <div className={style.choiseContainer}>
                <div
                  className={style.circle}
                  onClick={() => handleGender("men")}
                >
                  <div
                    className={
                      valueGender.men
                        ? `${style.circleBlack} ${style.active}`
                        : style.circleBlack
                    }
                  />
                </div>
              </div>
              <p className={style.men}>мужской</p>
            </div>
            <div className={style.menWrapper}>
              <div className={style.choiseContainer}>
                <div
                  className={style.circle}
                  onClick={() => handleGender("women")}
                >
                  <div
                    className={
                      valueGender.women
                        ? `${style.circleBlack} ${style.active}`
                        : style.circleBlack
                    }
                  />
                </div>
              </div>
              <p className={style.men}>женский</p>
            </div>
          </div>
        </div>

        <div className={style.miniInputWrapper}>
          <InputSetting
            title="Электронная почта "
            placeholder="example@mail.com"
            value={eMailValue}
            onChange={(value) => handleInputValue("eMail", value)}
            name="eMail"
            type="text"
            minLenght={16}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondInputBlocks;
