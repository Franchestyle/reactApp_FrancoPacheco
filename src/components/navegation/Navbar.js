import React from 'react'
import { Link } from 'react-router-dom'
// import CartWidget from './CartWidget'

const navbar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
      <img src='./pokeball.png' width='30'></img>
      <Link to={'/'} className="btn btn-ghost normal-case text-xl">
        <a>Poke-mart</a>
      </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to={'./'}>Inicio</Link></li>
      <li><Link to={'./Productos'}>Productos</Link></li>
      <li><Link to={'./Nosotros'}>Nosotros</Link></li>
    </ul>
    <Link to={'./CartWidget'}><img src='./cartwidget.png' width='30'></img></Link>
  </div>
</div>
  )
}

export default navbar