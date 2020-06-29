import React, { useState } from 'react'

import Authors from '../commons/Authors'
import Header from '../commons/header/Header'
import ValidateButton from '../commons/footer/ValidateButton'

import './AddShareMoment.css'
import 'react-datepicker/dist/react-datepicker.css'
import DateRange from './DateRange'

function AddShareMoment (props) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return (
    <>
      <Header location={props.location.name} burger />
      <div className='AddShareMoment'>
        <h1 className='bold-16px-grey'> Paramètre du partage</h1>
        <h2 className='bold-12px-grey'>Quels Auteur(e)s</h2>
        <div className='block-authors'>
          <Authors />
        </div>
        <h2 className='bold-12px-grey'>Quels type(s) de moments ?</h2>
        <input id='quoteCheck' type='checkbox' />
        <label className='bold-10px-grey quote-check' htmlFor='quoteCheck'>Citation</label>
        <input id='milestoneCheck' type='checkbox' />
        <label className='bold-10px-grey milestone-check' htmlFor='milestoneCheck'>Fait notable</label>
        <h2 className='bold-12px-grey'>Fourchette de date(s)</h2>
        <DateRange dateType='début' date={startDate} onChange={date => setStartDate(date)} />
        <DateRange dateType='fin' date={endDate} onChange={date => setEndDate(date)} />
      </div>

      <ValidateButton name='Envoyer les moments' />
    </>
  )
}

export default AddShareMoment
