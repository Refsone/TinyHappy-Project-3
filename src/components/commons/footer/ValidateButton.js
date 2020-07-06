import React from 'react'
import PropTypes from 'prop-types'

import './ValidateButton.css'

const ValidateButton = (props) => {
  const name = props.name.toUpperCase()

  return (
    <div className='validateButton'>
      <button
        type='submit'
        className={props.active ? 'btn-active' : 'btn-inactive'}
        disabled={!props.active && 'disabled'}
        onClick={props.handleClick}
      >
        {name}
      </button>
    </div>
  )
}

ValidateButton.propTypes = {
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default ValidateButton
