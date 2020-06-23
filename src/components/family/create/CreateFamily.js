import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import ConfirmButton from '../../commons/footer/ConfirmButton'
import CreateInputFamily from './CreateInputFamily'
import DisplayColors from './DisplayColors'
import Header from '../../commons/header/Header'
import ValidateButton from '../../commons/footer/ValidateButton'

import './CreateFamily.css'

// Test if the fields are corrects
const regexInput = /[A-zÀ-ú]{2,}/
const regexNum = /[0-9]{1}/
const regexSpecial = /[!$%^&*/()_+|~=`{}[:;<>?,@#\]]{1}/
const regexDate = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/

const CreateFamily = (props) => {
  const { modify, memberId } = props.location.data
  const location = props.location.pathname
  const userId = 1

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
  const [bddColor, setBddColor] = useState()
  const [validate, setValidate] = useState(false)
  const [redirect, setRedirect] = useState(false)

  // Fetch the colors in the bdd
  useEffect(() => {
    axios.get('http://localhost:7500/colors')
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
      }, 3500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [validate])

  // Function to fetch the bdd datas
  const handleUsersDatas = () => {
    if (modify === 'user') { // Fetch the user datas
      axios.get(`http://localhost:7500/users/${userId}`)
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
      axios.get(`http://localhost:7500/users/${userId}/family-members/${memberId}`)
        .then(res => {
          const data = res.data[0]
          const dateTemp = data.family_birthday &&
          new Date(data.family_birthday).toLocaleDateString('fr-FR').split('-').reverse().join('/')
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
      case 'family_lastname':
        regexSpecial.test(value) && value
          ? setLastname({ ...lastname, value: value, error: 2 })
          : regexNum.test(value)
            ? setLastname({ ...lastname, value: value, error: 3 })
            : !regexInput.test(value)
              ? setLastname({ ...lastname, value: value, error: 1 })
              : setLastname({ ...lastname, value: value, error: 0 })
        break
      case 'family_firstname':
        regexSpecial.test(value) && value
          ? setFirstname({ ...firstname, value: value, error: 2 })
          : regexNum.test(value)
            ? setFirstname({ ...firstname, value: value, error: 3 })
            : !regexInput.test(value)
              ? setFirstname({ ...firstname, value: value, error: 1 })
              : setFirstname({ ...firstname, value: value, error: 0 })
        break
      case 'family_surname':
        regexSpecial.test(value) && value
          ? setSurname({ ...surname, value: value, error: 2 })
          : regexNum.test(value)
            ? setSurname({ ...surname, value: value, error: 3 })
            : !regexInput.test(value)
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
    const newFormatDate = birthday.value ? birthday.value.split('/').reverse().join('-') : ''
    if (modify !== 'user') {
      addToDb.user_id = userId
      addToDb.family_firstname = firstname.value
      addToDb.color_family_id = color
      if (memberId) { addToDb.id = memberId }
      if (lastname.value !== '') { addToDb.family_lastname = lastname.value }
      if (surname.value !== '') { addToDb.family_surname = surname.value }
      if (newFormatDate !== '') { addToDb.family_birthday = newFormatDate }
      if (modify !== 'member') {
        return axios.post('http://localhost:7500/family-members/new', addToDb)
          .then(res => res.status === 201 && (setValidate(true)))
          .catch((err) => console.log('an error is occured, the message is:' + err))
      } else {
        axios.put('http://localhost:7500/family-members/update', addToDb)
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
      axios.put('http://localhost:7500/users/update', addToDb)
        .then(res => res.status === 200 && (setValidate(true)))
        .catch((err) => console.log('an error is occured, the message is:' + err))
    }
  }

  return (
    <div className='cont-family-create'>
      <Header burger location={location} />
      <form className='general-connexion-form' onSubmit={submitForm}>
        <CreateInputFamily name='prénom' placeholder='Elise' id='family_firstname' handlechange={handleChange} fieldValue={firstname} required />
        <CreateInputFamily name='nom' placeholder='Durand' id='family_lastname' handlechange={handleChange} fieldValue={lastname} />
        <CreateInputFamily name='surnom' placeholder='Durand' id='family_surname' handlechange={handleChange} fieldValue={surname} />
        <CreateInputFamily name='date de naissance' placeholder='22/01/2016' id='family_birthday' handlechange={handleChange} fieldValue={birthday} />
        <DisplayColors colors={bddColor} handlechange={handleChange} selected={color} />
        <p><a title='Ouvrir la palette' href='/'>Couleur personnalisée</a></p>
        <ValidateButton
          name='sauvegarder' active={firstname.value && firstname.error === 0 && lastname.error === 0 && surname.error === 0 && birthday.error === 0} handleClick={handleClick}
        />
      </form>
      {
        validate &&
          <ConfirmButton message='Le nouveau membre a été ajouté avec succès.' confirm />
      }
      {
        redirect &&
          <Redirect to='/family' />
      }
    </div>
  )
}

export default CreateFamily
