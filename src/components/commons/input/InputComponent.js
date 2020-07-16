import React from 'react'
import PropTypes from 'prop-types'

import './InputComponent.css'

import eyeClosed from '../../../images/eye-slash-regular1.svg'
import eyeOpen from '../../../images/eye-open.svg'

const InputComponent = (props) => {
  const { handleChange, handleEyes, id, inputError, messageError, pwdShow, handleBlur, pwdContent, required } = props

  const definePlaceHolder = () => {
    const tempId = id.toLowerCase().includes('pwd') ? 'pwd' : id
    switch (tempId) {
      case 'firstname':
        return 'prénom'
      case 'lastname':
        return 'nom'
      case 'surname':
        return 'surnom'
      case 'mail':
        return 'prenom@exemple.com'
      case 'pwd':
        return '**********'
      default:
        break
    }
  }

  const defineLabel = () => {
    switch (id) {
      case 'firstname':
        return 'prénom'
      case 'lastname':
        return 'nom'
      case 'surname':
        return 'surnom'
      case 'mail':
        return 'email'
      case 'tempPwd':
        return 'mot de passe temporaire'
      case 'pwd':
        return 'mot de passe'
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
    }
    else {
      return 'texte'
    }
  }

  return (
    <>
      <div className='spin-input'>
        <label htmlFor={id} className='bold-12px-grey'>{defineLabel().toUpperCase()} {required.indexOf(id) !== -1 && '*'}</label>
        <input
          className={inputError[id] ? 'error bold-12px-grey plholder' : 'bold-12px-grey plholder'}
          type={inputType()}
          onChange={(e) => handleChange(e)}
          id={id}
          placeholder={definePlaceHolder()}
          onBlur={handleBlur}
        />
        {id.toLowerCase().includes('pwd') &&
          <img src={!pwdShow[id] ? eyeClosed : eyeOpen} alt='' onClick={handleEyes} id={id} />}
        {inputError[id] &&
          <p className={id.toLowerCase().includes('pwd') ? 'msg-error' : 'msg-error-mail'}>{messageError[id]}</p>}
      </div>
      {
        pwdContent === id &&
        <div className='password-content'>
          <p className='pwd-cont-p'> Votre mot de passe doit contenir : </p>
          <ul>
            <li>- au moins 8 caractères</li>
            <li>- 1 chiffre</li>
            <li>- 1 majuscule</li>
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
    pwd: PropTypes.bool.isRequired,
    firstname: PropTypes.bool.isRequired,
    confirmPwd: PropTypes.bool.isRequired
  }),
  messageError: PropTypes.shape({
    mail: PropTypes.string,
    pwd: PropTypes.string,
    firstname: PropTypes.string,
    confirmPwd: PropTypes.string
  }),
  pwdContent: PropTypes.string,
  pwdShow: PropTypes.shape({
    pwd: PropTypes.bool.isRequired,
    confirmPwd: PropTypes.bool.isRequired
  }),
  required: PropTypes.arrayOf(PropTypes.string)
}

export default InputComponent
