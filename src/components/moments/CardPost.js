import React, { useState } from 'react'
import './CardPost.css'
import fullHeart from '../../images/favoris-heart-pink.svg'
import emptyHeart from '../../images/favori-heart.svg'

export default function CardPost (props) {
  const { moment, style } = props
  const [favorite, setFavorite] = useState(moment.moment_favorite)
  const handleClickFavorite = () => setFavorite(!favorite)

  return (

    <div className='CardPost' style={style}>
      <div className='block-names-favorite'>
        <div>
          <p className='family-name' style={{ backgroundColor: moment.color }}>{moment.family_firstname}</p>
        </div>
        <img onClick={handleClickFavorite} src={favorite ? fullHeart : emptyHeart} alt='favorite' />
      </div>
      <h4>{moment.moment_text}</h4>
      {moment.moment_context !== '' ? <p className='context'>{moment.moment_context}</p> : ''}
    </div>
  )
}
