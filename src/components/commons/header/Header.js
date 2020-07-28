import React from 'react'
import { Link } from 'react-router-dom'

import Sidemenu from './../../commons/SideMenu'

import monogramme from '../../../images/monogrammeTH.svg'
import './Header.css'

const Header = (props) => {
  const { burger, location, createFamilyBack, createMomentBack } = props
  const memberId = location === '/family/modify' && props.memberId
  const momentId = location && location.includes('/moments/create') && props.momentId
  console.log(location);

  let link = ''
  let text = ''
  switch (location) {
    case '/family/create':
      text = 'annuler'
      link = '/family'
      break
    case '/family/modify':
      if (props.memberId) {
        text = 'supprimer'
        link = '/family/delete'
      }
      break
    case '/moments/create/quote':
    if (momentId) {
        text = 'supprimer'
        link = '/moments/delete'
      } else {
      text = 'annuler'
      link = '/moments'
      }
      break
    case '/moments/create/milestone':
    if (momentId) {
        text = 'supprimer'
        link = '/moments/delete'
      } else {
        text = 'annuler'
        link = '/moments'
      }
      break
    case '/onboarding/lostpwd':
      text = 'annuler'
      link = '/onboarding/login'
      break
    case '/onboarding/resetPwd':
      text = 'retour'
      link = '/onboarding/login'
      break
    case '/onboarding/signup':
      text = 'se connecter'
      link = '/onboarding/login'
      break
    case '/onboarding/login':
      text = 's\'inscrire'
      link = '/onboarding/signup'
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
    case '/settings/legacy':
      text = 'retour'
      link = '/settings'
      break
    case '/settings/privacy':
      text = 'retour'
      link = '/settings'
      break
    default:
    console.log('coucoyu')
      text = 'retour'
      link = '/moments'
      break
  }

  return (
    <>
      <div className='header-container'>
        {burger ? <Sidemenu /> : <div> </div>}
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
                {createFamilyBack &&
                  <>
                    <br />
                    <Link to={{
                      pathname: '/family',
                      memberId: memberId
                    }}
                    >
                      <p className='double-action-link'>
                    ANNULER
                      </p>
                    </Link>
                </>}
              {createMomentBack &&
                <>
                  <br />
                  <Link to={{
                    pathname: '/moments',
                    memberId: momentId
                  }}
                  >
                    <p className='double-action-link'>
                      ANNULER
                      </p>
                  </Link>
                </>}
              </p>
            </Link>}
        </div>
      </div>
    </>
  )
}

export default Header
