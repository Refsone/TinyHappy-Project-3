import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import axios from 'axios'

import './Sign.css'

const Sign = () => {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token')
      if (token === null) {
        localStorage.setItem('auth-token', '')
        token = ''
      }
      const tokenRes = await axios.post('http://localhost:7500/users/login/tokenIsValid', null, { headers: { 'x-auth-token': token } })

      if (tokenRes.data) {
        const userRes = await axios.get('http://localhost:7500/users/login', { headers: { 'x-auth-token': token } })
        setUserData({
          token,
          useEffect: userRes.data
        })
      }
      console.log(tokenRes.data)
    }
    checkLoggedIn()
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <div className='sign'>
        <Link to='/onboarding/login' className='connect'>se connecter</Link>
        <Link to='/onboarding/signup' className='register'>s'inscrire</Link>
      </div>
    </UserContext.Provider>

  )
}

export default Sign
