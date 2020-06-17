import React from 'react'

import './ValidateButton.css'

const ValidateButton = (props) => {
  const { active, onClick } = props
  const name = props.name.toUpperCase()

  return (
    <div className='validateButton'>
      <button
        type='submit'
        className={active ? 'btn-active' : 'btn-inactive'}
        // disabled={!active && 'disabled'}
        onClick={() => { onClick() }}
      >
        {name}
      </button>
    </div>
  )
}

export default ValidateButton
