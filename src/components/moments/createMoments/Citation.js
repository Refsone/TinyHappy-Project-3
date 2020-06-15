import React from 'react'
import ChampTexte from './ChampTexte'
import SelectAuthor from './SelectAuthor'

const Citation = (props) => {
  return (
    <>
      <SelectAuthor familyMember={props.familyMember} title={'SELECTIONNER L\'AUTEUR'} />
      <ChampTexte title='CITATION' placeholder='Ajouter une citation' idCitation='citation' idContext='contextQuote' />
    </>
  )
}

export default Citation
