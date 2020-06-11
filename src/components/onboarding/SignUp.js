import React, { useState } from 'react'

const SignUp = () => {
  const data = {
    userFirstname: '',
    userLastname: '',
    userMail: '',
    userPassword: '',
    userConfirmPassword: ''
  }

  const [loginData, setLoginData] = useState(data)

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value })
  }

  const { userFirstname, userLastname, userMail, userPassword, userConfirmPassword } = loginData

  const btn = userFirstname === '' || userLastname === '' || userMail === '' || userPassword === '' || userPassword !== userConfirmPassword
    ? <button type='submit' className='btn-connexion-none' disabled>s'inscrire</button>
    : <button type='submit' className='btn-connexion'>s'inscrire</button>

  return (
    <div className='connexion-container'>
      <form className='general-connexion-form'>
        <label htmlFor='firstname' name='userFirstname' className='general-label'>prénom</label>
        <input onChange={handleChange} value={userFirstname} type='text' id='userFirstname' className='general-input' autoComplete='off' placeholder='Elise' required />

        <label htmlFor='last' name='userLastname' className='general-label'>nom</label>
        <input onChange={handleChange} value={userLastname} type='text' id='userLastname' className='general-input' autoComplete='off' placeholder='Durand' required />

        <label htmlFor='email' name='userMail' className='general-label'>email</label>
        <input onChange={handleChange} value={userMail} id='userMail' type='email' className='general-input' autoComplete='off' placeholder='mon@email.com' required />

        <label htmlFor='password' className='general-label' name='userPassword'>mot de passe</label>
        <input onChange={handleChange} value={userPassword} id='userPassword' type='password' autoComplete='off' className='general-input-mdp-close' placeholder='**********' required />

        <label htmlFor='password' className='general-label' name='userConfirmPassword'>confirmer mot de passe</label>
        <input onChange={handleChange} value={userConfirmPassword} id='userConfirmPassword' type='password' autoComplete='off' className='general-input-mdp-close' placeholder='**********' required />

        {btn}
      </form>
    </div>
  )
}

export default SignUp
