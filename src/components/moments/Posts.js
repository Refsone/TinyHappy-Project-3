import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'moment'
import 'moment/locale/fr'
import CardPost from './CardPost'
import './Posts.css'

export default function Post () {
  const [moments, setMoments] = useState([])
  let date = ''

  const fetchUserMoment = () => {
    axios.get('http://localhost:7500/users/1/moments/')
      .then(res => setMoments(res.data))
  }
  const formatDate = (date) => {
    Moment.locale('fr')
    return Moment(date).format('LL')
  }

  useEffect(() => {
    fetchUserMoment()
  })

  return (
    <div className='Posts'>
      {moments.map((moment, key) => {
        if (date !== moment.moment_event_date) {
          date = moment.moment_event_date
          return (
            <>
              <p className='moment-date'>{formatDate(moment.moment_event_date)}</p>
              <CardPost moment={moment} key={key} style={{ borderLeft: '0.4rem solid #91E9FE' }} />
            </>
          )
        } else {
          date = moment.moment_event_date
          return (
            <>
              <CardPost moment={moment} key={key} style={{ marginTop: '8px', borderLeft: '0.4rem solid #D3FF9B' }} />
            </>
          )
        }
      })}
    </div>
  )
}
