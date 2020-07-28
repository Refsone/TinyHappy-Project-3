import React, { useEffect, useState } from 'react'
import axios from 'axios'

import AddContact from './AddContact'
import Header from '../commons/header/Header'
import Navbar from '../commons/footer/Navbar'
import SelectContacts from './SelectContacts'
import ZeroContact from './ZeroContact'

import './CardContacts.css'

const backUrl = process.env.REACT_APP_API_URL

const CardContacts = () => {
  const [contacts, SetContacts] = useState()

  const myToken = (localStorage.getItem('x-access-token'))
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    recupEmail()
  }, [])

  const recupEmail = () => {
    axios.get(`${backUrl}/users/${userId}/contacts`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => res.status === 200 && SetContacts(res.data.result))
  }

  const handleclick = (email) => {
    const newDatas = {
      user_id: userId,
      mail: email
    }
    axios.post(`${backUrl}/contacts/new`, newDatas, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => {
        res.status === 201 && recupEmail()
        document.getElementById('mail').value = ''
      })
      .catch(err => console.log(err))
  }

  const deleteContact = (e) => {
    axios.delete(`${backUrl}/contacts/${e.target.id}`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => res.status === 200 && recupEmail())
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Header burger />
      <div className='cardContact'>
        {!contacts || contacts.length === 0
          ? 
          <>
            <ZeroContact />
            <AddContact handleclick={handleclick} />
          </>
          : <SelectContacts contacts={contacts} handleclick={handleclick} deleteContact={deleteContact} />}
        <Navbar />
      </div>
    </div>
  )
}

export default CardContacts
