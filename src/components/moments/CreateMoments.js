import React from 'react'
import MomentNavbar from './MomentNavbar'
import SelectAuteur from './SelectAuteur'
import ChampTexte from './ChampTexte'
import Calendar from './Calendar'

const CreateMoment = () => {
  return (
    <div>
      <MomentNavbar />
      <SelectAuteur />
      <ChampTexte title='citation' placeholder='Ajouter une citation' />
      <ChampTexte title='contexte' placeholder='Ajouter un contexte (facultatif)' />
      <Calendar />
    </div>
  )
}

export default CreateMoment
