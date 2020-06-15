import React, { useState, useEffect } from 'react'
import MomentNavbar from './MomentNavbar'
import Calendar from './Calendar'
import Citation from './Citation'
import FaitNotable from './FaitNotable'
import LogoHeader from '../../commons/header/LogoHeader'
import './CreateMoments.css'
import axios from 'axios'

const CreateMoment = (props) => {
  const [familyMember, setFamilyMember] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/${id}/moments/create`)
      .then((res) => {
        setFamilyMember(res.data)
      })
  }, [])
  const id = 1
  return (
    <div className='create'>
      <LogoHeader />
      <MomentNavbar />
      {props.location.data ? <FaitNotable familyMember={familyMember} /> : <Citation familyMember={familyMember} />}
      <Calendar />
    </div>
  )
}

export default CreateMoment
