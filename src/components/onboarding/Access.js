import React from 'react'

import './Access.css'

import LOGO from '../../images/LOGO.svg'
import Sign from './Sign'

const Access = () => {
  return (
    <div className='access'>
      <img className='logo' src={LOGO} alt='logo tinyhappy' />
      <Sign />
    </div>
  )
}

export default Access
