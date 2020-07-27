import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import './CardPost.css'

import emptyHeart from '../../images/favori-heart.svg'
import fullHeart from '../../images/favoris-heart-pink.svg'
import pencil from '../../images/Vector.svg'

const backUrl = process.env.REACT_APP_API_URL
const myToken = (localStorage.getItem('x-access-token'))

const CardPost = (props) => {
  const { moment, boxStyle, user } = props
  const [favorite, setFavorite] = useState(moment.moment_favorite)

  const handleClickFavorite = (e) => {
    props.refreshMethod()
    setFavorite(!favorite)
    axios.put(`${backUrl}/moments`, { moment_favorite: !favorite, id: e.target.id }, {
      headers: { Authorization: `Bearer ${myToken}` }
    })
  }

  return (
    <div className='CardPost' style={moment.type === 'quote' ? { borderLeft: '0.4rem solid #91E9FE', marginTop: boxStyle } : { borderLeft: '0.4rem solid #D3FF9B', marginTop: boxStyle }}>
      <div className='block-names-favorite'>
        <div className='block-names'>
          {moment.firstname_color.map((member, id) => {
            return <p key={id} className='family-name' style={{ backgroundColor: member.color }}>{member.firstname}</p>
          })}
          {moment.user_isPresent && user ? <p className='family-name' style={{ backgroundColor: user[0].color }}>{user[0].user_firstname}</p> : ''}
        </div>
        <Link to={moment.type === 'quote' 
          ? { pathname: '/moments/create/quote',  moment: moment, user: user } 
          : { pathname: '/moments/create/milestone', moment: moment, user: user }}>
          <img id='modifyMoment' src={pencil} alt='modify moment' />
        </Link>
        <img id={moment.momentId} onClick={handleClickFavorite} src={favorite ? fullHeart : emptyHeart} alt='favorite' />
      </div>
      <h4>{moment.moment_text}</h4>
      {moment.moment_context !== '' ? <p className='context'>{moment.moment_context}</p> : ''}
    </div>
  )
}

export default CardPost
