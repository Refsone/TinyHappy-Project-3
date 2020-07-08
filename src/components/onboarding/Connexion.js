import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../commons/header/Header'
import { Redirect } from 'react-router-dom'
import useForm from './useForm'
import validationLogIn from './validateLogin'

import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'

import './Connexion.css'

const Connexion = (props) => {
  const { handleChange, handleSubmit, values, errors, setErrors } = useForm(submit, validationLogIn)
  const [redirect, setRedirect] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [visible, setVisible] = useState(false)
  const showType = visible ? 'text' : 'password'

  useEffect(() => {
    if (loggedIn) {
      setRedirect(true)
    }
    console.log(values)
    console.log(loggedIn)
  }, [loggedIn])

  async function submit (e) {
    e.preventDefault()
    try {
      await axios.post('http://localhost:7500/users/login', values)
        .then(res => res.headers['x-access-token'])
        .then(data => {
          if (data) {
            console.log(data)
            localStorage.setItem('x-access-token', data)
            setLoggedIn(true)
          }
        })
    } catch (err) {
      console.log(err)
      errors && setErrors(errors)
    }

    const myToken = JSON.parse(localStorage.getItem(values))
    if (myToken) {
      axios.get('http://localhost:7500/users', {
        headers: { Autorization: `Bearer ${myToken}` }
      }).then(res => {
        console.log(res.data)
      }).catch(err => {
        if (err.res.status(403)) {
          console.log(err.res.data.message)
        }
      })
    }
  }

  return (
    <div className='connexion-background'>
      <Header location={props.location.pathname} />
      <form onSubmit={handleSubmit} className='general-form-connexion' noValidate>
        <label htmlFor='user_mail' name='user_mail' className='label-connexion'>email</label>
        <input name='user_mail' type='email' id='user_mail' className={`${errors.user_mail ? 'input-connexion-error' : 'input-connexion plholder bold-12px-grey'}`} placeholder='mon@email.com' value={values.email} onChange={handleChange} />

        {errors.user_mail && <p className='msg-error'>{errors.user_mail}</p>}

        <label htmlFor='user_password' className='label-connexion'>mot de passe</label>
        <div className='settings-container-eye'>
          <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
        </div>
        <input name='user_password' type={showType} id='user_password' value={values.password} onChange={handleChange} className={`${errors.user_password ? 'input-pws-error' : 'input-psw-default plholder bold-12px-grey'}`} placeholder='**********' />
        {errors.user_password && <p className='msg-error'>{errors.user_password}</p>}
        <p className='connexion-lien'><a href='/'>Mot de passe perdu ?</a></p>

        {errors && values.user_password < 8 ? <button onChange={handleChange} className='connexion-btn-inactif'> se connecter</button> : <button onChange={handleChange} onClick={(e) => submit(e)} className='connexion-btn-actif'>se connecter</button>}
        {redirect && <Redirect to='/moments' />}
      </form>
    </div>
  )
}

export default Connexion
