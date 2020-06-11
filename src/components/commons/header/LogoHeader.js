import React from 'react'
import monogramme from '../../../images/monogrammeTH.svg'
import './LogoHeader.css'

function Logo () {
  return (
    <div className='header'>
      <img className='logo-monogramme' src={monogramme} alt='Logo Tiny Happy' />
    </div>
  )
}

export default Logo
