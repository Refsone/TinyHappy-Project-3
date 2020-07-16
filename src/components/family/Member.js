import React from 'react'
import { NavLink } from 'react-router-dom'

import './Member.css'

import pencilLogo from '../../images/family-pencil.svg'

const Member = (props) => {
  const { member, familyBirthday, displayBirthday } = props
  if (props.isUser) {
    return (
      <div className='Member'>
        <div className='pin-color' style={{ backgroundColor: member.color }} />
        <div className='text-member'>
          <h4 className='medium-16px-grey'>
            {member.user_firstname} {member.user_lastname} <span className='regular-16px-grey'>(vous)</span>
          </h4>
          {displayBirthday ? member.user_birthday && <p className='medium-12px-grey' style={{ marginTop: '0' }}>{familyBirthday}</p> : ''}
        </div>
        <NavLink to={{
          pathname: '/family/modify',
          data: {
            modify: 'user'
          }
        }}
        >
          <img src={pencilLogo} alt='pencil logo' />
        </NavLink>
      </div>
    )
  } else {
    return (
      <div className='Member'>
        <div className='pin-color' style={{ backgroundColor: member.color }} />
        <div className='text-member'>
          <h4 className='medium-16px-grey'>
            {member.family_firstname} {member.family_lastname}
          </h4>
          <p className='medium-12px-grey' style={member.family_surname ? {} : { marginTop: '0' }}>{member.family_surname}</p>
          <p className='medium-12px-grey' style={member.familyBirthday && displayBirthday ? {} : { marginTop: '0' }}>{displayBirthday ? familyBirthday : ''}</p>
        </div>
        <NavLink to={{
          pathname: '/family/modify',
          data: {
            modify: 'member',
            memberId: member.member_id
          }
        }}
        >
          <img src={pencilLogo} alt='pencil logo' />
        </NavLink>
      </div>
    )
  }
}

export default Member
