import React, { useState } from 'react'

import './CreateFamily.css'

const CreateFamily = () => {
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [surname, setSurname] = useState()
  const [birthday, setBirthday] = useState()
  const [color, setColor] = useState()

  const handleChange = (e) => {
    const name = e.target.name
    switch (name) {
      case 'family_firstname':
        setFirstname(e.target.value)
        break
      case 'family_lastname':
        setLastname(e.target.value)
        break
      case 'family_surname':
        setSurname(e.target.value)
        break
      case 'family_birthday':
        setBirthday(e.target.value)
        break
      case 'color_family_id':
        setColor(e.target.value)
        break
      default:
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    // For pass the test !!!
    console.log('firstName', firstname)
    console.log('lastname', lastname)
    console.log('surname', surname)
    console.log('birthday', birthday)
    console.log('color', color)
  }

  return (
    <div className='cont-family-create'>
      <form className='general-connexion-form' onSubmit={submitForm}>
        <label htmlFor='family_firstname' className='general-label'>prénom</label>
        <input type='text' name='family_firstname' id='family_firstname' className='general-input bold-12px-grey plholder' placeholder='Elise' onChange={(e) => handleChange(e)} required autoComplete='off' />

        <label htmlFor='family_lastname' className='general-label'>nom</label>
        <input type='text' name='family_lastname' id='family_lastname' className='general-input bold-12px-grey plholder' placeholder='Durand' onChange={(e) => handleChange(e)} autoComplete='off' />

        <label htmlFor='family_surname' className='general-label'>surnom</label>
        <input name='family_surname' type='text' id='family_surname' className='general-input bold-12px-grey plholder' placeholder='Lili' onChange={(e) => handleChange(e)} autoComplete='off' />

        <label htmlFor='family_birthday' className='general-label'>date de naissance</label>
        <input name='family_birthday' type='text' id='family_birthday' className='general-input bold-12px-grey plholder' placeholder='22/01/2016' onChange={(e) => handleChange(e)} pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}' autoComplete='off' />

        <label className='general-label label-color'>COULEUR</label>
        <fieldset className='family_palette'>
          <input type='radio' id='E9FEFC' name='color_family_id' value='1' className='cyan' onChange={(e) => handleChange(e)} />
          <input type='radio' id='F2FFD7' name='color_family_id' value='2' className='green' onChange={(e) => handleChange(e)} />
          <input type='radio' id='E9EFFA' name='color_family_id' value='3' className='navy' onChange={(e) => handleChange(e)} />
          <input type='radio' id='FFE7EC' name='color_family_id' value='4' className='pink' onChange={(e) => handleChange(e)} />
          <input type='radio' id='FFEDD7' name='color_family_id' value='5' className='peach' onChange={(e) => handleChange(e)} />
          <input type='radio' id='FEFFC5' name='color_family_id' value='6' className='yellow' onChange={(e) => handleChange(e)} />
          <input type='radio' id='F6EAFF' name='color_family_id' value='7' className='purple' onChange={(e) => handleChange(e)} />
          <input type='radio' id='DAFFD7' name='color_family_id' value='8' className='mint' onChange={(e) => handleChange(e)} />
        </fieldset>
        <p><a title='Ouvrir la palette' href='/'>Couleur personnalisée</a></p>

      </form>
    </div>
  )
}

export default CreateFamily
