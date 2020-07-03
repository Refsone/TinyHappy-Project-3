import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Quote = (props) => {
  let titleAuthor = ''
  let placeholder = ''
  let title = ''
  let idQuoteArea = ''
  let idContextArea = ''

  const data = props.momentTypeId === 1
    ?
    (titleAuthor = 'SELECTIONNER L\'AUTEUR', placeholder = 'Ajouter une citation', title = 'CITATION', idQuoteArea = 'quote', idContextArea = 'contextQuote')
    :
    (titleAuthor = 'SELECTIONNER LE(S) PARTICIPANT(S)', placeholder = 'Ajouter une description', title = 'DESCRIPTION', idQuoteArea = 'description', idContextArea = 'contextMilestone')

  return (
    <>
      <AuthorSelect memberFamilyIsPresentAtMoment={props.memberFamilyIsPresentAtMoment} userIsPresent={props.userIsPresent} textInMomentArea={props.textInMomentArea} buttonSelectAuthor={props.buttonSelectAuthor} familyMember={props.familyMember} user={props.user} titleAuthor={titleAuthor} />
      <TextArea momentTypeId={props.momentTypeId} textInContextArea={props.textInContextArea} textInMomentArea={props.textInMomentArea} sendMomentSucceed={props.sendMomentSucceed} title={title} active={props.active} SendCreateMoment={props.SendCreateMoment} placeholder={placeholder} onChangeTextInContextArea={props.onChangeTextInContextArea} onChangeTextInMomentArea={props.onChangeTextInMomentArea} idQuoteArea={idQuoteArea} idContextArea={idContextArea} />
    </>
  )
}

export default Quote
