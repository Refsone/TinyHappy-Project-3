import React from 'react'

import heart from '../../../images/footer-favoris-heart.svg'
import family from '../../../images/footer-fam.svg'
import plain from '../../../images/footer-plain.svg'
import star from '../../../images/footer-star.svg'

import './Navbar.css'

const Navbar = () => {
  return (
    <footer className='cont-flex-navbar'>
      <div className='item-flex-navbar'><img alt='Un avion en papier' src={plain} />PARTAGER</div>
      <div className='item-flex-navbar'><img alt='Un visage en smiley' src={family} />FAMILLE</div>
      <div className='item-flex-navbar'><img alt='Un coeur' src={heart} />FAVORI</div>
      <div className='item-flex-navbar'><img alt='Une étoile' src={star} />MOMENTS</div>
    </footer>
  )
}

export default Navbar
