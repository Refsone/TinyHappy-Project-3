import React, { useState } from 'react'

import useForm from './../onboarding/useForm'
import confirmationReset from './confirmationResert'

import './../onboarding/Connexion.css'
import './Password.css'

import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'

const Password = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, confirmationReset)
  function submit () {
    console.log('sent succesfully')
  }

  const [visible, setVisible] = useState(false)
  const showType = visible ? 'text' : 'password'

  const handleChangeConfirm = (event) => {
    console.log(event)
  }

  return (
    <div className='settings-container-pwdmail'>
      <h1 className='settings-pwmail-title bold-16px-grey'>modification du mot de passe</h1>
      <form onSubmit={handleSubmit} className='general-form-connexion' noValidate>
        <label htmlFor='user_password' name='user_password' className='label-settings bold-12px-grey'>Nouveau mot de passe</label>
        <div className='settings-container-eye'>
          <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
        </div>
        <input name='user_password' type={showType} id='user_password' value={values.password} onChange={handleChange} className={`${errors.user_password ? 'input-pws-error' : 'input-psw-default plholder bold-12px-grey'}`} placeholder='**********' onClick={handleChange} />
        {errors.user_password && <p className='msg-error'>{errors.user_password}</p>}
        <label htmlFor='user_password' className='label-settings bold-12px-grey'>confirmation du nouveau de passe</label>
        <div className='settings-container-eye'>
          <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
        </div>
        <input name='confirm_user_password' type={showType} id='confirm_user_password' value={values.confirm_password} onChange={handleChangeConfirm} className={`${errors.user_password ? 'input-pws-error' : 'input-connexion plholder bold-12px-grey'}`} placeholder='**********' />
        {errors.user_password && <p className='msg-error'>{errors.user_password}</p>}

        {errors && values.user_password !== values.confirm_user_password ? <button type='submit' className='connexion-btn-inactif'>confirmer</button> : <button type='submit' className='connexion-btn-actif'>confirmer</button>}
      </form>
    </div>
  )
}

export default Password
