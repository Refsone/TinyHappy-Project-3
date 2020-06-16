import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Quote = (props) => {
  return (
    <>
      <AuthorSelect familyMember={props.familyMember} title={'SELECTIONNER L\'AUTEUR'} />
      <TextArea title='CITATION' active={props.active} onClick={props.onClick} placeholder='Ajouter une citation' textInArea={props.textInQuoteArea} idQuote='quote' idContext='contextQuote' />
    </>
  )
}

export default Quote
