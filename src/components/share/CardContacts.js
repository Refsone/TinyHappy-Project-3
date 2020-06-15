import React from 'react'

import SelectContacts from './SelectContacts'
import ZeroContact from './ZeroContact'

import './CardContacts.css'

import moon from '../../images/share-moon.svg'

class CardContacts extends React.Component {
  render () {
    return (
      <div className='card-contacts'>
        <ZeroContact />
        <SelectContacts />
        <img className='moon' alt='moon' src={moon} />
        <h3 className='bold-20px-grey CardContacts-h3'>Votre liste de contacts est vide !</h3>
        <p className='regular-16px-grey CardContacts-p'>Ajoutez votre premier contact pour pouvoir envoyer par mail les derniers moments.</p>
      </div>
    )
  }
}

export default CardContacts
