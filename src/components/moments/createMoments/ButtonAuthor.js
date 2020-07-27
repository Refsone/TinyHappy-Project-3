import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './ButtonAuthor.css'

const Button = (props) => {
  const [color, setColor] = useState(props.color && props.color)
  const [click, setClick] = useState()

  useEffect(() => {
      props.buttonSelectAuthor(props.id, click)
      click ? setColor(props.color) : setColor('')
  }, [click])

  useEffect(() => {
    if (props.userIsPresent === 1) {
      setClick(true)
      setColor(props.color)
    }
  }, [props.user])

  useEffect(() => {
    setClick(props.click)
  },[])

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
