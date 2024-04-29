import React, { useRef } from "react";
import style from "./Carousel.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { useActiveArrowState } from "../state/State";
import carouselData from "./CarouselData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customSlick.css";
import Slider from "react-slick";

const Carousel = () => {
  const sliderRef = useRef(null);
  const { activeArrow, setActiveArrow } = useActiveArrowState();

  const handleLeftArrow = () => {
    setActiveArrow({ left: true, right: false });
    sliderRef.current.slickPrev();
  };

  const handleRightArrow = () => {
    setActiveArrow({ left: false, right: true });
    sliderRef.current.slickNext();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
  };

  return (
    <div className={style.carousel}>
      <div className={style.container}>
        <div className={style.titleContainer}>
          <h2 className={style.titleTxt}>вакансии в гросс маркете</h2>
          <div className={style.arrowBar}>
            <IoMdArrowDropleft
              size="25px"
              color={activeArrow.left ? "black" : "gray"}
              onClick={handleLeftArrow}
            />
            <IoMdArrowDropright
              size="25px"
              color={activeArrow.right ? "black" : "gray"}
              onClick={handleRightArrow}
            />
          </div>
        </div>
        <div className={style.cart}>
          <Slider ref={sliderRef} {...settings}>
            {carouselData.map((cart) => (
              <div className={style.sliderItem} key={cart.id}>
                <div className={style.cartWrapper}>
                  <h3 className={style.title}>{cart.title1}</h3>
                  <div className={style.imgContainer}>
                    <img
                      className={style.img}
                      src={cart.img}
                      alt={cart.title1}
                    />
                  </div>
                  <div className={style.menu}>
                    <div className={style.containerMenu}>
                      <p className={style.txtMenu}>{cart.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
