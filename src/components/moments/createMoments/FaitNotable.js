import React from 'react'
import ChampTexte from './ChampTexte'
import SelectAuthor from './SelectAuthor'

const FaitNotable = (props) => {
  return (
    <>
      <SelectAuthor familyMember={props.familyMember} title='SELECTIONNER LE(S) PARTICIPANT(S)' />
      <ChampTexte title='DESCRIPTION' placeholder='Ajouter une description' idCitation='description' idContext='contextMilestone' />
    </>
  )
}

export default FaitNotable
