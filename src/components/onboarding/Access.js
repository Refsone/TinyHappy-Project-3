import React, { useEffect, useState } from 'react'

import './Access.css'

import LOGO from '../../images/LOGO.svg'
import Sign from './Sign'

const Access = () => {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 1500)
  }, [])

  return (
    <div className='access'>
      <img className='logo' src={LOGO} alt='logo tinyhappy' />
      {load && <Sign />}
    </div>
  )
}

export default Access
