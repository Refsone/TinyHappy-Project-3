import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Milestone = () => {
  return (
    <>
      <AuthorSelect title='SELECTIONNER LE(S) PARTICIPANT(S)' />
      <TextArea title='DESCRIPTION' placeholder='Ajouter une description' idCitation='description' idContext='contextMilestone' />
    </>
  )
}

export default Milestone
