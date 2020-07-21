import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import DatePicker from 'react-datepicker'
import CreateInputFamily from './CreateInputFamily'
import DeleteMember from './DeleteMember'
import DisplayColors from './DisplayColors'
import Header from '../../commons/header/Header'
import ValidateButton from '../../commons/footer/ValidateButton'
import calendarIcon from '../../../images/calendrier.svg'

import './CreateFamily.css'

const backUrl = process.env.REACT_APP_API_URL
const myToken = (localStorage.getItem('x-access-token'))
const userId = localStorage.getItem('userId')

// Test if the fields are corrects
const regexInput = /[A-zÀ-ú]{2,}/
const regexNum = /[0-9]{1}/
const regexSpecial = /[!$%^&*/()_+|~=`{}[:;<>?,@#\]]{1}/
const regexDate = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/

const CreateFamily = (props) => {
  const memberId = props.location.pathname === '/family/modify' && props.location.data.memberId
  const modify = props.location.pathname === '/family/modify' && props.location.data.modify

  const location = props.location.pathname

  // Define the state
  const [lastname, setLastname] = useState({
    value: '',
    error: 0
  })
  const [firstname, setFirstname] = useState({
    value: '',
    error: 0
  })
  const [surname, setSurname] = useState({
    value: '',
    error: 0
  })
  const [birthday, setBirthday] = useState({
    value: '',
    error: 0
  })
  const [color, setColor] = useState(1)
  const [date, setDate] = useState(new Date())
  const [bddColor, setBddColor] = useState()
  const [idMember, setIdMember] = useState()
  const [validate, setValidate] = useState(false)
  const [redirect, setRedirect] = useState(false)

  // Fetch the colors in the bdd
  useEffect(() => {
    axios.get(`${backUrl}/colors`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => setBddColor(res.data))
      .catch(err => `L'erreur suivante s'est produite: ${err}`)
  }, [])
  // Fetch user datas or members datas for the modify page
  useEffect(() => {
    handleUsersDatas()
    return handleUsersDatas()
  }, [modify])

  // Define a setTimeOut on validation before return to the members family list
  useEffect(() => {
    if (validate) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 1000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [validate])

  // Function to fetch the bdd datas
  const handleUsersDatas = () => {
    if (modify === 'user') { // Fetch the user datas
      axios.get(`${backUrl}/users/${userId}`, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
        .then(res => {
          const data = res.data[0]
          const dateTemp = data.user_birthday &&
            new Date(data.user_birthday).toLocaleDateString('fr-FR').split('-').reverse().join('/')
          setFirstname({ ...firstname, value: data.user_firstname })
          setLastname({ ...lastname, value: data.user_lastname })
          setSurname({ ...surname, value: data.user_surname })
          setBirthday({ ...birthday, value: dateTemp })
          setColor(data.color_family_id)
        })
        .catch(err => `L'erreur suivante s'est produite: ${err}`)
    } else { // Fetch the member data
      axios.get(`${backUrl}/users/${userId}/family-members/${memberId}`, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
        .then(res => {
          const data = res.data[0]
          const dateTemp = data.family_birthday &&
            new Date(data.family_birthday).toLocaleDateString('fr-FR').split('-').reverse().join('/')
          setIdMember(data.id)
          setFirstname({ ...firstname, value: data.family_firstname })
          setLastname({ ...lastname, value: data.family_lastname })
          setSurname({ ...surname, value: data.family_surname })
          setBirthday({ ...birthday, value: dateTemp })
          setColor(data.color_family_id)
        })
        .catch(err => `L'erreur suivante s'est produite: ${err}`)
    }
  }

  // Manage the fields datas
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    switch (name) {
      case 'family_firstname':
        // if a forbidden special character is present
        regexSpecial.test(value) && value
          ? setFirstname({ ...firstname, value: value, error: 2 })
          : regexNum.test(value)
            // if a forbidden number is present
            ? setFirstname({ ...firstname, value: value, error: 3 })
            : !regexInput.test(value)
              // If the firstname is not present or his length is less of 2 characters
              ? setFirstname({ ...firstname, value: value, error: 1 })
              : setFirstname({ ...firstname, value: value, error: 0 })
        break
      case 'family_lastname':
        regexSpecial.test(value) && value
          ? setLastname({ ...lastname, value: value, error: 2 })
          : regexNum.test(value)
            ? setLastname({ ...lastname, value: value, error: 3 })
            : !regexInput.test(value) && value
              // If the surname length is present and are less of 2 characters
              ? setLastname({ ...lastname, value: value, error: 1 })
              : setLastname({ ...lastname, value: value, error: 0 })
        break
      case 'family_surname':
        regexSpecial.test(value) && value
          ? setSurname({ ...surname, value: value, error: 2 })
          : regexNum.test(value)
            ? setSurname({ ...surname, value: value, error: 3 })
            : !regexInput.test(value) && value
              ? setSurname({ ...surname, value: value, error: 1 })
              : setSurname({ ...surname, value: value, error: 0 })
        break
      case 'family_birthday':
        !regexDate.test(value) && value
          ? setBirthday({ ...birthday, value: value, error: 1 })
          : setBirthday({ ...birthday, value: value, error: 0 })
        break
      case 'color_family_id':
        setColor(value)
        break
      default:
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
  }

  // Manage the click on the validate button
  const handleClick = () => {
    // Test if the datas are correctly field
    regexSpecial.test(lastname.value) && setLastname({ ...lastname, error: 2 })
    regexSpecial.test(firstname.value) && setFirstname({ ...firstname, error: 2 })
    regexSpecial.test(surname.value) && setSurname({ ...surname, error: 2 })
    // Define the datas to send to the database
    const addToDb = {}
    const newFormatDate = birthday.value ? birthday.value.split('/').reverse().join('-') : null
    if (modify !== 'user') {
      addToDb.user_id = userId
      addToDb.family_firstname = firstname.value
      addToDb.color_family_id = color
      if (memberId) { addToDb.id = memberId }
      addToDb.family_lastname = lastname.value
      addToDb.family_surname = surname.value
      addToDb.family_birthday = newFormatDate
      if (modify !== 'member') {
        return axios.post(`${backUrl}/family-members/new`, addToDb, {
          headers: { Authorization: `Bearer ${myToken}` }
        })
          .then(res => res.status === 201 && (setValidate(true)))
          .catch((err) => console.log('an error is occured, the message is:' + err))
      } else {
        axios.put(`${backUrl}/family-members/update`, addToDb, {
          headers: { Authorization: `Bearer ${myToken}` }
        })
          .then(res => res.status === 200 && (setValidate(true)))
          .catch((err) => console.log('an error is occured, the message is:' + err))
      }
    } else {
      addToDb.id = userId
      addToDb.user_firstname = firstname.value
      addToDb.color_family_id = color
      if (lastname.value !== '') { addToDb.user_lastname = lastname.value }
      if (surname.value !== '') { addToDb.user_surname = surname.value }
      if (newFormatDate !== '') { addToDb.user_birthday = newFormatDate }
      axios.put(`${backUrl}/users/update`, addToDb, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
        .then(res => res.status === 200 && (setValidate(true)))
        .catch((err) => console.log('an error is occured, the message is:' + err))
    }
  }

  const CustomInput = ({ value, onClick }) => (
    <div className='calendar-moment bold-12px-grey' onClick={onClick}>
      <img src={calendarIcon} alt='calendar icon' />
      <p>{value}</p>
    </div>
  )

  return (
    <>
      {props.location.pathname === '/family/delete' && <DeleteMember id={idMember} name={firstname.value} />}
      <div className='cont-family-create'>
        <Header burger location={location} memberId={memberId} />
        <form className='general-connexion-form' onSubmit={submitForm}>
          <CreateInputFamily name='prénom' placeholder='Elise' id='family_firstname' handlechange={handleChange} fieldValue={firstname} required />
          <CreateInputFamily name='nom' placeholder='Durand' id='family_lastname' handlechange={handleChange} fieldValue={lastname} />
          <CreateInputFamily name='surnom' placeholder='Durand' id='family_surname' handlechange={handleChange} fieldValue={surname} />
          <DatePicker selected={date} locale='fr' onChange={date => setDate(date)} dateFormat='EEEE dd MMMM yyyy' maxDate={(new Date())} peekNextMonth showMonthDropdown showYearDropdown dropdownMode='select' customInput={<CustomInput />} />
          <DisplayColors colors={bddColor} handlechange={handleChange} selected={color} />
          <p><a title='Ouvrir la palette' href='/'>Couleur personnalisée</a></p>
          <ValidateButton
            name='sauvegarder' active={firstname.value && firstname.error === 0 && lastname.error === 0 && surname.error === 0 && birthday.error === 0} handleClick={handleClick}
          />
        </form>
        {redirect && <Redirect to={{ pathname: '/family', params: { isSend: validate, isModify: modify } }} />}
      </div>
    </>
  )
}

export default CreateFamily
