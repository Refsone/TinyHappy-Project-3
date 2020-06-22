import React from 'react'
import { NavLink } from 'react-router-dom'

import './Member.css'

import pencilLogo from '../../images/family-pencil.svg'

const Member = (props) => {
  const { member, familyBirthday } = props
  if (props.isUser) {
    return (
      <div className='Member'>
        <div className='pin-color' style={{ backgroundColor: member.color }} />
        <div className='text-member'>
          <h4 className='medium-16px-grey'>
            {member.user_firstname} {member.user_lastname} <span className='regular-16px-grey'>(vous)</span>
          </h4>
          {member.user_birthday && <p className='medium-12px-grey' style={{ marginTop: '0' }}>{familyBirthday}</p>}
        </div>
        <NavLink to={{
          pathname: '/family/create',
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
          <p className='medium-12px-grey' style={member.familyBirthday ? {} : { marginTop: '0' }}>{familyBirthday}</p>
        </div>
        <NavLink to={{
          pathname: '/family/create',
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
