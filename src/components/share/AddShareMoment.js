import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DateRange from './DateRange'
import Moment from 'moment'
import 'moment/locale/fr'

import Authors from '../commons/Authors'
import Header from '../commons/header/Header'
import ShareSend from './ShareSend'
import ValidateButton from '../commons/footer/ValidateButton'

import './AddShareMoment.css'
import 'react-datepicker/dist/react-datepicker.css'

const backUrl = process.env.REACT_APP_API_URL
const myToken = (localStorage.getItem('x-access-token'))
const userId = localStorage.getItem('userId')

function AddShareMoment (props) {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(new Date())
  const [countSelect, setCountSelect] = useState(0)
  const [family, setFamily] = useState([])
  const [authors, setAuthor] = useState([])
  const [authorsSelect, setAuthorSelect] = useState([])
  const [moments, setMoments] = useState([])
  const [onType, setOnType] = useState(false)
  const [isSend, setIsSend] = useState(false)
  const form = document.getElementById('formShareMoment')

  useEffect(() => {
    fetchMoments()
    fetchFamily()
  }, [])

  useEffect(() => {
    const fetchUser = () => {
      axios.get(`${backUrl}/users/${userId}`, {
        headers: { Authorization: `Bearer ${myToken}` }
      })
        .then(res => setAuthor(family.concat(res.data)))
    }
    fetchUser()
  }, [family])

  const fetchFamily = () => {
    axios.get(`${backUrl}/users/${userId}/family`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => setFamily(res.data))
      .catch(err => err)
  }

  const fetchMoments = () => {
    axios.get(`${backUrl}/users/${userId}/moments`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
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
    const format = 'YYYY-MM-DD'
    const userName = authors[authors.length - 1].user_firstname
    const userColor = authors[authors.length - 1].color
    const { selectedMail } = props.location.data
    const momentsToSend = moments
      .filter(moment => Moment(moment.moment_event_date).format(format) >= Moment(startDate).format(format) && Moment(moment.moment_event_date).format(format) <= Moment(endDate).format(format))
      .filter(moment => {
        for (const elt of moment.firstname_color) {
          return authorsSelect.includes(elt.firstname)
        }
        return ''
      })
      .filter(moment => {
        if (form.quoteCheck.checked && form.milestoneCheck.checked) {
          return moment.type === form.quoteCheck.value || moment.type === form.milestoneCheck.value
        } else if (form.quoteCheck.checked) {
          return moment.type === form.quoteCheck.value
        } else if (form.milestoneCheck.checked) {
          return moment.type === form.milestoneCheck.value
        }
        return ''
      })
    if (authorsSelect.indexOf(userName) !== -1) {
      authorsSelect.splice(authorsSelect.indexOf(userName), 1)
    }
    axios.post(`${backUrl}/send-mails/share`, { momentsToSend, userName, authorsSelect, selectedMail, userColor }, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => res.status === 200 && setTimeout(() => setIsSend(true), 500))
      .catch(err => err)
  }
  return (
    <>
      {isSend && <ShareSend />}
      <Header location={props.location.pathname} burger />
      <form id='formShareMoment' className='AddShareMoment'>
        <h1 className='bold-16px-grey'> Paramètre du partage</h1>
        <h2 className='bold-12px-grey'>Quels Auteur(e)s</h2>
        <div className='block-authors'>
          <Authors clickAuthor={e => clickAuthor(e)} authors={authors} />
        </div>
        <h2 className='bold-12px-grey'>Quels type(s) de moments ?</h2>
        <input onClick={() => setOnType(!onType)} id='quoteCheck' type='checkbox' value='quote' />
        <label className='bold-10px-grey quote-check' htmlFor='quoteCheck'>Citation</label>
        <input onClick={() => setOnType(!onType)} id='milestoneCheck' type='checkbox' value='milestone' />
        <label className='bold-10px-grey milestone-check' htmlFor='milestoneCheck'>Fait notable</label>
        <h2 className='bold-12px-grey'>Fourchette de date(s)</h2>
        <DateRange dateType='début' date={startDate} onChange={date => setStartDate(date)} />
        <DateRange dateType='fin' date={endDate} onChange={date => setEndDate(date)} />
      </form>
      {form && !isSend && <ValidateButton handleClick={handleClick} active={startDate && countSelect > 0 && startDate <= endDate && (form.quoteCheck.checked || form.milestoneCheck.checked)} name='Envoyer les moments' />}
    </>
  )
}

export default AddShareMoment
