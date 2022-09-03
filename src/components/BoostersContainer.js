import React from "react";
import { useState, useEffect } from "react";
import boostersJson from "../boosters.json";
import {BoostersList} from "./BoostersList";

/* No logre traer los datos del JSON, hice exactamente como lo hicieron en el after pero no entiendo porque no lo puedo llevar a Booster.js */

const BoostersContainer = () => {
  const [booster, setBooster] = useState([]);

  const getBoost = (data, time) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("Error");
        }
      }, time);
    });

    useEffect(()=>{
        getBoost(boostersJson, 3000)
        .then((res) => {
            setBooster(res);
        })
        .catch((err) => console.log(err, ": se rompio el archivo Json pa"));
    }, []);

  return <div>
    <BoostersList booster={booster}/>
  </div>;
};

export default BoostersContainer;
