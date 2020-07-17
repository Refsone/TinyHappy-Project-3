import React from 'react'
import PropTypes from 'prop-types'
import ButtonAuthor from './ButtonAuthor'

import './AuthorSelect.css'

const AuthorSelect = (props) => {
  const authors = props.familyMember
  const membersPresent = props.memberFamilyIsPresentAtMoment
  const authorPresent = authors.map( author => {
    membersPresent.forEach(member => {
      if (member === author.member_id) {
        return author.click = true
      } 
    });
    return author
  })

  return (
    <div className='authorSelect'>
      <p className='authorTitle'>{props.title}</p>
      <div className='authorList'>
        {props.user && <ButtonAuthor buttonSelectAuthor={props.buttonSelectAuthor} color={props.user.color} name={props.user.user_firstname} id={props.user.user_firstname} />}
        {authorPresent.map((author, index) =>
          <ButtonAuthor key={index} buttonSelectAuthor={props.buttonSelectAuthor} color={author.color} name={author.family_firstname} id={author.member_id} click={author.click ? author.click : false}/>
        )}
      </div>
      <p className='error-author' style={props.textInMomentArea.length > 0 && props.memberFamilyIsPresentAtMoment.length === 0 && props.userIsPresent === 0 ? { visibility: 'visible' } : { visibility: 'hidden' }}>Veuillez selectionner un auteur </p>
    </div>
  )
}

AuthorSelect.propTypes = {
  familyMember: PropTypes.array.isRequired,
  memberFamilyIsPresentAtMoment: PropTypes.array.isRequired,
  userIsPresent: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  textInMomentArea: PropTypes.string
}

export default AuthorSelect
