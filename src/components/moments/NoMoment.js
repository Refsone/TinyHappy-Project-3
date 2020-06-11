import React from 'react'

import './NoMoment.css'
import mailBox from '../../images/mailbox.svg'

const NoMoment = () => {
  return (
    <>
      <div className='cont-noMoment'>
        <img alt='A smiley Mailbox' src={mailBox} />
        <p className='bold-20px-grey'>Oups ! Il semblerait que vous n'ayez encore rien posté !</p>
        <p className='regular-16px-grey'>Il est temps d'écrire votre histoire, créez votre premier moment !</p>
      </div>
    </>
  )
}

export default NoMoment
