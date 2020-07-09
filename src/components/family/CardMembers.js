import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'moment'
import 'moment/locale/fr'

import AddNewFamily from './AddNewFamily'
import Header from '../commons/header/Header'
import Member from './Member'
import Navbar from '../commons/footer/Navbar'

import './CardMembers.css'

const backUrl = process.env.REACT_APP_API_URL
const myToken = (localStorage.getItem('x-access-token'))

const CardMembers = () => {
  const [members, setMembers] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    fetchFamilyMembers()
  }, [])

  const fetchFamilyMembers = (userId = 1) => {
    axios.get(`${backUrl}/users/${userId}/family`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => setMembers(res.data))
  }

  const fetchUser = (userId = 1) => {
    axios.get(`${backUrl}/users/${userId}`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => setUser(res.data))
  }

  const formatDate = (date) => {
    Moment.locale('fr')
    if (date !== null) {
      return Moment(date).format('LL')
    } else {
      date = ''
      return date
    }
  }

  return (
    <>
      <Header burger />
      <div className='CardMembers'>
        {members.map((member, key) => {
          return <Member isUser={0} member={member} familyBirthday={formatDate(member.family_birthday)} key={key} />
        })}
        {user[0] && <Member isUser={1} member={user[0]} familyBirthday={formatDate(user[0].user_birthday)} />}
      </div>
      <AddNewFamily />
      <Navbar />
    </>
  )
}

export default CardMembers
