import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Milestone = (props) => {
  return (
    <>
      <AuthorSelect authorButtonIsClicked={props.authorButtonIsClicked} buttonSelectAuthor={props.buttonSelectAuthor} familyMember={props.familyMember} user={props.user} title='SELECTIONNER LE(S) PARTICIPANT(S)' />
      <TextArea title='DESCRIPTION' active={props.active} sendCreateMoment={props.sendCreateMoment} textInArea={props.textInDescriptionArea} placeholder='Ajouter une description' idQuote='description' idContext='contextMilestone' />
    </>
  )
}

export default Milestone
