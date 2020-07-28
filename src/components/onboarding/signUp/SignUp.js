import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import Header from '../../commons/header/Header'
import InputComponent from '../../commons/input/InputComponent'
import Toast from '../../commons/Toast'
import toaster from 'toasted-notes'
import ValidateButton from '../../commons/footer/ValidateButton'

import './Signup.css'

const backUrl = process.env.REACT_APP_API_URL

const SignUp = (props) => {
  // Define constraints for the different inputs
  const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
  const regexPassword1 = /.{8,}/
  const regexPassword2 = /[0-9]{1,}/
  const regexPassword3 = /[A-Z]{1,}/

  //* STATE
  const [isValidate, setIsValidate] = useState(false)
  const [inUseEffect, setInUseEffect] = useState(false)
  // Manage the redirection to the next page
  const [redirect, setRedirect] = useState(false)
  const [isSend, setIsSend] = useState(false)
  // Managing the errors
  const [inputError, setInputError] = useState({
    firstname: false,
    lastname: false,
    mail: false,
    pwd: false,
    confirmPwd: false
  })
  // Managing the error messages
  const [messageError, setMessageError] = useState({
    firstname: '',
    lastname: '',
    mail: '',
    pwd: '',
    confirmPwd: ''
  })
  // Managing the field values
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mail: '',
    pwd: '',
    confirmPwd: ''
  })
  // Managing display of the eyes
  const [pwdShow, setPwdShow] = useState({
    pwd: false,
    confirmPwd: false
  })

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
    if (isSend) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 250)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [isSend])

  const handleBlur = (e) => {
    const value = e.target.value
    switch (e.target.id) {
      case 'firstname':
        if (!formData.firstname) {
          setInputError({ ...inputError, firstname: true })
          setMessageError({ ...messageError, firstname: 'Ce champs est requis.' })
        } else {
          setInputError({ ...inputError, firstname: false })
          setMessageError({ ...messageError, firstname: '' })
        }
        break
      case 'lastname':
        if (!formData.lastname) {
          setInputError({ ...inputError, lastname: true })
          setMessageError({ ...messageError, lastname: 'Ce champs est requis.' })
        } else {
          setInputError({ ...inputError, lastname: false })
          setMessageError({ ...messageError, lastname: '' })
        }
        break
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
        if (formData.pwd !== formData.confirmPwd && formData.confirmPwd !== '') {
          setInputError({ ...inputError, confirmPwd: true })
          setMessageError({ ...messageError, confirmPwd: 'Erreur ! Le mot de passe ne correspond pas.' })
        } else {
          setInputError({ ...inputError, confirmPwd: false })
          setMessageError({ ...messageError, confirmPwd: '' })
        }
        break
      case 'pwd':
        if (verifPassword(value) !== 'ok' && formData.pwd !== '') {
          setInputError({ ...inputError, pwd: true })
          setMessageError({ ...messageError, pwd: verifPassword(value) })
        } else {
          setInputError({ ...inputError, pwd: false })
          setMessageError({ ...messageError, pwd: '' })
        }
        break
      default:
        break
    }
    setInUseEffect(!inUseEffect)
  }

  //* Verify if no errors before validate
  const verifyBeforeValidate = () => {
    if (formData.firstname && !messageError.confirmPwd && !messageError.mail && !messageError.pwd && formData.mail && formData.pwd && formData.confirmPwd && formData.pwd === formData.confirmPwd && formData.lastname) {
      setIsValidate(true)
    } else {
      setIsValidate(false)
    }
  }

  // Custom error message when an error occured in the server
  const handleServerError = (err) => {
    if (err.response.status === 403) {
      return err.response.data === 'email already exist' ? "L'adresse E-mail existe déjà" : 'Erreur lors de la vérification du mot de passe'
    } else {
      return 'Une erreur serveur est survenue, veuillez réessayer'
    }
  }

  //* On validate
  const handleClick = () => {
    const formdata = { user_firstname: formData.firstname, user_lastname: formData.lastname, user_mail: formData.mail, user_password: formData.pwd }
    Axios.post(`${backUrl}/sign-up`, formdata)
      .then(res => {
        if (res.status === 201) {
          Axios.post(`${backUrl}/send-mails/register`, { userName: formData.firstname, userMail: formData.mail })
            .then(res => res.status === 200 ? setIsSend(true) : '')
        }
      })
      .catch(err => {
        const errMessage = handleServerError(err)
        toaster.notify(<Toast classType='error-toaster' text={`${errMessage}`} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') })
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

  const inputs = ['firstname', 'lastname', 'mail', 'pwd', 'confirmPwd']
  const required = ['firstname', 'lastname', 'mail', 'pwd', 'confirmPwd']

  return (
    <div>
      <Header location={props.location.pathname} />
      <form onSubmit={submitForm}>
        <div className='cont-global-form'>
          <div>
            {
              inputs.map((input, id) =>
                <InputComponent inputError={inputError} messageError={messageError} pwdShow={pwdShow} handleEyes={handleEyes} handleChange={handleChange} key={id} id={input} handleBlur={handleBlur} pwdContent='confirmPwd' required={required} />
              )
            }
          </div>
          <ValidateButton
            location={props.location.pathname}
            active={isValidate && true}
            name='valider'
            handleClick={handleClick}
          />
        </div>

      </form>
      {redirect && <Redirect to={{ pathname: '/onboarding/login', params: { isSend: isSend } }} />}
    </div>
  )
}

export default SignUp
