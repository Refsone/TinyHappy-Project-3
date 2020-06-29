import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Milestone = (props) => {
  return (
    <>
      <AuthorSelect memberFamilyIsPresentAtMoment={props.memberFamilyIsPresentAtMoment} userIsPresent={props.userIsPresent} textInMomentArea={props.textInMomentArea} authorButtonIsClicked={props.authorButtonIsClicked} buttonSelectAuthor={props.buttonSelectAuthor} familyMember={props.familyMember} user={props.user} title='SELECTIONNER LE(S) PARTICIPANT(S)' />
      <TextArea textInContextArea={props.textInContextArea} textInMomentArea={props.textInMomentArea} title='DESCRIPTION' active={props.active} SendCreateMoment={props.SendCreateMoment} onChangeTextInContextArea={props.onChangeTextInContextArea} onChangeTextInMomentArea={props.onChangeTextInMomentArea} placeholder='Ajouter une description' idQuote='description' idContext='contextMilestone' />
    </>
  )
}

export default Milestone
