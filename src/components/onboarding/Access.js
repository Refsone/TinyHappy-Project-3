import React, { useEffect, useState } from 'react'
import LOGO from '../../images/LOGO.svg'
import Sign from './Sign'
import './Access.css'

const Access = () => {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 3000)
  }, [])

  return (
    <div className='access'>
      <img className='logo' src={LOGO} />
      {load && <Sign />}
    </div>
  )
}

export default Access
