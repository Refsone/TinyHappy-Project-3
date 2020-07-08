import React, { useEffect, useState } from 'react'
import axios from 'axios'

import AddContact from './AddContact'
import Header from '../commons/header/Header'
import Navbar from '../commons/footer/Navbar'
import SelectContacts from './SelectContacts'
import ZeroContact from './ZeroContact'

import './CardContacts.css'

const CardContacts = () => {
  const user_id = 1 // TODO: To modify where the id will be in the local storage

  const [contacts, SetContacts] = useState()

  useEffect(() => {
    recupEmail()
  }, [])

  const recupEmail = () => {
    axios.get(`http://localhost:7500/users/${user_id}/contacts`)
      .then(res => res.status === 200 && SetContacts(res.data.result))
  }

  const handleclick = (email) => {
    const newDatas = {
      user_id: user_id,
      mail: email
    }
    axios.post('http://localhost:7500/contacts/new', newDatas)
      .then(res => {
        res.status === 201 && recupEmail()
        document.getElementById('mail').value = ''
      })

      .catch(err => console.log(err))
  }

  const deleteContact = (e) => {
    axios.delete(`http://localhost:7500/contacts/${e.target.id}`)
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
