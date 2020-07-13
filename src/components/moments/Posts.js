import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'moment'
import 'moment/locale/fr'

import AddNewMoment from './AddNewMoment'
import CardPost from './CardPost'
import Header from './../commons/header/Header'
import Navbar from '../commons/footer/Navbar'

import './Posts.css'

const backUrl = process.env.REACT_APP_API_URL
const myToken = localStorage.getItem('x-access-token')
const userId = localStorage.getItem('userId')

const Posts = (props) => {
  const [moments, setMoments] = useState([])
  const [refresh, setRefresh] = useState([false])
  let date = ''

  useEffect(() => {
    fetchUserMoment()
  }, [refresh])

  const fetchUserMoment = () => {
    axios.get(`${backUrl}/users/${userId}/moments`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => setMoments(res.data))
  }
  const formatDate = (date) => {
    Moment.locale('fr')
    return Moment(date).format('LL')
  }
  const getRandom = () => {
    return Math.floor(Math.random() * Math.floor(100))
  }
  const createCardPost = (moment, id) => {
    if (date !== moment.moment_event_date) {
      date = moment.moment_event_date
      return (
        <>
          <p className='moment-date' key={id}>{formatDate(moment.moment_event_date)}</p>
          <CardPost refreshMethod={refreshMethod} locationPath={props.location.pathname} moment={moment} key={getRandom()} />
        </>
      )
    } else {
      date = moment.moment_event_date
      return (
        <>
          <CardPost refreshMethod={refreshMethod} locationPath={props.location.pathname} moment={moment} key={getRandom()} boxStyle='8px' />
        </>
      )
    }
  }
  const refreshMethod = () => {
    setRefresh(!refresh)
  }

  return (
    <>
      <Header burger />
      <div className='Posts'>
        {moments.map((moment, key) => {
          if (props.location.pathname === '/favoris') {
            if (moment.moment_favorite) {
              return createCardPost(moment, key)
            } else {
              return ''
            }
          } else {
            return createCardPost(moment, key)
          }
        })}
        <AddNewMoment />
        <Navbar />
      </div>
    </>
  )
}

export default Posts
