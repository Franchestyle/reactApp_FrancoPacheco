import React from "react";
import { useState, useEffect } from "react";
import boostersJson from "../boosters.json";
import ItemList from "./ItemList";


const ItemListContainer = () => {
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
        getBoost(boostersJson, 2000)
        .then((res) => {
            setBooster(res);
        })
        .catch((err) => console.log(err, ": se rompio el archivo Json pa"));
    }, []);

  return (
    <div>
      <ItemList booster={booster} />
    </div>
  )
};

export default ItemListContainer;
