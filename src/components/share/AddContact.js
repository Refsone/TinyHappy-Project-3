import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './AddContact.css'
// import inactifSend from '../../images/send-inactif-btn.svg'

const AddContact = ({ handleclick }) => {
  const [mail, setMail] = useState()
  const [validate, setValidate] = useState(false)
  const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/

  const handleChange = (e) => {
    e ? setMail(e.target.value) : setMail(null)
  }

  useEffect(() => {
    activeButton()
    return () => {
      activeButton()
    }
  })

  const activeButton = () => {
    mail && regexMail.test(mail) ? setValidate(true) : setValidate(false)
  }

  const handleClick = () => {
    validate && handleclick(mail)
  }

  const submitForm = (e) => {
    e.preventDefault()
  }

  const handleButton = (action) => {
    switch (action) {
      case 'className':
        let className = 'bold-14px-white add-contact-button'
        if (validate) { className += ' true' }
        return className
      case 'active':
        return validate ? false : true
      default:
    }
  }

  return (
    <div>
      <form className='add-contact-group' onSubmit={submitForm}>
        <input
          className='bold-12px-grey plholder add-contact-input'
          type='email'
          id='mail'
          name='name'
          onChange={handleChange}
          placeholder='prenom@exemple.com'
        />
        <div className='relative'>
          <button
            className={handleButton('className')}
            onClick={handleClick}
            disabled={handleButton('active')}
          >
            OK
          </button>
        </div>
      </form>
      {/* <div className='inactif-send'>
          <img alt='inactif-send-button' src={inactifSend} />
        </div> */}
    </div>

  )
}

AddContact.propTypes = {
  handleclick: PropTypes.func.isRequired
}

export default AddContact
