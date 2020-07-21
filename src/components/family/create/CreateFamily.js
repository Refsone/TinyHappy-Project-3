import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import CreateInputFamily from './CreateInputFamily'
import DeleteMember from './DeleteMember'
import DisplayColors from './DisplayColors'
import Header from '../../commons/header/Header'
import ValidateButton from '../../commons/footer/ValidateButton'

import './CreateFamily.css'

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
  const [birthday, setBirthday] = useState({
    value: ''
  })
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
        setFirstname({ ...firstname, value: value })
        break
      case 'family_lastname':
        setLastname({ ...lastname, value: value })
        break
      case 'family_surname':
        setSurname({ ...surname, value: value })
        break
      case 'family_birthday':
        console.log(value)
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

  const handleBlur = (e) => {
    !e.target.value ? setFirstname({ ...firstname, error: 'Ce champs doit être rempli' }) : setFirstname({ ...firstname, error: '' })
  }

  // Manage the click on the validate button
  const handleClick = () => {
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

  return (
    <>
      {props.location.pathname === '/family/delete' && <DeleteMember id={idMember} name={firstname.value} />}
      <div className='cont-family-create'>
        <Header burger location={location} memberId={memberId} />
        <form className='general-connexion-form' onSubmit={submitForm}>
          <CreateInputFamily name='prénom' placeholder='Elise' id='family_firstname' handlechange={handleChange} fieldValue={firstname} handleBlur={handleBlur} required />
          <CreateInputFamily name='nom' placeholder='Durand' id='family_lastname' handlechange={handleChange} fieldValue={lastname} />
          <CreateInputFamily name='surnom' placeholder='Durand' id='family_surname' handlechange={handleChange} fieldValue={surname} />
          <CreateInputFamily name='date de naissance' placeholder='22/01/2016' id='family_birthday' handlechange={handleChange} fieldValue={birthday} />
          <DisplayColors colors={bddColor} handlechange={handleChange} selected={color} />
          <p><a title='Ouvrir la palette' href='/'>Couleur personnalisée</a></p>
          <ValidateButton
            name='sauvegarder' active={firstname} handleClick={handleClick}
          />
        </form>
        {redirect && <Redirect to={{ pathname: '/family', params: { isSend: validate, isModify: modify } }} />}
      </div>
    </>
  )
}

export default CreateFamily
