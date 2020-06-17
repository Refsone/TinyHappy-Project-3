import React from 'react'

import './AddContact.css'
import inactifSend from '../../images/send-inactif-btn.svg'

class AddContact extends React.Component {
  render () {
    return (
      <div>
        <p className='bold-12px-grey title'>AJOUTER UN CONTACT</p>

        <container className='add-contact-group'>
          <input className='add-contact-input mediumitalic-12px-lightgrey' type='email' placeholder='prenom@exemple.com' />
          <button className='add-contact-button'>OK</button>
        </container>
        <container className='inactif-send'>
          <img alt='inactif-send-button' src={inactifSend} />
        </container>
      </div>

    )
  }
}

export default AddContact
