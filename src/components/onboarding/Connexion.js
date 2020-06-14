import React from 'react'
import Logo from '../commons/header/LogoHeader'
import useForm from './useForm'
import validationLogIn from './validateLogin'

import './Connexion.css'

const Connexion = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validationLogIn)
  function submit () {
    console.log('Your login is well done')
  }
  return (
    <div className='connexion-background'>
      <Logo />
      <form onSubmit={handleSubmit} action='/' className='general-form-connexion' noValidate>
        <label htmlFor='user_mail' name='user_mail' className='label-connexion'>email</label>
        <input name='user_mail' type='email' id='user_mail' className={`${errors.user_mail ? 'input-connexion-error' : 'input-connexion plholder bold-12px-grey'}`} placeholder='mon@email.com' value={values.email} onChange={handleChange} />

        {errors.user_mail && <p className='msg-error'>{errors.user_mail}</p>}

        <label htmlFor='user_password' className='label-connexion'>mot de passe</label>
        <input name='user_password' type='password' id='user_password' value={values.password} onChange={handleChange} className={`${errors.user_password ? 'input-pws-error' : 'input-connexion mdp-open plholder bold-12px-grey'}`} placeholder='**********' />
        {errors.user_password && <p className='msg-error'>{errors.user_password}</p>}

        <p className='connexion-lien'><a href='/'>Mot de passe perdu ?</a></p>

        <button type='submit' className={`${!handleSubmit ? 'connexion-btn inactif' : 'connexion-btn actif'}`}>se connecter</button>
      </form>
    </div>
  )
}

export default Connexion
