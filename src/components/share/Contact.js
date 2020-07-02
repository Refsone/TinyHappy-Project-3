import React from 'react'
import PropTypes from 'prop-types'

import './Contact.css'
import bin from '../../images/trash-alt-regular-blue.svg'

const Contact = ({ mail, id, handleChange, selected }) => {
  return (
    <div className='field'>
      <div className='group'>
        <input
          className='radiobox'
          type='radio'
          onChange={handleChange}
          id={id}
          checked={selected.indexOf(parseInt(id)) !== -1 && 'checked'}
        />
        <p className='medium-16px-grey email'>{mail}</p>
      </div>
      <img className='bin' alt='bin' src={bin} />
    </div>
  )
}

Contact.propTypes = {
  mail: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.number)
}

export default Contact
