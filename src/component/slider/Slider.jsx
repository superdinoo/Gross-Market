import React, { useState } from "react";
import style from "./Slider.module.css";
import slidersData from "./slidersData";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { useActiveArrowState } from "../state/State";

const Slider = () => {
  const { activeArrow, setActiveArrow } = useActiveArrowState();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftArrow = () => {
    setActiveArrow({ left: true, right: false });
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : slidersData.length - 1
    );
  };

  const handleRightArrow = () => {
    setActiveArrow({ left: false, right: true });
    setActiveIndex((prevIndex) =>
      prevIndex < slidersData.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={style.slider}>
      {slidersData.map((slide, index) => (
        <div
          key={slide.id}
          className={`${style.slide} ${
            index === activeIndex ? `${style.active}` : ""
          }`}
        >
          <div className={style.sliderWrapper}>
            <h1 className={style.title}>{slide.title1}</h1>
            <div className={style.arrowContainer}>
              <IoMdArrowDropleft
                size="25px"
                color={activeArrow.left ? "black" : "gray"}
                onClick={handleLeftArrow}
              />
              <div className={style.line} />
              <IoMdArrowDropright
                size="25px"
                color={activeArrow.right ? "black" : "gray"}
                onClick={handleRightArrow}
              />
            </div>
          </div>
          <div className={style.imgWrapper}>
            <div className={style.imgContainer}>
              <img className={style.img} src={slide.img} alt="img" />
            </div>

            <h3
              className={
                activeIndex === 1
                  ? `${style.oneWordSetting}`
                  : `${style.oneWord}`
              }
            >
              {slide.title2}
            </h3>
            <h3
              className={
                activeIndex === 1
                  ? `${style.twoWordSetting}`
                  : `${style.twoWord}`
              }
            >
              {slide.title3}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
