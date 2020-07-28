import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './ButtonAuthor.css'

const Button = (props) => {
  const { handleSelectAuthors, id, name, userIsPresent, color, selected } = props

  const [thisColor, setThisColor] = useState()

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    const userName = localStorage.getItem('userName')
    if(parseInt(userId) === parseInt(id) && userName === name){
      userIsPresent ? setThisColor(color) : setThisColor ('')
    } else {
      selected ? setThisColor(color) : setThisColor('')
    }
  })

  return (
    <>
      <button onClick={handleSelectAuthors} id={id} name={name} style={{ backgroundColor: `${thisColor}` }} className='author'>{name}</button>
    </>
  )
}

Button.propTypes = {
  handleSelectAuthors: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Button
