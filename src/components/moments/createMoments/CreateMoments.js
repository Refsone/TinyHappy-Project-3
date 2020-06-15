import React from 'react'
import MomentNavbar from './MomentNavbar'
import Calendar from './Calendar'
import Citation from './Citation'
import FaitNotable from './FaitNotable'
import LogoHeader from '../../commons/header/LogoHeader'
import './CreateMoments.css'
import axios from 'axios'

const CreateMoment = (props) => {
  const path = props.location.pathname
  axios.get('http://localhost:8080/').then((res) => console.log('res axios', res.data))
  return (
    <div className='create'>
      <LogoHeader />
      <MomentNavbar />
      {path === '/moments/create/milestone' ? <FaitNotable /> : <Citation />}
      <Calendar />
    </div>
  )
}

export default CreateMoment
