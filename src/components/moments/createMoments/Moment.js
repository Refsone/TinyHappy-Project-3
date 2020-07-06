import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Quote = (props) => {
  if (props.momentTypeId === 1) {
    return (
      <>
        <AuthorSelect memberFamilyIsPresentAtMoment={props.memberFamilyIsPresentAtMoment} userIsPresent={props.userIsPresent} textInMomentArea={props.textInMomentArea} buttonSelectAuthor={props.buttonSelectAuthor} familyMember={props.familyMember} user={props.user} titleAuthor="SELECTIONNER L\'AUTEUR" />
        <TextArea momentTypeId={props.momentTypeId} textInContextArea={props.textInContextArea} textInMomentArea={props.textInMomentArea} sendMomentSucceed={props.sendMomentSucceed} title='CITATION' active={props.active} SendCreateMoment={props.SendCreateMoment} placeholder='Ajouter une citation' onChangeTextInContextArea={props.onChangeTextInContextArea} onChangeTextInMomentArea={props.onChangeTextInMomentArea} idQuoteArea='quote' idContextArea='contextQuote' />
      </>
    )
  } else {
    return (
      <>
        <AuthorSelect memberFamilyIsPresentAtMoment={props.memberFamilyIsPresentAtMoment} userIsPresent={props.userIsPresent} textInMomentArea={props.textInMomentArea} buttonSelectAuthor={props.buttonSelectAuthor} familyMember={props.familyMember} user={props.user} titleAuthor='SELECTIONNER LE(S) PARTICIPANT(S)' />
        <TextArea momentTypeId={props.momentTypeId} textInContextArea={props.textInContextArea} textInMomentArea={props.textInMomentArea} sendMomentSucceed={props.sendMomentSucceed} title='DESCRIPTION' active={props.active} SendCreateMoment={props.SendCreateMoment} placeholder='Ajouter une description' onChangeTextInContextArea={props.onChangeTextInContextArea} onChangeTextInMomentArea={props.onChangeTextInMomentArea} idQuoteArea='description' idContextArea='contextMilestone' />
      </>
    )
  }
}

export default Quote
