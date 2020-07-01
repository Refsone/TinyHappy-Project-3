import React, { useState } from 'react'

import LogoHeader from '../commons/header/LogoHeader'
import './Connexion.css'
import '../menu/Password.css'

import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'

const SignUp = () => {
  const data = {
    userFirstname: '',
    userLastname: '',
    userMail: '',
    userPassword: '',
    userConfirmPassword: ''
  }

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value })
  }

  const [visible, setVisible] = useState(false)
  const [loginData, setLoginData] = useState(data)
  const showType = visible ? 'text' : 'password'
  const { userFirstname, userLastname, userMail, userPassword, userConfirmPassword } = loginData

  const btn = userFirstname === '' || userLastname === '' || userMail === '' || userPassword === '' || userPassword !== userConfirmPassword
    ? <button type='submit' className='btn-connexion-none' disabled>s'inscrire</button>
    : <button type='submit' className='btn-connexion'>s'inscrire</button>

  return (
    <>
      <LogoHeader />
      <div className='settings-container-pwdmail'>

        <form className='general-form-connexion' noValidate>

          <label htmlFor='userFirstname' className='label-settings bold-12px-grey'>prénom</label>
          <input name='userFirstname' type='text' id='userFirstname' value={userFirstname} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' placeholder='Elise' autoComplete='off' required />

          <label htmlFor='userLastname' className='label-settings bold-12px-grey'>nom</label>
          <input name='userLastname' type='text' id='userLastname' value={userLastname} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' placeholder='Durand' autoComplete='off' required />

          <label htmlFor='userMail' className='label-settings bold-12px-grey'>email</label>
          <input name='userMail' type='email' id='userMail' value={userMail} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' autoComplete='off' placeholder='mon@email.com' required />

          <label htmlFor='userMail' className='label-settings bold-12px-grey'>mot de passe</label>
          <div className='settings-container-eye'>
            <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
          </div>
          <input name='user_mail' type={showType} id='userPassword' value={userPassword} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' placeholder='**********' autoComplete='off' />
          <label htmlFor='user_mail' className='label-settings bold-12px-grey'>confirmer le mot de passe </label>
          <div className='settings-container-eye'>
            <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
          </div>
          <input name='user_mail' type={showType} id='userConfirmPassword' value={userConfirmPassword} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' placeholder='**********' autoComplete='off' />
          {btn}
        </form>
      </div>
    </>
  )
}

export default SignUp
