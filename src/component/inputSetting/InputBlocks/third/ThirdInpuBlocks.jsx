import React from "react";
import style from "./Third.module.css";
import InputSetting from "../InputSetting";
import { BsPaperclip } from "react-icons/bs";

const ThirdInpuBlocks = ({ handleInputValue, resumeValue }) => {
  const initialInput = "resume";
  return (
    <div className={style.thirdInpuBlocksContainer}>
      <InputSetting
        title="Резюме "
        initialInput={initialInput}
        value={resumeValue}
        name="resume"
        type="text"
        onChange={(value) => handleInputValue("resume", value)}
      />
      <div className={style.fixContainer}>
        <div className={style.fixWrapper}>
          <BsPaperclip size={24} className={style.icon} />
          <p className={style.fixText}>выберете или перетащите файл</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdInpuBlocks;
