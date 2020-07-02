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
    axios.get(`http://localhost:7500/users/${user_id}/contacts`)
      .then(res => res.status === 200 && SetContacts(res.data.result))
  }, [])

  const handleclick = (e) => {
    const newDatas = {
      user_id: user_id,
      mail: e
    }
    axios.post(`http://localhost:7500/contacts/new/${newDatas}`)
      .then(res => res.status === 201 && console.log(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
  })

  return (
    <div>
      <Header burger />
      <div className='cardContact'>
        {!contacts &&
          <>
            <ZeroContact />
            <AddContact handleclick={handleclick} />
          </>}
        {contacts &&
          <SelectContacts contacts={contacts} handleclick={handleclick} />}
        <Navbar />
      </div>
    </div>
  )
}

export default CardContacts
