import React from 'react'
import ValidateButton from '../../commons/footer/ValidateButton'

import './TextArea.css'

const Textarea = (props) => {
  const { idQuote, idContext } = props
  console.log('text', props)
  return (
    <div>
      <form className='area' method='post' id='formCreateMoment'>
        <label htmlFor='text'>{props.title}</label>
        <textarea name='text' rows='4' cols='35' placeholder={props.placeholder} id={idQuote} onChange={props.onChange} required />
        <label htmlFor='text'>CONTEXTE</label>
        <textarea name='text' rows='4' cols='35' placeholder='Ajouter un contexte (facultatif)' id={idContext} />
      </form>
      <ValidateButton name='publier' active={props.active} onClick={props.onClick} />
    </div>
  )
}

export default Textarea
