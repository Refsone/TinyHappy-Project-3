import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import Header from '../../commons/header/Header'
import InputComponent from './InputComponent'
import Toast from '../../commons/Toast'
import toaster from 'toasted-notes'
import ValidateButton from '../../commons/footer/ValidateButton'

import './PasswordReset.css'

const backUrl = process.env.REACT_APP_API_URL

const PasswordReset = (props) => {
  // Define constraints for the different inputs
  const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
  const regexTempPassword = /.{12,}/
  const regexPassword1 = /.{8,}/
  const regexPassword2 = /[0-9]{1,}/
  const regexPassword3 = /[A-Z]{1,}/

  //* STATE
  const [isValidate, setIsValidate] = useState(false)
  const [inUseEffect, setInUseEffect] = useState(false)
  // Manage the redirection to the next page
  const [redirect, setRedirect] = useState(false)
  const [pwdChanged, setPwdChanged] = useState(false)
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

  useEffect(() => {
    const { params } = props.location
    if (params && params.sendPwd) {
      toaster.notify(<Toast classType='sucess-toaster' text='Mot de passe temporaire envoyé !' />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') })
    }
  }, [])

  //* Verify if the password format is correct
  const verifPassword = (password) => {
    if (!regexPassword1.test(password)) {
      return 'Le mot de passe doit contenir au moins 8 caractères.'
    } else if (!regexPassword2.test(password)) {
      return 'Doit contenir au moins un chiffre.'
    } else if (!regexPassword3.test(password)) {
      return 'Doit contenir une lettre en majuscule.'
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
    setInUseEffect(!inUseEffect)
    verifyBeforeValidate()
  }

  useEffect(() => {
    verifyBeforeValidate()
  }, [inUseEffect])

  // Define a setTimeOut on validation before going to the login page
  useEffect(() => {
    if (pwdChanged) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 1500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [pwdChanged])

  const handleBlur = (e) => {
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
          Axios.post(`${backUrl}/users/tempPwd`, { mail: formData.mail, tempPwd: value })
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

  //* Verify if no errors before validate
  const verifyBeforeValidate = () => {
    if (!messageError.confirmPwd && !messageError.mail && !messageError.newPwd && !messageError.tempPwd && formData.tempPwd && formData.mail && formData.newPwd && formData.confirmPwd && formData.newPwd === formData.confirmPwd) {
      setIsValidate(true)
    } else {
      setIsValidate(false)
    }
  }
  // Custom error message when an error occured in the server
  const handleServerError = (err) => {
    if (err.response.status === 403) {
      return 'Mot de passe temporaire plus valable'
    } else if (err.response.status === 404) {
      return "L'adresse Email indiquée n'existe pas"
    } else {
      return err.response.data === 'Error when compare the password' ? 'Erreur lors de la comparaison du mot de passe' : 'Une erreur serveur est survenue, veuillez réessayer'
    }
  }

  //* On validate
  const handleClick = () => {
    Axios.put(`${backUrl}/users/tempPwd`, { mail: formData.mail, newPwd: formData.newPwd, tempPwd: formData.tempPwd })
      .then(res => res.status === 200 && setPwdChanged(true))
      .catch(err => {
        const errMessage = handleServerError(err)
        toaster.notify(<Toast classType='error-toaster' text={`${errMessage}`} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') }
        )
      })
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
                <InputComponent inputError={inputError} messageError={messageError} pwdShow={pwdShow} handleEyes={handleEyes} handleChange={handleChange} key={id} id={input} handleBlur={handleBlur} pwdContent='confirmPwd' />
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
      {redirect && <Redirect to={{ pathname: '/onboarding/login', params: { newPwd: true } }} />}
    </div>
  )
}

export default PasswordReset
