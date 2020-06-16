import React from 'react'
import ButtonAuthor from './ButtonAuthor'

import './AuthorSelect.css'

const AuthorSelect = (props) => {
  const authors = props.familyMember

  return (
    <div className='authorSelect'>
      <p className='authorTitle'>{props.title}</p>
      <div className='authorList'>
        {authors.map((author, index) =>
          <ButtonAuthor key={index} color={author.color} name={author.family_firstname} id={author.id} />
        )}
      </div>
    </div>
  )
}

export default AuthorSelect
