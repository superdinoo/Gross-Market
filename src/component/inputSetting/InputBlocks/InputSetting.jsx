import React from "react";
import style from "./Input.module.css";

const InputSetting = ({
  title,
  placeholder,
  initialInput,
  list,
  value,
  onChange,
  name,
  type,
  minLenght,
}) => {
  const isLengthValid = value.length >= minLenght;
  const isFormatValidPhone =
    name === "phone" && value.length <= minLenght && value.length > 0;

  const isFormatValidEMail =
    name === "eMail" && !value.includes("@") && value.length > 0;

  return (
    <div className={style.container}>
      {isLengthValid ? (
        <div className={style.containerGreen}>
          <div className={style.grennSetting}>
            <img
              className={style.green}
              src="../../img/green.png"
              alt="green"
            />
          </div>
          <div className={style.wrapperTitl}>
            <h4 className={style.titleInput}>{title}</h4>
          </div>
        </div>
      ) : (
        <div className={style.wrapperTitl}>
          <h4 className={style.titleInput}>{title}</h4>
        </div>
      )}
      <div className={style.inputWrapper}>
        <input
          className={
            initialInput === "resume"
              ? `${style.sizeInitial}`
              : isFormatValidPhone
              ? `${style.redError}`
              : isFormatValidEMail
              ? `${style.redError}`
              : `${style.input}`
          }
          placeholder={placeholder}
          list={list}
          value={value}
          onChange={(e) => onChange(e.target.value, name)}
          name={name}
          type={type}
        />
        {isFormatValidPhone ? (
          <div className={style.errorSetting}>
            <p className={style.error}>поле не заполнено до конца</p>
          </div>
        ) : isFormatValidEMail ? (
          <div className={style.errorSetting}>
            <p className={style.error}>поле заполнено не корректно</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default InputSetting;
