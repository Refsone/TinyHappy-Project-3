import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from './../commons/header/Header'
import Toast from '../commons/Toast'
import toaster from 'toasted-notes'

import './DisplaySettings.css'

const DisplaySettings = (props) => {
  const path = props.location.pathname

  useEffect(() => {
    const { params } = props.location
    let message = ''
    if (params) {
      if (params.send) {
        message = 'Adresse e-mail modifiée !'
      } else if (params.newPwd) {
        message = 'Mot de passe modifié !'
      }
      toaster.notify(<Toast classType='sucess-toaster' text={`${message}`} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') })
    }
  }, [])

  return (
    <>
      <Header location={path} burger />
      <div className='settings-container'>
        <h1 className='settings-title bold-16px-grey'>paramètres</h1>
        <h2 className='settings-soutitle bold-12px-grey'>Sécurité</h2>
        <Link to='/settings/modify/password' className='settings-pseudoinput medium-12px-lightgrey'>Modifier votre mot de passe</Link>
        <Link to='/settings/modify/email' className='settings-pseudoinput medium-12px-lightgrey'>Modifier votre adresse mail</Link>
      </div>
    </>
  )
}

export default DisplaySettings
