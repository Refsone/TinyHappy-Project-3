import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Calendar from './Calendar'
import Header from '../../commons/header/Header'
import Milestone from './Milestone'
import MomentNavbar from './MomentNavbar'
import Quote from './Quote'

import './CreateMoments.css'

const CreateMoment = (props) => {
  const [familyMember, setFamilyMember] = useState([])
  const [active, setActive] = useState(false)
  const [quoteArea, setQuoteArea] = useState('')
  const id = 1
  const path = props.location.pathname

  useEffect(() => {
    axios.get(`http://localhost:7500/${id}/moments/create`)
      .then((res) => {
        setFamilyMember(res.data)
      })
  }, [])

  const onClick = () => {
    console.log(quoteArea)
    axios.post('http://localhost:7500/moments', { text: quoteArea })
      .them(res => res.data)
      .them(res => {
        console.log('envoie ok')
      })
      .catch(e => {
        console.error(e)
      })
  }

  const textInQuoteArea = (e) => {
    e.target.value ? setActive(true) : setActive(false)
    setQuoteArea(e.target.value)
    console.log(e.target.value)
  }

  const textInDescriptionArea = (e) => {
    e.target.value ? setActive(true) : setActive(false)
  }

  return (
    <>
      <Header location={path} burger />
      <div className='create'>
        <MomentNavbar />
        {path === '/moments/create/milestone' ? <Milestone active={active} onClick={onClick} textInDescriptionArea={textInDescriptionArea} familyMember={familyMember} /> : <Quote active={active} onClick={onClick} textInQuoteArea={textInQuoteArea} familyMember={familyMember} />}
        <Calendar />
      </div>
      {/* <ValidateButton name='publier' active={active} handleClick={handleClick} /> */}
    </>
  )
}

export default CreateMoment
