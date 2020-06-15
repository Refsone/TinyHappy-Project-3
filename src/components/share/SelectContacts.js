import React from 'react'

import bin from '../../images/trash-alt-regular-blue.svg'
import '../commons/Fonts.css'
import './SelectContacts.css'

class SelectContacts extends React.Component {
  render () {
    return (
      <div className='select-contact-page'>
        <p className='bold-16px-grey title'>SÉLECTION DE VOS CONTACTS</p>
        <div className='field'>
          <div className='group'>
            <input className='radiobox' type='radio' />
            <p className='medium-16px-grey email'>vincent@gmail.com</p>
          </div>
          <img className='bin' alt='bin' src={bin} />
        </div>
        <div className='field'>
          <div className='group'>
            <input className='radiobox' type='radio' />
            <p className='medium-16px-grey email'>vincent@gmail.com</p>
          </div>
          <img className='bin' alt='bin' src={bin} />
        </div>
        <div className='field'>
          <div className='group'>
            <input className='radiobox' type='radio' />
            <p className='medium-16px-grey email'>nicole.bernard@yahoo.com</p>
          </div>
          <img className='bin' alt='bin' src={bin} />
        </div>
        <div className='field'>
          <div className='group'>
            <input className='radiobox' type='radio' />
            <p className='medium-16px-grey email'>tony111@gmail.com</p>
          </div>
          <img className='bin' alt='bin' src={bin} />
        </div>
      </div>
    )
  }
}

export default SelectContacts
