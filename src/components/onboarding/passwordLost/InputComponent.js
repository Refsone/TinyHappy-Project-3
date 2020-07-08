import React from 'react'
import PropTypes from 'prop-types';

import './InputComponent.css'

import eyeClosed from '../../images/eye-slash-regular1.svg'
import eyeOpen from '../../images/eye-open.svg'

const InputComponent = (props) => {
  return (
    <div>
      {/* <div className='settings-container-eye'>
        <img src={visible ? eyeOpen : eyeClosed} onClick={() => setVisible(!visible)} alt='' />
      </div>
      <label htmlFor='user_password' className='label-settings bold-12px-grey'>Mot de passe temporaire</label>
      <input name='user_password' type={!visible ? 'password' : 'text'} id='user_password' onChange={handleChange} className={`${errors.user_password ? 'input-pws-error' : 'input-psw-default plholder bold-12px-grey'}`} placeholder='**********' onClick={handleChange} />
      {errors.user_password && <p className='msg-error'>{errors.user_password}</p>} */}
    </div>
  )
}

InputComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleVisible: PropTypes.func.isRequired,

}

export default InputComponent