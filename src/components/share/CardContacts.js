import React, { Component } from 'react'

// import Navbar from '../commons/footer/Navbar'
import SelectContacts from './SelectContacts'
import ZeroContact from './ZeroContact'

class CardContacts extends Component {
  render () {
    return (
      <div>
        <ZeroContact />
        <SelectContacts />
        {/* <Navbar /> */}
      </div>
    )
  }
}

export default CardContacts
