import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import ValidateButton from '../commons/footer/ValidateButton'

import './../onboarding/Connexion.css'
import './Password.css'
import Toast from '../commons/Toast'
import toaster from 'toasted-notes'

import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'

const backUrl = process.env.REACT_APP_API_URL
const myToken = (localStorage.getItem('x-access-token'))
const userId = localStorage.getItem('userId')
const userName = localStorage.getItem('userName')
const userMail = localStorage.getItem('userMail')

const Password = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [actualPassword, setActualPasswor] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [validate, setValidate] = useState(false)
  const [errPwd, setErrPwd] = useState({
    user_password: '',
    new_password: '',
    confirm_password: ''
  })

  // Manage the redirection to the next page
  const [redirect, setRedirect] = useState(false)
  const [pwdChanged, setPwdChanged] = useState(false)

  const showType1 = visible1 ? 'text' : 'password'
  const showType2 = visible2 ? 'text' : 'password'
  const showType3 = visible3 ? 'text' : 'password'

  // Custom error message when an error occured in the server
  const handleServerError = (err) => {
    if (err.response.status === 401) {
      return 'Le mot de passe actuel fournit est incorrect !'
    } else {
      return `Erreur Server: ${err.response.data}`
    }
  }

  // Define a setTimeOut on validation before going to the login page
  useEffect(() => {
    if (pwdChanged) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 250)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [pwdChanged])

  const handleClick = (e) => {
    axios.put(`${backUrl}/users/${userId}/modify-password`, { newPassword: newPassword, actualPassword: actualPassword }, { headers: { Authorization: `Bearer ${myToken}` } })
      .then(res => {
        axios.post(`${backUrl}/send-mails/new-pwd`, { user_mail: userMail, user_firstname: userName }, {
          headers: { Authorization: `Bearer ${myToken}` }
        })
          .then(res => res.status === 200 && setPwdChanged(true))
          .catch(err => {
            toaster.notify(<Toast classType='error-toaster' text={`${handleServerError(err)}`} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') })
          })
      })
      .catch(err => {
        toaster.notify(<Toast classType='error-toaster' text={`${handleServerError(err)}`} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') }
        )
      })
  }

  const handleChangePassword = (e) => {
    setActualPasswor(e.target.value)
  }

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value)
  }

  const handleChangeConfirm = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleBlur = (e) => {
    const value = e.target.value
    if (verifyPwd(value) !== 'ok') {
      setErrPwd({ ...errPwd, [e.target.id]: verifyPwd(value) })
    } else {
      setErrPwd({ ...errPwd, [e.target.id]: '' })
    }
  }

  const verifyPwd = (password) => {
    const regexPassword1 = /.{8,}/
    const regexPassword2 = /[0-9]{1,}/
    const regexPassword3 = /[A-Z]{1,}/

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

  const submitForm = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    actualPassword && newPassword && confirmPassword && errPwd.user_password === '' && errPwd.new_password === '' && errPwd.confirm_password === '' && newPassword === confirmPassword ? setValidate(true) : setValidate(false)
  }, [actualPassword, newPassword, confirmPassword, errPwd])

  return (
    <div className='settings-container-pwdmail modify-mdp'>
      <h1 className='settings-pwmail-title bold-16px-grey'>modification du mot de passe</h1>

      <form className='general-form-connexion' onSubmit={submitForm}>
        <label htmlFor='user_password' className='label-settings bold-12px-grey'>Mot de passe actuel</label>
        <div className='settings-container-eye'>
          <img src={visible1 ? eyeOpen : eyeClosed} onClick={() => setVisible1(!visible1)} alt='' />
        </div>
        <input name='user_password' type={showType1} id='user_password' onChange={handleChangePassword} onBlur={handleBlur} className='input-psw-default plholder bold-12px-grey' placeholder='**********' />
        {errPwd.user_password && <p className='msg-error'>Format du mot de passe invalide.</p>}

        <label htmlFor='new_password' className='label-settings bold-12px-grey'>Nouveau mot de passe</label>
        <div className='settings-container-eye'>
          <img src={visible2 ? eyeOpen : eyeClosed} onClick={() => setVisible2(!visible2)} alt='' />
        </div>
        <input name='new_password' type={showType2} id='new_password' onChange={handleChangeNewPassword} onBlur={handleBlur} className='input-psw-default plholder bold-12px-grey' placeholder='**********' />
        {errPwd.new_password && <p className='msg-error'>{errPwd.new_password}</p>}

        <label htmlFor='confirm_password' className='label-settings bold-12px-grey'>confirmer mot de passe</label>
        <div className='settings-container-eye'>
          <img src={visible3 ? eyeOpen : eyeClosed} onClick={() => setVisible3(!visible3)} alt='' />
        </div>
        <input name='confirm_password' type={showType3} id='confirm_password' onChange={handleChangeConfirm} onBlur={handleBlur} className='input-connexion plholder bold-12px-grey' placeholder='**********' />

        <ValidateButton name='confirmer' handleClick={handleClick} active={validate && true} />
      </form>
      <div className='password-content'>
        <p className='pwd-cont-p'> Votre mot de passe doit contenir : </p>
        <ul>
          <li>- au moins 8 caractères</li>
          <li>- 1 chiffre</li>
          <li>- 1 majuscule</li>
        </ul>
      </div>
      {redirect && <Redirect to={{ pathname: '/settings', params: { newPwd: true } }} />}
    </div>
  )
}

export default Password
