import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './AddContact.css'

const AddContact = ({ handleclick }) => {
  const [mail, setMail] = useState()
  const [validate, setValidate] = useState(false)
  const regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/

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
    setMail()
    e.preventDefault()
  }

  const handleButton = (action) => {
    let className = ''
    switch (action) {
      case 'className':
        className = 'bold-14px-white add-contact-button'
        if (validate) { className += ' true' }
        return className
      case 'active':
        return !validate
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
          name='newMail'
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
    </div>

  )
}

AddContact.propTypes = {
  handleclick: PropTypes.func.isRequired
}

export default AddContact
