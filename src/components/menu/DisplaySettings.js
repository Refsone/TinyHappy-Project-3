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
  const [toggle, setToggle] = useState(0)
  const path = props.location.pathname

  useEffect(() => {
    fetchAgeParam()
  }, [])

  useEffect(() => {
    sendAgeParam()
    document.getElementById('display_birthday').checked = toggle
    console.log(toggle)
  }, [toggle])

  const toggler = (e) => {
    setToggle(!toggle)
  }

  const fetchAgeParam = () => {
    axios.get(`${backUrl}/users/${userId}/parameter`, { headers: { Authorization: `Bearer ${myToken}` } })
      .then(res => setToggle(res.data[0].display_birthday))
      .catch(err => console.error(err))
  }

  const sendAgeParam = () => {
    axios.put(`${backUrl}/parameters/display-birthday`, { display_birthday: toggle, user_id: userId }, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .catch(err => console.error(err))
  }

  return (
    <>
      <Header location={path} burger />
      <div className='settings-container'>
        <h1 className='settings-title bold-16px-grey'>paramètres</h1>
        <h2 className='settings-soutitle bold-12px-grey'>Application</h2>
        <p className='settings-pseudoinput medium-12px-lightgrey'>Afficher les âges des membres</p>
        <div className='container-toggle-control'>
          <div className='toggle'>
            <input type='checkbox' className='check' id='display_birthday' onClick={(e) => toggler(e)} />
            <span className='b switch' />
            <span className='track' />
          </div>
        </div>
        <h2 className='settings-soutitle bold-12px-grey'>Sécurité</h2>
        <Link to='/settings/modify/password' className='settings-pseudoinput medium-12px-lightgrey'>Modifier votre mot de passe</Link>
        <Link to='/settings/modify/email' className='settings-pseudoinput medium-12px-lightgrey'>Modifier votre adresse mail</Link>
      </div>
    </>
  )
}

export default DisplaySettings
