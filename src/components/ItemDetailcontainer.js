import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import boostersJson from "../boosters.json";
import { useParams } from 'react-router-dom';

const ItemDetailcontainer = () => {
    const [booster, setBooster] = useState({});
    const { id } = useParams()

    const getBoost = (data, time) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data.find( p => p.id === id));
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
      }, );

  return (
    <ItemDetail booster={booster}/>
  )
}

export default ItemDetailcontainer