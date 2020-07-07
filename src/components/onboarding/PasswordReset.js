import React, { useState } from 'react'

import Header from '../commons/header/Header'
import ValidateButton from '../commons/footer/ValidateButton'

import './PasswordReset.css'
import Axios from 'axios'

const PasswordReset = (props) => {
  const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/

  const [isValidate, setIsValidate] = useState(false)
  const [mailError, setMailError] = useState(false)
  const [email, setEmail] = useState()

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
    await Axios.post('http://localhost:7500/mailing/tempPassword', { user_mail: email })
      .then(res => {
        console.log(res)
        document.getElementById('email').value = ''
        setIsValidate(false)
        console.log(`Envoi de l'Email vers ${email} réussi`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Header location={props.location.pathname} />
      <form className='form-passwordReset'>
        <div className='cont-passwordReset'>
          <div className='bold-16px-grey text'>MOT DE PASSE PERDU</div>
          <div className='regular-16px-grey text'>Indiquez votre email et le mot de passe temporaire reçu.</div>
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
    </>
  )
}

export default PasswordReset
