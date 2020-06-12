import React from 'react'
import { Link } from 'react-router-dom'
import './AddNewMoment.css'

const AddNewMoment = () => {
  return (
    <div className='addMoment'>
      <Link to='/create-moment'>+</Link>
    </div>
  )
}
export default AddNewMoment
