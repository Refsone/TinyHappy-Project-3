import React, { useState } from 'react'

import AddNewFamily from './AddNewFamily'
import Header from '../commons/header/Header'
import Member from './Member'
import Navbar from '../commons/footer/Navbar'

import 'moment/locale/fr'
import Moment from 'moment'

import './CardMembers.css'

const CardMembers = () => {
  const [members] = useState([
    {
      family_firstname: 'Louise',
      family_lastname: 'Memand',
      family_surname: 'LouLou',
      family_birthday: '2013-12-28',
      color_family_id: '#F2FFD7'
    },
    {
      family_firstname: 'Violette',
      family_lastname: 'Memand',
      family_surname: 'Poupou',
      family_birthday: '2013-10-28',
      color_family_id: '#FFE7EC'
    }
  ])
  const [user] = useState([
    {
      isUser: true,
      family_firstname: 'Vincent',
      family_lastname: 'Reine',
      family_surname: '',
      family_birthday: '',
      color_family_id: '#E9FEFC'
    }
  ])
  const formatDate = (date) => {
    Moment.locale('fr')
    if (date !== '') return Moment(date).format('LL')
  }
  return (
    <>
      <Header burger />
      <div className='CardMembers'>
        {members.map((member, key) => {
          return <Member key={key} member={member} familyBirthday={formatDate(member.family_birthday)} />
        })}
        <Member member={user[0]} familyBirthday={formatDate(user[0].family_birthday)} />
      </div>
      <AddNewFamily />
      <Navbar />
    </>
  )
}

export default CardMembers
