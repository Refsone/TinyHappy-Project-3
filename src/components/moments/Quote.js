import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Citation = () => {
  return (
    <>
      <AuthorSelect title={'SELECTIONNER L\'AUTEUR'} />
      <TextArea title='CITATION' placeholder='Ajouter une citation' idCitation='citation' idContext='contextQuote' />
    </>
  )
}

export default Citation
