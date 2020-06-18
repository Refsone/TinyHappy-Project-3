import React from 'react'
import PropTypes from 'prop-types'

const CreateInputFamily = (props) => {
  const { name, id, placeholder, handlechange, fieldValue, required } = { ...props }

  return (
    <>
      <label htmlFor={id} className='general-label'>{name} {required && '*'}</label>
      <input
        type='text'
        placeholder={placeholder}
        name={id}
        id={id}
        className={fieldValue.error === 2 ? 'input-error' : 'general-input bold-12px-grey plholder'}
        onChange={handlechange}
        required={required}
        autoComplete='off'
        aria-required='true'
      />
      {id.includes('name') && fieldValue.value && fieldValue.error === 1 &&
        <p className='msg-error'>Le {name} doit contenir au moins 2 caractères</p>}
      {id.includes('name') && id && fieldValue.error === 2 &&
        <p className='msg-error'>Caractère spécial non-autorisé</p>}
      {id.includes('name') && id && fieldValue.error === 3 &&
        <p className='msg-error'>Les chiffres ne sont pas autorisés</p>}
      {id.includes('birthday') && fieldValue.value && fieldValue.error === 1 &&
        <p className='msg-error'>Le format de la date n'est pas valide (jj/mm/aaaa)</p>}
    </>
  )
}

CreateInputFamily.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handlechange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  fieldValue: PropTypes.object.isRequired
}
export default CreateInputFamily
