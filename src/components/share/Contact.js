import React from 'react'
import PropTypes from 'prop-types'

import './Contact.css'
import bin from '../../images/trash-alt-regular-blue.svg'

const Contact = ({ mail, id, handleChange, selected, deleteContact }) => {
  return (
    <div className='contact-field'>
      <div className='contact-group'>
        <input
          className='radiobox'
          type='radio'
          onChange={handleChange}
          id={id}
          checked={selected.indexOf(parseInt(id)) !== -1 && 'checked'}
        />
        <p className='medium-16px-grey email'>{mail}</p>
      </div>
      <img className='bin' alt='bin' src={bin} id={id} onClick={deleteContact} />
    </div>
  )
}

Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  mail: PropTypes.string.isRequired,
  selected: PropTypes.arrayOf(PropTypes.number)
}

export default Contact
