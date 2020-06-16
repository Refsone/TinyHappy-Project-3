import React from 'react'

class AddContact extends React.Component {
  render () {
    return (
      <div className='add-contact'>
        <p className='bold-12px-grey title'>AJOUTER UN CONTACT</p>
        <div>
          <input className='' type='email' placeholder='prenom@exemple.com' />
          <button>OK</button>
        </div>
      </div>
    )
  }
}

export default AddContact
