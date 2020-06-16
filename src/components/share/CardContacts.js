import React from 'react'

import Header from '../commons/header/Header'
import Navbar from '../commons/footer/Navbar'

import './CardContacts.css'

import moon from '../../images/share-moon.svg'

class CardContacts extends React.Component {
  render () {
    return (
      <>
        <Header burger />
        <div className='card-contacts'>
          <img className='moon' alt='moon' src={moon} />
          <h3 className='bold-20px-grey CardContacts-h3'>Votre liste de contacts est vide !</h3>
          <p className='regular-16px-grey CardContacts-p'>Ajoutez votre premier contact pour pouvoir envoyer par mail les derniers moments.</p>
        </div>
        <Navbar />
      </>
    )
  }
}

export default CardContacts
