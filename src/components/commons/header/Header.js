import React from 'react'
import { Link } from 'react-router-dom'

import Sidemenu from './../../commons/SideMenu'

import monogramme from '../../../images/monogrammeTH.svg'
import './Header.css'

const Header = (props) => {
  const { burger, location } = props
  let link = ''
  let text = ''
  switch (location) {
    case '/family/create':
      text = 'annuler'
      link = '/family'
      break
    case 'moments/create/quote':
      text = 'annuler'
      link = '/moments'
      break
    case 'moments/create/milestone':
      text = 'annuler'
      link = '/moments'
      break
    case '/family/modify':
      text = 'supprimer'
      link = '/family/delete'
      break
    case '/share/moments':
      text = 'retour'
      link = '/share'
      break
    case '/settings':
      text = 'retour'
      link = location
      break
    case '/settings/modify':
      text = 'annuler'
      link = '/settings'
      break
    case '/settings/legacy':
      text = 'retour'
      link = location
      break
    case '/settings/privacy':
      text = 'retour'
      link = location
      break

    default:
      text = 'retour'
      link = '/moments'
      break
  }

  return (
    <>
      <div className='header-container'>
        {burger && <Sidemenu />}
        <img className='logo-monogramme' src={monogramme} alt='Logo Tiny Happy' />
        <div>
          {location && <Link to={link}><p className='action-link'>{text}</p></Link>}
        </div>
      </div>
    </>
  )
}

export default Header
