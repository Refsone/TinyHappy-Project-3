import React from 'react'
import PropTypes from 'prop-types'

import './InputComponent.css'

import eyeClosed from '../../../images/eye-slash-regular1.svg'
import eyeOpen from '../../../images/eye-open.svg'

const InputComponent = (props) => {
  const { handleChange, handleEyes, id, inputError, messageError, pwdShow, handleBlur, pwdContent } = props

  const definePlaceHolder = id === 'mail' ? 'prenom@exemple.com' : '**********'
  const labelName = () => {
    switch (id) {
      case 'mail':
        return 'email'
      case 'tempPwd':
        return 'mot de passe temporaire'
      case 'newPwd':
        return 'Nouveau mot de passe'
      case 'confirmPwd':
        return 'confirmer le mot de passe'
      default:
        break
    }
  }
  const inputType = () => {
    if (id.toLowerCase().includes('pwd')) {
      return pwdShow[id] ? 'text' : 'password'
    } else if (id === 'mail') {
      return 'email'
    } else {
      return 'texte'
    }
  }

  return (
    <>
      <div className='spin-input pwd-reset'>
        <label htmlFor={id} className='bold-12px-grey'>{labelName().toUpperCase()}</label>
        <input
          className={inputError[id] ? 'error bold-12px-grey plholder' : 'bold-12px-grey plholder'}
          type={inputType()}
          onChange={(e) => handleChange(e)}
          id={id}
          placeholder={definePlaceHolder}
          onBlur={handleBlur}
        />
        {id !== 'mail' &&
          <img src={!pwdShow[id] ? eyeClosed : eyeOpen} alt='' onClick={handleEyes} id={id} />}
        {inputError[id] &&
          <p className={id !== 'mail' ? 'msg-error' : 'msg-error-mail'}>{messageError[id]}</p>}
      </div>
      {
        pwdContent === id &&
          <div className='password-content'>
            <p className='pwd-cont-p'> Votre mot de passe doit contenir : </p>
            <ul>
              <li>au moins 8 caractères</li>
              <li>1 chiffre</li>
              <li>1 majuscule</li>
            </ul>
          </div>
      }
    </>
  )
}

InputComponent.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleEyes: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  inputError: PropTypes.shape({
    mail: PropTypes.bool.isRequired,
    tempPwd: PropTypes.bool.isRequired,
    newPwd: PropTypes.bool.isRequired,
    confirmPwd: PropTypes.bool.isRequired
  }),
  messageError: PropTypes.shape({
    mail: PropTypes.string,
    tempPwd: PropTypes.string,
    newPwd: PropTypes.string,
    confirmPwd: PropTypes.string
  }),
  pwdContent: PropTypes.string,
  pwdShow: PropTypes.shape({
    tempPwd: PropTypes.bool.isRequired,
    newPwd: PropTypes.bool.isRequired,
    confirmPwd: PropTypes.bool.isRequired
  })
}

export default InputComponent
