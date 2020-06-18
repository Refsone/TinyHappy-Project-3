import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import CreateInputFamily from './CreateInputFamily'
import DisplayColors from './DisplayColors'
import Header from '../../commons/header/Header'
import ValidateButton from '../../commons/footer/ValidateButton'
import ConfirmButton from '../../commons/footer/ConfirmButton'

import './CreateFamily.css'

const CreateFamily = (props) => {
  const regexInput = /[A-zÀ-ú]{2,}/
  const regexSpecial = /[^A-zÀ-ú.-]{1}/
  const regexDate = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/

  const location = props.location.pathname

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

  useEffect(() => {
    axios.get('http://localhost:7500/colors')
      .then(res => setBddColor(res.data))
      .catch(err => `L'erreur suivante s'est produite: ${err}`)
  }, [])

  useEffect(() => {
    if (validate) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 5000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [validate])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    switch (name) {
      case 'family_lastname':
        !regexInput.test(value) && value
          ? setLastname({ ...lastname, value: value, error: 1 })
          : setLastname({ ...lastname, value: value, error: 0 })
        break
      case 'family_firstname':
        !regexInput.test(value) && value
          ? setFirstname({ ...firstname, value: value, error: 1 })
          : setFirstname({ ...firstname, value: value, error: 0 })
        break
      case 'family_surname':
        !regexInput.test(value) && value
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

  const handleClick = () => {
    regexSpecial.test(lastname.value) && setLastname({ ...lastname, error: 2 })
    regexSpecial.test(firstname.value) && setFirstname({ ...firstname, error: 2 })
    regexSpecial.test(surname.value) && setSurname({ ...surname, error: 2 })
    const addToDb = { user_id: 1, family_firstname: firstname.value, color_family_id: color }
    if (lastname.value !== '') { addToDb.family_lastname = lastname.value }
    if (surname.value !== '') { addToDb.family_surname = surname.value }

    const newFormatDate = birthday.value.split('/').reverse().join('-')
    if (newFormatDate !== '') { addToDb.family_birthday = newFormatDate }

    const url = 'http://localhost:7500/family'
    axios.post(url, addToDb)
      .then(res => console.log('Data send !'))
      .then(setValidate(true))
      .catch((err) => console.log('an error is occured, the message is:' + err))
  }

  return (
    <div className='cont-family-create'>
      <Header burger location={location} />
      <form className='general-connexion-form' onSubmit={submitForm}>
        <CreateInputFamily name='prénom' placeholder='Elise' id='family_firstname' handlechange={handleChange} fieldValue={firstname} required />
        <CreateInputFamily name='nom' placeholder='Durand' id='family_lastname' handlechange={handleChange} fieldValue={lastname} />
        <CreateInputFamily name='surnom' placeholder='Durand' id='family_surname' handlechange={handleChange} fieldValue={surname} />
        <CreateInputFamily name='date de naissance' placeholder='22/01/2016' id='family_birthday' handlechange={handleChange} fieldValue={birthday} />
        <DisplayColors colors={bddColor} handlechange={handleChange} />
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
