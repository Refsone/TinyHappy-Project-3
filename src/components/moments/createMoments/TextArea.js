import React from 'react'
import ValidateButton from '../../commons/footer/ValidateButton'

import './TextArea.css'

const Textarea = (props) => {
  return (
    <div>
      <form className='area' method='post' id='formCreateMoment'>
        <label htmlFor='text'>{props.title}</label>
        <textarea name='text' rows='4' cols='35' placeholder={props.placeholder} id={props.idQuoteArea} onChange={props.onChangeTextInMomentArea} required />
        <p className='error-quote' style={props.textInContextArea.length > 0 && props.textInMomentArea.length === 0 ? { display: 'visible' } : { visibility: 'hidden' }}>Veuillez ajouter une citation</p>
        <label htmlFor='text'>CONTEXTE</label>
        <textarea name='text' rows='4' cols='35' placeholder='Ajouter un contexte (facultatif)' id={props.idContextArea} onChange={props.onChangeTextInContextArea} />
      </form>
      <ValidateButton name='publier' active={props.active} SendCreateMoment={props.SendCreateMoment} />
    </div>
  )
}

export default Textarea
