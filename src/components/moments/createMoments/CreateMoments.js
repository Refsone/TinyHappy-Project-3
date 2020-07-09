import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'

import DatePicker from 'react-datepicker'
import Header from '../../commons/header/Header'
import Moment from './Moment'
import MomentNavbar from './MomentNavbar'

import './CreateMoments.css'
import '../../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css'
import calendarIcon from '../../../images/calendrier.svg'

const backUrl = process.env.REACT_APP_API_URL

const CreateMoment = (props) => {
  const [active, setActive] = useState(false)
  const [date, setDate] = useState(new Date())
  const [familyMember, setFamilyMember] = useState([])
  const [memberFamilyIsPresentAtMoment, setMemberFamilyIsPresentAtMoment] = useState([])
  const [momentTypeId, setMomentTypeId] = useState(1)
  const [redirect, setRedirect] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [sendMomentSucceed, setSendMomentSucceed] = useState(false)
  const [textInContextArea, setTextInContextArea] = useState('')
  const [textInMomentArea, setTextInMomentArea] = useState('')
  const [user, setUser] = useState([])
  const [userIsPresent, setUserIsPresent] = useState(0)

  const id = 1
  const path = props.location.pathname

  useEffect(() => {
    axios.get(`${backUrl}/users/${id}/family`)
      .then((res) => {
        setFamilyMember(res.data)
      })
      .catch(err => `L'erreur suivante s'est produite: ${err}`)
    axios.get(`${backUrl}/users/${id}`)
      .then((res) => {
        setUser(res.data[0])
      })
      .catch(err => `L'erreur suivante s'est produite: ${err}`)
  }, [])

  const SendCreateMoment = () => {
    axios.post(`${backUrl}/moments/create`,
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
    (userIsPresent !== 0 || memberFamilyIsPresentAtMoment.length > 0) && textInMomentArea.length > 0 ? setActive(true) : setActive(false)
  }, [userIsPresent, memberFamilyIsPresentAtMoment, textInMomentArea])

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

  const SwitchMomentType = (e) => {
    setMomentTypeId(e)
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
        <MomentNavbar SwitchMomentType={SwitchMomentType} />
        <Moment momentTypeId={momentTypeId} sendMomentSucceed={sendMomentSucceed} memberFamilyIsPresentAtMoment={memberFamilyIsPresentAtMoment} userIsPresent={userIsPresent} textInContextArea={textInContextArea} textInMomentArea={textInMomentArea} buttonSelectAuthor={buttonSelectAuthor} active={active} SendCreateMoment={SendCreateMoment} onChangeTextInContextArea={onChangeTextInContextArea} onChangeTextInMomentArea={onChangeTextInMomentArea} user={user} familyMember={familyMember} />
        <DatePicker selected={date} locale='fr' onChange={date => setDate(date)} dateFormat='EEEE dd MMMM yyyy' customInput={<CustomInput />} />
        {sendError && <p className='sendError'>Une erreur s'est produite lors de l'envoi</p>}
        {redirect && <Redirect to='/moments' />}
      </div>
    </>
  )
}

CreateMoment.propTypes = {
  SwitchMomentType: PropTypes.func.isRequired,
  momentTypeId: PropTypes.number.isRequired,
  sendMomentSucceed: PropTypes.func.isRequired,
  memberFamilyIsPresentAtMoment: PropTypes.array.isRequired,
  userIsPresent: PropTypes.number.isRequired,
  textInContextArea: PropTypes.string,
  textInMomentArea: PropTypes.string,
  buttonSelectAuthor: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  SendCreateMoment: PropTypes.func.isRequired,
  onChangeTextInContextArea: PropTypes.func.isRequired,
  onChangeTextInMomentArea: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
  familyMember: PropTypes.array.isRequired
}

export default CreateMoment
