import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='signUp'>
      <div className='signUp_input'>
        <label>Prénom</label>
        <input type='text' name='Prénom' placeholder='Elise' />
      </div>

      <div className='signUp_input'>
        <label>Nom</label>
        <input type='text' name='Nom' placeholder='Durand' />
      </div>

      <div className='signUp_input'>
        <label>Email</label>
        <input type='text' name='Email' placeholder='prenom@exemple.com' />
      </div>

      <div className='signUp_input'>
        <label>MOT DE PASSE</label>
        <input type='password' name='mot de passe' placeholder='' />
      </div>
    </div>
  )
}

export default SignUp
