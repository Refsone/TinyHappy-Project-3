import React from 'react'
import { Link } from 'react-router-dom'

import './AddNewFamily.css'

const AddNewMoment = () => {
  return (
    <div className='addFamily'>
      <Link to={{
        pathname: '/family/create',
        data: {
          modify: 'new'
        }
      }}
      >+
      </Link>
    </div>
  )
}
export default AddNewMoment
