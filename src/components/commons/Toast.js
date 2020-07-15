import React from 'react'

function Toast (props) {
  return (
    <div className={props.classType}>
      <p>{props.text}</p>
    </div>
  )
}

export default Toast
