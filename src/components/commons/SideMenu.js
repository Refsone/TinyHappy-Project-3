import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

import './SideMenu.css'

import logoTH from '../../images/menu-params-fam.svg'
import logoParam from '../../images/menu-params-outil.svg'
import logoHeart from '../../images/menu-params-heart.svg'
import logoLibra from '../../images/menu-params-libra.svg'
import logoMask from '../../images/menu-params-mask.svg'
import logoLogOut from '../../images/menu-params-close.svg'
import logoMB from '../../images/menu-burger-logo.svg'

const SideMenu = () => {
  const history = useHistory()

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }
  return (
    <div className='SideMenu'>
      <Menu width='85%' disableAutoFocus customBurgerIcon={<img className='scalable-mb-logo' src={logoMB} alt='icon menu burger' />}>
        <img className='logo-th' src={logoTH} alt='Logo Tinny Happy' />

        <div className='block-link'>
          <Link to='/settings'>
            <div className='menu-item'>
              <img src={logoParam} alt='Logo paramètre' />
              <p>Paramètres</p>
            </div>
          </Link>
          <Link to='/settings/legacy'>
            <div className='menu-item'>
              <img src={logoLibra} alt='Logo légale' />
              <p>Mentions légales</p>
            </div>
          </Link>
          <Link to='/settings/privacy'>
            <div className='menu-item'>
              <img src={logoMask} alt='Logo masque' />
              <p>Confidentialité</p>
            </div>
          </Link>
          {/* <Link to='/' onClick={() => localStorage.clear()}> */}
          <div className='menu-item'>
            <button className='btn-logOut' onClick={handleLogout}>
              <img src={logoLogOut} alt='Logo déconnexion' />
              <p>Déconnexion</p>
            </button>
          </div>
          {/* </Link> */}
          <Link to='/onboarding/login'>
            <div className='block-love'>
              <img src={logoHeart} alt='heart' />
              <p>VOUS AIMEZ TINYHAPPY ?</p>
              <p>Notez TinyHappy sur le store</p>
            </div>
          </Link>
        </div>
      </Menu>
    </div>
  )
}

export default SideMenu
