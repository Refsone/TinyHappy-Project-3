import React, { useState } from 'react'
import PropTypes from 'prop-types'

import AddContact from './AddContact'
import Contact from './Contact'

import './SelectContacts.css'

const SelectContacts = (props) => {
  const { contacts, handleclick } = props

  const [selectedIds, setSelectedIds] = useState([])
  const [change, setChange] = useState(false)

  const handleChange = (e) => {
    setChange(!change)
    const tempId = parseInt(e.target.id)
    const tempTable = selectedIds
    const existId = tempTable.indexOf(tempId)
    if (existId === -1) {
      tempTable.push(tempId)
    } else {
      tempTable.splice(existId, 1)
    }
    setSelectedIds(tempTable)
  }

  return (
    <div className='contacts-list'>
      <p className='bold-16px-grey title'>SÉLECTION DE VOS CONTACTS</p>
      <div className='select-contact-page'>
        {contacts && contacts.map(contact => {
          return (
            <div key={contact.id}>
              <Contact mail={contact.mail} id={contact.id} handleChange={handleChange} selected={selectedIds} />
            </div>)
        })}
      </div>
      <div>
        <p className='bold-12px-grey title'>AJOUTER UN CONTACT</p>
        <AddContact handleclick={handleclick} />
      </div>
    </div>
  )
}

SelectContacts.propTypes = {
  handleclick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      mail: PropTypes.string.isRequired
    }))
}
export default SelectContacts
