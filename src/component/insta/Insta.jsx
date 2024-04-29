import React, { useState } from "react";
import style from "./Insta.module.css";

const Insta = () => {
  const [showBottomPart, setShowBottomPart] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleShow = () => {
    setShowBottomPart(!showBottomPart);
  };

  window.addEventListener("resize", handleResize);

  const renderPart = () => {
    const mas = [];
    if (windowWidth > 1023) {
      for (let i = 0; i < 4; i++) {
        mas.push(<div key={i} className={style.smallContainer} />);
      }
    } else if (windowWidth <= 1023 && windowWidth > 768) {
      for (let i = 0; i < 3; i++) {
        mas.push(<div key={i} className={style.smallContainer} />);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        mas.push(<div key={i} className={style.smallContainer} />);
      }
    }
    return mas;
  };

  return (
    <div className={style.container}>
      <div className={style.titleInsta}>
        <h2 className={style.title}>мы в инстаграме</h2>
      </div>
      <div className={style.instaContainer}>
        <div className={style.topPart}>
          <div
            className={
              windowWidth <= 768 ? style.topLeftSetting : style.topLeft
            }
          />
          <div
            className={
              windowWidth <= 768 ? style.topRightSetting : style.topRight
            }
          >
            {renderPart()}
          </div>
          <div
            className={windowWidth <= 768 ? style.bottomRightTop : style.none}
          >
            {renderPart()}
          </div>
        </div>
        {showBottomPart ? (
          <div className={style.bottomPart}>
            <div className={style.bottomLeft}>{renderPart()}</div>
            <div className={style.bottomRight}>{renderPart()}</div>
          </div>
        ) : (
          ""
        )}
        <div className={style.containerButton}>
          <button className={style.button} onClick={handleShow}>
            <p className={style.btnText}> показать еще</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insta;
