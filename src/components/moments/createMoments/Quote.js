import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Quote = (props) => {
  return (
    <>
      <AuthorSelect authorButtonIsClicked={props.authorButtonIsClicked} buttonSelectAuthor={props.buttonSelectAuthor} familyMember={props.familyMember} user={props.user} title={'SELECTIONNER L\'AUTEUR'} />
      <TextArea title='CITATION' active={props.active} sendCreateMoment={props.sendCreateMoment} placeholder='Ajouter une citation' textInArea={props.textInQuoteArea} idQuoteArea='quote' idContextArea='contextQuote' />
    </>
  )
}

export default Quote
