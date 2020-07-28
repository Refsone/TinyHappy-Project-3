import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Toast from '../commons/Toast'
import toaster from 'toasted-notes'
import useFormEmail from '../menu/useFormEmail'
import validationEmail from './validateEmail'
import ValidateButton from '../commons/footer/ValidateButton'

import './Email.css'
import './../onboarding/Connexion.css'
import './Password.css'

const backUrl = process.env.REACT_APP_API_URL
const userName = localStorage.getItem('userName')
const Email = (props) => {
  const { handleChange, handleSubmit, values, errors } = useFormEmail(
    submit,
    validationEmail
  )

  // const [redirect, setRedirect] = useState(false)
  const [send, setSend] = useState(false)

  const myToken = localStorage.getItem('x-access-token')
  const userId = localStorage.getItem('userId')

  // useEffect(() => {
  // //   if (send) {
  // //     setRedirect(true)
  // //   }
  // // })

  const handleServerError = (err) => {
    return err
  }

  function submit(e) {
    e.preventDefault()
    axios
      .put(`${backUrl}/users/${userId}/modify-email`, values, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
      .then(res => {
        axios.post(`${backUrl}/send-mails/new-mail`, { user_mail: values.user_mail, user_firstname: userName }, {
          headers: { Authorization: `Bearer ${myToken}` }
        })
          .then((res) => (res.status === 200 ? setSend(true) : ''))
      })
      .catch((err) => {
        console.log(err)
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
    <div className='.email-background-container'>
      <div className='email-background'>
        <h1 className='title bold-16px-grey'>
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

          <ValidateButton
            name='CONFIRMER' active={!(Object.keys(errors).length > 0 || !values.new_user_mail || !values.user_mail)} handleClick={(e) => submit(e)}
          />
          {send && (
            <Redirect to={{ pathname: '/settings', params: { send: send } }} />
          )}
        </form>
      </div>
    </div>
  )
}

export default Email
