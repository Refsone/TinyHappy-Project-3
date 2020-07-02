import React from 'react'
import { useHistory } from 'react-router-dom'

import ValidateButton from '../commons/footer/ValidateButton'

import './ShareSend.css'
import plane from '../../images/share-plain.svg'

function ShareSend () {
  const history = useHistory()
  return (
    <>
      <div className='ShareSend'>
        <img src={plane} alt='share-plane' />
        <p className='regular-20px-white'>Vos moments viennent d’être envoyés !</p>
      </div>
      <ValidateButton handleClick={() => history.push('/share')} name='RETOUR' active />
    </>
  )
}

export default ShareSend
