import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Quote = (props) => {
  return (
    <>
      <AuthorSelect authorButtonIsClicked={props.authorButtonIsClicked} buttonSelectAuthor={props.buttonSelectAuthor} familyMember={props.familyMember} user={props.user} title={'SELECTIONNER L\'AUTEUR'} />
      <TextArea title='CITATION' active={props.active} handleSendCreateMoment={props.handleSendCreateMoment} placeholder='Ajouter une citation' onChangeTextInDescriptionArea={props.onChangeTextInDescriptionArea} onChangeTextInMomentArea={props.onChangeTextInMomentArea} idQuoteArea='quote' idContextArea='contextQuote' />
    </>
  )
}

export default Quote
