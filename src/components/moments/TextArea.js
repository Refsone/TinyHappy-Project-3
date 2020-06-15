import React from 'react'

import './TextArea.css'

const ChampTexte = (props) => {
  const { idCitation, idContext } = props
  return (
    <div>
      <form className='champ'>
        <label htmlFor='text'>{props.title}</label>
        <textarea name='text' rows='4' cols='35' placeholder={props.placeholder} id={idCitation} required />
        <label htmlFor='text'>CONTEXTE</label>
        <textarea name='text' rows='4' cols='35' placeholder='Ajouter un contexte (facultatif)' id={idContext} />
        {/* mettre le bouton pour envoyer */}
      </form>
    </div>
  )
}

export default ChampTexte
