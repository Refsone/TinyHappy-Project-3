import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import Header from '../../commons/header/Header'
import ValidateButton from '../../commons/footer/ValidateButton'

import './PasswordReset.css'


const PasswordReset = (props) => {
  // Define constraints for the different inputs
  const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
  const regexTempPassword = /.{12}/
  const regexPassword1 = /.{8,}/
  const regexPassword2 = /[!$%^&*/()_+|~=`{}[:;<>?,@#\]]{1,}/
  const regexPassword3 = /[0-9]{1,}/
  const regexPassword4 = /[a-z]{1,}/
  const regexPassword5 = /[A-Z]{1,}/

  //* STATE
  const [isValidate, setIsValidate] = useState(false)

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
    tmpPassword: '',
    newPwd: '',
    confirmPwd: ''
  })
  // Managing display of the eyes
  const [pwdShow, setPwdShow] = useState({
    tmpPassword: 'false',
    newPwd: 'false',
    confirmPwd: 'false'
  })

  //* Verify if the password format is correct
  const verifPassword = (password) => {
    if (!regexPassword1.test(password)) {
      return 'Le mot de passe doit contenir au moins 8 caractères'
    } else if (!regexPassword2){
      return 'Le mot de passe doit contenir au moins 1 caractère spécial (!$%^&*/()_+|~=`{}[:;<>?,@#\\)'
    } else if (!regexPassword3) {
      return 'Le mot de passe doit contenir au moins un chiffre'
    } else if (!regexPassword4 || !regexPassword5) {
      return 'Le mot de passe doit contenir au minimum une lettre en minuscule et une lettre en majuscule'
    } else {
      return 'ok'
    }
  }

  //* Managing the fields datas on change
  const handleChange = (e) => {
    const value = e.target.value
    switch (e.target.id) {
      case 'mail':
        if (!regexMail.test(value) && formData.mail !== '') {
          setInputError({ ...inputError, mail: true })
          setMessageError({ ...messageError, mail: 'Le format de l\'adresse email est invalide' })
        } else {
          setInputError({ ...inputError, mail: false })
          setMessageError({ ...messageError, mail: '' })
        }
        break
      case 'confirmPwd':
        if (formData.newPwd !== formData.confirmPwd && formData.confirmPwd !== '') {
          setInputError({ ...inputError, confirmPwd: true })
          setMessageError({ ...messageError, confirmPwd: 'Le nouveau mot de passe et le mot de passe confirmé ne correspondent pas' })
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
      case 'tmpPassword':
        if (!regexTempPassword.test(value) && formData.tmpPassword !== ''){
          setInputError({ ...inputError, tmpPassword: true })
          setMessageError({ ...messageError, tmpPassword: 'Le format du mot de passe temporaire est invalide' })
        } else {
          setInputError({ ...inputError, tmpPassword: false })
          setMessageError({ ...messageError, tmpPassword: '' })
        }
        break
      default:
        break
    }
    setFormData({ ...formData, [e.target.id]: value })
  }

  useEffect(() => {
  },[formData, visible, isValidate, pwdShow])

  //* On validate
  const handleClick = async () => {
    await Axios.post('http://localhost:7500/mailing/tempPassword', )
      .then(res => {
        console.log(res)
        document.getElementById('mail').value = ''
        setIsValidate(false)
        console.log(`Envoi de l'Email vers ${formData.mail} réussi`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  //* Managing if the different passwords are showing
  const handleEyes = (e) => {
    setPwdShow({ ...pwdShow, [e.target.id]: `!pwdShow.${e.target.id}` })
}

  const submitForm = (e) => {
    e.preventDefault()
  }

  const inputs = ['mail', 'tmpPassword', 'newPwd', 'confirmPwd']

  return (
    <>
      <Header location={props.location.pathname} />
      <form className='form-passwordReset' onSubmit={submitForm}>
        <div className='cont-passwordReset'>
          <div className='bold-16px-grey text'>MOT DE PASSE PERDU</div>
          <div className='regular-16px-grey text'>Indiquez votre email et le mot de passe temporaire reçu.</div>
          {/* <div>
            <label htmlFor='email' className='bold-12px-grey'>EMAIL</label>
            <input
              className={inputError.mail ? 'error bold-12px-grey plholder' : 'bold-12px-grey plholder'}
              type='email'
              onChange={(e) => handleChange(e)}
              id='email'
              placeholder='prenom@exemple.com'
            />
            {inputError.mail &&
              <p className='msg-error'>L'adresse E-mail est invalide</p>}
          </div>         */}
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
