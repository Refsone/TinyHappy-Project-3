import React from 'react'

import ValidateButton from '../commons/footer/ValidateButton'

import './ShareSend.css'
import plane from '../../images/share-plain.svg'

function ShareSend () {
  return (
    <>
      <div className='ShareSend'>
        <img src={plane} alt='share-plane' />
        <p className='regular-20px-white'>Vos moments viennent d’être envoyés !</p>
      </div>
      <ValidateButton name='RETOUR' active />
    </>
  )
}

export default ShareSend
