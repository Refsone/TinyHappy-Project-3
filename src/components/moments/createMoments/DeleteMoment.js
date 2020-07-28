import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Proptypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import './DeleteMoment.css'

import trash from '../../../images/trash-alt-regular-1.svg'
import emojiHappy from '../../../images/Vector-happy.svg'
import emojiSad from '../../../images/Vector-sad.svg'

const backUrl = process.env.REACT_APP_API_URL
const myToken = (localStorage.getItem('x-access-token'))

const DeleteMoment = (props) => {
  const moment = props.moment
  const id = moment.momentId

  const [cancel, setCancel] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const handleClick = (value) => {
    if (value === 'delete') {
      deleteMomentFromBdd()
    } else {
      setCancel(true)
    }
  }

  const deleteMomentFromBdd = () => {
    Axios.delete(`${backUrl}/moments/delete/${id}`, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
      .then(res => res.status === 204 && setDeleted(true))
      .catch(err => 'An error occured when deleted the members...' + err)
  }

  // Define a setTimeOut on validation before return to the members family list
  useEffect(() => {
    if (deleted) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 250)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [deleted])
  return (
    <>
      <div className='delete-member'>
        <div className='body'>
          <div className='trash'>
            <img src={trash} alt='Trash' />
          </div>
          <p className='part-1'>
            Vous êtes sur le point de supprimer le moment.<br /><b>Êtes-vous sur?</b>
          </p>
        </div>
        <div className='div-button'>
          <div className='button-1' onClick={() => handleClick('cancel')}>
            <div>
              <img src={emojiHappy} alt='Trash' />
              <p>j'ai changé d'avis</p>
            </div>
          </div>
          <div className='button-2' onClick={() => handleClick('delete')}>
            <div>
              <img src={emojiSad} alt='Trash' />
              <p>oui, je supprime</p>
            </div>
          </div>
        </div>
      </div>

      {cancel && <Redirect to={moment.type === 'quote'
        ? { pathname: '/moments/create/quote', moment: moment, user: props.user }
        : { pathname: '/moments/create/milestone', moment: moment, user: props.user }} />}
      {redirect && <Redirect to={{ pathname: '/moments', params: { isDelete: deleted } }} />}
    </>
  )
}

DeleteMoment.propTypes = {
  id: Proptypes.number.isRequired
}

export default DeleteMoment
