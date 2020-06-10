import React from 'react'
import './ChampTexte.css'

const ChampTexte = (props) => {
  return (
    <div>
      <form className='champ'>
        <label htmlFor='text'>{props.title}</label>
        <textarea id='text' name='text' rows='8' cols='35' placeholder={props.placeholder} />
      </form>
    </div>
  )
}

export default ChampTexte
