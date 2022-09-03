import React from 'react'
// import CartWidget from './CartWidget'

const navbar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <img src='./pokeball.png' width='30'></img>
    <a className="btn btn-ghost normal-case text-xl">Poke-mart</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a>Inicio</a></li>
      <li><a>Productos</a></li>
      <li><a>Nosotros</a></li>
    </ul>
    <img src='./cartwidget.png' width='30'></img>
  </div>
</div>
  )
}

export default navbar