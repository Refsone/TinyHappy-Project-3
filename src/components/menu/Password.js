import React from 'react'
import useForm from './../onboarding/useForm'
import validationLogIn from './../onboarding/validateLogin'

import './../onboarding/Connexion.css'
import './Password.css'

const Password = () => {
  const { handleChange, handleSubmit, onclick, values, errors, showType } = useForm(submit, validationLogIn)
  function submit () {
    console.log('sent succesfully')
  }

  return (
    <div className='settings-container-pwdmail'>
      <h1 className='settings-pwmail-title bold-16px-grey'>modification du mot de passe</h1>
      <form onSubmit={handleSubmit} className='general-form-connexion' noValidate>
        <label htmlFor='user_password' name='user_password' className='label-settings bold-12px-grey'>Nouveau mot de passe</label>
        <button className={`${showType ? 'show-eye' : 'show-eye-open'}`} onClick={onclick} />

        <input name='user_password' type={showType} id='user_password' value={values.password} onChange={handleChange} className={`${errors.user_password ? 'input-pws-error' : 'input-connexion plholder bold-12px-grey'}`} placeholder='**********' />
        {errors.user_password && <p className='msg-error'>{errors.user_password}</p>}

        <label htmlFor='user_password' className='label-settings bold-12px-grey'>confirmation du nouveau de passe</label>

        <button className={`${showType ? 'show-eye2' : 'show-eye-open2'}`} onClick={onclick} />

        <input name='user_password' type={showType} id='user_password' value={values.password} onChange={handleChange} className={`${errors.user_password ? 'input-pws-error' : 'input-connexion plholder bold-12px-grey'}`} placeholder='**********' />
        {errors.user_password && <p className='msg-error'>{errors.user_password}</p>}

        {errors && values.user_password === '' ? <button type='submit' className='connexion-btn-inactif'>confirmer</button> : <button type='submit' className='connexion-btn-actif'>confirmer</button>}
      </form>
    </div>
  )
}

export default Password
