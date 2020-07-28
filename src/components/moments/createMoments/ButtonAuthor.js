import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ButtonAuthor.css'

const Button = (props) => {
  const [color, setColor] = useState('')
  const [click, setClick] = useState(false)

  const handleClick = () => {
    props.buttonSelectAuthor(props.id, click)
    !click ? setColor(props.color) : setColor('')
    setClick(!click)
  }

  return (
    <>
      <button onClick={handleClick} id={props.id} style={{ backgroundColor: `${color}` }} className='author'>{props.name}</button>
    </>
  )
}

Button.propTypes = {
  buttonSelectAuthor: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Button
