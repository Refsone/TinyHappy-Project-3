import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import Header from '../../commons/header/Header'
import InputComponent from './InputComponent'
import ValidateButton from '../../commons/footer/ValidateButton'

import './PasswordReset.css'

const backUrl = process.env.REACT_APP_API_URL

const PasswordReset = (props) => {
  // Define constraints for the different inputs
  const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
  const regexTempPassword = /.{12,}/
  const regexPassword1 = /.{8,}/
  const regexPassword2 = /[!$%^&*/()_+|~=`{}[:;<>?,@#\]]{1,}/
  const regexPassword3 = /[0-9]{1,}/
  const regexPassword4 = /[a-z]{1,}/
  const regexPassword5 = /[A-Z]{1,}/

  //* STATE
  const [isValidate, setIsValidate] = useState(false)
  const [inUseEffect, setInUseEffect] = useState(false)

  // Managing the errors
  const [inputError, setInputError] = useState({
    mail: false,
    tempPwd: false,
    newPwd: false,
    confirmPwd: false
  })
  // Managing the error messages
  const [messageError, setMessageError] = useState({
    mail: '',
    tempPwd: '',
    newPwd: '',
    confirmPwd: ''
  })
  // Managing the field values
  const [formData, setFormData] = useState({
    mail: '',
    tempPwd: '',
    newPwd: '',
    confirmPwd: ''
  })
  // Managing display of the eyes
  const [pwdShow, setPwdShow] = useState({
    tempPwd: false,
    newPwd: false,
    confirmPwd: false
  })

  //* Verify if the password format is correct
  const verifPassword = (password) => {
    if (!regexPassword1.test(password)) {
      return 'Le mot de passe doit contenir au moins 8 caractères.'
    } else if (!regexPassword2.test(password)) {
      return 'Au minimum un caractère spécial est requis.'
    } else if (!regexPassword3.test(password)) {
      return 'Doit contenir au moins un chiffre.'
    } else if (!regexPassword4.test(password) || !regexPassword5.test(password)) {
      return 'Une lettre en minuscule et une lettre en majuscule requis.'
    } else {
      return 'ok'
    }
  }

  //* Managing the fields datas on change
  const handleChange = (e) => {
    const id = e.target.id
    setMessageError({ ...messageError, [id]: '' })
    setInputError({ ...inputError, [id]: false })
    setFormData({ ...formData, [id]: e.target.value })
  }

  useEffect(() => {
  }, [inUseEffect])

  const onMouseOut = (e) => {
    const value = e.target.value
    switch (e.target.id) {
      case 'mail':
        if (!regexMail.test(value) && formData.mail !== '') {
          setInputError({ ...inputError, mail: true })
          setMessageError({ ...messageError, mail: 'Le format de l\'adresse email est invalide.' })
        } else {
          setInputError({ ...inputError, mail: false })
          setMessageError({ ...messageError, mail: '' })
        }
        break
      case 'confirmPwd':
        if (formData.newPwd !== formData.confirmPwd && formData.confirmPwd !== '') {
          setInputError({ ...inputError, confirmPwd: true })
          setMessageError({ ...messageError, confirmPwd: 'Erreur ! Le mot de passe ne correspond pas.' })
        } else {
          setInputError({ ...inputError, confirmPwd: false })
          setMessageError({ ...messageError, confirmPwd: '' })
        }
        break
      case 'newPwd':
        if (verifPassword(value) !== 'ok' && formData.newPwd !== '') {
          setInputError({ ...inputError, newPwd: true })
          setMessageError({ ...messageError, newPwd: verifPassword(value) })
        } else {
          setInputError({ ...inputError, newPwd: false })
          setMessageError({ ...messageError, newPwd: '' })
        }
        break
      case 'tempPwd':
        if (!regexTempPassword.test(value) && formData.tmpPassword !== '') {
          setInputError({ ...inputError, tempPwd: true })
          setMessageError({ ...messageError, tempPwd: 'Le format du mot de passe temporaire est invalide' })
        } else {
          Axios.get(`${backUrl}/users/tempPwd/?mail=${formData.mail}&tempPwd=${value}`)
            .catch(error => {
              setInputError({ ...inputError, tempPwd: true })
              switch (error.response.status) {
                case 403:
                  setMessageError({ ...messageError, tempPwd: 'La date d\'expiration du mot de passe temporaire a expiré' })
                  break
                case 404:
                  setMessageError({ ...messageError, tempPwd: 'Mot de passe temporaire invalide' })
                  break
                default:
                  setMessageError({ ...messageError, tempPwd: 'Une erreur interne est survenue' })
                  break
              }
              console.log(error.response.status)
            })
          setInputError({ ...inputError, tempPwd: false })
          setMessageError({ ...messageError, tempPwd: '' })
        }
        break
      default:
        break
    }
    setInUseEffect(!inUseEffect)
  }

  //* On validate
  const handleClick = () => {

  }

  //* Managing if the different passwords are showing
  const handleEyes = (e) => {
    const id = e.target.id
    setPwdShow({ ...pwdShow, [id]: !pwdShow[id] })
  }

  const submitForm = (e) => {
    e.preventDefault()
  }

  const inputs = ['mail', 'tempPwd', 'newPwd', 'confirmPwd']

  return (
    <div>
      <Header location={props.location.pathname} />
      <form onSubmit={submitForm}>
        <div className='cont-passwordReset'>
          <div className='bold-16px-grey text'>MOT DE PASSE PERDU</div>
          <div className='regular-16px-grey text'>Indiquez votre email et le mot de passe temporaire reçu, puis définissez votre nouveau mot de passe.</div>
          <div className='pwd-reset-input'>
            {
              inputs.map((input, id) =>
                <InputComponent inputError={inputError} messageError={messageError} pwdShow={pwdShow} handleEyes={handleEyes} handleChange={handleChange} key={id} id={input} onMouseOut={onMouseOut} />
              )
            }
          </div>
        </div>
        <ValidateButton
          location={props.location.pathname}
          active={isValidate && true}
          name='valider'
          handleClick={handleClick}
        />
      </form>
    </div>
  )
}

export default PasswordReset
