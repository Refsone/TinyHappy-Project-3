import React from 'react'

import './Calendar.css'

import calendar from '../../../images/calendrier.svg'

const Calendar = () => {
  const date = new Date()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const dateLocal = date.toLocaleDateString('fr-FR', options)

  return (
    <div className='calendar'>
      <img src={calendar} alt='calendar icon' />
      <p>{dateLocal}</p>
    </div>
  )
}

export default Calendar
