import React from 'react'
import './CardPost.css'

import fullHeart from '../../images/favoris-heart-pink.svg'
import emptyHeart from '../../images/favori-heart.svg'

export default function CardPost (props) {
  const { moment } = props
  return (
    <div className='CardPost'>
      <div className='block-names-favorite'>
        <div>
          {moment.family_firstname.map((family, key) => <p className={`${family.color} family-name`} key={key}>{family.name}</p>)}
        </div>
        <img src={moment.moment_favorite ? fullHeart : emptyHeart} alt='favorite' />
      </div>
      <h4>{moment.moment_text}</h4>
      {moment.moment_context !== '' ? <p className='context'>{moment.moment_context}</p> : ''}
    </div>
  )
}
