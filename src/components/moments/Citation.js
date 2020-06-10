import React from 'react'
import ChampTexte from './ChampTexte'
import SelectAuteur from './SelectAuteur'

const Citation = () => {
  return (
    <>
      <SelectAuteur title='selectionner l auteur' />
      <ChampTexte title='citation' placeholder='Ajouter une citation' />
      <ChampTexte title='contexte' placeholder='Ajouter un contexte (facultatif)' />
    </>
  )
}

export default Citation
