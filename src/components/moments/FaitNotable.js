import React from 'react'
import ChampTexte from './ChampTexte'
import SelectAuteur from './SelectAuteur'

const FaitNotable = () => {
  return (
    <>
      <SelectAuteur title='selectionner le(s) participant(s)' />
      <ChampTexte title='description' placeholder='Ajouter une description' />
      <ChampTexte title='contexte' placeholder='Ajouter un contexte (facultatif)' />
    </>
  )
}

export default FaitNotable
