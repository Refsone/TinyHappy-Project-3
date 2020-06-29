import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'moment'
import 'moment/locale/fr'

import Authors from '../commons/Authors'
import Header from '../commons/header/Header'
import ValidateButton from '../commons/footer/ValidateButton'

import './AddShareMoment.css'
import 'react-datepicker/dist/react-datepicker.css'
import DateRange from './DateRange'

function AddShareMoment (props) {
  const [startDate, setStartDate] = useState(new Date('2020-05-12'))
  const [endDate, setEndDate] = useState(new Date())
  const [countSelect, setCountSelect] = useState(0)
  const [family, setFamily] = useState([])
  const [authors, setAuthor] = useState([])
  const [authorsSelect, setAuthorSelect] = useState([])
  const [moments, setMoments] = useState([])

  useEffect(() => {
    fetchMoments()
    fetchFamily()
  }, [])

  useEffect(() => {
    fetchUser()
  }, [family])

  const fetchFamily = (id = 1) => {
    axios.get(`http://localhost:7500/users/${id}/family`)
      .then(res => setFamily(res.data))
  }

  const fetchUser = (id = 1) => {
    axios.get(`http://localhost:7500/users/${id}`)
      .then(res => setAuthor(family.concat(res.data)))
  }

  const fetchMoments = (id = 1) => {
    axios.get(`http://localhost:7500/users/${id}/moments`)
      .then(res => setMoments(res.data))
  }

  const clickAuthor = (e) => {
    const targetStyle = e.target.style
    const id = e.target.id
    //  If the button is not clicked (blank color)
    if (targetStyle.backgroundColor === 'rgb(255, 255, 255)' || targetStyle.backgroundColor === '') {
      targetStyle.backgroundColor = authors[id].color
      setAuthorSelect([...authorsSelect, authors[id].family_firstname || authors[id].user_firstname])
      setCountSelect(countSelect + 1)
    } else {
      targetStyle.backgroundColor = '#fff'
      const idToDelete = authorsSelect.findIndex(author => author.name === authors[id].family_firstname)
      authorsSelect.splice(idToDelete, 1)
      setAuthorSelect(authorsSelect)
      setCountSelect(countSelect - 1)
    }
  }

  const handleClick = () => {
    Moment.locale('fr')
    const momentsToSend = moments
      .filter(moment => Moment(moment.moment_event_date).format('L') >= Moment(startDate).format('L') && Moment(moment.moment_event_date).format('L') <= Moment(endDate).format('L'))
      .filter(moment => authorsSelect.includes(moment.firstname_color.map(name => name.firstname).join()))
    console.log(momentsToSend)
  }

  return (
    <>
      <Header location={props.location.name} burger />
      <div className='AddShareMoment'>
        <h1 className='bold-16px-grey'> Paramètre du partage</h1>
        <h2 className='bold-12px-grey'>Quels Auteur(e)s</h2>
        <div className='block-authors'>
          <Authors clickAuthor={e => clickAuthor(e)} authors={authors} />
        </div>
        <h2 className='bold-12px-grey'>Quels type(s) de moments ?</h2>
        <input id='quoteCheck' type='checkbox' checked />
        <label className='bold-10px-grey quote-check' htmlFor='quoteCheck'>Citation</label>
        <input id='milestoneCheck' type='checkbox' />
        <label className='bold-10px-grey milestone-check' htmlFor='milestoneCheck'>Fait notable</label>
        <h2 className='bold-12px-grey'>Fourchette de date(s)</h2>
        <DateRange dateType='début' date={startDate} onChange={date => setStartDate(date)} />
        <DateRange dateType='fin' date={endDate} onChange={date => setEndDate(date)} />
      </div>

      <ValidateButton handleClick={handleClick} active={countSelect > 0 && startDate <= endDate} name='Envoyer les moments' />
    </>
  )
}

export default AddShareMoment
