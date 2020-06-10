import React from 'react'
import calendar from '../../images/calendrier.svg'
import './Calendar.css'

const Calendar = () => {
  const date = new Date()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const dateLocal = date.toLocaleDateString('fr-FR', options)

  return (
    <div className='calendar'>
      <img src={calendar} />
      {dateLocal}
    </div>
  )
}

export default Calendar
