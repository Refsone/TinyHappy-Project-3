import React, { useState, useEffect } from 'react'
import axios from 'axios'
import calendarIcon from '../../../images/calendrier.svg'
import DatePicker from 'react-datepicker'
import '../../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css'
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

  const SendCreateMoment = () => {
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
      .then(console.log('salut'))
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
  }

  const resetStateOnSwitch = (e) => {
    setActive(false)
    setMomentTypeId(e)
    setMemberFamilyIsPresentAtMoment([])
  }

  const CustomInput = ({ value, onClick }) => (
    <div className='calendar-moment bold-12px-grey' onClick={onClick}>
      <img src={calendarIcon} alt='calendar icon' />
      <p>{value}</p>
    </div>
  )

  return (
    <>
      <Header location={path} burger />
      <div className='create'>
        <MomentNavbar resetStateOnSwitch={resetStateOnSwitch} />
        {path === '/moments/create/milestone'
          ? <Milestone buttonSelectAuthor={buttonSelectAuthor} active={active} SendCreateMoment={SendCreateMoment} onChangeTextInDescriptionArea={onChangeTextInDescriptionArea} onChangeTextInMomentArea={onChangeTextInMomentArea} user={user} familyMember={familyMember} />
          : <Quote buttonSelectAuthor={buttonSelectAuthor} active={active} SendCreateMoment={SendCreateMoment} onChangeTextInDescriptionArea={onChangeTextInDescriptionArea} onChangeTextInMomentArea={onChangeTextInMomentArea} user={user} familyMember={familyMember} />}
        <DatePicker
          selected={date}
          locale='fr'
          onChange={date => setDate(date)}
          dateFormat='EEEE dd MMMM yyyy'
          customInput={<CustomInput />}
        />
      </div>
    </>
  )
}

export default CreateMoment
