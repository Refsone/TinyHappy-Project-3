import React from 'react'

import './Member.css'

import pencilLogo from '../../images/family-pencil.svg'

const Member = (props) => {
  const { member, familyBirthday } = props
  return (
    <div className='Member'>
      <div className='pin-color' style={{ backgroundColor: member.color_family_id }} />
      <div className='text-member'>
        <h4 className='medium-16px-grey'>
          {member.family_firstname} {member.family_lastname} {member.isUser ? <span className='regular-16px-grey'>(vous)</span> : ''}
        </h4>
        <p className='medium-12px-grey' style={member.family_surname ? {} : { marginTop: '0' }}>{member.family_surname}</p>
        <p className='medium-12px-grey' style={member.familyBirthday ? {} : { marginTop: '0' }}>{familyBirthday}</p>
      </div>
      <img src={pencilLogo} alt='pencil logo' />
    </div>
  )
}

export default Member
