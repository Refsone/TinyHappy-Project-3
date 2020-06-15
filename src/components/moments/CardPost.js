import React, { useState } from 'react'

import './CardPost.css'

import fullHeart from '../../images/favoris-heart-pink.svg'
import emptyHeart from '../../images/favori-heart.svg'

const CardPost = (props) => {
  const { moment, style } = props
  const [favorite, setFavorite] = useState(moment.moment_favorite)
  const handleClickFavorite = () => setFavorite(!favorite)

  return (

    <div className='CardPost' style={style}>
      <div className='block-names-favorite'>
        <div>
          {moment.family_firstname.map((family, key) => <p className={`${family.color} family-name`} key={key}>{family.name}</p>)}
        </div>
        <img onClick={handleClickFavorite} src={favorite ? fullHeart : emptyHeart} alt='favorite' />
      </div>
      <h4>{moment.moment_text}</h4>
      {moment.moment_context !== '' ? <p className='context'>{moment.moment_context}</p> : ''}
    </div>
  )
}

export default CardPost
