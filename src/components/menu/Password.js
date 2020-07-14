import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ConfirmButton from '../commons/footer/ConfirmButton'

import './../onboarding/Connexion.css'
import './Password.css'

import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'

const backUrl = process.env.REACT_APP_API_URL
const myToken = (localStorage.getItem('x-access-token'))
const userId = localStorage.getItem('userId')
const userMail = localStorage.getItem('userMail')
const userName = localStorage.getItem('userName')

const Password = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [changeSuceed, setChangeSuceed] = useState(false)
  const [actualPassword, setActualPasswor] = useState('')
  const [differentPassword, setDifferentPassword] = useState(false)
  const [shortPassword, setShortPassword] = useState(false)

  const showType1 = visible1 ? 'text' : 'password'
  const showType2 = visible2 ? 'text' : 'password'
  const showType3 = visible3 ? 'text' : 'password'

  const submit = (e) => {
    e.preventDefault()
    axios.put(`${backUrl}/users/${userId}/modify-password`, { newPassword: newPassword, actualPassword: actualPassword }, { headers: { Authorization: `Bearer ${myToken}` } })
      .then(res => {
        if (res.status === 201) {
          axios.post(`${backUrl}/send-mails/new-pwd`, { userName: userName, userMail: userMail })
            .then(res => res.status === 200 ? setChangeSuceed(true) : '')
        }
      })
      .catch(err => console.log(err))
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
    <div className='settings-container-pwdmail modify-mdp'>
      <h1 className='settings-pwmail-title bold-16px-grey'>modification du mot de passe</h1>

      <form className='general-form-connexion' noValidate>
        <label htmlFor='user_password' className='label-settings bold-12px-grey'>Mot de passe actuel</label>
        <div className='settings-container-eye'>
          <img src={visible1 ? eyeOpen : eyeClosed} onClick={() => setVisible1(!visible1)} alt='' />
        </div>
        <input name='user_password' type={showType1} id='user_password' onChange={handleChangePassword} className='input-psw-default plholder bold-12px-grey' placeholder='**********' />

        <label htmlFor='new_password' className='label-settings bold-12px-grey'>Nouveau mot de passe</label>
        <div className='settings-container-eye'>
          <img src={visible2 ? eyeOpen : eyeClosed} onClick={() => setVisible2(!visible2)} alt='' />
        </div>
        <input name='new_password' type={showType2} id='new_password' onChange={handleChangeNewPassword} className='input-psw-default plholder bold-12px-grey' placeholder='**********' />
        {shortPassword && <p className='msg-error'>Votre mot de passe doit avoir au moins 8 caractères</p>}

        <label htmlFor='confirm_password' className='label-settings bold-12px-grey'>confirmer mot de passe</label>
        <div className='settings-container-eye'>
          <img src={visible3 ? eyeOpen : eyeClosed} onClick={() => setVisible3(!visible3)} alt='' />
        </div>
        <input name='confirm_password' type={showType3} id='confirm_password' onChange={handleChangeConfirm} className='input-connexion plholder bold-12px-grey' placeholder='**********' />
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
