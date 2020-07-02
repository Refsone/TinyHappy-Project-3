import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './CardPost.css'

import emptyHeart from '../../images/favori-heart.svg'
import fullHeart from '../../images/favoris-heart-pink.svg'

const CardPost = (props) => {
  const { moment, boxStyle } = props
  const [favorite, setFavorite] = useState(moment.moment_favorite)
  const [user, setUser] = useState()

  useEffect(() => {
    fetchUser()
  }, [])

  const handleClickFavorite = (e) => {
    props.refreshMethod()
    setFavorite(!favorite)
    axios.put('http://localhost:7500/moments', { moment_favorite: !favorite, id: e.target.id })
  }
  const fetchUser = () => {
    axios.get('http://localhost:7500/users/1')
      .then(res => setUser(res.data))
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
        <img id={moment.id} onClick={handleClickFavorite} src={favorite ? fullHeart : emptyHeart} alt='favorite' />
      </div>
      <h4>{moment.moment_text}</h4>
      {moment.moment_context !== '' ? <p className='context'>{moment.moment_context}</p> : ''}
    </div>
  )
}

export default CardPost
