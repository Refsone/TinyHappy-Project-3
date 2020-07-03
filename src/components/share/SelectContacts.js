import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import AddContact from './AddContact'
import Contact from './Contact'
import SendButton from './SendButton'

import './SelectContacts.css'

const SelectContacts = (props) => {
  const { contacts, handleclick, deleteContact } = props

  const [selectedIds, setSelectedIds] = useState([])
  const [bool, setBool] = useState([false])

  const handleChange = (e) => {
    setBool(!bool)
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

  useEffect(() => {
  }, [bool])

  return (
    <div className='contacts-list'>
      <p className='bold-16px-grey title'>SÉLECTION DE VOS CONTACTS</p>
      <div className='select-contact-page'>
        {contacts && contacts.map(contact => {
          return (
            <div key={contact.id}>
              <Contact mail={contact.mail} id={contact.id} handleChange={handleChange} selected={selectedIds} deleteContact={deleteContact} />
            </div>)
        })}
      </div>
      <div>
        <p className='bold-12px-grey title-add'>AJOUTER UN CONTACT</p>
        <AddContact handleclick={handleclick} />
        <SendButton actived={selectedIds.length > 0 && 'actived'} selectedIds={selectedIds.length > 0 && selectedIds} />
      </div>
    </div>
  )
}

SelectContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      mail: PropTypes.string.isRequired
    })),
  deleteContact: PropTypes.func.isRequired,
  handleclick: PropTypes.func.isRequired
}
export default SelectContacts
