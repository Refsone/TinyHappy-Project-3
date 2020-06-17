import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'moment'
import 'moment/locale/fr'

import AddNewMoment from './AddNewMoment'
import CardPost from './CardPost'
import Header from './../commons/header/Header'
import Navbar from '../commons/footer/Navbar'

import './Posts.css'

const Posts = (props) => {
  const [moments, setMoments] = useState([])
  const [refresh, setRefresh] = useState([false])
  let date = ''

  useEffect(() => {
    fetchUserMoment()
  }, [refresh])

  const fetchUserMoment = () => {
    axios.get('http://localhost:7500/users/1/moments/')
      .then(res => setMoments(res.data))
  }
  const formatDate = (date) => {
    Moment.locale('fr')
    return Moment(date).format('LL')
  }

  const refreshMethod = () => {
    setRefresh(!refresh)
  }

  return (
    <>
      <Header burger />
      <div className='Posts'>
        {moments.map((moment, key) => {
          if (props.location.pathname === '/moments/favoris') {
            if (moment.moment_favorite) {
              if (date !== moment.moment_event_date) {
                date = moment.moment_event_date
                return (
                  <>
                    <p className='moment-date' key={key}>{formatDate(moment.moment_event_date)}</p>
                    <CardPost refreshMethod={refreshMethod} locationPath={props.location.pathname} moment={moment} key={key} />
                  </>
                )
              } else {
                date = moment.moment_event_date
                return (
                  <>
                    <CardPost refreshMethod={refreshMethod} locationPath={props.location.pathname} moment={moment} key={key} boxStyle='8px' />
                  </>
                )
              }
            }
          } else {
            if (date !== moment.moment_event_date) {
              date = moment.moment_event_date
              return (
                <>
                  <p className='moment-date' key={key}>{formatDate(moment.moment_event_date)}</p>
                  <CardPost refreshMethod={refreshMethod} locationPath={props.location.pathname} moment={moment} key={key} />
                </>
              )
            } else {
              date = moment.moment_event_date
              return (
                <>
                  <CardPost refreshMethod={refreshMethod} locationPath={props.location.pathname} moment={moment} key={key} boxStyle='8px' />
                </>
              )
            }
          }
        })}
        <AddNewMoment />
        <Navbar />
      </div>
    </>
  )
}

export default Posts
