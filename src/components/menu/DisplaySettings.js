import React from 'react'
import Header from './../commons/header/Header'

import './DisplaySettings.css'

const DisplaySettings = (props) => {
  const path = props.location.pathname
  return (
    <>
      <Header location={path} burger />
      <div className='settings-container'>
        <h1 className='settings-title bold-16px-grey'>paramètres</h1>
        <h2 className='settings-soutitle bold-12px-grey'>Application</h2>
        <p className='settings-pseudoinput medium-12px-lightgrey'>Afficher les âges des membres</p>
        <h2 className='settings-soutitle bold-12px-grey'>Sécurité</h2>
        <p className='settings-pseudoinput medium-12px-lightgrey'>Modifier votre mot de passe</p>
        <p className='settings-pseudoinput medium-12px-lightgrey'>Modifier votre adresse mail</p>
      </div>
    </>
  )
}

export default DisplaySettings
