import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ConfirmButton from '../commons/footer/ConfirmButton'

import './../onboarding/Connexion.css'
import './Password.css'

import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'

const Password = () => {
  const [visible, setVisible] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [changeSuceed, setChangeSuceed] = useState(false)
  const [actualPassword, setActualPasswor] = useState('')
  const [differentPassword, setDifferentPassword] = useState(false)
  const [shortPassword, setShortPassword] = useState(false)

  const showType = visible ? 'text' : 'password'
  const id = 15

  const submit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:7500/modify-password/${id}/`, { newPassword: newPassword, actualPassword: actualPassword })
      .then(res => {
        if (res.status === 201) {
          setChangeSuceed(true)
        } else if (res.status === 400) {
          console.log('salut')
        }
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

  useEffect(() => {
    confirmPassword.length === newPassword.length && confirmPassword !== newPassword ? setDifferentPassword(true) : setDifferentPassword(false)
    newPassword.length >= 1 && newPassword.length < 8 ? setShortPassword(true) : setShortPassword(false)
  }, [newPassword, confirmPassword])

  return (
    <div className='settings-container-pwdmail'>
      <h1 className='settings-pwmail-title bold-16px-grey'>modification du mot de passe</h1>

      <form className='general-form-connexion' noValidate>
        <label htmlFor='user_password' className='label-settings bold-12px-grey'>Mot de passe actuel</label>
        <div className='settings-container-eye'>
          <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
        </div>
        <input name='user_password' type={showType} id='user_password' onChange={handleChangePassword} className='input-psw-default plholder bold-12px-grey' placeholder='**********' />
        {/* && <p className='msg-error'>Mot de passe incorrect</p>} */}

        <label htmlFor='new_password' className='label-settings bold-12px-grey'>Nouveau mot de passe</label>
        <div className='settings-container-eye'>
          <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
        </div>
        <input name='new_password' type={showType} id='new_password' onChange={handleChangeNewPassword} className='input-psw-default plholder bold-12px-grey' placeholder='**********' />
        {shortPassword && <p className='msg-error'>Votre mot de passe doit avoir au moins 8 caractères</p>}

        <label htmlFor='confirm_password' className='label-settings bold-12px-grey'>confirmer mot de passe</label>
        <div className='settings-container-eye'>
          <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
        </div>
        <input name='confirm_password' type={showType} id='confirm_password' onChange={handleChangeConfirm} className='input-connexion plholder bold-12px-grey' placeholder='**********' />
        {differentPassword && <p className='msg-error'>Les deux mots de passe ne correspondent pas</p>}

        {newPassword.length < 8 || newPassword !== confirmPassword
          ? <button type='submit' className='connexion-btn-inactif'>confirmer</button>
          : <button type='submit' className='connexion-btn-actif' onClick={(e) => submit(e)}>confirmer</button>}
        {changeSuceed && <ConfirmButton message='changement réussi' confirm />}
      </form>

    </div>
  )
}

export default Password
