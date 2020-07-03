import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import Header from '../../commons/header/Header'
import Milestone from './Milestone'
import MomentNavbar from './MomentNavbar'
import Quote from './Quote'

import '../../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css'
import './CreateMoments.css'
import '../../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css'
import calendarIcon from '../../../images/calendrier.svg'

const CreateMoment = (props) => {
  const [familyMember, setFamilyMember] = useState([])
  const [user, setUser] = useState([])
  const [date, setDate] = useState(new Date())
  const [active, setActive] = useState(false)
  const [textInMomentArea, setTextInMomentArea] = useState('')
  const [textInContextArea, setTextInContextArea] = useState('')
  const [memberFamilyIsPresentAtMoment, setMemberFamilyIsPresentAtMoment] = useState([])
  const [momentTypeId, setMomentTypeId] = useState(1)
  const [userIsPresent, setUserIsPresent] = useState(0)
  const [sendMomentSucceed, setSendMomentSucceed] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [sendError, setSendError] = useState(false)

  const id = 1
  const path = props.location.pathname

  useEffect(() => {
    axios.get(`http://localhost:7500/users/${id}/family`)
      .then((res) => {
        setFamilyMember(res.data)
      })
      .catch(err => `L'erreur suivante s'est produite: ${err}`)
    axios.get(`http://localhost:7500/users/${id}`)
      .then((res) => {
        setUser(res.data[0])
      })
      .catch(err => `L'erreur suivante s'est produite: ${err}`)
  }, [])

  const SendCreateMoment = () => {
    axios.post('http://localhost:7500/moments/create',
      {
        user_isPresent: userIsPresent,
        moment_text: textInMomentArea,
        moment_context: textInContextArea,
        moment_event_date: date.toISOString().slice(0, 10),
        moment_type_id: momentTypeId,
        user_id: id,
        family_id: memberFamilyIsPresentAtMoment
      })
      .then(res => res.status === 201 ? setSendMomentSucceed(true) : setSendError(true))
      .catch(err => console.log('an error is occured, the message is:' + err))
  }

  useEffect(() => {
    if (sendMomentSucceed || sendError) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 2500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [sendMomentSucceed, sendError])

  const buttonSelectAuthor = (AuthorId, click) => {
    console.log(AuthorId)
    if (click) {
      AuthorId === user.user_firstname
        ? setUserIsPresent(1)
        : setMemberFamilyIsPresentAtMoment([...memberFamilyIsPresentAtMoment, AuthorId])
    } else {
      if (AuthorId === user.user_firstname) {
        setUserIsPresent(0)
      } else {
        const idToDelete = memberFamilyIsPresentAtMoment.indexOf(AuthorId)
        const newTab = [...memberFamilyIsPresentAtMoment]
        newTab.splice(idToDelete, 1)
        setMemberFamilyIsPresentAtMoment(newTab)
      }
    }
  }

  const onChangeTextInMomentArea = (e) => {
    setTextInMomentArea(e.target.value)
  }

  const onChangeTextInContextArea = (e) => {
    setTextInContextArea(e.target.value)
  }

  const resetStateOnSwitch = (e) => {
    setActive(false)
    setMomentTypeId(e)
    setMemberFamilyIsPresentAtMoment([])
    setTextInMomentArea('')
    setTextInContextArea('')
  }

  useEffect(() => {
    (userIsPresent > 0 || memberFamilyIsPresentAtMoment.length > 0) && textInMomentArea.length > 0 ? setActive(true) : setActive(false)
  }, [userIsPresent, memberFamilyIsPresentAtMoment, textInMomentArea])

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
          ? <Milestone sendMomentSucceed={sendMomentSucceed} memberFamilyIsPresentAtMoment={memberFamilyIsPresentAtMoment} userIsPresent={userIsPresent} textInContextArea={textInContextArea} textInMomentArea={textInMomentArea} buttonSelectAuthor={buttonSelectAuthor} active={active} SendCreateMoment={SendCreateMoment} onChangeTextInContextArea={onChangeTextInContextArea} onChangeTextInMomentArea={onChangeTextInMomentArea} user={user} familyMember={familyMember} />
          : <Quote sendMomentSucceed={sendMomentSucceed} memberFamilyIsPresentAtMoment={memberFamilyIsPresentAtMoment} userIsPresent={userIsPresent} textInContextArea={textInContextArea} textInMomentArea={textInMomentArea} buttonSelectAuthor={buttonSelectAuthor} active={active} SendCreateMoment={SendCreateMoment} onChangeTextInContextArea={onChangeTextInContextArea} onChangeTextInMomentArea={onChangeTextInMomentArea} user={user} familyMember={familyMember} />}
        <DatePicker
          selected={date}
          locale='fr'
          onChange={date => setDate(date)}
          dateFormat='EEEE dd MMMM yyyy'
          customInput={<CustomInput />}
        />
        {sendError && <p className='sendError'>Une erreur s'est produite lors de l'envoi</p>}
        {redirect && <Redirect to='/moments' />}
      </div>
    </>
  )
}

export default CreateMoment
