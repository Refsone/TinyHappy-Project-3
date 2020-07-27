import React from 'react'
import PropTypes from 'prop-types'

import './CreateInputFamily.css'

const CreateInputFamily = (props) => {
  const { name, id, placeholder, handlechange, handleBlur, fieldValue, required } = { ...props }

  return (
    <div className='absolute'>
      <label htmlFor={id} className='general-label'>{name} {required && '*'}</label>
      <input
        type='text'
        placeholder={placeholder}
        name={id}
        id={id}
        className={fieldValue.error ? 'error' : 'general-input bold-12px-grey plholder'}
        onChange={handlechange}
        onBlur={handleBlur}
        required={required}
        value={fieldValue.value ? fieldValue.value : ''}
        autoComplete='off'
        aria-required={required && true}
      />
      {fieldValue.error && <p className='msg-error'>{fieldValue.error}</p>}
    </div>
  )
}

CreateInputFamily.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handlechange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  required: PropTypes.bool,
  fieldValue: PropTypes.object.isRequired
}
export default CreateInputFamily
