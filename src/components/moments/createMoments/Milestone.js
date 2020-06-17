import React from 'react'

import AuthorSelect from './AuthorSelect'
import TextArea from './TextArea'

const Milestone = (props) => {
  return (
    <>
      <AuthorSelect familyMember={props.familyMember} title='SELECTIONNER LE(S) PARTICIPANT(S)' />
      <TextArea title='DESCRIPTION' active={props.active} onClick={props.handleClick} onChange={props.onChange} placeholder='Ajouter une description' idQuote='description' idContext='contextMilestone' />
    </>
  )
}

export default Milestone
