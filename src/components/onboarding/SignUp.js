import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ConfirmButton from '../commons/footer/ConfirmButton'
import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'
import Header from '../commons/header/Header'
import { Redirect } from 'react-router-dom'

import './Connexion.css'
import '../menu/Password.css'

const SignUp = (props) => {
  const data = {
    user_firstname: '',
    user_lastname: '',
    user_mail: '',
    user_password: '',
    parameter_id: 1
  }

  const [visible, setVisible] = useState(false)
  const [loginData, setLoginData] = useState(data)
  const [successfull, setSuccessfull] = useState(false)
  const [error, setError] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [userConfirmPassword, setUserConfirmPassword] = useState('')

  const showType = visible ? 'text' : 'password'
  const { user_firstname, user_lastname, user_mail, user_password } = loginData

  useEffect(() => {
    if (successfull || error) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 2500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [successfull, error])

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value })
  }
  const confirmPassword = e => {
    setUserConfirmPassword(e.target.value)
  }
  const sendSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:7500/sign-up', loginData)
      .then(res => {
        if (res.status === 201) {
          setSuccessfull(true)
        } else {
          setError(true)
        }
      })
      .catch(err => err && setError(true))
  }

  const btn = user_firstname === '' || user_lastname === '' || user_mail === '' || user_password === '' || user_password !== userConfirmPassword
    ? <button type='submit' className='btn-connexion-none' disabled>s'inscrire</button>
    : <button type='submit' className='btn-connexion' onClick={(e) => sendSignUp(e)}>s'inscrire</button>
  return (
    <>
      <Header location={props.location.pathname} />
      <div className='settings-container-pwdmail'>

        <form className='general-form-connexion' noValidate>

          <label htmlFor='user_firstname' className='label-settings bold-12px-grey'>prénom</label>
          <input name='user_firstname' type='text' id='user_firstname' value={user_firstname} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' placeholder='Elise' autoComplete='off' required />

          <label htmlFor='user_lastname' className='label-settings bold-12px-grey'>nom</label>
          <input name='user_lastname' type='text' id='user_lastname' value={user_lastname} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' placeholder='Durand' autoComplete='off' required />

          <label htmlFor='user_mail' className='label-settings bold-12px-grey'>email</label>
          <input name='user_mail' type='email' id='user_mail' value={user_mail} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' autoComplete='off' placeholder='mon@email.com' required />

          <label htmlFor='user_mail' className='label-settings bold-12px-grey'>mot de passe</label>
          <div className='settings-container-eye'>
            <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
          </div>
          <input name='user_mail' type={showType} id='user_password' value={user_password} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' placeholder='**********' autoComplete='off' />
          <label htmlFor='user_mail' className='label-settings bold-12px-grey'>confirmer le mot de passe </label>
          <div className='settings-container-eye'>
            <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
          </div>
          <input name='user_mail' type={showType} id='userConfirmPassword' value={userConfirmPassword} onChange={confirmPassword} className='input-psw-default plholder bold-12px-grey' placeholder='**********' autoComplete='off' />
          {successfull ? <ConfirmButton message='inscription reussie' confirm /> : btn}
          {error && <p className='signUp-error'>Une erreur s'est produite lors de l'inscription</p>}
          {redirect && <Redirect to='/onboarding/login' />}
        </form>
      </div>
    </>
  )
}

export default SignUp
