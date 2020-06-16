import React from 'react'

import './TextArea.css'

const Textarea = (props) => {
  const { idQuote, idContext } = props
  return (
    <div>
      <form className='area'>
        <label htmlFor='text'>{props.title}</label>
        <textarea name='text' rows='4' cols='35' placeholder={props.placeholder} id={idQuote} required />
        <label htmlFor='text'>CONTEXTE</label>
        <textarea name='text' rows='4' cols='35' placeholder='Ajouter un contexte (facultatif)' id={idContext} />
        {/* mettre le bouton pour envoyer */}
      </form>
    </div>
  )
}

export default Textarea
