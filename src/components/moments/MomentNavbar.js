import React from 'react'
import { NavLink } from 'react-router-dom'

import './MomentNavbar.css'

import quote from '../../images/citation.svg'
import milestone from '../../images/faitNotable.svg'

const MomentNavbar = () => {
  return (
    <div className='momentNavbar'>
      <NavLink to='/quote' activeClassName='activeCitation'><img className='imgCitation' src={quote} alt='citation logo' />CITATION</NavLink>
      <NavLink to='/milestone' activeClassName='activeFait'><img className='imgFait' src={milestone} alt='milestone' />FAIT NOTABLE</NavLink>
    </div>
  )
}

export default MomentNavbar
