import React from 'react'
import ButtonAuthor from './ButtonAuthor'

import './AuthorSelect.css'

const AuthorSelect = (props) => {
  const authors = props.familyMember

  return (
    <div className='authorSelect'>
      <p className='authorTitle'>{props.title}</p>
      <div className='authorList'>
        {props.user && <ButtonAuthor buttonSelectAuthor={props.buttonSelectAuthor} color={props.user.color} name={props.user.user_firstname} id={props.user.user_firstname} />}
        {authors.map((author, index) =>
          <ButtonAuthor key={index} buttonSelectAuthor={props.buttonSelectAuthor} color={author.color} name={author.family_firstname} id={author.member_id} />
        )}
      </div>
      <p className='error-author' style={props.textInMomentArea.length > 0 && props.memberFamilyIsPresentAtMoment.length === 0 && props.userIsPresent === 0 ? { visibility: 'visible' } : { visibility: 'hidden' }}>Veuillez selectionner un auteur </p>
    </div>
  )
}
export default AuthorSelect
