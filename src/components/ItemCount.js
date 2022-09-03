import React from 'react'
import { useState } from "react";

const ItemCount = () => {

    const [counter, setCounter] = useState(0)


    const suma = () => {
      setCounter(counter + 1);
    };
    const resta = () => {
      setCounter(counter - 1);
    };
  

  return (
    <div className=''>
    <strong>Contador: {counter}</strong>
    <button onClick={suma} className="btn btn-primary">
      +
    </button>
    <button onClick={resta} className="btn btn-danger">
      -
    </button>
  </div>
  )
}

export default ItemCount