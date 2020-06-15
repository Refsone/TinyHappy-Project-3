import React from 'react'

import bin from '../../images/trash-alt-regular-blue.svg'
import '../commons/Fonts.css'
import './SelectContacts.css'

class SelectContacts extends React.Component {
  render () {
    return (
      <div>
        <p className='bold-16px-grey'>SÉLECTION DE VOS CONTACTS</p>
        <div>
          <input className='radiobox' type='checkbox' id='checkbox' value='checkbox' />
          <p>vincent@gmail.com</p>
          <img alt='bin' src={bin} />
        </div>
      </div>
    )
  }
}

export default SelectContacts
