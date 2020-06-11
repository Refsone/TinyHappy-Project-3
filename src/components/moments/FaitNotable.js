import React from 'react'
import ChampTexte from './ChampTexte'
import SelectAuteur from './SelectAuteur'

const FaitNotable = () => {
  return (
    <>
      <SelectAuteur title='SELECTIONNER LE(S) PARTICIPANT(S)' />
      <ChampTexte title='DESCRIPTION' placeholder='Ajouter une description' idCitation='description' idContext='contextMilestone' />
    </>
  )
}

export default FaitNotable
