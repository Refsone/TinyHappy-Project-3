import React, { useState } from 'react'

import Header from '../commons/header/Header'
import ValidateButton from '../commons/footer/ValidateButton'

import './PasswordLost.css'

const PasswordLost = (props) => {
  const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/

  const [isValidate, setIsValidate] = useState(false)
  const [mailError, setMailError] = useState(false)
  const [email, setEmail] = useState()

  const handleChange = (value) => {
    regexMail.test(value) ? setMailError(false) : setMailError(true)
    setEmail(value)
  }

  return (
    <>
      <Header />
      <form className='form-passwordLost'>
        <div className='cont-passwordLost'>
          <div className='bold-16px-grey text'>MOT DE PASSE PERDU</div>
          <div className='regular-16px-grey text'>Indiquez votre email pour recevoir un mot de passe temporaire.</div>
          <div>
            <label htmlFor='email' className='bold-12px-grey'>EMAIL</label>
            <input
              className={mailError ? 'error bold-12px-grey plholder' : 'bold-12px-grey plholder'}
              type='email'
              onChange={(e) => handleChange(e.target.value)}
              id='email' value={email} placeholder='prenom@exemple.com'
            />
            {mailError &&
              <p className='msg-error'>L'adresse E-mail est invalide</p>}
          </div>
        </div>
      </form>
      <ValidateButton location={props.location.pathname} active={isValidate && true} name='valider' />
    </>
  )
}

export default PasswordLost
