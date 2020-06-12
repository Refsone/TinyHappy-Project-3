import React from 'react'
import ChampTexte from './ChampTexte'
import SelectAuteur from './SelectAuteur'

const Citation = () => {
  return (
    <>
      <SelectAuteur title={'SELECTIONNER L\'AUTEUR'} />
      <ChampTexte title='CITATION' placeholder='Ajouter une citation' idCitation='citation' idContext='contextQuote' />
    </>
  )
}

export default Citation
