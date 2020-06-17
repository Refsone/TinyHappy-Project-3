import React from 'react'
import Proptypes from 'prop-types'

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
        className='general-input bold-12px-grey plholder'
        onChange={handlechange}
        required autoComplete='off'
        aria-required='true'
      />
      {id.includes('name') && fieldValue.value && fieldValue.error === 1 &&
        <p className='msg-error'>Le {name} doit contenir au moins 2 caractères</p>}
      {id.includes('name') && id && fieldValue.error === 2 &&
        <p className='msg-error'>Chiffres ou caractères spéciaux non-autorisés</p>}
      {id.includes('birthday') && fieldValue.value && fieldValue.error === 1 &&
        <p className='msg-error'>Le format de la date n'est pas valide (jj/mm/aaa)</p>}
    </>
  )
}

CreateInputFamily.prototype = {
  name: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  placeholder: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  required: Proptypes.string.isRequired,
  fieldValue: Proptypes.shape.isRequired
}
export default CreateInputFamily
