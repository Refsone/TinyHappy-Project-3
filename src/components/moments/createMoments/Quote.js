import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Quote = (props) => {
  console.log(props)
  return (
    <>
      <AuthorSelect familyMember={props.familyMember} title={'SELECTIONNER L\'AUTEUR'} />
      <TextArea title='CITATION' active={props.active} onClick={props.onClick} placeholder='Ajouter une citation' onChange={props.onChange} idQuote='quote' idContext='contextQuote' />
    </>
  )
}

export default Quote
