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
  const [textInMomentArea, setTextInMomentArea] = useState('')
  const [textInDescriptionArea, setTextInDescriptionArea] = useState('')
  const [memberFamilyIsPresentAtMoment, setMemberFamilyIsPresentAtMoment] = useState([])
  const [momentTypeId, setMomentTypeId] = useState(1)

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

  const handleSendCreateMoment = () => {
    axios.post('http://localhost:7500/moments/create',
      {
        user_isPresent: 0,
        moment_text: textInMomentArea,
        moment_context: textInDescriptionArea,
        moment_event_date: date.toISOString().slice(0, 10),
        moment_type_id: momentTypeId,
        user_id: id,
        family_id: memberFamilyIsPresentAtMoment
      })
      .then(res => res.data)
      .catch(e => {
        console.error(e)
      })
  }

  useEffect(() => {
    console.log(memberFamilyIsPresentAtMoment)
  }, [memberFamilyIsPresentAtMoment])

  const buttonSelectAuthor = (AuthorId, click) => {
    if (click) {
      setMemberFamilyIsPresentAtMoment([...memberFamilyIsPresentAtMoment, AuthorId])
    } else {
      const idToDelete = memberFamilyIsPresentAtMoment.indexOf(AuthorId)
      const newTab = [...memberFamilyIsPresentAtMoment]
      newTab.splice(idToDelete, 1)
      setMemberFamilyIsPresentAtMoment(newTab)
    }
  }

  const onChangeTextInMomentArea = (e) => {
    e.target.value ? setActive(true) : setActive(false)
    setTextInMomentArea(e.target.value)
  }

  const onChangeTextInDescriptionArea = (e) => {
    setTextInDescriptionArea(e.target.value)
    console.log(e.target.value)
  }

  const resetStateOnSwitch = (e) => {
    setActive(false)
    setMomentTypeId(e)
    setMemberFamilyIsPresentAtMoment([])
  }

  return (
    <>
      <Header location={path} burger />
      <div className='create'>
        <MomentNavbar resetStateOnSwitch={resetStateOnSwitch} />
        {path === '/moments/create/milestone'
          ? <Milestone buttonSelectAuthor={buttonSelectAuthor} active={active} handleSendCreateMoment={handleSendCreateMoment} onChangeTextInDescriptionArea={onChangeTextInDescriptionArea} onChangeTextInMomentArea={onChangeTextInMomentArea} user={user} familyMember={familyMember} />
          : <Quote buttonSelectAuthor={buttonSelectAuthor} active={active} handleSendCreateMoment={handleSendCreateMoment} onChangeTextInDescriptionArea={onChangeTextInDescriptionArea} onChangeTextInMomentArea={onChangeTextInMomentArea} user={user} familyMember={familyMember} />}
        <DatePicker onChange={setDate} value={date} format='dd-MM-yy' />
      </div>
    </>
  )
}

export default CreateMoment
