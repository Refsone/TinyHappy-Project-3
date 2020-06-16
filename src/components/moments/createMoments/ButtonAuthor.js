import React, { useState } from 'react'
import './ButtonAuthor.css'

const Button = (props) => {
  const [color, setColor] = useState('')

  const handleClick = (e) => {
    color ? setColor('') : setColor(props.color)
  }

  return (
    <>
      <button onClick={(e) => handleClick(e)} style={{ backgroundColor: `${color}` }} className='author'>{props.name}</button>
    </>
  )
}

export default Button
