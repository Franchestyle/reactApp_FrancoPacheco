import React from 'react'
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial)


    const sumaCounter = () => {
      if (counter < stock) {
      setCounter(counter + 1);
      }
    };
    const restaCounter = () => {
      if (counter > 0) {
      setCounter(counter - 1);
      }
    };
  

  return (
    <div className='m-5'>
    <strong>{counter}</strong>
    <button onClick={sumaCounter} className="btn btn-primary">
      +
    </button>
    <button onClick={restaCounter} className="btn btn-danger">
      -
    </button>
    <button onClick={() => onAdd(counter)} className="btn">
    Agregar
    </button>
  </div>
  )
}

export default ItemCount