import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

import heart from '../../../images/footer-favoris-heart.svg'
import family from '../../../images/footer-fam.svg'
import plain from '../../../images/footer-plain.svg'
import star from '../../../images/footer-star.svg'

const Navbar = () => {
  return (
    <footer className='cont-flex-navbar'>
      <NavLink to='/share'>
        <div className='item-flex-navbar'>
          <img alt='Un avion en papier' src={plain} />
          <p>PARTAGE</p>
        </div>
      </NavLink>
      <NavLink to='/family'><div className='item-flex-navbar'><img alt='Un visage en smiley' src={family} /><p>FAMILLE</p></div></NavLink>
      <NavLink to='/favoris'><div className='item-flex-navbar'><img alt='Un coeur' src={heart} /><p>FAVORIS</p></div></NavLink>
      <NavLink to='/moments'><div className='item-flex-navbar'><img alt='Une étoile' src={star} /><p>MOMENTS</p></div></NavLink>
    </footer>
  )
}

export default Navbar
