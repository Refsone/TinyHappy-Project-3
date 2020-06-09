import React from 'react'
import './MomentNavbar.css'
import citation from '../../images/citation.svg'
import faitNotable from '../../images/faitNotable.svg'
import { Link } from 'react-router-dom'

const MomentNavbar = () => {
  return (
    <div className='momentNavbar'>
      <Link className='activeCitation'><img src={citation} />citation</Link>
      <Link className='activeFait'><img src={faitNotable} />fait notable</Link>
    </div>
  )
}

export default MomentNavbar
