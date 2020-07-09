import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Proptypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import ConfirmButton from '../../commons/footer/ConfirmButton'

import './DeleteMember.css'

import trash from '../../../images/trash-alt-regular-1.svg'
import emojiHappy from '../../../images/Vector-happy.svg'
import emojiSad from '../../../images/Vector-sad.svg'

const backUrl = process.env.REACT_APP_API_URL

const DeleteMember = (props) => {
  const { name, id } = props

  const [cancel, setCancel] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const handleClick = (value) => {
    if (value === 'delete') {
      deleteMemberFromBdd()
    } else {
      setCancel(true)
    }
  }

  const deleteMemberFromBdd = () => {
    Axios.delete(`${backUrl}/family-members/${id}`)
      .then(res => res.status === 200 && setDeleted(true))
      .catch(err => 'An error occured when deleted the members...' + err)
  }

  // Define a setTimeOut on validation before return to the members family list
  useEffect(() => {
    if (deleted) {
      const timer = setTimeout(() => {
        setRedirect(true)
      }, 2000)
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
            Vous êtes sur le point de supprimer <b>{name}</b>.<br /><b>Êtes-vous sur?</b>
          </p>
          <p className='part-2'>
            Tous les moments (citations et évènements) associés à ce profil seront définitivement supprimés.
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
      {
        cancel &&
          <Redirect to={{
            pathname: '/family/modify',
            data: {
              memberId: id,
              modify: 'member'
            }
          }}
          />
      }
      {
        deleted &&
          <ConfirmButton message={`${name} a bien été supprimé.`} confirm deleted />
      }
      {
        redirect &&
          <Redirect to='/family' />
      }
    </>
  )
}

DeleteMember.propTypes = {
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired
}

export default DeleteMember
