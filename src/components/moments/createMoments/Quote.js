import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Quote = () => {
  return (
    <>
      <AuthorSelect title={'SELECTIONNER L\'AUTEUR'} />
      <TextArea title='CITATION' placeholder='Ajouter une citation' idQuote='citation' idContext='contextQuote' />
    </>
  )
}

export default Quote
