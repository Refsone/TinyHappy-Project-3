import React from 'react'
import { Link } from 'react-router-dom'

import './SendButton.css'

import ActivePlane from '../../images/send-actif-btn.svg'
import NonActivePlane from '../../images/send-inactif-btn.svg'

const SendButton = ({ actived, selectedIds, selectedMail }) => {
  return (
    <div className='share-button'>
      {actived
        ? 
        <Link
          to={{
            pathname: '/share/moments',
            data: {
              selectedIds: selectedIds,
              selectedMail: selectedMail
            }
          }}
          title='Choice moments to send'
        >
        <img src={ActivePlane} alt='send' />
          </Link> : <img src={NonActivePlane} alt='send' />}
    </div>
  )
}
export default SendButton
