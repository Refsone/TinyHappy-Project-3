import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import ConfirmButton from '../../commons/footer/ConfirmButton'
import Header from '../../commons/header/Header'
import ValidateButton from '../../commons/footer/ValidateButton'

import './PasswordLost.css'

const backUrl = process.env.REACT_APP_API_URL

const PasswordLost = (props) => {
  const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/

  const [isValidate, setIsValidate] = useState(false)
  const [mailError, setMailError] = useState(false)
  const [email, setEmail] = useState()
  const [redirect, setRedirect] = useState(false)
  const [pwdSend, setPwdSend] = useState(false)

  const handleChange = (value) => {
    if (regexMail.test(value)) {
      setMailError(false)
      setIsValidate(true)
    } else {
      setMailError(true)
      setIsValidate(false)
    }
    setEmail(value)
  }

  const handleClick = async () => {
    await Axios.post(`${backUrl}/mailing/tempPassword`, { user_mail: email })
      .then(res => {
        document.getElementById('email').value = ''
        setPwdSend(true)
      })
      .catch(err => {
        return err
      })
  }

  // Define a setTimeOut on validation before going to resetpwd page
  useEffect(() => {
    if (pwdSend) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 1500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [pwdSend])

  const submitForm = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Header location={props.location.pathname} />
      <form className='form-passwordLost' onSubmit={submitForm}>
        <div className='cont-passwordLost'>
          <div className='bold-16px-grey text'>MOT DE PASSE PERDU</div>
          <div className='regular-16px-grey text'>Indiquez votre email pour recevoir un mot de passe temporaire.</div>
          <div>
            <label htmlFor='email' className='bold-12px-grey'>EMAIL</label>
            <input
              className={mailError ? 'error bold-12px-grey plholder' : 'bold-12px-grey plholder'}
              type='email'
              onChange={(e) => handleChange(e.target.value)}
              id='email'
              placeholder='prenom@exemple.com'
            />
            {mailError &&
              <p className='msg-error'>L'adresse E-mail est invalide</p>}
          </div>
        </div>
      </form>
      <ValidateButton
        location={props.location.pathname}
        active={isValidate && true}
        name='valider'
        handleClick={handleClick}
      />
      {
        pwdSend &&
          <ConfirmButton message='Mot de passe temporaire envoyé.' confirm />
      }
      {
        redirect &&
          <Redirect to='/onboarding/resetPwd' />
      }
    </>
  )
}

export default PasswordLost
