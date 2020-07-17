import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './ButtonAuthor.css'

const Button = (props) => {
  const [color, setColor] = useState(props.click ? props.color : '')
  const [click, setClick] = useState(props.click)

  useEffect(() => {
    if(click){
      console.log('useEffect')
      props.buttonSelectAuthor(props.id, click)
      click ? setColor(props.color) : setColor('')
    }
  }, [click])

  return (
    <>
      <button onClick={() => setClick(!click)} id={props.id} style={{ backgroundColor: `${color}` }} className='author'>{props.name}</button>
    </>
  )
}

Button.propTypes = {
  buttonSelectAuthor: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Button
