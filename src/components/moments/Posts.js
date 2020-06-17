import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Moment from 'moment'
import 'moment/locale/fr'

import AddNewMoment from './AddNewMoment'
import CardPost from './CardPost'
import Header from './../commons/header/Header'
import Navbar from '../commons/footer/Navbar'

import './Posts.css'

const Posts = () => {
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
    <>
      <Header burger />
      <div className='Posts'>
        {moments.map((moment, key) => {
          if (date !== moment.moment_event_date) {
            date = moment.moment_event_date
            return (
              <>
                <p className='moment-date' key={key}>{formatDate(moment.moment_event_date)}</p>
                <CardPost moment={moment} key={key} />
              </>
            )
          } else {
            date = moment.moment_event_date
            return (
              <>
                <CardPost moment={moment} key={key} boxStyle='8px' />
              </>
            )
          }
        })}
        <AddNewMoment />
        <Navbar />
      </div>
    </>
  )
}

export default Posts
