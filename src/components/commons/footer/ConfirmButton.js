import React from 'react'
import PropTypes from 'prop-types'

import './ConfirmButton.css'
import checkImg from '../../../images/check.svg'

const ConfirmButton = (props) => {
  const { message, confirm, deleted } = props
  return (
    <div className='confirm-button'>
      <div className={!confirm ? 'btn-confirm-error' : deleted ? 'deleted' : 'btn-confirm'}>
        <div className={!confirm && 'imgNone'}>
          {confirm && <img src={checkImg} alt='checked' />}
        </div>
        {message}
      </div>
    </div>
  )
}

ConfirmButton.propTypes = {
  message: PropTypes.string.isRequired,
  confirm: PropTypes.bool,
  deleted: PropTypes.bool
}

export default ConfirmButton
