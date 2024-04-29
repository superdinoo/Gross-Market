import React from "react";
import style from "./Fourth.module.css";
import { IoMdCheckmark } from "react-icons/io";

const FourthInputBlocks = ({ activeMark, handleActiveMark }) => {
  const checkMark = <IoMdCheckmark size={18} />;
  return (
    <div className={style.fourthInputBlocksContainer}>
      <div className={style.captchsContainer}>
        <div className={style.captchaWrapper}>
          <div className={style.title}>
            <h4 className={style.cap}>Капча</h4>
          </div>
          <div className={style.capchaPath}>
            <div className={style.captchsLeft}>
              <div className={style.captchaContainer}>
                <div
                  className={style.pathCaptcha}
                  onClick={() => handleActiveMark("robot")}
                >
                  {activeMark.robot ? checkMark : ""}
                </div>

                <div className={style.textCaptcha}>
                  <p className={style.txt}>я не робот</p>
                </div>
                <div className={style.imgCaptcha}>
                  <img
                    src="../../img/captcha.png"
                    className={style.img}
                    alt="captcha"
                  />
                </div>
              </div>
            </div>
            <div className={style.captchsRight}>
              <p className={style.txtRightCaptchs}>
                * поля для обязательного заполнения
              </p>
            </div>
          </div>
        </div>

        <div className={style.processingWrapper}>
          <div className={style.containerProcessing}>
            <div
              className={style.box}
              onClick={() => handleActiveMark("agree")}
            >
              {activeMark.agree ? checkMark : ""}
            </div>
            <div className={style.txtBoxContainer}>
              <p className={style.textBox}>
                я подтверждаю согласие на обработку персональных данных и
                принимаю условия рассмотрения обращений *
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthInputBlocks;
