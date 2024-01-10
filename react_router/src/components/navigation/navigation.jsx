import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/koncepter">Koncepter</Link>
          <Link className='link' to="/kontakt">Kontakt</Link>
          <Link className='link' to="/om">Om</Link>
          <Link className='link' to="/utm">UTM Loyalty</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
