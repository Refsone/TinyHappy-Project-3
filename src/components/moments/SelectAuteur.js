import React, { useState } from 'react'
import './SelectAuteur.css'

const SelectAuteur = (props) => {
  const [auteurs] = useState([
    { name: 'Marie', color: '#DAFFD7' },
    { name: 'Jerome', color: '#F6EAFF' },
    { name: 'Louise', color: '#FEFFC5' },
    { name: 'Violette', color: '#FFEDD7' }
  ])

  return (
    <div className='selectAuteur'>
      <p className='titleAuteur'>{props.title}</p>
      <div className='listAuteur'>
        {auteurs.map((auteur, index) =>
          <p key={index} className='auteur'>{auteur.name}</p>
        )}
      </div>
    </div>
  )
}

export default SelectAuteur
