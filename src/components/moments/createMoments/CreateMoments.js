import React from 'react'
import axios from 'axios'

import Calendar from './Calendar'
import Citation from './Citation'
import FaitNotable from './FaitNotable'
import Header from '../../commons/header/Header'
import MomentNavbar from './MomentNavbar'
import ValidateButton from '../../commons/footer/ValidateButton'

import './CreateMoments.css'

const CreateMoment = (props) => {
  const path = props.location.pathname
  axios.get('http://localhost:8080/').then((res) => console.log('res axios', res.data))

  const handleClick = () => {
    // Enter instructions here
  }

  return (
    <>
      <Header location={path} burger />
      <div className='create'>
        <MomentNavbar />
        {path === '/moments/create/milestone' ? <FaitNotable /> : <Citation />}
        <Calendar />
      </div>
      <ValidateButton name='publier' active={false} handleClick={handleClick} />
    </>
  )
}

export default CreateMoment
