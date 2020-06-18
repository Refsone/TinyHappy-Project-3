import React, { useState } from 'react'
import useForm from './../onboarding/useForm'
import validationLogIn from './../onboarding/validateLogin'

import './../onboarding/Connexion.css'
import './Password.css'

import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'

const Email = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validationLogIn)
  function submit () {
    console.log('sent succesfully')
  }

  const [visible, setVisible] = useState(false)
  const showType = visible ? 'text' : 'password'

  return (
    <div className='settings-container-pwdmail'>
      <h1 className='settings-pwmail-title bold-16px-grey'>modification votre adresse email</h1>
      <form onSubmit={handleSubmit} className='general-form-connexion' noValidate>
        <label htmlFor='user_mail' name='user_mail' className='label-settings bold-12px-grey'>Nouvelle adresse mail</label>
        <div className='settings-container-eye'>
          <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} />
        </div>
        <input name='user_mail' type={showType} id='user_mail' value={values.email} onChange={handleChange} className={`${errors.user_mail ? 'input-pws-error' : 'input-psw-default plholder bold-12px-grey'}`} placeholder='**********' />
        {errors.user_mail && <p className='msg-error'>{errors.user_mail}</p>}

        <label htmlFor='user_mail' className='label-settings bold-12px-grey'>confirmation de la nouvelle adresse mail</label>
        <div className='settings-container-eye'>
          <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} />
        </div>
        <input name='user_mail' type={showType} id='user_mail' value={values.email} onChange={handleChange} className={`${errors.user_mail ? 'input-pws-error' : 'input-psw-default plholder bold-12px-grey'}`} placeholder='**********' />
        {errors.user_mail && <p className='msg-error'>{errors.user_mail}</p>}

        {errors && values.user_mail === '' ? <button type='submit' className='connexion-btn-inactif'>confirmer</button> : <button type='submit' className='connexion-btn-actif'>confirmer</button>}
      </form>
    </div>
  )
}

export default Email
