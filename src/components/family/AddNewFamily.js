import React from 'react'
import { Link } from 'react-router-dom'

import './AddNewFamily.css'

const AddNewMoment = () => {
  return (
    <div className='addFamily'>
      <Link to='/family/create'>+</Link>
    </div>
  )
}
export default AddNewMoment
