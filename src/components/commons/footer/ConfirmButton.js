import React from 'react'

import './ConfirmButton.css'
import checkImg from '../../../images/check-circle.svg'

const ConfirmButton = (props) => {
  const { message, confirm } = props
  return (
    <div className='confirm-button'>
      <div className={confirm ? 'btn-confirm' : 'btn-confirm error'}>
        <div>
          {confirm && <img src={checkImg} alt='checked' />}
        </div>
        {message}
      </div>
    </div>
  )
}

export default ConfirmButton
