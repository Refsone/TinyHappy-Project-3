import React from 'react'
import MomentNavbar from './MomentNavbar'
import Calendar from './Calendar'
import Citation from './Citation'
import FaitNotable from './FaitNotable'
import LogoHeader from '../../commons/header/LogoHeader'
import './CreateMoments.css'
import axios from 'axios'

const CreateMoment = (props) => {
  console.log('props', props.location.data)
  axios.get('http://localhost:8080/').then((res) => console.log('res axios', res.data))
  return (
    <div className='create'>
      <LogoHeader />
      <MomentNavbar />
      {props.location.data ? <Citation /> : <FaitNotable />}
      <Calendar />
    </div>
  )
}

export default CreateMoment
