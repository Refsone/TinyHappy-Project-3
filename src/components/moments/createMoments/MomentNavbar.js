import React from 'react'
import './MomentNavbar.css'
import citation from '../../../images/citation.svg'
import faitNotable from '../../../images/faitNotable.svg'
import { NavLink } from 'react-router-dom'

const MomentNavbar = () => {
  return (
    <div className='momentNavbar'>
      <NavLink to='/moments/create/quote' activeClassName='activeCitation'><img className='imgCitation' src={citation} alt='' />CITATION</NavLink>
      <NavLink to='/moments/create/milestone' activeClassName='activeFait'><img className='imgFait' src={faitNotable} alt='' />FAIT NOTABLE</NavLink>
    </div>
  )
}

export default MomentNavbar
