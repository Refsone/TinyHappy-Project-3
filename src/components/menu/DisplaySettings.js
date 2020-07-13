import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from './../commons/header/Header'
import axios from 'axios'

import './DisplaySettings.css'
import './ToggleSettings.css'

const backUrl = process.env.REACT_APP_API_URL
const myToken = localStorage.getItem('x-access-token')
const userId = localStorage.getItem('userId')

const DisplaySettings = (props) => {
  const [age, setAge] = useState([])
  const [toggle, setToggle] = useState(true)
  const toggler = (e) => {
    toggle ? setToggle(true) : setToggle(false)
  }

  useEffect(() => {
    displayAge()
  }, [age])

  const displayAge = (age) => {
    axios.put(`${backUrl}/users/${userId}/parameter`, age, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => setAge(res.data))
      .catch(err => err)
    console.log(age + ' no age')
  }

  const path = props.location.pathname
  return (
    <>
      <Header location={path} burger />
      <div className='settings-container'>
        <h1 className='settings-title bold-16px-grey'>paramètres</h1>
        <h2 className='settings-soutitle bold-12px-grey'>Application</h2>
        <p className='settings-pseudoinput medium-12px-lightgrey'>Afficher les âges des membres</p>
        <div className='container-toggle-control'>
          {toggle &&
            <div className='toggle'>
              <input type='checkbox' className='check' id='display_birthday' onClick={toggler} />
              <span className='b switch' /> <span className='b track' />
              <span className={`${toggle ? 'switch' : 'track'}`} />
            </div>}
        </div>
        <h2 className='settings-soutitle bold-12px-grey'>Sécurité</h2>
        <Link to='/settings/modify/password' className='settings-pseudoinput medium-12px-lightgrey'>Modifier votre mot de passe</Link>
        <Link to='/settings/modify/email' className='settings-pseudoinput medium-12px-lightgrey'>Modifier votre adresse mail</Link>
      </div>
    </>
  )
}

export default DisplaySettings
