import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'moment'
import 'moment/locale/fr'

import AddNewFamily from './AddNewFamily'
import Header from '../commons/header/Header'
import Member from './Member'
import Navbar from '../commons/footer/Navbar'
import Toast from '../commons/Toast'
import toaster from 'toasted-notes'

import './CardMembers.css'

const backUrl = process.env.REACT_APP_API_URL
const myToken = (localStorage.getItem('x-access-token'))
const userId = localStorage.getItem('userId')

const CardMembers = (props) => {
  const [members, setMembers] = useState([])
  const [user, setUser] = useState([])
  const [ageParams, setAgeParams] = useState()

  useEffect(() => {
    fetchUser()
    fetchAgeParam()
  }, [])

  useEffect(() => {
    fetchFamilyMembers()
  }, [])

  useEffect(() => {
    const { params } = props.location
    const sucessType = params && params.isModify ? 'mis à jour' : params && params.isDelete ? 'supprimé' : 'crée'
    if ((params && params.isSend) || (params && params.isDelete)) {
      toaster.notify(<Toast classType='sucess-toaster' text={`Le membre a bien été ${sucessType}`} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') })
    } else if (params && !params.isSend && params && !params.isDelete) {
      toaster.notify(<Toast classType='error-toaster' text={'Une erreur c\'est produite!'} />, { duration: localStorage.getItem('toastDura'), position: localStorage.getItem('toastPos') })
    }
  }, [])

  const fetchFamilyMembers = () => {
    axios.get(`${backUrl}/users/${userId}/family`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => setMembers(res.data))
  }

  const fetchAgeParam = () => {
    axios.get(`${backUrl}/users/${userId}/parameter`, { headers: { Authorization: `Bearer ${myToken}` } })
      .then(res => setAgeParams(res.data[0].display_birthday))
      .catch(err => console.error(err))
  }

  const fetchUser = () => {
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
          return <Member displayBirthday={ageParams} isUser={0} member={member} familyBirthday={formatDate(member.family_birthday)} key={key} />
        })}
        {user[0] && <Member displayBirthday={ageParams} isUser={1} member={user[0]} familyBirthday={formatDate(user[0].user_birthday)} />}
      </div>
      <AddNewFamily />
      <Navbar />
    </>
  )
}

export default CardMembers
