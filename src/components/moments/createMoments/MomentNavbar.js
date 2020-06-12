import React from 'react'
import './MomentNavbar.css'
import citation from '../../../images/citation.svg'
import faitNotable from '../../../images/faitNotable.svg'
import { NavLink } from 'react-router-dom'

const MomentNavbar = () => {
  return (
    <div className='momentNavbar'>
      <NavLink to='/quote' activeClassName='activeCitation'><img className='imgCitation' src={citation} />CITATION</NavLink>
      <NavLink to='/milestone' activeClassName='activeFait'><img className='imgFait' src={faitNotable} />FAIT NOTABLE</NavLink>
    </div>
  )
}

export default MomentNavbar
