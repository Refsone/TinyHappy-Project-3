import React, { useState } from 'react'
import axios from 'axios'

import './CardPost.css'

import fullHeart from '../../images/favoris-heart-pink.svg'
import emptyHeart from '../../images/favori-heart.svg'

const CardPost = (props) => {
  const { moment, style } = props
  const [favorite, setFavorite] = useState(moment.moment_favorite)
  const handleClickFavorite = (e) => {
    setFavorite(!favorite)
    axios.put('http://localhost:7500/moments', { moment_favorite: !favorite, id: e.target.id })
  }

  return (

    <div className='CardPost' style={style}>
      <div className='block-names-favorite'>
        <div>
          {moment.firstname_color.map((member, id) => {
            return <p key={id} className='family-name' style={{ backgroundColor: member.color }}>{member.firstname}</p>
          })}
        </div>
        <img id={moment.id} onClick={handleClickFavorite} src={favorite ? fullHeart : emptyHeart} alt='favorite' />
      </div>
      <h4>{moment.moment_text}</h4>
      {moment.moment_context !== '' ? <p className='context'>{moment.moment_context}</p> : ''}
    </div>
  )
}

export default CardPost
