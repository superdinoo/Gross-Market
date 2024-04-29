import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = ({ currentPages }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSticky]);

  return (
    <div
      className={
        currentPages === "form" ? style.formContainer : style.container
      }
    >
      <div
        className={currentPages === "form" ? style.formWrapper : style.wrapper}
      >
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
        {currentPages === "form" ? (
          <Link to="/">
            <div className={style.cross}>
              <RxCross2 size={24} />
            </div>
          </Link>
        ) : (
          <div className={style.contactWrapper}>
            {windowWidth <= 375 ? (
              <>
                <Link to="/form">
                  <FaPhoneAlt size={24} />
                </Link>
                {isSticky ? (
                  <Link to="/form">
                    <button
                      onChange={handleScroll}
                      className={`${style.btnContact} ${style.sticky}`}
                    >
                      <p className={style.txtButtonHeader}>заполнить анкету</p>
                    </button>
                  </Link>
                ) : null}
              </>
            ) : (
              <>
                <p className={style.phone}>+7 (926) 433-14-16</p>
                <Link to="/form">
                  <button className={style.btnContact}>
                    <p className={style.txtButtonHeader}>заполнить анкету</p>
                  </button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
