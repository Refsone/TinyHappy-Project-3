import React, { useState } from 'react'
import './SelectAuteur.css'

const SelectAuteur = (props) => {
  const [auteurs] = useState([
    { id: 1, name: 'MARIE', color: '#DAFFD7' },
    { id: 2, name: 'JEROME', color: '#F6EAFF' },
    { id: 3, name: 'LOUISE', color: '#FEFFC5' },
    { id: 4, name: 'VIOLETTE', color: '#FFEDD7' }
  ])

  return (
    <div className='selectAuteur'>
      <p className='titleAuteur'>{props.title}</p>
      <div className='listAuteur'>
        {auteurs.map((auteur, index) =>
          <button key={index} className='auteur' id={auteur.id}>{auteur.name}</button>
        )}
      </div>
    </div>
  )
}

export default SelectAuteur
