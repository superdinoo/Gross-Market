import React, { useState, useEffect } from "react";
import style from "../component/insta/Insta.module.css";

const SettingWidth = ({ onWindowWidthChange }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
    onWindowWidthChange(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onWindowWidthChange]);

  const renderPart = (windowWidth) => {
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

  return <div>{renderPart(windowWidth)}</div>;
};

export default SettingWidth;
