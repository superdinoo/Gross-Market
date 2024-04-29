import React, { useState } from "react";
import style from "./UnityTwoPages.module.css";
import {
  FirstInputBlocks,
  FourthInputBlocks,
  SecondInputBlocks,
  ThirdInpuBlocks,
} from "../InputBlocks/index";
import RightPath from "../rightPath/RightPath";
import { Link } from "react-router-dom";

const UnityTwoPages = () => {
  const [valueInput, setValueInput] = useState({
    work: "",
    fullName: "",
    birthday: "",
    phone: "",
    eMail: "",
    resume: "",
  });
  const [activeMark, setActiveMark] = useState({
    robot: false,
    agree: false,
  });

  const handleActiveMark = (mark) => {
    if (mark === "robot") {
      setActiveMark({ ...activeMark, robot: !activeMark.robot });
    } else if (mark === "agree") {
      setActiveMark({ ...activeMark, agree: !activeMark.agree });
    }
  };
  const handleInputValue = (name, value) => {
    setValueInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const isAllFieldsFilled = () => {
    return (
      activeMark.robot &&
      activeMark.agree &&
      valueInput.work &&
      valueInput.fullName &&
      valueInput.birthday &&
      valueInput.phone
    );
  };
  const buttonColor = isAllFieldsFilled() ? style.btnGreen : style.btn;
  return (
    <div className={style.unityTwoPagesContainer}>
      <div className={style.leftContainer}>
        <FirstInputBlocks
          handleInputValue={handleInputValue}
          workValue={valueInput.work}
          fullNameValue={valueInput.fullName}
        />
        <SecondInputBlocks
          handleInputValue={handleInputValue}
          birthdayValue={valueInput.birthday}
          phoneValue={valueInput.phone}
          eMailValue={valueInput.eMail}
        />
        <ThirdInpuBlocks
          handleInputValue={handleInputValue}
          resumeValue={valueInput.resume}
        />
        <FourthInputBlocks
          activeMark={activeMark}
          handleActiveMark={handleActiveMark}
        />
        <Link to={isAllFieldsFilled() ? "/thankYou" : ""}>
          <div className={style.btnWrapper}>
            <button className={buttonColor}>
              <p className={style.settingBtn}>отправить</p>
            </button>
          </div>
        </Link>
      </div>
      <div className={style.rightContainer}>
        <RightPath />
      </div>
    </div>
  );
};

export default UnityTwoPages;
