import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ConfirmButton from '../commons/footer/ConfirmButton'
import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'
import Header from '../commons/header/Header'
import { Redirect } from 'react-router-dom'

import '../onboarding/Connexion.css'
import '../menu/Password.css'

const Connexion = (props) => {
  const data = {
    user_mail: '',
    user_password: '',
    parameter_id: 1
  }

  const [visibleOne, setVisibleOne] = useState(false)
  const [loginData, setLoginData] = useState(data)
  const [successfull, setSuccessfull] = useState(false)
  const [error, setError] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const showTypeOne = visibleOne ? 'text' : 'password'

  const { user_mail, user_password } = loginData

  useEffect(() => {
    if (successfull) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 1500)
      return () => {
        clearTimeout(timer)
      }
    } else {
      setRedirect(false)
    }
  }, [successfull, error])

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value })
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

  const btn = user_mail === '' || user_password === '' 
    ? <button type='submit' className='btn-connexion-none' disabled>se connecter</button>
    : <button type='submit' className='btn-connexion' onClick={(e) => sendSignUp(e)}>se connecter</button>

  return (
    <>
      <Header location={props.location.pathname} />
      <div className='settings-container-pwdmail'>

        <form className='general-form-connexion' noValidate>
          <label htmlFor='user_mail' className='label-settings bold-12px-grey'>email</label>
          <input name='user_mail' type='email' id='user_mail' value={user_mail} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' autoComplete='off' placeholder='mon@email.com' required />

          <label htmlFor='user_mail' className='label-settings bold-12px-grey'>mot de passe</label>
          <div className='settings-container-eye'>
            <img src={visibleOne ? eyeOpen : eyeClosed} onClick={() => setVisibleOne(!visibleOne)} alt='' />
          </div>
          <input name='user_mail' type={showTypeOne} id='user_password' value={user_password} onChange={handleChange} className='input-psw-default plholder bold-12px-grey' placeholder='**********' autoComplete='off' />
          {successfull ? <ConfirmButton message='inscription reussie' confirm /> : btn}
          {error && <p className='signUp-error'>Une erreur s'est produite lors de la connection</p>}
          {redirect && <Redirect to='/moments/Posts' />}
        </form>
      </div>
    </>
  )
}

export default Connexion
