import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import DatePicker from 'react-datepicker'
import Header from '../../commons/header/Header'
import Moment from './Moment'
import MomentNavbar from './MomentNavbar'

import './CreateMoments.css'
import '../../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css'
import calendarIcon from '../../../images/calendrier.svg'

const backUrl = process.env.REACT_APP_API_URL
const myToken = (localStorage.getItem('x-access-token'))
const userId = localStorage.getItem('userId')

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
  const [user, setUser] = useState({})
  const [userIsPresent, setUserIsPresent] = useState(1)
  const [modifyMoment, setModifyMoment] = useState(false)
  const [idForModifyMoment, setIdForModifyMoment] = useState()

  // console.log(props)

  const path = props.location.pathname

  // let textToModifyMoment = ''
  // let contextToModifyMoment = ''
  // let dateToModifyMoment = ''
  // let idToModifyMoment = ''
  // let typeToModifyMoment = ''
  // let isPresentModifyMoment = ''
  // let firstNameUserModifymoment = ''
  // let colorUserModifyMoment = ''
  // let firstnameColor = ''

  useEffect(() => {
    if (props.location.moment) {
      const { moment_context, firstname_color, type, moment_text, moment_event_date, momentId, user_isPresent } = props.location.moment
      setModifyMoment(true)
      setTextInContextArea(moment_context)
      setMemberFamilyIsPresentAtMoment(firstname_color.map(person => person.id))
      setMomentTypeId(type === 'quote' ? 1 : 0)
      setTextInMomentArea(moment_text)
      setDate(new Date(moment_event_date))
      setUserIsPresent(user_isPresent)
      setIdForModifyMoment(momentId)
      // contextToModifyMoment = props.location.moment.moment_context
      // textToModifyMoment = props.location.moment.moment_text
      // typeToModifyMoment = props.location.moment.type
      // colorUserModifyMoment = props.location.user[0].color
      // dateToModifyMoment = moment_event_date
      // idToModifyMoment = momentId
      // isPresentModifyMoment = user_isPresent
      // firstNameUserModifymoment = props.location.user[0].user_firstname
    }
  }, [])
  useEffect(() => {
    axios.get(`${backUrl}/users/${userId}/family`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then((res) => {
        setFamilyMember(res.data)
      })
      .catch(err => `L'erreur suivante s'est produite: ${err}`, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
    axios.get(`${backUrl}/users/${userId}`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then((res) => {
        setUser(res.data[0])
      })
      .catch(err => `L'erreur suivante s'est produite: ${err}`, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
  }, [])

  const SendCreateMoment = () => {
    const dataToSend = {
      user_isPresent: userIsPresent,
      moment_text: textInMomentArea,
      moment_context: textInContextArea,
      moment_event_date: date.toISOString().slice(0, 10),
      moment_type_id: momentTypeId,
      user_id: userId,
      family_id: memberFamilyIsPresentAtMoment
    }

    if (!modifyMoment) {
      axios.post(`${backUrl}/moments/create`, dataToSend, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
        .then(res => res.status === 201 ? setSendMomentSucceed(true) : '')
        .catch(err => {
          setSendError(true)
          console.error(err)
        })
    } else {
      console.log(dataToSend)
      dataToSend.moment_id = idForModifyMoment
      axios.put(`${backUrl}/moments/modify`, dataToSend, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
        .then(res => res.status === 200 ? setSendMomentSucceed(true) : '')
        .catch(err => {
          setSendError(true)
          console.error(err)
        })
    }
  }

  useEffect(() => {
    (userIsPresent !== 0 || memberFamilyIsPresentAtMoment.length > 0) && textInMomentArea.length > 0 ? setActive(true) : setActive(false)
  }, [userIsPresent, memberFamilyIsPresentAtMoment, textInMomentArea])

  useEffect(() => {
    if (sendMomentSucceed || sendError) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 1000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [sendMomentSucceed, sendError])

  const buttonSelectAuthor = (AuthorId, click) => {
    console.count()
    if (click) {
      console.log('click')
      AuthorId === user.user_firstname
        ? console.log('user') || setUserIsPresent(1)
        : console.log('family') || setMemberFamilyIsPresentAtMoment([...memberFamilyIsPresentAtMoment, AuthorId])
    } else {
      console.log('noClick')
      if (AuthorId === user.user_firstname) {
        console.log('user')
        setUserIsPresent(0)
      } else {
        console.log('family')
        const idToDelete = memberFamilyIsPresentAtMoment.indexOf(AuthorId)
        const newTab = [...memberFamilyIsPresentAtMoment]
        newTab.splice(idToDelete, 1)
        setMemberFamilyIsPresentAtMoment(newTab)
      }
    }
  }

  useEffect(() => {
    console.log(memberFamilyIsPresentAtMoment)
  })

  const onChangeTextInMomentArea = (e) => {
    let value = ''
    if (momentTypeId === 1) {
      value += `"${e.target.value}"`
    } else {
      value += e.target.value
    }
    setTextInMomentArea(value)
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
        <Moment
          momentTypeId={momentTypeId}
          sendMomentSucceed={sendMomentSucceed}
          memberFamilyIsPresentAtMoment={memberFamilyIsPresentAtMoment}
          userIsPresent={userIsPresent}
          textInContextArea={textInContextArea}
          textInMomentArea={textInMomentArea}
          buttonSelectAuthor={buttonSelectAuthor}
          active={active} SendCreateMoment={SendCreateMoment}
          onChangeTextInContextArea={onChangeTextInContextArea}
          onChangeTextInMomentArea={onChangeTextInMomentArea}
          user={user}
          familyMember={familyMember}
        />
        <DatePicker selected={date} locale='fr' onChange={date => setDate(date)} dateFormat='EEEE dd MMMM yyyy' maxDate={(new Date())} customInput={<CustomInput />} />
        {redirect && <Redirect to={{ pathname: '/moments', params: { isSend: sendMomentSucceed } }} />}
      </div>
    </>
  )
}

export default CreateMoment
