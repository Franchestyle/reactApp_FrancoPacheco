import React from 'react'
import {Link} from 'react-router-dom'

const CartWidget = () => {
  return (
    <div>
        <Link to='/'>
            <img src='./cartwidget.png' width='40'></img>
        </Link>
    </div>
  )
}

export default CartWidget