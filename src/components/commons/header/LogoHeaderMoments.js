import React from 'react'
import monogramme from '../../../images/monogrammeTH.svg'
import Sidemenu from './../../commons/SideMenu'
import './LogoHeaderMoments.css'

function LogoHeaderMoments () {
  return (
    <>
      <Sidemenu />
      <div className='header-container'>
        <img className='logo-monogramme' src={monogramme} alt='Logo Tiny Happy' />
        <a href='/'><p className='action-link'>txt action</p></a>
      </div>
    </>
  )
}

export default LogoHeaderMoments
