import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import './MomentNavbar.css'

import quoteImg from '../../../images/quote.svg'
import activeQuoteImg from '../../../images/activeQuote.svg'
import activeMilestoneImg from '../../../images/activeFaitNotable.svg'
import milestoneImg from '../../../images/faitNotable.svg'

const MomentNavbar = (props) => {
  const [active, setActive] = useState(false)
  return (
    <div className='momentNavbar'>
      <NavLink
        to='/moments/create/quote'
        onClick={() => props.SwitchMomentType(1)}
        activeClassName='activeQuote'
        activeStyle={{ color: '#4991B6' }}
      >
        <img className='imgQuote' src={active ? activeQuoteImg : quoteImg} alt='' />
        CITATION
      </NavLink>

      <NavLink
        to='/moments/create/milestone'
        onClick={() => props.SwitchMomentType(2)}
        activeClassName='activeMilestone'
        isActive={(match) => {
          if (match) {
            setActive(false)
            return true
          } else {
            setActive(true)
          }
        }}
        activeStyle={{ color: '#7FB74E' }}
      >
        <img className='imgMilestone' src={active ? activeMilestoneImg : milestoneImg} alt='' />
        FAIT NOTABLE
      </NavLink>
    </div>
  )
}

MomentNavbar.propTypes = {
  SwitchMomentType: PropTypes.func.isRequired
}

export default MomentNavbar
