import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Quote = (props) => {
  return (
    <>
      <AuthorSelect memberFamilyIsPresentAtMoment={props.memberFamilyIsPresentAtMoment} userIsPresent={props.userIsPresent} textInMomentArea={props.textInMomentArea} authorButtonIsClicked={props.authorButtonIsClicked} buttonSelectAuthor={props.buttonSelectAuthor} familyMember={props.familyMember} user={props.user} title={'SELECTIONNER L\'AUTEUR'} />
      <TextArea sendMomentSucceed={props.sendMomentSucceed} textInContextArea={props.textInContextArea} textInMomentArea={props.textInMomentArea} title='CITATION' active={props.active} SendCreateMoment={props.SendCreateMoment} placeholder='Ajouter une citation' onChangeTextInContextArea={props.onChangeTextInContextArea} onChangeTextInMomentArea={props.onChangeTextInMomentArea} idQuoteArea='quote' idContextArea='contextQuote' />
    </>
  )
}

export default Quote
