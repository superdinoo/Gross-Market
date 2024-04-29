import React, { useEffect, useState } from "react";
import style from "./Location.module.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { allPoints } from "./allPointsData";

const Location = () => {
  const [filterPoints, setFilterPoints] = useState([]);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    setFilterPoints([...allPoints.individual, ...allPoints.legal]);
  }, []);

  const handlePoint = (type) => {
    setSelectedType(type);
    if (type === "all") {
      setFilterPoints([...allPoints.legal, ...allPoints.individual]);
    } else if (type === "legal") {
      setFilterPoints(allPoints.legal);
    } else if (type === "individual") {
      setFilterPoints(allPoints.individual);
    }
  };

  return (
    <YMaps>
      <div className={style.mapY}>
        <div className={style.titleContainer}>
          <h2 className={style.mapYTitle}>география</h2>
        </div>
        <div className={style.mapContainer}>
          <Map
            defaultState={{
              center: [55.760254504908744, 37.6270980930011],
              zoom: 10,
            }}
            className={style.mapYSetting}
          >
            {filterPoints.map((point, index) => (
              <Placemark
                key={index}
                geometry={{
                  type: "Point",
                  coordinates: point,
                }}
              />
            ))}
            <div className={style.btnContainer}>
              <button
                className={style.legal}
                style={{
                  width: "100px",
                  backgroundColor:
                    selectedType === "legal" ? "#ffdf31" : "white",
                }}
                onClick={() => handlePoint("legal")}
              >
                <p className={style.txtLegal}>юрлица</p>
              </button>
              <button
                className={style.legal}
                style={{
                  width: "108px",
                  backgroundColor:
                    selectedType === "individual" ? "#ffdf31" : "white",
                }}
                onClick={() => handlePoint("individual")}
              >
                <p className={style.txtLegal}>физлица</p>
              </button>
              <button
                className={style.legal}
                style={{
                  width: "144px",
                  backgroundColor: selectedType === "all" ? "#ffdf31" : "white",
                }}
                onClick={() => handlePoint("all")}
              >
                <p className={style.txtLegal}>показать все</p>
              </button>
            </div>
          </Map>
        </div>
      </div>
    </YMaps>
  );
};

export default Location;
