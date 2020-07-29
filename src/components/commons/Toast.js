import React from 'react'
import stick from '../../images/green-tick.svg'

function Toast (props) {
  return (
    <div className={props.classType}>
      {props.classType === 'sucess-toaster' ? <img src={stick} alt='' /> : ''}
      <p>{props.text}</p>
    </div>
  )
}

export default Toast
