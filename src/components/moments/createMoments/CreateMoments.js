import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import DatePicker from 'react-datepicker'
import DeleteMoment from './DeleteMoment';
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
  const [momentTypeId, setMomentTypeId] = useState(1)
  const [redirect, setRedirect] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [sendMomentSucceed, setSendMomentSucceed] = useState()
  const [textInContextArea, setTextInContextArea] = useState('')
  const [textInMomentArea, setTextInMomentArea] = useState('')
  const [user, setUser] = useState({})
  const [modifyMoment, setModifyMoment] = useState(false)
  const [idForModifyMoment, setIdForModifyMoment] = useState()
  const [authorPresent, setAuthorPresent] = useState(false)
  const [userIsPresent, setUserIsPresent] = useState(false)
  const [loadFamilyMember, setLoadFamilyMember] = useState(false)
  const [dataMoments, setDataMoments] = useState()

  const location = props.location.pathname

  useEffect(() => {
    if (props.location.moment) {
      setDataMoments(props.location.moment)
      const { moment_context, type, moment_text, moment_event_date, momentId, user_isPresent } = props.location.moment
      setModifyMoment(true)
      setTextInContextArea(moment_context)
      setMomentTypeId(type === 'quote' ? 1 : 0)
      setTextInMomentArea(moment_text)
      setDate(new Date(moment_event_date))
      user_isPresent && setUserIsPresent(true)
      setIdForModifyMoment(momentId)
    }
  }, [])

  useEffect(() => {
    if (props.location.moment) {
      const { firstname_color } = props.location.moment
      firstname_color && firstname_color.map(selected => familyMember.map(member => member.selected = member.member_id === selected.id ? true : member.selected))
    }
  }, [loadFamilyMember])

  const myToken = (localStorage.getItem('x-access-token'))
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    axios.get(`${backUrl}/users/${userId}/family`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then((res) => {
        const tempFamily = res.data
        const objectFamily = []
        tempFamily.map(member => {
          member.selected = false
          return objectFamily.push(member)
        })
        setFamilyMember(objectFamily)
        setLoadFamilyMember(true)
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
    const selected = familyMember.filter(member => member.selected).map(member => member.member_id)
    const dataToSend = {
      user_isPresent: userIsPresent,
      moment_text: textInMomentArea,
      moment_context: textInContextArea,
      moment_event_date: date.toISOString().slice(0, 10),
      moment_type_id: momentTypeId,
      user_id: userId,
      family_id: selected
    }
    if (!modifyMoment) {
      axios.post(`${backUrl}/moments/create`, dataToSend, {
        headers: { Authorization: `Bearer ${myToken}` }})
        .then(res => res.status === 201 ? setSendMomentSucceed('create') : '')
        .catch(err => {
          setSendError(true)
        })
    } else {
      dataToSend.moment_id = idForModifyMoment
      axios.put(`${backUrl}/moments/modify`, dataToSend, {
        headers: { Authorization: `Bearer ${myToken}` } })
        .then(res => res.status === 200 ? setSendMomentSucceed('modify') : '')
        .catch(err => {
          setSendError(true)
        })
    }
  }

  useEffect(() => {
    const Userselected = userIsPresent ? true : false
    const FamilySelected = familyMember.some(member => member.selected)
    const existAuthors = Userselected || FamilySelected
    const validate = textInMomentArea.length > 0 && existAuthors
    validate ? setActive(true) : setActive(false)
    existAuthors ? setAuthorPresent(true) : setAuthorPresent(false)
  })

  useEffect(() => {
    if ((sendMomentSucceed && sendMomentSucceed !== '') || sendError) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 250)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [sendMomentSucceed, sendError])

  const handleSelectAuthors = (e) => {
    const userId = localStorage.getItem('userId')
    const userName = localStorage.getItem('userName')
    if (parseInt(userId) === parseInt(e.target.id) && userName === e.target.name) {
      setUserIsPresent(!userIsPresent)
    } else {
      const newFamilyMember = []
      familyMember.map(member => {
        member.selected = parseInt(member.member_id) === parseInt(e.target.id) ? !member.selected : member.selected
        return newFamilyMember.push(member)
      })
      setFamilyMember(newFamilyMember)
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
      {props.location.pathname === '/moments/delete' && <DeleteMoment moment={dataMoments} user={user} />}
      <Header location={location} createMomentBack={modifyMoment && 'createMomentBack'} momentId={idForModifyMoment} burger />
      <div className='create'>
        <MomentNavbar SwitchMomentType={SwitchMomentType} />
        <Moment
          momentTypeId={momentTypeId}
          sendMomentSucceed={sendMomentSucceed}
          userIsPresent={userIsPresent}
          textInContextArea={textInContextArea}
          textInMomentArea={textInMomentArea}
          active={active}
          SendCreateMoment={SendCreateMoment}
          onChangeTextInContextArea={onChangeTextInContextArea}
          onChangeTextInMomentArea={onChangeTextInMomentArea}
          user={user}
          familyMember={familyMember}
          authorPresent={authorPresent}
          handleSelectAuthors={handleSelectAuthors}
        />
        <DatePicker selected={date} locale='fr' onChange={date => setDate(date)} dateFormat='EEEE dd MMMM yyyy' maxDate={(new Date())} customInput={<CustomInput />} />
        {
          redirect &&
          <>

            <Redirect to={{ pathname: '/moments', params: { isSend: sendMomentSucceed } }} />
          </>
        }
      </div>
    </>
  )
}

export default CreateMoment
