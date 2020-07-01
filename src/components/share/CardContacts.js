import React, { Component } from 'react'

import SelectContacts from './SelectContacts'
import ZeroContact from './ZeroContact'
import Header from '../commons/header/Header'
import Navbar from '../commons/footer/Navbar'

import './CardContacts.css'

class CardContacts extends Component {
  render () {
    return (
      <div className='cardContact'>
        <Header burger />
        <ZeroContact />
        <SelectContacts />
        <Navbar />
      </div>
    )
  }
}

export default CardContacts
