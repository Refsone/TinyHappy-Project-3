import React from 'react'
import ValidateButton from '../../commons/footer/ValidateButton'

import './TextArea.css'

const Textarea = (props) => {
  return (
    <div>
      <form className='area' method='post' id='formCreateMoment'>
        <label htmlFor='text'>{props.title}</label>
        <textarea name='text' rows='4' cols='35' placeholder={props.placeholder} id={props.idQuoteArea} handleChange={props.textInArea} required />
        <label htmlFor='text'>CONTEXTE</label>
        <textarea name='text' rows='4' cols='35' placeholder='Ajouter un contexte (facultatif)' id={props.idContextArea} />
      </form>
      <ValidateButton name='publier' active={props.active} handleClick={props.sendCreateMoment} />
    </div>
  )
}

export default Textarea
