import React from 'react'

const SignUp = () => {
  return (
    <div className='connexion-container'>
      <form className='general-connexion-form'>
        <label htmlFor='firstname' name='user_firstname' className='general-label'>prénom</label>
        <input type='text' name='user_firstname' className='general-input' placeholder='Elise' />

        <label htmlFor='last' name='user_lastname' className='general-label'>nom</label>
        <input type='text' name='user_lastname' className='general-input' placeholder='Durand' />

        <label htmlFor='email' name='user_mail' className='general-label'>email</label>
        <input name='user_mail' type='text' className='general-input' placeholder='mon@email.com' required />

        <label htmlFor='password' className='general-label' name='user_password'>mot de passe</label>
        <input name='password' type='password' className='general-input-mdp-close' placeholder='**********' required />

        <button type='button' className='btn-connexion'>s'inscrire</button>
      </form>
    </div>
  )
}

export default SignUp
