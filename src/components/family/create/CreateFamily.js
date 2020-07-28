import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import CreateInputFamily from './CreateInputFamily'
import DatePicker from 'react-datepicker'
import DeleteMember from './DeleteMember'
import DisplayColors from './DisplayColors'
import Header from '../../commons/header/Header'
import Toast from '../../commons/Toast'
import toaster from 'toasted-notes'
import ValidateButton from '../../commons/footer/ValidateButton'

import './CreateFamily.css'
import calendarIcon from '../../../images/calendrier.svg'

const backUrl = process.env.REACT_APP_API_URL
const myToken = (localStorage.getItem('x-access-token'))
const userId = localStorage.getItem('userId')

const CreateFamily = (props) => {
  const memberId = props.location.pathname === '/family/modify' && props.location.data.memberId
  const modify = props.location.pathname === '/family/modify' && props.location.data.modify

  const location = props.location.pathname

  // Define the state
  const [lastname, setLastname] = useState({
    value: ''
  })
  const [firstname, setFirstname] = useState({
    value: '',
    error: ''
  })
  const [surname, setSurname] = useState({
    value: ''
  })
  const [birthday, setBirthday] = useState()
  const [color, setColor] = useState(1)
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
      }, 250)
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
          setFirstname({ ...firstname, value: data.user_firstname })
          setLastname({ ...lastname, value: data.user_lastname })
          setSurname({ ...surname, value: data.user_surname })
          setBirthday(new Date(data.user_birthday))
          setColor(data.color_family_id)
        })
        .catch(err => {
          toaster.notify(<Toast classType='error-toaster' text={`Une erreur est survenue: ${err.response.data}`} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') })
        })
    } else if (modify) { // Fetch the member data
      axios.get(`${backUrl}/users/${userId}/family-members/${memberId}`, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
        .then(res => {
          const data = res.data[0]
          setIdMember(data.id)
          setFirstname({ ...firstname, value: data.family_firstname })
          setLastname({ ...lastname, value: data.family_lastname })
          setSurname({ ...surname, value: data.family_surname })
          setBirthday(new Date(data.family_birthday))
          setColor(data.color_family_id)
        })
        .catch(err => {
          toaster.notify(<Toast classType='error-toaster' text={`Une erreur est survenue: ${err}`} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') })
        })
    }
  }

  // Manage the fields datas
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    switch (name) {
      case 'family_firstname':
        setFirstname({ ...firstname, value: value })
        break
      case 'family_lastname':
        setLastname({ ...lastname, value: value })
        break
      case 'family_surname':
        setSurname({ ...surname, value: value })
        break
      case 'color_family_id':
        setColor(value)
        break
      default:
    }
  }

  const handleDate = (date) => {
    setBirthday(date)
  }

  const submitForm = (e) => {
    e.preventDefault()
  }

  const handleBlur = (e) => {
    !e.target.value ? setFirstname({ ...firstname, error: 'Ce champs doit être rempli' }) : setFirstname({ ...firstname, error: '' })
  }

  // Manage the click on the validate button
  const handleClick = () => {
    // Define the datas to send to the database
    const addToDb = {}
    if (modify !== 'user') {
      addToDb.user_id = userId
      addToDb.family_firstname = firstname.value
      addToDb.color_family_id = color
      if (memberId) { addToDb.id = memberId }
      addToDb.family_lastname = lastname.value
      addToDb.family_surname = surname.value
      addToDb.family_birthday = birthday
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
          .catch(err => {
            toaster.notify(<Toast classType='error-toaster' text={`Une erreur est survenue: ${err.response.data}`} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') })
          })
      }
    } else {
      addToDb.id = userId
      addToDb.user_firstname = firstname.value
      addToDb.color_family_id = color
      if (lastname.value !== '') { addToDb.user_lastname = lastname.value }
      if (surname.value !== '') { addToDb.user_surname = surname.value }
      if (birthday !== '') { addToDb.user_birthday = birthday }
      axios.put(`${backUrl}/users/update`, addToDb, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
        .then(res => res.status === 200 && (setValidate(true)))
        .catch(err => {
          toaster.notify(<Toast classType='error-toaster' text={`Une erreur est survenue: ${err.response.data}`} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') })
        })
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
        <Header burger location={location} memberId={memberId} createFamilyBack={modify && 'createFamilyBack'} />
        <form className='general-connexion-form' onSubmit={submitForm}>
          <CreateInputFamily name='prénom' placeholder='Prénom' id='family_firstname' handlechange={handleChange} fieldValue={firstname} handleBlur={handleBlur} required />
          <CreateInputFamily name='nom' placeholder='Nom' id='family_lastname' handlechange={handleChange} fieldValue={lastname} />
          <CreateInputFamily name='surnom' placeholder='Surnom' id='family_surname' handlechange={handleChange} fieldValue={surname} />
          <DatePicker selected={birthday || new Date()} locale='fr' onChange={date => handleDate(date)} dateFormat='EEEE dd MMMM yyyy' maxDate={(new Date())} peekNextMonth showMonthDropdown showYearDropdown dropdownMode='select' customInput={<CustomInput />} />
          <DisplayColors colors={bddColor} handlechange={handleChange} selected={color} />
          <p><a title='Ouvrir la palette' href='/'>Couleur personnalisée</a></p>
          <ValidateButton
            name='sauvegarder' active={firstname.value.length > 0} handleClick={handleClick}
          />
        </form>
        {redirect && <Redirect to={{ pathname: '/family', params: { isSend: validate, isModify: modify } }} />}
      </div>
    </>
  )
}

export default CreateFamily
