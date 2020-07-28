import React from 'react'
import PropTypes from 'prop-types'

import './ValidateButton.css'

const ValidateButton = (props) => {
  const { name, handleClick } = props

  return (
    <div className='validateButton'>
      <button
        type='submit'
        className={props.active ? 'btn-active' : 'btn-inactive'}
        style={name === 'RETOUR' ? { zIndex: '2' } : {}}
        disabled={!props.active && 'disabled'}
        onClick={handleClick}
      >
        {name.toUpperCase()}
      </button>
    </div>
  )
}

ValidateButton.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default ValidateButton
