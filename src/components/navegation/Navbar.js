import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'

const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to='/'>
        <img src='./pokeball.png' width='40'></img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link className="nav-link active" to='/' >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Productos' >Productos</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/Nosotros' >Nosotros</Link>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar