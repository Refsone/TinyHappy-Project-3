import React from 'react'

import './ValidateButton.css'

const ValidateButton = (props) => {
  const name = props.name.toUpperCase()

  return (
    <div className='validateButton'>
      <button
        type='submit'
        className={props.active ? 'btn-active' : 'btn-inactive'}
        disabled={!props.active && 'disabled'}
        onClick={props.handleSendCreateMoment}
      >
        {name}
      </button>
    </div>
  )
}

export default ValidateButton
