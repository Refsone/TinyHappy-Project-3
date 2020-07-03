import React from 'react'
import { Link } from 'react-router-dom'

import Sidemenu from './../../commons/SideMenu'

import monogramme from '../../../images/monogrammeTH.svg'
import './Header.css'

const Header = (props) => {
  const { burger, location } = props
  const memberId = location === '/family/modify' && props.memberId
  let link = ''
  let text = ''
  switch (location) {
    case '/family/create':
      text = 'annuler'
      link = '/family'
      break
    case '/family/modify':
      text = 'supprimer'
      link = '/family/delete'
      break
    case 'moments/create/quote':
      text = 'annuler'
      link = '/moments'
      break
    case 'moments/create/milestone':
      text = 'annuler'
      link = '/moments'
      break
    case '/onboarding/signup':
      text = 'annuler'
      link = '/'
      break
    case '/onboarding/login':
      text = 'annuler'
      link = '/'
      break
    case '/share/moments':
      text = 'retour'
      link = '/share'
      break
    case '/settings':
      text = 'retour'
      link = '/moments'
      break
    case '/settings/modify':
      text = 'annuler'
      link = '/settings'
      break
    case '/settings/modify/password':
      text = 'retour'
      link = '/settings'
      break
    case '/settings/modify/email':
      text = 'retour'
      link = '/settings'
      break
    case '/setting/legacy':
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
        {burger ? <Sidemenu /> : <div></div>}
        <img className='logo-monogramme' src={monogramme} alt='Logo Tiny Happy' />
        <div>
          {location &&
            <Link to={{
              pathname: link,
              memberId: memberId
            }}
            >
              <p className='action-link'>
                {text}
              </p>
            </Link>}
        </div>
      </div>
    </>
  )
}

export default Header