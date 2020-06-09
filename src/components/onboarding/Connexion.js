import React, { Component } from 'react'
import './Connexion.css'
import Logo from '../commons/header/LogoMonogramme'

class Connexion extends Component {
  render () {
    return (
      <div className='connexion-background'>
        <div className='form-container'>
          <Logo />
          <form className='general-form'>
            <label htmlFor='email' name='email' className='general-label'>email</label>
            <input name='email' type='text' className='general-input plholder' placeholder='mon@email.com' required />
            <label htmlFor='password' className='general-label'>mot de passe</label>
            <input name='password' type='password' className='general-input mdp-forbiden' placeholder='**********' required />
            <p className='connexion-lien'><a href='#'>Mot de passe perdu ?</a></p>
            <button type='button' className='btn-connexion'>se connecter</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Connexion
