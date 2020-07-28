import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Toast from '../commons/Toast'
import toaster from 'toasted-notes'
import useFormEmail from '../menu/useFormEmail'
import validationEmail from './validateEmail'

import './Email.css'
import './../onboarding/Connexion.css'
import './Password.css'

const backUrl = process.env.REACT_APP_API_URL
const myToken = localStorage.getItem('x-access-token')
const userId = localStorage.getItem('userId')

const Email = (props) => {
  const { handleChange, handleSubmit, values, errors } = useFormEmail(
    submit,
    validationEmail
  )

  const [redirect, setRedirect] = useState(false)
  const [send, setSend] = useState(false)

  useEffect(() => {
    setRedirect(true)
  }, [send])

  const handleServerError = (err) => {
    return err
  }

  function submit (e) {
    e.preventDefault()
    axios
      .put(`${backUrl}/users/${userId}/modify-email`, values, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
      .then((res) => (res.status === 200 ? setSend(true) : ''))
      .catch((err) => {
        const errorToasty = handleServerError(err)
        toaster.notify(
          <Toast
            classType='error-toaster'
            text={`${errorToasty}, 'Cette adresse existe déjà !'`}
          />,
          {
            duration: localStorage.getItem('toastDura'),
            position: localStorage.getItem('toastPos')
          }
        )
      })
  }

  return (
    <div className='settings-container-pwdmail'>
      <h1 className='settings-pwmail-title bold-16px-grey'>
        modification votre adresse email
      </h1>
      <form
        onSubmit={handleSubmit}
        className='general-form-connexion'
        noValidate
      >
        <label
          htmlFor='user_mail'
          name='user_mail'
          className='label-settings bold-12px-grey'
        >
          Nouvelle adresse mail
        </label>
        <input
          name='user_mail'
          type='text'
          id='user_mail'
          value={values.user_mail}
          onChange={handleChange}
          className={`${errors.user_mail ? 'input-email-error' : 'input-email plholder bold-12px-grey'}`}
          placeholder='prenom@exemple.com'
          required
        />
        {errors.user_mail && (
          <p className='msg-error-email'>{errors.user_mail}</p>
        )}

        <label htmlFor='user_mail' className='label-settings bold-12px-grey'>
          confirmation de la nouvelle adresse mail
        </label>
        <input
          name='new_user_mail'
          type='text'
          id='new_user_mail'
          value={values.new_user_mail}
          onChange={handleChange}
          className={`${errors.new_user_mail ? 'input-email-error' : 'input-email plholder bold-12px-grey'}`}
          placeholder='prenom@exemple.com'
          required
        />
        {errors.new_user_mail && (
          <p className='msg-error-email'>{errors.new_user_mail}</p>
        )}

        {Object.keys(errors).length > 0 || !values.new_user_mail || !values.user_mail
          ? <button type='submit' className='connexion-btn-inactif' disabled>confirmer</button>
          : <button type='submit' className='connexion-btn-actif' onClick={(e) => submit(e)}>confirmer</button>}
        {redirect && (
          <Redirect to={{ pathname: '/settings', params: { send: send } }} />
        )}
      </form>
    </div>
  )
}

export default Email
