import React from 'react'

import SelectContacts from './SelectContacts'
import ZeroContact from './ZeroContact'

import './CardContacts.css'

class CardContacts extends React.Component {
  render () {
    return (
      <div className='card-contacts'>
        <ZeroContact />
        <SelectContacts />
      </div>
    )
  }
}

export default CardContacts
