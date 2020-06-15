import React, { Component } from 'react'
import './Connexion.css'

class Connexion extends Component {
  render () {
    return (
      <div className='connexion-background'>
        <div className='general-form-container'>
          <form className='general-form-connexion '>
            <label htmlFor='user_mail' name='user_mail' className='label-connexion'>email</label>
            <input name='user_mail' type='text' className='input-connexion plholder bold-12px-grey' placeholder='mon@email.com' required />
            <label htmlFor='user_password' className='label-connexion'>mot de passe</label>
            <input name='user_password' type='user_password' className='input-connexion mdp-forbiden plholder bold-12px-grey' placeholder='**********' required />
            <p className='connexion-lien'><a href='/'>Mot de passe perdu ?</a></p>
            <button type='button' className='general-btn connexion-btn'>se connecter</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Connexion
