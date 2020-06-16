import React from 'react'


import '../commons/Fonts.css'
import './SelectContacts.css'
import Contact from './Contact'

class SelectContacts extends React.Component {
  state= {
    emails: [{ email_contact: 'vincent@gmail.com' },
    { email_contact: 'nicole.bernard@yahoo.com' },
    { email_contact: 'mickael92@hotmail.fr' },
    { email_contact: 'tony111@gmail.com' }]
  }
  render () {
    return (
      <div>
        <p className='bold-16px-grey title'>SÉLECTION DE VOS CONTACTS</p>
        <div className='select-contact-page'>
          {this.state.emails.map((email, i) => {
            return (
              <div key={i} >
                <Contact email={email.email_contact} />
              </div>)
          })}
        </div>
      </div>
    )
  }
}

export default SelectContacts
