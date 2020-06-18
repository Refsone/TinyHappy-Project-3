import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DatePicker from 'react-date-picker'
import '../../../../node_modules/react-calendar/dist/Calendar.css'
import Header from '../../commons/header/Header'
import Milestone from './Milestone'
import MomentNavbar from './MomentNavbar'
import Quote from './Quote'

import './CreateMoments.css'

const CreateMoment = (props) => {
  const [familyMember, setFamilyMember] = useState([])
  const [user, setUser] = useState([])
  const [date, setDate] = useState(new Date())
  const [active, setActive] = useState(false)
  const [quoteArea, setQuoteArea] = useState('')
  const memberFamilyIsPresentAtMoment = []

  const id = 1
  const path = props.location.pathname

  useEffect(() => {
    axios.get(`http://localhost:7500/users/${id}/family`)
      .then((res) => {
        setFamilyMember(res.data)
      })
    axios.get(`http://localhost:7500/users/${id}`)
      .then((res) => {
        setUser(res.data)
      })
  }, [])

  const sendCreateMoment = () => {
    axios.post('http://localhost:7500/moments/create', { user_isPresent: false, moment_text: quoteArea, moment_context: '', moment_event_date: date.toISOString().slice(0, 10), user_id: id, moment_type_id: 1 })
      .then(res => res.data)
      .then(res => {
        console.log('envoie ok')
      })
      .catch(e => {
        console.error(e)
      })
  }

  const buttonSelectAuthor = (AuthorId) => {
    memberFamilyIsPresentAtMoment.push(AuthorId)
    console.log('author', memberFamilyIsPresentAtMoment)
  }
  console.log(memberFamilyIsPresentAtMoment)

  const textInQuoteArea = (e) => {
    e.target.value ? setActive(true) : setActive(false)
    setQuoteArea(e.target.value)
  }

  const textInDescriptionArea = (e) => {
    e.target.value ? setActive(true) : setActive(false)
  }

  return (
    <>
      <Header location={path} burger />
      <div className='create'>
        <MomentNavbar />
        {path === '/moments/create/milestone'
          ? <Milestone buttonSelectAuthor={buttonSelectAuthor} active={active} sendCreateMoment={sendCreateMoment} textInDescriptionArea={textInDescriptionArea} user={user} familyMember={familyMember} />
          : <Quote buttonSelectAuthor={buttonSelectAuthor} active={active} sendCreateMoment={sendCreateMoment} textInQuoteArea={textInQuoteArea} user={user} familyMember={familyMember} />}
        <DatePicker onChange={setDate} value={date} format='dd-MM-yy' />
      </div>
    </>
  )
}

export default CreateMoment
