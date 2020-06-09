import React from 'react'
import './MomentNavbar.css'
import citation from '../../images/citation.svg'
import faitNotable from '../../images/faitNotable.svg'
import { Link } from 'react-router-dom'

const MomentNavbar = () => {
  return (
    <div className='momentNavbar'>
      <Link className='activeCitation'><img className='imgCitation' src={citation} />CITATION</Link>
      <Link className='activeFait'><img className='imgFait' src={faitNotable} />FAIT NOTABLE</Link>
    </div>
  )
}

export default MomentNavbar
