import React, { Component } from 'react'
import './Connexion.css'
import Logo from '../commons/header/HeaderMogramme'

class Connexion extends Component {
  render () {
    return (
      <div className='connexion-background'>
        <div className='general-form-container'>
          <Logo />
          <form className='general-form'>
            <label htmlFor='user_mail' name='user_mail' className='general-label'>email</label>
            <input name='user_mail' type='text' className='general-input plholder' placeholder='mon@email.com' required />
            <label htmlFor='user_password' className='general-label'>mot de passe</label>
            <input name='user_password' type='user_password' className='general-input mdp-forbiden' placeholder='**********' required />
            <p className='connexion-lien'><a href='#'>Mot de passe perdu ?</a></p>
            <button type='button' className='general-btn connexion-btn'>se connecter</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Connexion
