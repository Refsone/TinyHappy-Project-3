import React, { Component } from 'react'
import LogoHeaderMoments from './../commons/header/LogoHeaderMoments'

import './DisplaySettings.css'

class DisplaySettings extends Component {
  render () {
    return (
      <>
        <LogoHeaderMoments />
        <div className='settings-container'>
          <h1 className='settings-title bold-16px-grey'>paramètres </h1>
          <form className='general-connexion-form'>
            <label className='settings-soutitle bold-12px-grey'>Application</label>
            <input className='general-input' placeholder='Afficher les âges des membres' />
            <label className='settings-soutitle bold-12px-grey'>Sécurité</label>
            <input className='general-input' placeholder='Modifier votre mot de passe' />
            <input className='general-input' placeholder='Modifier votre adresse email' />
          </form>
        </div>
      </>
    )
  }
}

export default DisplaySettings
