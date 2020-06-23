import React from 'react'
import ButtonAuthor from './ButtonAuthor'

import './AuthorSelect.css'

const AuthorSelect = (props) => {
  const authors = props.familyMember

  return (
    <div className='authorSelect'>
      <p className='authorTitle'>{props.title}</p>
      <div className='authorList'>
        {props.user && <ButtonAuthor authorButtonIsClicked={props.authorButtonIsClicked} buttonSelectAuthor={props.buttonSelectAuthor} color={props.user.color} name={props.user.user_firstname} id={props.user.user_firstname} />}
        {authors.map((author, index) =>
          <ButtonAuthor key={index} authorButtonIsClicked={props.authorButtonIsClicked} buttonSelectAuthor={props.buttonSelectAuthor} color={author.color} name={author.family_firstname} id={author.id} />
        )}
      </div>
    </div>
  )
}

export default AuthorSelect
