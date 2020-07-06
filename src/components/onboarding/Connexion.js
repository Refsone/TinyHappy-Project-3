import React from 'react'
import Header from '../commons/header/Header'
import { useHistory } from 'react-router-dom'
import useForm from './useForm'
import validationLogIn from './validateLogin'

import ValidateButton from '../commons/footer/ValidateButton'

import './Connexion.css'

const Connexion = (props) => {
  const history = useHistory()
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validationLogIn)
  function submit() {
    console.log('sent succesfully')
  }

  const handleClick = () => history.push('/family')

  return (
    <>
      <Header location={props.location.pathname} />
      <div className='connexion-background'>
        <form onSubmit={handleSubmit} className='general-form-connexion' noValidate>
          <label htmlFor='user_mail' name='user_mail' className='label-connexion'>email</label>
          <input name='user_mail' type='email' id='user_mail' className={`${errors.user_mail ? 'input-connexion-error' : 'input-connexion plholder bold-12px-grey'}`} placeholder='mon@email.com' value={values.email} onChange={handleChange} />

          {errors.user_mail && <p className='msg-error'>{errors.user_mail}</p>}

          <label htmlFor='user_password' className='label-connexion'>mot de passe</label>
          <input name='user_password' type='password' id='user_password' value={values.password} onChange={handleChange} className={`${errors.user_password ? 'input-pws-error' : 'input-psw-default mdp-forbiden plholder bold-12px-grey'}`} placeholder='**********' />
          {errors.user_password && <p className='msg-error'>{errors.user_password}</p>}

          <p className='connexion-lien'><a href='/'>Mot de passe perdu ?</a></p>
          {/* {errors && values.user_mail === '' && values.user_password === '' ? <button type='submit' className='connexion-btn-inactif'>se connecter</button> : <button type='submit' className='connexion-btn-actif'>se connecter</button>} */}
          <ValidateButton name='se connecter' handleClick={handleClick} active />
        </form>
      </div>
    </>
  )
}

export default Connexion
