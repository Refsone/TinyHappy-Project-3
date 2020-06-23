import React from 'react'

import Authors from '../commons/Authors'
import Header from '../commons/header/Header'
import ValidateButton from '../commons/footer/ValidateButton'

import './AddShareMoment.css'
import '../images/citation.svg'

function AddShareMoment (props) {
  const handleClick = () => {

  }

  return (
    <>
      <Header location={props.location.name} burger />
      <div className='AddShareMoment'>
        <h1 class='bold-16px-grey'> Paramètre du partage</h1>
        <h2 className='bold-12px-grey'>Quels Auteur(e)s</h2>
        <div className='block-authors'>
          <Authors />
        </div>
        <h2 className='bold-12px-grey'>Quels type(s) de moments ?</h2>
        {/* <p className='bold-10px-grey moment-type'><img src={quoteLogo} alt='' />Citation</p>
        <p className='bold-10px-grey moment-type'><img src={milestoneLogo} alt='' />Fait notable</p> */}
        <input id='quoteCheck' type='checkbox' />
        <label className='bold-10px-grey quote-check' for='quoteCheck'>Citation</label>
        <input id='milestoneCheck' type='checkbox' />
        <label className='bold-10px-grey milestone-check' for='milestoneCheck'>Fait notable</label>
        <h2 className='bold-12px-grey'>Fourchette de date(s)</h2>
      </div>
      <ValidateButton name='Envoyer les moments' handleClick={handleClick} />
    </>
  )
}

export default AddShareMoment
