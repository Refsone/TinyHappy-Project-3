import React from 'react'

import './Contact.css'
import bin from '../../images/trash-alt-regular-blue.svg'

const Contact = ({ email }) => {
  return (
    <div className='field'>
      <div className='group'>
        <input className='radiobox' type='radio' />
        <p className='medium-16px-grey email'>{email}</p>
      </div>
      <img className='bin' alt='bin' src={bin} />
    </div>
  )
}

export default Contact
