import React from 'react'
import { NavLink } from 'react-router-dom'

import './MomentNavbar.css'

import quoteImg from '../../../images/citation.svg'
import milestoneImg from '../../../images/faitNotable.svg'

const MomentNavbar = (props) => {
  return (
    <div className='momentNavbar'>
      <NavLink to='/moments/create/quote' onClick={() => props.SwitchMomentType(1)} activeClassName='activeQuote'><img className='imgQuote' src={quoteImg} alt='' />CITATION</NavLink>
      <NavLink to='/moments/create/milestone' onClick={() => props.SwitchMomentType(2)} activeClassName='activeMilestone'><img className='imgMilestone' src={milestoneImg} alt='' />FAIT NOTABLE</NavLink>
    </div>
  )
}

export default MomentNavbar
