import React, { useState } from 'react'
import axios from 'axios'

import CreateInputFamily from './CreateInputFamily'
import Header from '../../commons/header/Header'
import ValidateButton from '../../commons/footer/ValidateButton'

import './CreateFamily.css'

const CreateFamily = (props) => {
  const regexInput = /\w{2,}/
  const regexSpecial = /[^a-zA-Z.-]{1}/
  const regexDate = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/

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
  const [colorBdd] = useState([
    { color: '#E9FEFC' },
    { color: '#F2FFD7' },
    { color: '#E9EFFA' },
    { color: '#FFE7EC' },
    { color: '#FFEDD7' },
    { color: '#FEFFC5' },
    { color: '#F6EAFF' },
    { color: '#DAFFD7' }
  ])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(value)

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
    // For pass the test !!!
    console.log('lastname', lastname)
    console.log('firstName', firstname)
    console.log('surname', surname)
    console.log('birthday', birthday)
    console.log('color', color)
  }

  const handleClick = () => {
    regexSpecial.test(lastname.value) && setLastname({ ...lastname, error: 2 })
    regexSpecial.test(firstname.value) && setFirstname({ ...firstname, error: 2 })
    regexSpecial.test(surname.value) && setSurname({ ...surname, error: 2 })

    const url = 'http://localhost:7500/family'
    axios.post(url, { user_id: 1, firstname: firstname, lastname: lastname, surname: surname, birthday: birthday, color: color })
      .then(res => console.log('Data send !'))
      .catch(err => 'an error is occured, the message is:' + err)
  }

  return (
    <div className='cont-family-create'>
      <Header burger location={location} />
      <form className='general-connexion-form' onSubmit={submitForm}>
        <CreateInputFamily name='prénom' placeholder='Elise' id='family_lastname' handlechange={handleChange} fieldValue={lastname} required />
        <CreateInputFamily name='nom' placeholder='Durand' id='family_firstname' handlechange={handleChange} fieldValue={firstname} />
        <CreateInputFamily name='surnom' placeholder='Durand' id='family_surname' handlechange={handleChange} fieldValue={surname} />
        <CreateInputFamily name='date de naissance' placeholder='22/01/2016' id='family_birthday' handlechange={handleChange} fieldValue={birthday} />

        <label className='general-label label-color'>COULEUR</label>
        <fieldset className='family_palette'>
          {colorBdd.map((color, id) => {
            return <input key={id} type='radio' id={color.color.slice(1)} name='color_family_id' value={id + 1} style={{ backgroundColor: color.color, margin: '.5em' }} onChange={(e) => handleChange(e)} />
          })}
        </fieldset>
        <p><a title='Ouvrir la palette' href='/'>Couleur personnalisée</a></p>
        <ValidateButton
          name='sauvegarder' active={lastname.value && firstname.error === 0 && lastname.error === 0 && surname.error === 0 && birthday.error === 0} handleClick={handleClick}
        />
      </form>

    </div>
  )
}

export default CreateFamily
