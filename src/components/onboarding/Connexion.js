import React, { Component } from 'react'
import './Connexion.css'
import Logo from '../commons/header/LogoMonogramme'

class Connexion extends Component {
  render () {
    return (
      <div className='connexion-background'>
        <div className='connexion-container'>
          <Logo />
          <form className='connexion-form'>
            <label className='connexion-label'>email</label>
            <input className='connexion-input plholder' placeholder='mon@email.com' />
            <label className='connexion-label'>mot de passe</label>
            <input className='connexion-input mdp' placeholder='**********' />
            <p className='connexion-lien'><a href='#'>Mot de passe perdu ?</a></p>
            <button className='btn-connexion'>se connecter</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Connexion
