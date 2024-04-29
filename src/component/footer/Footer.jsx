import React, { useState } from "react";
import style from "./Footer.module.css";
import Policy from "../pages/Policy";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setOpenPop] = useState(false);

  const handlePopup = () => {
    setOpenPop(!isOpen);
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.social}>
          <Link to="/">
            <div className={style.logo}>
              <img
                src="../../img/logo.png"
                className={style.imgLogo}
                alt="logo"
              />
              <h2 className={style.logoStyle}>гросс маркет</h2>
            </div>
          </Link>
          <div className={style.share}>
            <h2 className={style.txtShare}>поделиться</h2>
          </div>
          <div className={style.socialMedia}>
            <img
              src="../../img/facebook.png"
              className={style.icon}
              alt="facebook"
            />
            <img src="../../img/vk.png" className={style.icon} alt="vk" />
          </div>
        </div>
        <div className={style.policy}>
          <div className={style.logoPolicy}>
            <p className={style.logoTxt}>© Гросс маркет 2020</p>
          </div>

          <div className={style.txtPolicy} onClick={handlePopup}>
            <p className={style.text}>Политика обработки персональных данных</p>
          </div>
          {isOpen && (
            <div className={style.overlay} onClick={handlePopup}>
              <Policy closePop={handlePopup} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
