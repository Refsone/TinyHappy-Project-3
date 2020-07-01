import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../commons/header/LogoHeader'
import useForm from './useForm'
import validationLogIn from './validateLogin'

import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'

import './Connexion.css'

const Connexion = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validationLogIn)
  function submit () {
    console.log('sent succesfully')
  }

  const [visible, setVisible] = useState(false)
  const showType = visible ? 'text' : 'password'

  return (
    <div className='connexion-background'>
      <Logo />
      <form onSubmit={handleSubmit} className='general-form-connexion' noValidate>
        <label htmlFor='user_mail' name='user_mail' className='label-connexion'>email</label>
        <input name='user_mail' type='email' id='user_mail' className={`${errors.user_mail ? 'input-connexion-error' : 'input-connexion plholder bold-12px-grey'}`} placeholder='mon@email.com' value={values.email} onChange={handleChange} />

        {errors.user_mail && <p className='msg-error'>{errors.user_mail}</p>}

        <label htmlFor='user_password' className='label-connexion'>mot de passe</label>
        <div className='settings-container-eye'>
          <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
        </div>
        <input name='user_password' type={showType} id='user_password' value={values.password} onChange={handleChange} className={`${errors.user_password ? 'input-pws-error' : 'input-psw-default plholder bold-12px-grey'}`} placeholder='**********' />
        {errors.user_password && <p className='msg-error'>{errors.user_password}</p>}

        <p className='connexion-lien'><a href='/'>Mot de passe perdu ?</a></p>
        {errors && values.user_password === '' ? <button type='submit' className='connexion-btn-inactif'>se connecter</button> : <Link to='/moments'><button type='submit' className='connexion-btn-actif'>se connecter</button></Link>}
      </form>
    </div>
  )
}

export default Connexion
