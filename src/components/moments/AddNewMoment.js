import React from 'react'
import { Link } from 'react-router-dom'
import './AddNewMoment.css'

const AddNewMoment = () => {
  return (
    <div className='addMoment'>
      <Link to='/moments/create/quote'>+</Link>
    </div>
  )
}
export default AddNewMoment
