import React from 'react'
import './Sign.css'
import { Link } from 'react-router-dom'

const Sign = () => {
  return (
    <div className='sign'>
      <Link to='/connect' className='connect'>se connecter</Link>
      <Link to='/sign-up' className='register'>s'inscrire</Link>
    </div>
  )
}

export default Sign
