import React from "react";
import InputSetting from "../InputSetting";
import style from "./First.module.css";

const FirstInputBlocks = ({ handleInputValue, workValue, fullNameValue }) => {
  return (
    <div className={style.firstInputBlocksContainer}>
      <div className={style.workData}>
        <div className={style.jobContaineree}>
          <InputSetting
            title="Вакансия *"
            placeholder="Укажите вакансию"
            list="work"
            value={workValue}
            onChange={(value) => handleInputValue("work", value)}
            type="text"
            name="work"
            minLenght={5}
          />
          <datalist id="work" className={style.dataList}>
            <option value="товаровед" />
            <option value="водитель" />
            <option value="пекарь" />
            <option value="кассир" />
            <option value="продавец" />
            <option value="повар" />
            <option value="приёмщик" />
          </datalist>
        </div>

        <div className={style.jobContainer}>
          <InputSetting
            title="ФИО*"
            placeholder="Укажите ФИО"
            value={fullNameValue}
            onChange={(value) => handleInputValue("fullName", value)}
            name="fullName"
            type="text"
            minLenght={15}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstInputBlocks;
