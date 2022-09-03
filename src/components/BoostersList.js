import React from 'react'
import {Booster} from './Booster'

const BoostersList = ({ booster }) => {
  return (
    <div>
        {booster.length ? (
            booster.map((booster) => (
            <Booster 
            key={booster.id}
            title={booster.title}
            price={booster.price}
            img={booster.img} 
            />
            ))
        ) : (
            <progress class="progress w-56"></progress>
        )}
    </div>
  )
}

export default BoostersList